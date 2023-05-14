import Banner from "@/components/Banner"
import Thumbnails from "@/components/Thumbnails/thumbnails"
import Title from "@/components/Title/Title"
import { sanityClient } from "@/config/sanity"
import { Lists } from "@/types/facilities"

export default async function FacilitiesPage() {
  const facilitiesBanner = await sanityClient.fetch(`*[_type == "facilitiesPage"]`)
  const lists = await sanityClient.fetch(`*[_type == "facilitiesLists"]`) as Lists[]
  return (
    <div className="w-full h-full">
      <Banner images={facilitiesBanner[0].banner} />
      <div className="container mx-auto w-full h-full">
        <Title title="Facilities" />
      </div>
      <div className="container mx-auto w-full h-full p-5 md:p-8">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center">
          {lists.map((list, index) => (
            <Thumbnails
              page="facilities"
              key={list._id}
              name={list.title}
              slug={list.slug.current}
              thumbnail={list.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
