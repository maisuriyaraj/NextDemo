import { connnectionStr } from "@/lib/db";
import { userModels } from "@/lib/models/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


await mongoose.connect(connnectionStr).then(()=>{
    console.log("Mongo Connected !")
})


export async function GET(request){
    try {
        const result = await userModels.find();
        return NextResponse.json({status:true,data:result});

    } catch (error) {
        
    }
}

export async function PUT(request){
    try {
        let payload = await request.json(); // Get Request Body (Payload)
        let result = await userModels.updateOne({_id:payload.id},{$set:{fname:payload.fname,lname:payload.lname}});
        return NextResponse.json({status:true,message:"Data Updated Successfully !"});
    } catch (error) {
        
    }
}


export async function POST(request){
    try {
        let payload = await request.json(); // Get Request Body (Payload)
        console.log(payload)
        // let result = await userModels.deleteOne({_id:payload.id});
        // console.log(result)
        return NextResponse.json({status:true,message:"Record Deleted Successfully !"});
    } catch (error) {
        console.log(error)        
    }
}