import type { FC } from "react"
interface IProps {
  amenities: string[]
  title: string
}

const List: FC<IProps> = ({ amenities, title}) => {
  return (
    <div>
      <h2 className="text-xl text-[#5c5c5c] font-semibold pb-5 uppercase ">{title}</h2>
      <ul className="list-disc">
        {amenities?.map((item, index) => (
          <li className=" text-[#5c5c5c]" key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
};
export default List
