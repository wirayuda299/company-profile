import { sanityClient } from "@/config/sanity";

export async function getMainFacility() {
  try {
    const response = await sanityClient.fetch(`*[_type == "facilities"]`)
    if(!response) throw new Error('Failed to fetch data facilities')
    return response
    
  } catch (error:any) {
    console.log(error.message)
    
  }
}