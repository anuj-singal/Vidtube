import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
import dotenv from "dotenv"  // have to import this here as in recent version of cloudinary its needed for process.env functions
import { log } from "console";

dotenv.config()

//configure cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        //once file is uploded on cloudinary then, we would like to delete it from server(local diskStorage) !!(why to keep the copy of file)
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}


const deleteFromCloudinary = async (publicId) =>{
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        console.log("Deleted from cloudinary. PublicId: ", publicId);
    } catch (error) {
        console.log("Error deleting Cloudinary", error);
        return null;
        
    }
}


export {uploadOnCloudinary, deleteFromCloudinary}