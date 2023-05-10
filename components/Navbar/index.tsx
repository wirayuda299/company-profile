import type {FC} from "react"
import Logo from "./Logo";
import Menu from "./Menu";

interface IProps{}

const index:FC<IProps> = (props) => {
  return (
    <nav className="w-full bg-white flex flex-col items-center justify-between ">
      <Logo/>
      <Menu />
    </nav>
  )
};
export default index
