'use client'
import type { FC } from "react"
import { navLists } from "@/data/navLists";
import Link from "next/link";
import MenuButton from "./MenuButton";
import { useMenuModalStore } from "@/store/store";
import { useStore } from "zustand";

const Menu: FC = () => {
  const { isMenuModalOpen } = useStore(useMenuModalStore)
  return (
    <ul className={`fixed z-50 lg:static top-0 bg-white flex flex-col lg:flex-row mt-4 lg:mt-0 font-light  text-gray-500 uppercase lg:capitalize lg:space-x-5 lg:justify-center justify-start p-5 lg:p-0 items-start h-full w-full ${isMenuModalOpen ? 'animate-slideIn' : 'animate-slideOut'}`}>
      {navLists.map(list => (
        <li key={list.name} className="py-4 lg:py-2 transition-colors ease duration-300 text-left text-lg lg:text-base hover:text-[#d4a355]">
          <Link href={list.link}>
            {list.name}
          </Link>
        </li>
      ))}
      <MenuButton classes=" absolute top-0 right-0" />
    </ul>
  )
};
export default Menu
