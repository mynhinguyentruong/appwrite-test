import { NextRequest, NextResponse } from "next/server";

import { Client, Databases, Query } from "node-appwrite";

const client = new Client();

const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64749ba6eade18e58a13")
  .setKey(process.env.APPWRITE_API_KEY as string);

export async function GET(request: NextRequest) {
  const resBody = await request.json();

  const user = await databases.listDocuments(
    "647b675e73a83b821ca7",
    "647cb553d054c55d41db",
    [Query.equal("user_id", resBody.user_id)]
  );

  return NextResponse.json(user);
}
