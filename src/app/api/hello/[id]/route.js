import { connnectionStr } from "@/lib/db";
import { userModels } from "@/lib/models/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function DELETE(request,content){
    try {
        console.log(content)
        let result = await userModels.deleteOne({_id:content.params.id});
        console.log(result)
        return NextResponse.json({status:true,message:"Record Deleted Successfully !"});
    } catch (error) {
        console.log(error)        
    }
}