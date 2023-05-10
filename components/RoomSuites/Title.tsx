import {FC} from "react"

interface IProps{}

const Title:FC<IProps> = (props) => {
  return (
    <div className="w-full h-full p-5">
      <h1 className="text-3xl font-extralight uppercase text-center ">Room & Suites</h1>
      <div className="mt-10 rounded-full max-w-[150px] mx-auto h-1 bg-[#d4a355] w-full"/>
    </div>
  )
};
export default Title
