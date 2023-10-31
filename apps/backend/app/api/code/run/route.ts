import axios from "axios";
import { exec } from "child_process";
import { PrismaClient } from "database";
import messages from "messages";
import { createResponse } from "responseutils";
import statuscodes from "statuscodes";
import util from "util";

const execPromise = util.promisify(exec);

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { code, questionId } = await request.json();
    const rootPath = __dirname.split(".next")[0];
    const userId = request.headers.get("userId");

    // Get target question
    const targetQuestion = await prisma.qa.findFirst({
      where: { id: parseInt(questionId) },
    });

    if (!targetQuestion) {
      return createResponse({
        message: messages.ERROR,
        payload: { error: "Question not found" },
        status: statuscodes.BAD_REQUEST,
      });
    }

    const codeExecutionResponse = await axios.post(
      `${process.env.CODE_EXECUTOR_URL}/api/code/run`,
      {
        code,
        testCases: targetQuestion.testCases,
        answer: targetQuestion.answer,
      }
    );

    let codeOutput: any[] = codeExecutionResponse.data.payload;

    // Record run
    await prisma.run.create({
      data: {
        userId: parseInt(userId as string),
        createdAt: new Date(),
      },
    });

    // Return output
    return createResponse({
      message: messages.SUCCESS,
      payload: { output: codeOutput },
      status: statuscodes.OK,
    });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);

    return createResponse({
      message: messages.ERROR,
      payload: { error: error.toString() },
      status: statuscodes.BAD_REQUEST,
    });
  }
}
