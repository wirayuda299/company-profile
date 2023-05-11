'use client'
import type { FC } from 'react'
import { useStore } from "zustand";
import { useSelectedTabStore } from "@/store/store";

export const Tab: FC = () => {
    const { selectedTab, setSelectedTab } = useStore(useSelectedTabStore)
    return (
        <div className={' h-full min-w-[250px]'}>
            <ul className={' p-3'}>
                <li className={`cursor-pointer text-2xl uppercase text-gray-500 border-b p-3 ${selectedTab === 'overview' ? 'border-[#d4a355]' : ''}`} onClick={() => setSelectedTab('overview')}>OverView</li>
                <li className={`cursor-pointer text-2xl uppercase text-gray-500 border-b p-3 ${selectedTab === 'amenities' ? 'border-[#d4a355]' : ''}`} onClick={() => setSelectedTab('amenities')}>Amenities</li>
            </ul>

        </div>
    )

}