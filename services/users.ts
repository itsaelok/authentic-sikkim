import {
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export interface UserRole {

  role: "admin" | "editor";

  email: string;

  name: string;

}

export async function getUserRole(uid: string) {

  const snap = await getDoc(
    doc(db, "users", uid)
  );

  if (!snap.exists())
    return null;

  return snap.data() as UserRole;

}