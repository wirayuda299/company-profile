'use client'
import type { FC } from "react"
import { useStore } from "zustand";
import { useMenuModalStore } from "@/store/store";

import MenuButton from "../Navbar/MenuButton";
import Menu from "../Navbar/Menu";

const Navigation: FC = () => {
  const { isMenuModalOpen } = useStore(useMenuModalStore)
  return (
    <aside className={`fixed lg:hidden w-full z-10 h-screen top-0 bg-white ${isMenuModalOpen ? 'animate-slideIn' : 'animate-slideOut'}`}>
      <div className="flex flex-col h-full relative w-full">
        {isMenuModalOpen && (
          <MenuButton classes="absolute top-5 right-5" />
        )}
        <Menu />
      </div>

    </aside>
  )


};
export default Navigation;
