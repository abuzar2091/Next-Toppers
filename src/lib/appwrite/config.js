import { Client, Account, Databases } from "appwrite";

export const appwriteConfig = {
  projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  userCollectionId: String(import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID),
  
  
};
export const client = new Client();

client.setEndpoint(appwriteConfig.appwriteUrl);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);

