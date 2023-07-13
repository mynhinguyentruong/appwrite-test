import { Models, Permission, Role, ID } from "node-appwrite";
import config from "../appwriteConfigServer";

const { storage, databases } = config;

export async function getImageLink() {
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

  return imageUrls;
}

export async function getPost(id: string) {
  const post = await databases.getDocument(
    process.env.DATABASE_ID as string,
    process.env.POST_COLLECTION_ID as string,
    id as string
  );

  return post;
}

type PostData = {
  content_body: string;
  user_id: string;
  hasPhoto: boolean;
};

export async function createPost(data: PostData) {
  const post = await databases.createDocument(
    process.env.DATABASE_ID as string,
    process.env.POST_COLLECTION_ID as string,
    ID.unique(),
    data,
    [
      Permission.update(Role.users()),
      Permission.write(Role.users()),
      Permission.read(Role.users()),
    ]
  );

  if (data.hasPhoto) {
    await createBucket(post);
  }

  return post;
}

export async function createBucket(post: Models.Document) {
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

  return bucket;
}
