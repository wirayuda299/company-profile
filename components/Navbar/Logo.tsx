'use client'
import { useMenuModalStore } from "@/store/store";
import Link from "next/link";
import type { FC } from "react"
import { useStore } from "zustand";

interface IProps { }

const Logo: FC<IProps> = (props) => {
const {isMenuModalOpen, toggleMenuModal} = useStore(useMenuModalStore)
  const genericHamburgerLine = `h-1 w-8 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <header className="w-full h-20 flex items-center p-5 justify-between">
      <h1 className="text-2xl font-semibold">
        <Link href={'/'}>
          Logo
        </Link>
      </h1>
      <button
        className="flex flex-col h-12 w-14  justify-center items-center group"
        onClick={() => toggleMenuModal()}
      >
        <div
          className={`${genericHamburgerLine} ${isMenuModalOpen
            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
            }`}
        />
        <div className={`${genericHamburgerLine} ${isMenuModalOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
        <div
          className={`${genericHamburgerLine} ${isMenuModalOpen
            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
            : "opacity-50 group-hover:opacity-100"
            }`}
        />
      </button>


    </header>
  )
};
export default Logo
