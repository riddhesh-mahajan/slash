import { PrismaClient } from "database";
import messages from "messages";
import { createResponse } from "responseutils";
import statuscodes from "statuscodes";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const targetQuestion = await prisma.qa.findFirst({
    where: { id: parseInt(params.id) },
  });

  return createResponse({
    message: messages.SUCCESS,
    payload: { targetQuestion },
    status: statuscodes.OK,
  });
}
