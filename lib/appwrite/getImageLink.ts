import config from "../appwriteConfigServer";

const { storage } = config;

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
