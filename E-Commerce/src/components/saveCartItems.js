import { databases } from "../appwriteConfig";
import conf from "../conf/conf";

const DATABASE_ID = conf.appwriteDatabaseId;
const COLLECTION_ID = conf.appwriteCollectionId;

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
