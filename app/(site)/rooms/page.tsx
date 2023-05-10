import Banner from "@/components/Banner";
import { getBannerRoomSuites } from "@/helper/getBanner"
import { getRoomType } from "@/helper/getRoomType";
import { urlFor } from "@/lib/sanity/utils/sanityImage";
import Image from "next/image";
import Link from "next/link";

export default async function RoomsPage() {
  const banner = await getBannerRoomSuites()
  const roomsType = await getRoomType()

  return (
    <div className="w-full h-full">
      <Banner images={banner ? banner[0].roomSuitePageImage as unknown as string[] : []} />
      <div className="w-full h-full">
        <div className="container mx-auto p-5">
          <h1 className="text-3xl p-10 font-extralight text-center uppercase text-gray-400 md:text-4xl ">
            Rooms & Suites
            <div className="mt-10 rounded-full max-w-[150px] mx-auto h-1 bg-[#d4a355] w-full" />
          </h1>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-5">
            {roomsType?.map(room => (
              <Link href={`rooms/${room.slug.current}`} key={room._id} className="w-full h-full">
                <figure>
                  <Image
                  className="w-full object-cover h-full"
                    src={urlFor(room.thumbnail).url()}
                    alt={room.name}
                    width={500}
                    height={500}
                    priority
                  />
                  <figcaption className='text-center font-semibold text-xl uppercase p-3 text-[#d4a355]'>{room.name}</figcaption>
                </figure>
              </Link>
            ))}

          </div>
        </div>

      </div>
    </div>
  )
}
