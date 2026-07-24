import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { storage } from "@/lib/firebase";

export async function uploadImage(file: File) {
  const imageRef = ref(
    storage,
    `news/${Date.now()}-${file.name}`
  );

  await uploadBytes(imageRef, file);

  return await getDownloadURL(imageRef);
}