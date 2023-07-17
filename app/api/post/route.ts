import config from "#/lib/appwriteConfigServer";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { databases } = config;
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const post = await databases.getDocument(
    process.env.DATABASE_ID as string,
    process.env.POST_COLLECTION_ID as string,
    id as string
  );

  return NextResponse.json(post);
}
