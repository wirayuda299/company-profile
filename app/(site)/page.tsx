import { getBanner } from '@/helper/getBanner'
import Banner from '@/components/Banner'
import Experiences from '@/components/Experiences'
import { getMainFacility } from '@/helper/getMainFacility'

export default async function Home() {
  const banner = await getBanner()
  const facilities = await getMainFacility()
  
  return (
    <div className='w-full h-full'>
      <Banner images={ banner ? banner[0].bannerImages : []}/>
      <Experiences facilities={facilities}/>
    </div>
  )
}
