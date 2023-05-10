import type { FC } from "react"
import Title from "./Title";
import { Facilities } from "@/types/facilities";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/utils/sanityImage";
import Link from "next/link";

interface IProps {
  facilities: Facilities[]
}

const Experiences: FC<IProps> = ({ facilities }) => {
  return (
    <section className="container mx-auto  h-full">
      <Title />
      <div className="w-full h-full">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
          {facilities.map((facility, index) => (
            <div key={index} className="w-full h-full flex flex-col justify-center items-center p-5">
              <Image
                className="w-full h-auto rounded object-cover aspect-square md:aspect-video"
                src={urlFor(facility.image).url()}
                alt={facility.title}
                width={800}
                height={800}
                priority
                fetchPriority={'auto'}
                placeholder="blur"
                blurDataURL={urlFor(facility.image).url()}
              />
              <div className="w-full">
                <h3 className="text-3xl text-center text-[#d4a355] uppercase font-light p-5">
                  {facility.title}
                  <p className="text-base lowercase text-gray-500 py-3">
                    {facility.description}
                  </p>
                </h3>
                <button
                  type="button"
                  name={facility.title}
                  title={facility.title}
                  className="text-center w-full">
                  <Link
                    as={`/facilities/${facility._id}`}
                    className="text-center border hover:bg-[#d4a355] transition-all ease duration-300 hover:text-white hover:border-[#d4a355] border-gray-500 uppercase w-full px-5 py-2"
                    href={`/facilities/${facility._id}`}>
                    View More
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};
export default Experiences
