import type {FC} from "react"
import Logo from "./Logo";

interface IProps{}

const index:FC<IProps> = (props) => {
  return (
    <nav className="w-full bg-white fixed top-0 z-10">
      <Logo/>
    </nav>
  )
};
export default index
