import { useContext } from "react";
import { SideBarContext } from "../../App";
import {Link} from 'react-router-dom'
import {
  FaDiceD6,
  FaCartShopping,
  FaClockRotateLeft,
  FaUsers,
  FaXmark,
} from "react-icons/fa6";

export default function SideBar() {
  let { showSideBar, onShowSideBar } = useContext(SideBarContext);
  return (
    <section className="flex w-full bg-gray50/50 ">
      {/*sidnav*/}
      <section className=" flex flex-col gap-4 w-[80%]  h-screen bg-neutral-900 bg-opacity-50  p-5">
        <header className="flex justify-between items-center">
          <h1 className="text-blue-700 font-extrabold  ">RetailPOS</h1>
          <p className="text-white md:hidden">
            <FaXmark onClick={onShowSideBar} />
          </p>
        </header>

        <nav className="mt-5  ">
          <p className="text-gray-600  text-[12px] font-bold my-2">menu</p>
          <ul className="flex flex-col items-start gap-1 w-full">
            <Link
              to="/"
              className="flex items-center gap-2 hover:bg-gray-500 text-[13px] hover:text-white  text-gray-100 w-full py-1 px-3 rounded-[10px]"
            >
              <FaCartShopping />
              Dashboard
            </Link>

            <Link
              to="/inventory"
              className=" flex items-center gap-2 hover:bg-gray-500 text-[13px] hover:text-white  text-gray-100 w-full py-1 px-3 rounded-[10px]"
            >
              <FaDiceD6 />
              inventory
            </Link>

            <Link
              to="/users"
              className=" flex items-center gap-2 hover:bg-gray-500 text-[13px] hover:text-white text-gray-100 w-full py-1 px-3 rounded-[10px]"
            >
              <FaUsers></FaUsers>
              user management
            </Link>

            <Link
              to="/history"
              className="flex items-center gap-2 hover:bg-gray-500 text-[13px] hover:text-white text-gray-100 w-full py-1 px-3 rounded-[10px]"
            >
              <FaClockRotateLeft />
              sales history
            </Link>
          </ul>
        </nav>
      </section>
      {/*blank*/}
      <section className="w-20% bg-opacity-50"></section>
    </section>
  );
} 