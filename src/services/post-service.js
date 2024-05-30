import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "@firebase/firestore";

import auth from "@/lib/firebase/auth";
import db from "@/lib/firebase/db";

export const createPost = async ({ title, body }) => {
  try {
    const postRef = collection(db, "posts");
    const createdAt = new Date().toISOString();

    const { uid, displayName, email, photoURL } = auth.currentUser;

    await addDoc(postRef, {
      title,
      body,
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

export const getAllPosts = async () => {
  try {
    const postsRef = collection(db, "posts");
    const q = query(postsRef);

    const postsSnapshot = await getDocs(q);

    return postsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (error) {
    throw new Error(error);
  }
};

export const getPost = async (postId) => {
  try {
    const postRef = doc(db, "posts", postId);

    const post = await getDoc(postRef);

    if (!post.exists()) {
      throw new Error("Post not found");
    }

    return post.data();
  } catch (error) {
    throw new Error(error);
  }
};
