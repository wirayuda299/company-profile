import { footerLists } from "@/data/footerLists";
import Link from "next/link";
import type { FC } from "react"
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";


const Footer: FC = () => {
  return (
    <footer className="w-full h-full py-7">
      <div className="container mx-auto grid place-items-center w-full h-full ">
        <ul className="max-w-2xl mx-auto flex flex-wrap justify-center items-center space-x-5 p-3">
          {footerLists.map(list => (
            <li key={list.title} className="text-sm font-light">
              <Link href={list.path}>
                {list.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="p-3">
          <h3 className="text-center">Follow Us</h3>
          <div className="flex items-center space-x-3 mt-4">
            <button>
              <a href="https://www.facebook.com/" target='_blank'>
                <FaFacebookF size={25} />
              </a>
            </button>
            <button>
              <a href="https://www.instagram.com/" target='_blank'>
                <AiOutlineInstagram size={25} />
              </a>
            </button>
            <button>
              <a href="https://www.youtube.com/" target='_blank'>
                <AiFillYoutube size={25} />
              </a>
            </button>
          </div>
        </div>
        <div>
          <p className="text-center font-bold pt-5">© 2023, All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  )
};
export default Footer
