import { databases } from "../appwriteConfig";
import { Query } from "appwrite";
import conf from "../conf/conf";

const DATABASE_ID = conf.appwriteDatabaseId;
const COLLECTION_ID = conf.appwriteCollectionId;

export const getCartItems = async (userId) => {
  try {
    const response = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
      [ 
        Query.equal("userId", userId)
      ]
    );
    return response.documents;
  } catch (error) {
    console.error("Failed to fetch cart items:", error);
    return [];
  }
};
