import { databases } from "../appwriteConfig";
import { Query } from "appwrite";

const DATABASE_ID = "681baba8001ced0a4551";
const COLLECTION_ID = "681babce002740e4e9af";

export const saveCartItem = async (item, userId) => {
  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      'unique()',
      {
        userId,
        productId: item.id,       
        title: item.title,
        price: item.price,
        description: item.description,
        image: item.imgSrc  
      }
    );
    console.log("Saved to Appwrite:", response);
  } catch (error) {
    console.error("Failed to save cart item:", error);
  }
};
