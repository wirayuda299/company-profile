import { sanityClient } from "@/config/sanity";
import { RoomTypes } from "@/types/RoomTypes";

export async function getRoomType() {
  try {
    const reponse = await sanityClient.fetch(`*[_type == "roomType"]`) as RoomTypes[]
    if(reponse) return reponse
    
  } catch (error:any) {
    console.log(error.message)
    
  }
}