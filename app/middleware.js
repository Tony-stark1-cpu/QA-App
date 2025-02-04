import { NextResponse } from 'next/server';

export function middleware(request) {
  // Define your admin username and password (Change this)
  const ADMIN_USERNAME = "admin";
  const ADMIN_PASSWORD = "password123";

  // Check if the request is for the admin panel
  if (request.nextUrl.pathname.startsWith('/admin')) {
    const authHeader = request.headers.get('authorization');

    // If no Authorization header, request authentication
    if (!authHeader) {
      return new NextResponse("Unauthorized", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Admin"' },
      });
    }

    // Decode base64 credentials
    const auth = atob(authHeader.split(' ')[1]).split(':');
    const username = auth[0];
    const password = auth[1];

    // Verify username and password
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*", // Apply only to admin routes
};
