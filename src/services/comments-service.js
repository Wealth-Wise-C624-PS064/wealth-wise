import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from "@firebase/firestore";

import db from "@/lib/firebase/db";
import auth from "@/lib/firebase/auth";

export const getComments = async (postId) => {
  try {
    const commentsRef = collection(db, "posts", postId, "comments");

    const q = query(commentsRef, orderBy("createdAt", "desc"));

    const commentsSnapshot = await getDocs(q);

    const comments = commentsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return comments;
  } catch (error) {
    throw new Error(error);
  }
};

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
