import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "@firebase/firestore";

import auth from "@/lib/firebase/auth";
import db from "@/lib/firebase/db";

export const createPost = async ({ title, body, category }) => {
  try {
    const postRef = collection(db, "posts");
    const createdAt = new Date().toISOString();

    const { uid, displayName, email, photoURL } = auth.currentUser;

    await addDoc(postRef, {
      title,
      body,
      category,
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

export const getPosts = async () => {
  try {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("createdAt", "desc"));

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

    const postSnapshot = await getDoc(postRef);

    if (!postSnapshot.exists()) {
      throw new Error("Post not found");
    }

    return postSnapshot.data();
  } catch (error) {
    throw new Error(error);
  }
};

export const deletePost = async (postId) => {
  try {
    const postRef = doc(db, "posts", postId);
    await deleteDoc(postRef);
  } catch (error) {
    throw new Error();
  }
};
