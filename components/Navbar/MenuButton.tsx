import { useMenuModalStore } from "@/store/store";
import type { FC } from "react"
import { useStore } from "zustand";

interface Props {
  classes: string
}

const MenuButton: FC<Props> = ({ classes }) => {
  const { isMenuModalOpen, toggleMenuModal } = useStore(useMenuModalStore)
  const genericHamburgerLine = `h-1 w-7 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <button
      className={`flex flex-col  lg:hidden justify-center items-center group ${classes}`}
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
  )
};
export default MenuButton
