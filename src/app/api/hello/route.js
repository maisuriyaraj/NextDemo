import { connnectionStr } from "@/lib/db";
import { userModels } from "@/lib/models/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request){

    await mongoose.connect(connnectionStr).then(()=>{
        console.log("Mongo Connected !")
    })

    return  NextResponse.json({"status":true},{status:201})
}

export async function POST(request){
    try {
        const result = await userModels.find();
        return NextResponse.json({status:true,data:result});

    } catch (error) {
        
    }

}