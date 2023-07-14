import { storage } from "@/appWrite";
import { Storage } from "appwrite";



const uploadImage =async (file : File ) => {
if(!file) return;

const fileUploaded = await storage.createFile(



)

}