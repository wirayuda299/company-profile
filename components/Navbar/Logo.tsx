'use client'
import Link from "next/link";
import type { FC } from "react"
import MenuButton from "./MenuButton";
import Image from "next/image";
import logo from '@/assets/padma-ubud-logo.png'

const Logo: FC = () => {

  return (
    <header className="w-full flex items-center p-5 justify-between lg:justify-center flex-col lg:p-2.5">
      <div className="w-full flex justify-between lg:justify-center">
          <Link href={'/'}>
            <Image src={logo} alt="logo" width={95} height={50} />
          </Link>
        <MenuButton classes="" />
      </div>
    </header>
  )
};
export default Logo
