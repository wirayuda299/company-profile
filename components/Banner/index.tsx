'use client'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import type { FC } from "react"
import Image from "next/image";
import { urlFor } from "@/lib/sanity/utils/sanityImage";

interface IProps {
  images: string[]
}

const Banner: FC<IProps> = ({ images }) => {

  return (
    <div className="w-full h-full ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className=" w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              className="object-cover w-full h-screen "
              src={urlFor(image).url()}
              alt="banner"
              priority
              quality={100}
              about="banner"
              width={1920}
              height={1080}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Banner
