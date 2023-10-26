import { PrismaClient } from "database";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import messages from "messages";
import statuscodes from "statuscodes";
import { createResponse } from "responseutils";

const prisma = new PrismaClient();
const JWT_KEY = process.env.JWT_KEY;

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Check if user already exists
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return Response.json({ error: "User does not exist" });
  }

  // Check if password is correct
  const passwordMatch = await bcrypt.compare(password, user.password as string);
  if (!passwordMatch) {
    return Response.json({ error: "Password is incorrect" });
  }

  // Check if user is admin
  if (!user.admin) {
    return Response.json({ error: "User is not admin" });
  }

  // Create a new jwt token using jsonwebtoken
  const payload = {
    id: user.id,
    email: email,
  };

  var token = await jwt.sign(payload, JWT_KEY);

  return createResponse({
    message: messages.SUCCESS,
    payload: { token, user: { id: user.id, email: user.email } },
    status: statuscodes.OK,
  });
}
