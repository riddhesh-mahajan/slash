import { PrismaClient } from "database";
import messages from "messages";
import { createResponse } from "responseutils";
import statuscodes from "statuscodes";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  let { qa } = await request.json();

  await Promise.all(
    qa.map(
      async (singleQA: {
        qid: string;
        question: string;
        answer: string;
        answerType: string;
      }) => {
        const { qid, question, answer, answerType } = singleQA;

        // Get if qa already exists
        const existingQA = await prisma.qa.findUnique({ where: { qid } });

        // Create new qa
        if (!existingQA) {
          await prisma.qa.create({
            data: {
              qid,
              question,
              answer,
              answerType,
            },
          });
        }
      }
    )
  );

  return createResponse({
    message: messages.SUCCESS,
    payload: {},
    status: statuscodes.OK,
  });
}

export async function GET(request: Request) {
  const qa = await prisma.qa.findMany();

  return createResponse({
    message: messages.SUCCESS,
    payload: { qa },
    status: statuscodes.OK,
  });
}
