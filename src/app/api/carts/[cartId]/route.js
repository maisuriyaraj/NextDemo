import data from "@/app/utils/db";
import { NextResponse } from "next/server";

export async function GET(request,content){
    let filteredData = data.find((x) => x.id == content.params.cartId) || null; // Get Query Params
    if(filteredData !== null){
        return NextResponse.json(filteredData,{status:201});
    }else{
        return NextResponse.json('Not Found',{status:200});
    }
}

export async function PUT(request,content){
    let payload = content.params.cartId; // Get Query Params
    if(!payload){
        return NextResponse.json({status:false,message:"Please Provide Name"},{status:400});
    }else{
        return NextResponse.json({status:true,result:payload});
    }
}

export async function DELETE(request,content){
    let payload = content.params.cartId; // Get Query Params
    if(!payload){
        return NextResponse.json({status:false,message:"Please Provide Data"},{status:400});
    }else{
        return NextResponse.json({status:true,result:payload},{status:201});
    }
}