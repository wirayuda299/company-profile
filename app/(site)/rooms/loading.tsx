import Image from "next/image";
import logo from '@/assets/padma-ubud-logo.png'
export default function Loading() {
    return (
        <div className='w-full h-screen bg-white text-white text-center fixed top-0'>
            <div className='container mx-auto flex justify-center items-center h-full'>
                <Image
                    src={logo}
                    width={100}
                    height={100}
                    alt={'logo'}

                    />

            </div>
        </div>
    )
}