import { PrismaClient } from "database";
import messages from "messages";
import { createResponse } from "responseutils";
import statuscodes from "statuscodes";

const prisma = new PrismaClient();

export async function GET(params: { id: number }, request: Request) {
  const targetQuestion = await prisma.qa.findFirst({
    where: { id: params.id },
  });

  return createResponse({
    message: messages.SUCCESS,
    payload: { targetQuestion },
    status: statuscodes.OK,
  });
}
