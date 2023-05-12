import { sanityClient } from "@/config/sanity";
import { RoomDetail } from "@/types/roomDetail";
import { getRoomType } from "@/helper/getRoomType";
import dynamic from "next/dynamic";
const Banner = dynamic(() => import('@/components/Banner'))
const Overview = dynamic(() => import('@/components/RoomDetail/Overview'))
const Amenities = dynamic(() => import('@/components/Amenities/Amenities'))
const Thumbnails = dynamic(() => import('@/components/Thumbnails/thumbnails'))
const Tab = dynamic(() => import('@/components/Tab/Tab'))  

type Params = {
    params: {
        readonly slug: string
    },
    searchParams: unknown
}

export default async function RoomId({ params }: Params) {
    const response = await sanityClient.fetch(`*[_type == "rooms" && slug.current == "${params.slug}"]`) as RoomDetail[]
    const roomsType = await getRoomType()
    return (
        <div className='w-full h-full'>
            <Banner images={response[0]?.banner} />
            <div className={'container mx-auto '}>
                <h1 className={'text-center text-3xl font-extralight md:text-4xl md:p-10 text-gray-500 uppercase p-5'}>
                    {response[0]?.name}
                </h1>
                <div className="mt-3 rounded-full max-w-[150px] mx-auto h-1 bg-[#d4a355] w-full" />
                <div className={'flex flex-col lg:flex-row justify-center  items-start   mx-auto w-full p-5 gap-8'}>
                    <Tab />
                    <div>
                        <Overview
                            desc={response[0]?.description}
                            internet={response[0]?.internet}
                            bathroom={response[0]?.bathroom}
                            bedType={response[0]?.bedType}
                            clubbenefits={response[0]?.clubBenefits}
                            location={response[0]?.location}
                            maxPeople={response[0]?.max}
                            numberOfRooms={response[0]?.numberOfRooms}
                            size={response[0]?.size}
                            view={response[0]?.view}
                        />
                        <Amenities amenities={response[0].amenities} />
                    </div>
                </div>
                <div className="max-w-6xl mx-auto p-5 mt-5">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-5">
                        {roomsType?.filter(room => room.slug.current !== params.slug).map(room => (
                            <Thumbnails
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