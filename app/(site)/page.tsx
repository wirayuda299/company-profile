import { getBanner } from '@/helper/getBanner'
import { getMainFacility } from '@/helper/getMainFacility'
import { getRoomSuites } from '@/helper/getRoomSuites'
import { RoomSuites as RoomSuitesType } from '@/types/roomSuites'
import dynamic from 'next/dynamic'

const Banner = dynamic(() => import('@/components/Banner'))
const Experiences = dynamic(() => import('@/components/Experiences'))
const RoomSuites = dynamic(() => import('@/components/RoomSuites'))

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
