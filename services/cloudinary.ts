export async function uploadImage(file: File): Promise<string> {
  const form = new FormData();

  form.append("file", file);

  form.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
  );

  const cloud =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME!;

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
    {
      method: "POST",
      body: form,
    }
  );

  if (!res.ok)
    throw new Error("Upload failed");

  const data = await res.json();

  return data.secure_url;
}