import { PrismaClient } from "database";
import messages from "messages";
import { createResponse } from "responseutils";
import statuscodes from "statuscodes";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  let { qa } = await request.json();

  // Remove deleted qa
  const existingQA = await prisma.qa.findMany();
  const existingQAIds = existingQA.map((qa) => qa.qid);
  const newQAIds = qa.map((qa: any) => qa.qid);
  const deletedQAIds = existingQAIds.filter(
    (existingQAId) => !newQAIds.includes(existingQAId)
  );
  await Promise.all(
    deletedQAIds.map(async (deletedQAId) => {
      await prisma.qa.delete({ where: { qid: deletedQAId } });
    })
  );

  // Add new qa
  await Promise.all(
    qa.map(
      async (singleQA: {
        qid: string;
        question: string;
        answer: string;
        testCases: string;
        template: string;
      }) => {
        const { qid, question, answer, testCases, template } = singleQA;

        // Get if qa already exists
        const existingQA = await prisma.qa.findUnique({ where: { qid } });

        // Create new qa
        if (!existingQA) {
          await prisma.qa.create({
            data: {
              qid,
              question,
              answer,
              testCases,
              template,
            },
          });
        } else {
          // Update existing qa
          await prisma.qa.update({
            where: { qid },
            data: {
              question,
              answer,
              testCases,
              template,
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
