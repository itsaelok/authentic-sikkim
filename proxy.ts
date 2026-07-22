import {
  NextResponse,
} from "next/server";

import type {
  NextRequest,
} from "next/server";



export function middleware(
  request: NextRequest
) {


  const token =
    request.cookies.get(
      "auth-token"
    );



  const pathname =
    request.nextUrl.pathname;



  if (
    pathname.startsWith(
      "/admin"
    )
    &&
    pathname !== "/admin/login"
    &&
    !token
  ) {


    return NextResponse.redirect(

      new URL(
        "/admin/login",
        request.url
      )

    );


  }



  return NextResponse.next();

}




export const config = {

  matcher: [
    "/admin/:path*",
  ],

};