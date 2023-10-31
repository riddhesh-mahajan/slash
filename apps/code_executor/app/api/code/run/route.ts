import { PrismaClient } from "database";
import messages from "messages";
import { createResponse } from "responseutils";
import statuscodes from "statuscodes";
import { exec } from "child_process";
import util from "util";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import codeRunUtil from "../../lib/utils/codeRunUtil";

const execPromise = util.promisify(exec);

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { code, testCases, answer } = await request.json();
    const rootPath = __dirname.split(".next")[0];

    let codeOutput: any[] = await Promise.all(
      JSON.parse(testCases).flatMap(
        async (singleTestCaseInput: any, index: number) => {
          const fileName = uuidv4();
          const imageName = uuidv4();

          // Save code to js file
          codeRunUtil.saveCodeToFile(
            rootPath,
            fileName,
            code.replace("testSample", JSON.stringify(singleTestCaseInput))
          );

          // Save Dockerfile
          codeRunUtil.createDockerfile(rootPath, fileName);

          // Build docker image
          await codeRunUtil.buildDockerImage(rootPath, fileName, imageName);

          // Run container
          const { stdout } = await codeRunUtil.runDockerContainer(
            imageName,
            fileName
          );

          // Delete docker container
          await codeRunUtil.deleteDockerContainer(imageName);

          // Delete docker image
          await codeRunUtil.deleteDockerImage(imageName);

          // Delete js and Dockerfile
          codeRunUtil.deleteFiles(rootPath, fileName);

          // Return output
          return {
            in: JSON.stringify(singleTestCaseInput),
            out: stdout,
            answer: JSON.parse(answer)[index],
          };
        }
      )
    );

    // Return output
    return createResponse({
      message: messages.SUCCESS,
      payload: codeOutput,
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
