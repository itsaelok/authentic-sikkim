import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

import { storage } from "@/lib/firebase";



/* ------------------------------------------------ */
/* UPLOAD IMAGE */
/* ------------------------------------------------ */

export async function uploadNewsImage(
  file: File
) {

  const fileName = `${Date.now()}-${file.name}`;

  const storageRef = ref(
    storage,
    `news/${fileName}`
  );


  await uploadBytes(
    storageRef,
    file
  );


  const url =
    await getDownloadURL(storageRef);


  return url;

}



/* ------------------------------------------------ */
/* DELETE IMAGE */
/* ------------------------------------------------ */

export async function deleteNewsImage(
  url: string
) {

  try {

    const imageRef =
      ref(
        storage,
        url
      );


    await deleteObject(
      imageRef
    );


  } catch (error) {

    console.error(
      "Image delete failed:",
      error
    );

  }

}