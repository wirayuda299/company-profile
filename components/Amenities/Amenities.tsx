'use client'
import { useSelectedTabStore } from "@/store/store";
import { RoomDetail } from "@/types/roomDetail";
import type { FC } from "react"
import { useStore } from "zustand";
import List from "../RoomDetail/List";

type AmenitiesTypes = Pick<RoomDetail, 'amenities'>
interface IProps {
  amenities: AmenitiesTypes['amenities']
}

const Amenities: FC<IProps> = ({ amenities }) => {
  const { selectedTab } = useStore(useSelectedTabStore)
  if (selectedTab !== 'amenities') return null
  
  return (
    <div className="w-full h-full animate-fadeIn">
      <div>
        <div className="w-full h-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 gap-5 items-start">
          <List amenities={amenities.entertaiment} title="Entertaiment"/>
          <List amenities={amenities.roomFeatures} title="Room Features"/>
          <List amenities={amenities.dining} title="Dining"/>
          <List amenities={amenities.servicesAndRoomAmenities} title="Services & Room Amenities"/>
          <List amenities={amenities.bathroom} title="Bathroom"/>
          <List amenities={amenities.workingArea} title="Working Area"/>
        </div>
      </div>
    </div>
  )
};
export default Amenities
