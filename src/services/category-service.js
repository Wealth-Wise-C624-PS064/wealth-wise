import { collection, getDocs, query, where } from "@firebase/firestore";

import db from "@/lib/firebase/db";

export const getAllCategory = async () => {
  try {
    const categoryRef = collection(db, "category");
    const q = query(categoryRef);

    const categorySnapshot = await getDocs(q);

    return categorySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    throw new Error(error);
  }
};

export const getCategory = async (categoryName) => {
  const categoryQuery = query(
    collection(db, "category"),
    where("categoryName", "==", categoryName)
  );
  const categorySnaphot = await getDocs(categoryQuery);

  if (categorySnaphot.empty) {
    return new Error();
  }

  const categoryDoc = categorySnaphot.docs[0];

  const postsRef = collection(db, "posts");
  const q = query(postsRef, where("category", "==", categoryDoc));

  const postSnapshot = await getDocs(q);

  if (postSnapshot.empty) {
    return new Error();
  } else {
    const posts = postSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return {
      post: { id: posts.id, ...posts.data() },
    };
  }
};
