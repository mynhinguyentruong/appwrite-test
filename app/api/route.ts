import {NextResponse} from "next/server";

const { Client } = require('node-appwrite');



export async function GET(request: Request) {
    return NextResponse.json({name: "Nhi"})
}

