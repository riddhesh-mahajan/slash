import { PrismaClient } from "database";
import bcrypt from "bcryptjs";
import * as jose from "jose";
import messages from "messages";
import statuscodes from "statuscodes";
import { createResponse } from "responseutils";

const prisma = new PrismaClient();
const JWT_KEY = process.env.JWT_KEY;

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Check if user already exists
  const user = await prisma.user.findUnique({ where: { email } });
  console.log(user);
  if (!user) {
    return createResponse({
      message: messages.ERROR,
      payload: { error: "User does not exist" },
      status: statuscodes.BAD_REQUEST,
    });
  }

  // Check if password is correct
  const passwordMatch = await bcrypt.compare(password, user.password as string);
  if (!passwordMatch) {
    return createResponse({
      message: messages.ERROR,
      payload: { error: "Password is incorrect" },
      status: statuscodes.BAD_REQUEST,
    });
  }

  // Create and sign the JWT
  const secret = new TextEncoder().encode(JWT_KEY);
  const alg = "HS256";

  const token = await new jose.SignJWT({ id: user.id })
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime("1y")
    .sign(secret);

  // Update last login
  await prisma.user.update({
    where: { id: user.id },
    data: { lastLogin: new Date() },
  });

  return createResponse({
    message: messages.SUCCESS,
    payload: { token, user: { id: user.id, email: user.email } },
    status: statuscodes.OK,
  });
}
