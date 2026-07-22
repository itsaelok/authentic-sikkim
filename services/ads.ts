import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export interface Advertisement {
  id?: string;

  title: string;

  image: string;

  url: string;

  location:
    | "home-top"
    | "home-middle"
    | "sidebar"
    | "article-top"
    | "article-bottom";

  active: boolean;
}

const adsCollection = collection(db, "advertisements");

export async function getAds() {
  const snap = await getDocs(adsCollection);

  return snap.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Advertisement[];
}

export async function addAd(ad: Advertisement) {
  await addDoc(adsCollection, ad);
}

export async function updateAd(
  id: string,
  ad: Partial<Advertisement>
) {
  await updateDoc(doc(db, "advertisements", id), ad);
}

export async function deleteAd(id: string) {
  await deleteDoc(doc(db, "advertisements", id));
}