import { getBanner } from '@/helper/getBanner'
import Banner from '@/components/Banner'
import Experiences from '@/components/Experiences'
import { getMainFacility } from '@/helper/getMainFacility'
import { getRoomSuites } from '@/helper/getRoomSuites'
import RoomSuites from '@/components/RoomSuites'
import { RoomSuites as RoomSuitesType } from '@/types/roomSuites'

export default async function Home() {
  const banner = await getBanner()
  const facilities = await getMainFacility()
  const roomSuites = await getRoomSuites()

  return (
    <div className='w-full h-full'>
      <Banner images={banner ? banner[0].images : []} />
      <Experiences facilities={facilities} />
      <section className="w-full h-full">
        <RoomSuites roomSuites={roomSuites as RoomSuitesType[]} />
      </section>
    </div>
  )
}
