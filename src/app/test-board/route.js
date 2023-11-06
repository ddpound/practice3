import testBoard from "@/models/testBoard";
import connectMongoDB from "@/util/database";
import { NextResponse } from "next/server";

export async function GET(){
    await connectMongoDB();
    const test_board = await testBoard.find();
    return NextResponse.json({test_board});
}

export async function POST(request){
    const {title, content} = await request.json();
    await connectMongoDB();
    await testBoard.create({title,content});
    return NextResponse.json({message: "success create board data"}, {status : 201});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await testBoard.findByIdAndDelete(id);
    return NextResponse.json({message : "success delete id : " + id}, {status : 200})
}