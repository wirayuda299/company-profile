import type { FC } from "react"

interface IProps { }

const Title: FC<IProps> = (props) => {
  return (
    <div className="w-full h-full flex flex-col text-center max-w-4xl mx-auto text-gray-500">
      <h2 className="text-3xl p-10 font-extralight text-[#d4a355] ">
        HOTEL EXPERIENCES
        <div className="mt-10 rounded-full max-w-[150px] mx-auto h-1 bg-[#d4a355] w-full"/>
      </h2>
      <p className="text-base text-center font-normal p-5">Nestled within an unspoiled river valley and overlooking the enchanting forests of Payangan, the 149-room Padma Resort Ubud is an expansive and tranquil luxury destination. Located north of Ubud, Bali’s celebrated capital of arts and culture, Padma Resort Ubud features all the five-star amenities and facilities one would expect from the renowned Padma hospitality brand, including stunning views from every room or suite, a first-class spa, an awe-inspiring 89-metre infinity swimming pool with panoramic views, signature world-class dining and modern event venues. Our Ubud resort is idyllic and the perfect place to refresh your mind and body, and to explore the wonders of north and central Bali.</p>

    </div>
  )
};
export default Title
