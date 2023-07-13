import { Client, Storage } from "node-appwrite";

export function appwriteConfigServer() {
  const client = new Client();

  const storage = new Storage(client);

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("64749ba6eade18e58a13")
    .setKey(process.env.APPWRITE_API_KEY as string);

  return { client, storage };
}

const config = appwriteConfigServer();

export default config;
