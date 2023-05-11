import { sanityClient } from "@/config/sanity";
import Banner from "@/components/Banner";
import { RoomDetail } from "@/types/roomDetail";
import { Tab } from "@/components/Tab/Tab";
import Overview from '@/components/RoomDetail/Overview'
import Amenities from "@/components/Amenities/Amenities";

type Params = {
    params: {
        readonly slug: string
    },
    searchParams: unknown
}

export default async function RoomId({ params }: Params) {
    const slug = params.slug
    const response = await sanityClient.fetch(`*[_type == "rooms" && slug.current == "${slug}"]`) as RoomDetail[]
    

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
                        <Amenities amenities={response[0].amenities}/>
                    </div>
                </div>
            </div>
        </div>
    )
}