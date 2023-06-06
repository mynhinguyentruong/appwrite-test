import sdk from "node-appwrite"
import {NextResponse} from "next/server";
import {Permission, Role} from "node-appwrite";

const client = new sdk.Client();

const storage = new sdk.Storage(client);

if (!process.env.APPWRITE_API_KEY) throw new Error("Provide Appwrite API KEY in local env")

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64749ba6eade18e58a13') // Your project ID
    .setKey(process.env.APPWRITE_API_KEY) // Your secret API key
;

export async function POST(request: Request) {
    const data = await request.json()
    const {postId} = data
    const res = await storage.createBucket(postId, postId, [
        Permission.create(Role.users()),
        Permission.write(Role.users()),
        Permission.read(Role.users())
    ])

    return NextResponse.json({ bucketId: res.$id })
}

