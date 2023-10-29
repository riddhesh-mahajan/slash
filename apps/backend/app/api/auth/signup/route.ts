import { PrismaClient } from "database";
import bcrypt from "bcryptjs";
import * as jose from "jose";

const prisma = new PrismaClient();
const JWT_KEY = process.env.JWT_KEY;

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return Response.json({ error: "User already exists" });
  }

  // Create a new user
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hashedPassword },
  });

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

  return Response.json({ token, user: { id: user.id, email: user.email } });
}
