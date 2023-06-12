import { NextRequest, NextResponse } from "next/server";

import { Client, Databases } from "node-appwrite";
// Init SDK
const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64749ba6eade18e58a13")
  .setKey(process.env.APPWRITE_API_KEY as string);

export async function GET(request: Request) {
  // get-post?postId
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id)
    return NextResponse.json(
      {
        error: "Missing ID query param",
      },
      { status: 403 }
    );
  const post = await databases.getDocument(
    process.env.DATABASE_ID as string,
    process.env.POST_COLLECTION_ID as string,
    id as string
  );

  return NextResponse.json(post);
}
