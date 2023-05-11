'use client'
import type { FC } from "react";
import { useSelectedTabStore } from "@/store/store";
import { useStore } from "zustand";

interface Overview {
    desc: string
    bedType: string
    bathroom: string
    internet: string
    size: string
    location: string
    view: string
    numberOfRooms: string
    clubbenefits: string
    maxPeople: string

}

const Overview: FC<Overview> = ({ desc, bedType, clubbenefits, bathroom, internet, maxPeople, location, size, view, numberOfRooms,
}: Overview) => {
    const { selectedTab } = useStore(useSelectedTabStore)
    if (selectedTab !== 'overview') return null
    const dataLists = [
        {
            title: 'Bed Type',
            value: bedType
        },
        {
            title: 'Bathroom',
            value: bathroom
        },
        {
            title: 'Internet',
            value: internet
        },
        {
            title: 'Size',
            value: size

        },
        {
            title: 'View',
            value: view
        },
        {
            title: 'Number of Rooms',
            value: numberOfRooms
        },
        {
            title: 'Club Benefits',
            value: clubbenefits
        },
        {
            title: 'Max. Occupancy',
            value: maxPeople
        },

    ]
    return (
        <div className={'w-full h-full animate-fadeIn'}>
            <p className={'text-gray-500 text-left md:text-lg'}>{desc}</p>
            <h2 className={'text-2xl uppercase pt-5 text-[#d4a355] font-extralight'}>Room details:</h2>
            <ul className={'w-full block mt-5'}>
                {dataLists?.map(list => (
                    <li key={list.title}>
                        <div className={'grid grid-cols-2 gap-4 justify-between  items-start'}>
                            <div className={'text-gray-500 w-full flex justify-between items-center'}>
                                <h3 className={'text-sm font-extralight sm:text-lg'}>{list.title}</h3>
                                <span>:</span>
                            </div>
                            <p className={'text-gray-500 text-sm sm:text-base break-words'}>{list.value}</p>
                        </div>
                    </li>
                ))}

            </ul>
            <h3 className={'text-lg font-semibold pt-5 text-[#d4a355]'}>
                *Additional charge is applicable for the 3rd (third) person.
            </h3>
        </div>
    )
}
export default Overview