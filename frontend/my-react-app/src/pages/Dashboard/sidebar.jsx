import { memo } from "react";
import { useContext } from "react";
import { SideBarContext } from "../../App";
import { Link } from "react-router-dom";
import {
  FaDiceD6,
  FaCartShopping,
  FaClockRotateLeft,
  FaUsers,
  FaXmark,
} from "react-icons/fa6";

function SideBar() {
  let { showSideBar, onShowSideBar, onCloseSideBar } =
    useContext(SideBarContext);
  return (
    <section className=" sm:absolute sm:z-10  sm:inset-0 md:static h-screen flex w-full bg-gray50/50 ">
      {/*sidnav*/}
      <section className=" flex flex-col gap-4 w-full  h-screen bg-neutral-900 bg-opacity-50  p-5">
        <header className="flex justify-between items-center">
          <h1 className="text-blue-700 font-extrabold  ">RetailPOS</h1>
          <p className="text-white lg:hidden">
            <FaXmark onClick={onCloseSideBar} />
          </p>
        </header>

        <nav className="mt-5  ">
          <p className="text-gray-600  text-[12px] font-bold my-2">menu</p>
          <ul className="flex flex-col items-start gap-1 w-full">
            <Link
              onClick={onCloseSideBar}
              to="/"
              className="flex items-center gap-2 hover:bg-gray-500 text-[13px] hover:text-white  text-gray-100 w-full py-1 px-3 rounded-[10px]"
            >
              <FaCartShopping />
              Dashboard
            </Link>

            <Link
              onClick={onCloseSideBar}
              to="/inventory"
              className=" flex items-center gap-2 hover:bg-gray-500 text-[13px] hover:text-white  text-gray-100 w-full py-1 px-3 rounded-[10px]"
            >
              <FaDiceD6 />
              inventory
            </Link>

            <Link
              onClick={onCloseSideBar}
              to="/users"
              className=" flex items-center gap-2 hover:bg-gray-500 text-[13px] hover:text-white text-gray-100 w-full py-1 px-3 rounded-[10px]"
            >
              <FaUsers></FaUsers>
              user management
            </Link>

            <Link
              onClick={onCloseSideBar}
              to="/history"
              className="flex items-center gap-2 hover:bg-gray-500 text-[13px] hover:text-white text-gray-100 w-full py-1 px-3 rounded-[10px]"
            >
              <FaClockRotateLeft />
              sales history
            </Link>
          </ul>
        </nav>
      </section>
    </section>
  );
}

export default memo(SideBar);
