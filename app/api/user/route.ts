import { NextRequest, NextResponse } from "next/server";

import { Client, Databases, Query } from "node-appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64749ba6eade18e58a13")
  .setKey(process.env.APPWRITE_API_KEY as string);

export async function GET(request: Request) {
  // get-post?postId
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("userId");

  if (!id)
    return NextResponse.json(
      {
        error: "Missing ID query param",
      },
      { status: 403 }
    );
  const res = await databases.listDocuments(
    "647b675e73a83b821ca7",
    "647cb553d054c55d41db",
    [Query.equal("user_id", id)]
  );

  console.log({ res });

  if (res.total === 0)
    return new Response("Not found", {
      status: 404,
    });

  const user = res.documents[0];

  return NextResponse.json(user);
}
