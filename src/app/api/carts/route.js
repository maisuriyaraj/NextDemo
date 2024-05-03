import data from "@/app/utils/db";
import { userModels } from "@/lib/models/userModel";
import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json(data,{status:201});
}

export async function POST(request){
    let payload = await request.json(); // Get Request Body (Payload)
    if(!payload.fname || !payload.lname){
        return NextResponse.json({status:false,message:"Please Provide Name"},{status:400});
    }else if(payload.fname && payload.lname){
        const user = await new userModels({fname:payload.fname,lname:payload.lname});
        const result = await user.save();
        return NextResponse.json(payload);
    }
}

