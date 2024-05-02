import data from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json(data,{status:201});
}

export async function POST(request){
    let payload = await request.json(); // Get Request Body (Payload)
    if(!payload.name){
        return NextResponse.json({status:false,message:"Please Provide Name"},{status:400});
    }else{
        return NextResponse.json(payload);
    }
}

