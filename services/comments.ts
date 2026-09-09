import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  where,
   deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export interface Comment {
  id?: string;
  newsId: string;
  name: string;
  message: string;
  createdAt?: any;
}

const commentsRef = collection(db, "comments");

export async function addComment(
  comment: Omit<Comment, "id">
) {
  await addDoc(commentsRef, {
    ...comment,
    createdAt: serverTimestamp(),
  });
}

export async function getComments(newsId?: string) {
  const q = newsId
    ? query(
        commentsRef,
        where("newsId", "==", newsId),
        orderBy("createdAt", "desc")
      )
    : query(
        commentsRef,
        orderBy("createdAt", "desc")
      );

  const snap = await getDocs(q);

  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Comment[];
}
export async function deleteComment(id: string) {
  await deleteDoc(doc(db, "comments", id));
}