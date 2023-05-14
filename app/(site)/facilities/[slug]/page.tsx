import Banner from "@/components/Banner"
import Thumbnails from "@/components/Thumbnails/thumbnails"
import Title from "@/components/Title/Title"
import { sanityClient } from "@/config/sanity"
import { Lists } from "@/types/facilities"

type Params = {
  params: {
    readonly slug: string
  },
  searchParams: unknown
}

export default async function Facilities({ params }: Params) {
  const lists = await sanityClient.fetch(`*[_type == "facilitiesLists" && slug.current == "${params.slug}"]`) as Lists[]

  return (
    <div className="w-full h-full">
      <div className="w-full h-screen">
        <Banner images={lists[0].details.banner} />
      </div>
      <div className="container mx-auto w-full h-full">
        <Title title={lists[0].title} />
      </div>
      <div className="container mx-auto w-full h-full p-5">
        <div className="w-full h-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-center items-center">
          {lists[0].details.types.map((type, index) => (
            <Thumbnails
              thumbnail={type.image}
              name={type.title}
              page={`facilities/${params.slug}`}
              slug={type.slug.current}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
