import { useContext } from "react";
import { SideBarContext }  from "../../App.jsx"
import {
  FaAlignLeft,
  
} from "react-icons/fa6";
export default function MenuIcon() {
  let { showSideBar, onShowSideBar } = useContext(SideBarContext);
  return (
    <header className="flex  justify-start items-center font text-gray-700  bg-white  w-full h-[10%] p-4   ">
      <FaAlignLeft className="lg:hidden " onClick={onShowSideBar} />
    </header>
  );
}
