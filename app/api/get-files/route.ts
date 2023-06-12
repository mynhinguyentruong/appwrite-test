import { NextResponse } from "next/server";

import { Client, Storage } from "node-appwrite";

const client = new Client();

const storage = new Storage(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64749ba6eade18e58a13")
  .setKey(process.env.APPWRITE_API_KEY as string);

export async function GET(request: Request) {
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
