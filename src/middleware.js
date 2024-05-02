import { NextResponse } from "next/server";

export function middleware(request){
    // let isLoggedIn = JSON.parse(localStorage.getItem('AuthToken')) || null;
    // if(isLoggedIn == null){
    //     // PROTECT PAGE FROM UNAUTHORIZED !
    //     return NextResponse.redirect(new URL("/login",request.url));
    // }else{
    //     return NextResponse.redirect(new URL("/dashboard",request.url));
    // }
}

// Executing Middleware for specific ROUTE 
export const config = {
    matcher:"/dashboard/:path*"
}