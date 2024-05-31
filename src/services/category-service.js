import { collection, getDocs, query } from "@firebase/firestore";

import db from "@/lib/firebase/db";

export const getCategories = async () => {
  try {
    const categoriesRef = collection(db, "categories");
    const q = query(categoriesRef);

    const categoriesSnapshot = await getDocs(q);

    return categoriesSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    throw new Error(error);
  }
};
