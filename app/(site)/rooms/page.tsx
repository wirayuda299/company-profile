import Title from "@/components/Title/Title";
import { getBannerRoomSuites } from "@/helper/getBanner"
import { getRoomType } from "@/helper/getRoomType";
import dynamic from "next/dynamic";
const Banner = dynamic(() => import('@/components/Banner'))
const Thumbnails = dynamic(() => import('@/components/Thumbnails/thumbnails'))

export default async function RoomsPage() {
  const banner = await getBannerRoomSuites()
  const roomsType = await getRoomType()

  return (
    <div className="w-full h-full">
      <Banner images={banner ? banner[0].roomSuitePageImage as unknown as string[] : []} />
      <div className="w-full h-full">
        <div className="container mx-auto p-5">
          <Title title="Rooms & Suites" />
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-5">
            {roomsType?.map(room => (
              <Thumbnails
                page="rooms"
                name={room.name}
                slug={room.slug.current}
                thumbnail={room.thumbnail}
                key={room._id}
              />
            ))}

          </div>
        </div>

      </div>
    </div>
  )
}
