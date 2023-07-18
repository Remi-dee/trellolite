import { ID, storage } from "@/appWrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "64914639191f175b26e1",
    ID.unique(),
    file
  );
  return fileUploaded;
};

export default uploadImage;
