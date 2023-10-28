import { PrismaClient } from "database";
import messages from "messages";
import { createResponse } from "responseutils";
import statuscodes from "statuscodes";
import { exec } from "child_process";
import util from "util";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";

const execPromise = util.promisify(exec);

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const fileName = uuidv4();
    const imageName = uuidv4();
    const { code } = await request.json();

    // Save code to js file
    fs.writeFileSync(
      `${__dirname.split(".next")[0]}dockerfiles/${fileName}.js`,
      code.toString()
    );

    // Save Dockerfile
    fs.writeFileSync(
      `${__dirname.split(".next")[0]}dockerfiles/${fileName}.Dockerfile`,
      `
FROM node:14
WORKDIR /app
COPY dockerfiles/app.js .
`
    );

    // Build docker image
    const { stdout, stderr } = await execPromise(
      `docker build -t ${imageName} -f ${
        __dirname.split(".next")[0]
      }dockerfiles/${fileName}.Dockerfile .`
    );

    // Run container
    const { stdout: runstdout, stderr: runstderr } = await execPromise(
      `docker run ${imageName} bash -c "node app.js"`
    );

    return createResponse({
      message: messages.SUCCESS,
      payload: { output: runstdout.toString() },
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

  // exec(
  //   `docker build -t my-node-app -f ${
  //     __dirname.split(".next")[0]
  //   }dockerfiles/test.Dockerfile .`,
  //   (error, stdout, stderr) => {
  //     if (error) {
  //       console.error(`Error: ${error.message}`);
  //       return;
  //     }

  //     if (stderr) {
  //       console.error(`Error: ${stderr}`);
  //       return;
  //     }

  //     console.log("Output:");
  //     console.log(stdout);

  //     return createResponse({
  //       message: messages.SUCCESS,
  //       payload: { output: stdout.toString() },
  //       status: statuscodes.OK,
  //     });
  //   }
  // );
}
