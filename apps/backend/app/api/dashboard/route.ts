import { PrismaClient } from "database";
import messages from "messages";
import { createResponse } from "responseutils";
import statuscodes from "statuscodes";
import moment from "moment";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const userId: string | null = request.headers.get("userId");
  const targetUser = await prisma.user.findFirst({
    where: {
      id: parseInt(userId?.toString() as string),
      runs: {
        some: {
          createdAt: {
            gte: new Date(new Date().getFullYear(), 0, 1),
          },
        },
      },
    },
    include: {
      runs: true,
    },
  });

  const totalQuestionsCount = await prisma.qa.count();
  const lastLogin = targetUser?.lastLogin;
  const runs = targetUser?.runs;

  // Aggreate runs by createdAt
  let totalRuns = 0;
  const runsByDate = runs?.reduce((acc, cur) => {
    const date = moment(new Date(cur.createdAt)).format("yyyy-MM-DD");
    if (acc[date]) {
      acc[date] += 1;
    } else {
      acc[date] = 1;
    }
    totalRuns++;
    return acc;
  }, {} as any);

  return createResponse({
    message: messages.SUCCESS,
    payload: {
      totalQuestionsCount,
      lastLogin,
      runsByDate,
      runsStartDate: new Date(new Date().getFullYear(), 0, 1),
      runsEndDate: new Date(new Date().getFullYear(), 12, 31),
      totalRuns,
    },
    status: statuscodes.OK,
  });
}
