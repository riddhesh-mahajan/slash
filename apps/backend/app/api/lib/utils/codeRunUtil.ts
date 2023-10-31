import { exec } from "child_process";
import fs from "fs";
import util from "util";
const execPromise = util.promisify(exec);

function saveCodeToFile(rootPath: string, fileName: string, code: string) {
  fs.writeFileSync(`${rootPath}dockerfiles/${fileName}.js`, code.toString());
}

function createDockerfile(rootPath: string, fileName: string) {
  fs.writeFileSync(
    `${rootPath}dockerfiles/${fileName}.Dockerfile`,
    `
  FROM node:14
  WORKDIR /app
  COPY dockerfiles/${fileName}.js .
  `
  );
}

function commandPrefix() {
  if (process.env.USE_SUDO === "true") {
    return "sudo ";
  } else {
    return "";
  }
}

async function buildDockerImage(
  rootPath: string,
  fileName: string,
  imageName: string
) {
  const { stdout, stderr } = await execPromise(
    `${commandPrefix()}docker build -t ${imageName} -f ${rootPath}dockerfiles/${fileName}.Dockerfile .`
  );
  return { stdout, stderr };
}

async function runDockerContainer(imageName: string, fileName: string) {
  const { stdout, stderr } = await execPromise(
    `${commandPrefix()}docker run --name ${imageName} ${imageName} bash -c "node ${fileName}.js"`
  );
  return { stdout, stderr };
}

function deleteFiles(rootPath: string, fileName: string) {
  fs.unlinkSync(`${rootPath}dockerfiles/${fileName}.js`);
  fs.unlinkSync(`${rootPath}dockerfiles/${fileName}.Dockerfile`);
}

async function deleteDockerContainer(imageName: string) {
  const { stdout, stderr } = await execPromise(
    `${commandPrefix()}docker rm ${imageName}`
  );
  return { stdout, stderr };
}

async function deleteDockerImage(imageName: string) {
  const { stdout, stderr } = await execPromise(
    `${commandPrefix()}docker rmi ${imageName}`
  );
  return { stdout, stderr };
}

export default {
  saveCodeToFile,
  createDockerfile,
  buildDockerImage,
  runDockerContainer,
  deleteFiles,
  deleteDockerImage,
  deleteDockerContainer,
};
