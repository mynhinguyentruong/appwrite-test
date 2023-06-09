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

export const storage = new Storage(client);
const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("64749ba6eade18e58a13") // Your project ID
  .setKey(process.env.APPWRITE_API_KEY as string); // Your secret API key

export async function GET(request: NextRequest) {
  const bucketsData = await storage.listBuckets();
  const { buckets } = bucketsData;
  let imageUrls = [];
  for (const bucket of buckets) {
    const filesData = await storage.listFiles(bucket.$id);
    for (const file of filesData.files) {
      imageUrls.push(
        `https://cloud.appwrite.io/v1/storage/buckets/${file.bucketId}/files/${file.$id}/view?project=64749ba6eade18e58a13`
      );
    }
  }

  return NextResponse.json(imageUrls);
}
