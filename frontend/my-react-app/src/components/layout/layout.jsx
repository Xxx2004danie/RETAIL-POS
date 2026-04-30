import { useContext, useEffect, useState } from "react";
import { SideBarContext } from "../../App.jsx";
import { FaAlignLeft } from "react-icons/fa6";
export default function MenuIcon() {
  let [clock, setClock] = useState();
  let { showSideBar, onShowSideBar } = useContext(SideBarContext);
  let date = new Date();
  useEffect(() => {
    let intervel = setInterval(() => {
      let d = new Date();
      setClock(
        () => d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds(),
      );
    }, 1000);

    return () => clearInterval(intervel);
  }, []);
  return (
    <header className="flex  justify-between lg:justify-end items-center font text-gray-700  bg-white  w-full h-[10vh] p-4   ">
      <FaAlignLeft className="lg:hidden " onClick={onShowSideBar} />
      <article className="flex flex-col">
        <p>{clock}</p>
        <i className="text-[11px]">{date.toDateString()}</i>
      </article>
    </header>
  );
}
