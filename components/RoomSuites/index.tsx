'use client'
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/utils/sanityImage";
import type { FC } from "react"
import { RoomSuites } from "@/types/roomSuites";
import Title from "./Title";

interface IProps {
  roomSuites: RoomSuites[] 
}

const RoomSuites: FC<IProps> = ({ roomSuites }) => {

  return (
    <section className="w-full h-full bg-gray-200 mt-6">
      <Title />
      <div className="container mx-auto w-full">
        <Swiper
          spaceBetween={100}
          effect="fade"
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade]}
          className=" w-full h-full"
        >
          {roomSuites.map((room, index) => (
            <SwiperSlide key={room._id} content={room.title} title={room.title}>
              <figure className="w-full">
                <Image
                  className="object-cover w-full h-full "
                  src={urlFor(room.bannerImages).url()}
                  alt="banner"
                  priority
                  quality={100}
                  about="banner"
                  width={1920}
                  height={1080}
                />
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
};
export default RoomSuites
