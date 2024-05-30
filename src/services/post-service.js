import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
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

    const commentsRef = collection(db, "posts", postId, "comments");

    const commentsSnapshot = await getDocs(commentsRef);

    const comments = commentsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return {
      post: { id: postSnapshot.id, ...postSnapshot.data() },
      comments,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const createPostComment = async ({ postId, text }) => {
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
