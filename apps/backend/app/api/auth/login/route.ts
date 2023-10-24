import { PrismaClient } from "database";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const JWT_KEY = process.env.JWT_KEY;

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Check if user already exists
  const user = await prisma.user.findUnique({ where: { email } });
  console.log(user);
  if (!user) {
    return Response.json({ error: "User does not exist" });
  }

  // Check if password is correct
  const passwordMatch = await bcrypt.compare(password, user.password as string);
  if (!passwordMatch) {
    return Response.json({ error: "Password is incorrect" });
  }

  // Create a new jwt token using jsonwebtoken
  const payload = {
    id: user.id,
    email: email,
  };

  var token = await jwt.sign(payload, JWT_KEY);

  return Response.json({ token, user: { id: user.id, email: user.email } });
}
