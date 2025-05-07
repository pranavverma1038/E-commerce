import { databases } from "../appwriteConfig";
import { Query } from "appwrite";

const DATABASE_ID = "681baba8001ced0a4551";
const COLLECTION_ID = "681babce002740e4e9af";

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
