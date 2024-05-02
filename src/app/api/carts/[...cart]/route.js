import { NextResponse } from "next/server";

export async function GET(request,content){
    console.log(content.params.cart) // catch Multiple all Query Params 
    return NextResponse.json({status:true,message:"All Routes Catch",data:content.params.cart})
}