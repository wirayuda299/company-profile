import type { FC } from "react"
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/utils/sanityImage";

interface IProps {
  slug: string
  thumbnail: string
  name: string
}

const Thumbnails: FC<IProps> = ({ slug, thumbnail, name }) => {
  return (
    <Link href={`rooms/${slug}`} className="w-full h-full">
      <figure>
        <Image
          className="w-full object-cover h-full"
          src={urlFor(thumbnail).url()}
          alt={name}
          sizes="500px"
          width={500}
          height={500}
          priority
          placeholder="blur"
          blurDataURL={urlFor(thumbnail).url()}
        />
        <figcaption className='text-center font-semibold text-xl uppercase p-3 text-[#d4a355]'>{name}</figcaption>
      </figure>
    </Link>
  )
};
export default Thumbnails
