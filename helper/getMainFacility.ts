import { sanityClient } from "@/config/sanity";

export async function getMainFacility() {
  try {
    const response = await sanityClient.fetch(`*[_type == "experiences"]`)
    return response
    
  } catch (error:any) {
    console.log(error.message)
    
  }
}