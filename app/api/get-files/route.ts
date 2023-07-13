import { NextResponse } from "next/server";

// import config from "#/lib/appwriteConfigServer";
import { getImageLink } from "#/lib/appwrite/getImageLink";

export async function GET(request: Request) {
  // const { client, storage } = config;
  // const bucketsData = await storage.listBuckets();
  // const { buckets } = bucketsData;
  // let imageUrls = [];
  // for (const bucket of buckets) {
  //   const filesData = await storage.listFiles(bucket.$id);
  //   for (const file of filesData.files) {
  //     imageUrls.push(
  //       `https://cloud.appwrite.io/v1/storage/buckets/${file.bucketId}/files/${file.$id}/view?project=64749ba6eade18e58a13`
  //     );
  //   }
  // }

  const imageUrls = await getImageLink();

  return NextResponse.json(imageUrls);
}

export const revalidate = 60;
