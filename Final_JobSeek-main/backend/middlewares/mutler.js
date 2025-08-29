import multer from "multer";

const storage = multer.memoryStorage();  //means that Multer will store the file in memory (RAM) instead of saving it directly to the server’s disk.
export const singleUpload = multer({storage}).single("file"); 