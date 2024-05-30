import { addDoc, collection } from "@firebase/firestore";

import db from "@/lib/firebase/db";
import auth from "@/lib/firebase/auth";

export const createComment = async ({ postId, text }) => {
  try {
    const commentRef = collection(db, "posts", postId, "comments");

    const createdAt = new Date().toISOString();

    const { uid, displayName, email, photoURL } = auth.currentUser;

    await addDoc(commentRef, {
      text,
      createdAt,
      author: {
        id: uid,
        displayName,
        email,
        photoURL,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
