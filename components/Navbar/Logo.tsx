'use client'
import Link from "next/link";
import type { FC } from "react"
import MenuButton from "./MenuButton";
import Image from "next/image";
import logo from '@/assets/padma-ubud-logo.png'

const Logo: FC = () => {
  return (
    <header className="w-full flex items-center p-4 justify-between lg:justify-center flex-col lg:p-2.5">
      <div className="w-full flex justify-between lg:justify-center">
        <Link href={'/'} as={'/'}>
          <Image
            className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16"
            src={logo}
            alt="logo"
            width={50}
            height={50} />
        </Link>
        <MenuButton classes="" />
      </div>
    </header>
  )
};
export default Logo
