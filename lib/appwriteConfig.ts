import { Client, Account, Databases, Storage} from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('64749ba6eade18e58a13');               // Your project ID

export const account = new Account(client);

export const databases = new Databases(client);

export const storage = new Storage(client);
