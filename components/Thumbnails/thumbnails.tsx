import type { FC } from "react"
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/utils/sanityImage";

interface IProps {
  slug: string
  thumbnail: string
  name: string
  page: string
}

const Thumbnails: FC<IProps> = ({ slug, thumbnail, name, page }) => {
  return (
    <Link href={`${page}/${slug}`} className="w-full h-full">
      <figure>
        <Image
          className="w-full object-cover h-full aspect-square "
          src={urlFor(thumbnail).url()}
          alt={name}
          sizes="800px"
          width={800}
          height={800}
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
