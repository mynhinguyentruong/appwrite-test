import { NextRequest, NextResponse } from "next/server";

import {
  ID,
  Client,
  Storage,
  Databases,
  Permission,
  Role,
} from "node-appwrite";
// Init SDK
const client = new Client();

const storage = new Storage(client);
const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64749ba6eade18e58a13")
  .setKey(process.env.APPWRITE_API_KEY as string);

export async function POST(request: NextRequest) {
  // create post
  const resBody = await request.json();

  const post = await databases.createDocument(
    process.env.DATABASE_ID as string,
    process.env.POST_COLLECTION_ID as string,
    ID.unique(),
    resBody,
    [
      Permission.update(Role.users()),
      Permission.write(Role.users()),
      Permission.read(Role.users()),
    ]
  );

  if (resBody.hasPhoto) {
    const bucket = await storage.createBucket(
      post.$id,
      post.$id,
      [
        Permission.create(Role.users()),
        Permission.write(Role.users()),
        Permission.read(Role.any()),
      ],
      true,
      true
    );
  }

  return NextResponse.json({ postId: post.$id });

  // if hasphoto, upload file
}

// post create document

// post create bucket if hasphoto

// return the bucketId to the client

// client: bucketId to make req upload file

// on all file upload success, make req to query all post
//return NextResponse.json({ message: "success" });
