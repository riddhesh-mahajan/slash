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
    const fileName = uuidv4();
    const imageName = uuidv4();
    const { code } = await request.json();
    const rootPath = __dirname.split(".next")[0];

    // Save code to js file
    codeRunUtil.saveCodeToFile(rootPath, fileName, code);

    // Save Dockerfile
    codeRunUtil.createDockerfile(rootPath, fileName);

    // Build docker image
    await codeRunUtil.buildDockerImage(rootPath, fileName, imageName);

    // Run container
    const { stdout } = await codeRunUtil.runDockerContainer(
      imageName,
      fileName
    );

    // Delete js and Dockerfile
    codeRunUtil.deleteFiles(rootPath, fileName);

    return createResponse({
      message: messages.SUCCESS,
      payload: { output: stdout.toString() },
      status: statuscodes.OK,
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);

    return createResponse({
      message: messages.SUCCESS,
      payload: { error: error.toString() },
      status: statuscodes.OK,
    });
  }
}
