import { ID, Query } from "appwrite";
import { account, appwriteConfig, databases } from "./config";
// import { v4 as uuidv4 } from "uuid";
export async function createUserAccount(user) {
 
  try {
    console.log("start creating account try");
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    if (!newAccount) throw error;
    const newUser = await saveUserToDB({
      accountId: newAccount.$id,
      email: newAccount.email,
      name: newAccount.name,
     
      
    });
    return newUser;
    // console.log(newAccount);
  } catch (error) {
    console.log("something is wrong during signup ", error);
    return error;
  }
}

export async function saveUserToDB(user) {
  console.log("save to DB");
  console.log(user);
  try {
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      user
    );
    return newUser;
  } catch (error) {
    console.log("something happeping wrong during to save databases ", error);
  }
}

export async function signInAccount(user) {
  try {
    const session = await account.createEmailSession(user.email, user.password);
    return session;
  } catch (error) {
    console.log("some happing wrong during sign in process ", error);
  }
}

export async function getCurrentUSer() {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw error;
    console.log("in appwrite curr user");
    console.log(currentAccount.$id);
    console.log(currentAccount);
    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );
    if (!currentUser) throw error;
    console.log("current user logged in successfully");
    //  console.log(currentUser);
    return currentUser.documents[0];
  } catch (error) {
    console.log(
      "something is happening wrong during getting current user ",
      error
    );
  }
}
export async function signOutAccount() {
  console.log("inside signout");
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error) {
    console.log("some happing wrong during sign out process ", error);
  }
}
