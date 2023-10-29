import { PrismaClient } from "database";
import messages from "messages";
import { createResponse } from "responseutils";
import statuscodes from "statuscodes";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const qa = await prisma.qa.findMany();

  return createResponse({
    message: messages.SUCCESS,
    payload: { qa },
    status: statuscodes.OK,
  });
}
