import testBoard from "@/models/testBoard";
import connectMongoDB from "@/util/database";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    const {id} = params;
    const {newTitle : title, newContent : content} = request.json();
    await connectMongoDB();
    await testBoard.findByIdAndUpdate(id, {title, content});
    return NextResponse.json({message : "update success"},{status : 200});
}

export async function GET(request,{params}){
    const {id} = params;
    await connectMongoDB();
    const board = await testBoard.findOne({_id : id});
    return NextResponse.json({board},{status : 200})
}