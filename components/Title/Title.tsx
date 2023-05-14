import type { FC } from "react"

interface IProps {
  title: string
  children?: React.ReactNode
 }

const Title: FC<IProps> = ({children, title}) => {
  return (
    <div className="w-full h-full flex flex-col text-center max-w-4xl mx-auto text-gray-500">
      <h2 className="text-3xl p-10 font-extralight text-[#d4a355] md:text-4xl lg:text-5xl tracking-wider uppercase">
       {title}
        <div className="mt-10 rounded-full max-w-[150px] mx-auto h-1 bg-[#d4a355] w-full"/>
      </h2>
      {children}
    </div>
  )
};
export default Title
