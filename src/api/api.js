import axios from "axios";
import axiosInstance from "./axiosInstance";

export const getGalleryImages = async (folder) =>{
   const data = await axiosInstance.get(`/gallery/${folder}`)

   if(!data){
    res.status(400).send({msg:"cannot fetch data",success:false})
   }

   return data
}