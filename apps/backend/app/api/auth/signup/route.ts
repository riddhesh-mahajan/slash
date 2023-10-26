import { PrismaClient } from "database";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

  // Create a new jwt token using jsonwebtoken
  const payload = {
    id: user.id,
    email: email,
  };

  var token = await jwt.sign(payload, JWT_KEY);

  return Response.json({ token, user: { id: user.id, email: user.email } });
}
