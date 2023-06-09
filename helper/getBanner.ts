import { sanityClient } from '@/config/sanity';
import { BannerRoomSuite } from '@/types/BannerRoomSuite';
import { Banner } from '@/types/banner';

export async function getBanner() {
	try {
		const response = await sanityClient.fetch(`*[_type == "banner"]`) as Banner[]
		if (!response) throw new Error('No banner data');
		return response;
	} catch (error: any) {
    console.error(error.message);
  }
}
export async function getBannerRoomSuites() {
	try {
		const response = await sanityClient.fetch(`*[_type == "roomSuitePage"]`) as BannerRoomSuite[]
		if (!response) throw new Error('No banner data');
		return response
		
	} catch (error:any) {
		console.log(error.message);
		
		
	}
}