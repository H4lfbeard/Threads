import { hasCookie } from "cookies-next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default function middleware(request) {
  
  let isAuthenticated = false;

  // Check if is invited
  if (hasCookie("guest", { cookies })) {
     isAuthenticated = true;
  }
  //  Check if is connected

  //  Check if is authenticated
  if(!isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"]
}