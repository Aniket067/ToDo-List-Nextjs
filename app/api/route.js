

// import { ConnectDB } from "@/lib/config/db";
import TodoModel from "lib/models/TodoModel";
import { ConnectDB } from "lib/config/db";
import { NextResponse } from "next/server";

export async function GET(request) {
    await ConnectDB();
    const todos = await TodoModel.find({});
    return NextResponse.json({ todos: todos });
}

export async function POST(request) {
    await ConnectDB();
    const { title, description } = await request.json();
    await TodoModel.create({
        title,
        description
    });
    return NextResponse.json({ message: "Todo Created" });
}
export async function DELETE(request) {
 const mongoId= await request.nextUrl.searchParams.get('mongoId');
 await TodoModel.findByIdAndDelete(mongoId)

    return NextResponse.json({ message: "Todo Deleted" });
}
export async function PUT(request) {
 const mongoId= await request.nextUrl.searchParams.get('mongoId');
 await TodoModel.findByIdAndUpdate(mongoId,{
    $set:{
        isCompleted:true
    }
 });

    return NextResponse.json({ message: "Todo Completed" });
}
