import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import * as jose from "jose";
import { PrismaClient } from "database";

const JWT_KEY = process.env.JWT_KEY;
const prisma = new PrismaClient();

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  console.log(request.url);
  let jwtToken: string | null | undefined =
    request.headers.get("authorization");
  jwtToken = jwtToken?.split(" ")[1];

  // TODO: add conditional middleware for admin routes

  if (request.url.includes("/api/questions")) {
    // If token is valid, continue to next request
    try {
      const secret = new TextEncoder().encode(JWT_KEY);
      const jwt = jwtToken as string;

      const res = await jose.jwtVerify(jwt, secret, {
        issuer: "urn:example:issuer",
        audience: "urn:example:audience",
      });

      const { payload } = res;
      const { id } = payload;

      const requestHeaders = new Headers(request.headers);
      requestHeaders.set("userId", id as string);

      const response = NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });

      return response;
    } catch (err) {
      // If token is not valid, return 401 response
      return Response.json({
        status: 401,
        statusText: "Unauthorized",
      });
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/:path*",
};
