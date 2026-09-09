import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

import { storage } from "@/lib/firebase";

export async function uploadImage(file: File): Promise<string> {
  const filename =
    Date.now() +
    "-" +
    file.name.replace(/\s+/g, "-");

  const imageRef = ref(storage, `news/${filename}`);

  await uploadBytes(imageRef, file);

  return await getDownloadURL(imageRef);
}

export async function deleteImage(url: string) {
  try {
    const path = decodeURIComponent(
      url.split("/o/")[1].split("?")[0]
    );

    const imageRef = ref(storage, path);

    await deleteObject(imageRef);
  } catch {
    console.log("Image already deleted.");
  }
}