import { sanityClient } from "@/config/sanity";
import { RoomSuites } from "@/types/roomSuites";

export async function getRoomSuites() {
  try {
    const response = await sanityClient.fetch(`*[_type == "roomsuites"]`) as RoomSuites[]
    return response
    
  } catch (error:any) {
    console.log(error)
  }
  
}