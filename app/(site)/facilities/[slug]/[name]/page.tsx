import { sanityClient } from "@/config/sanity"
import { Lists } from "@/types/facilities"

interface Params {
  params: {
    readonly slug: string,
    readonly name: string,
    readonly searchParams: unknown
  }
}
export default async function FacilitiesName({ params }: Params) {
  const lists = await sanityClient.fetch(`*[_type == "facilitiesLists" ]`) as Lists[]

  return (
    <div>
      {JSON.stringify(params)}
    </div>
  )
}
