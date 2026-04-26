import { useContext } from "react";
import { SideBarContext }  from "../../App.jsx"
import {
  FaAlignLeft,
  
} from "react-icons/fa6";
export default function MenuIcon() {
  let { showSideBar, onShowSideBar } = useContext(SideBarContext);
  let d = new Date();
  let date = d.getHours() + ":" + d.getMinutes() + ":" + d.getMinutes();

  return (
    <header className="flex  justify-between lg:justify-end items-center font text-gray-700  bg-white  w-full h-[10vh] p-4   ">
      <FaAlignLeft className="lg:hidden " onClick={onShowSideBar} />
      <p>{date}</p>
    </header>
  );
}
