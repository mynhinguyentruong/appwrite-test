import sdk from "node-appwrite";
import { NextRequest, NextResponse } from "next/server";
import { Permission, Role } from "node-appwrite";

const client = new sdk.Client();

const databases = new sdk.Databases(client);

if (!process.env.APPWRITE_API_KEY)
  throw new Error("Provide Appwrite API KEY in local env");

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("64749ba6eade18e58a13") // Your project ID
  .setKey(process.env.APPWRITE_API_KEY); // Your secret API key

// export async function POST(request: Request) {
//     const data = await request.json()
//     const {postId} = data
//     const res = await storage.createBucket(postId, postId, [
//         Permission.create(Role.users()),
//         Permission.write(Role.users()),
//         Permission.read(Role.any())
//     ],true,true)

//     return NextResponse.json({ bucketId: res.$id })
// }

export async function POST(request: NextRequest) {
  const resBody = await request.json();
  const { postId, urls } = resBody;
  console.log({ urls });

  const post = await databases.updateDocument(
    process.env.DATABASE_ID as string,
    process.env.POST_COLLECTION_ID as string,
    postId,
    {
      image_url: urls,
    }
  );

  return NextResponse.json(post);
}
