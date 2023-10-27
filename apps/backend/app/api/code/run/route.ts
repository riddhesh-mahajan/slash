import { PrismaClient } from "database";
import messages from "messages";
import { createResponse } from "responseutils";
import statuscodes from "statuscodes";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  return createResponse({
    message: messages.SUCCESS,
    payload: {},
    status: statuscodes.OK,
  });
}
