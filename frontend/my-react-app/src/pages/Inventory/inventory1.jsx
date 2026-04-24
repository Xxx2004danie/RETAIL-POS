import { memo } from "react";
import MenuIcon from "../../components/layout/layout.jsx";
import SearchBar from "../../components/ui/seachbar.jsx"; 
import  InventoryUi  from "./inventorycontent.jsx"
import SideBar from "../Dashboard/sidebar.jsx"
import {
  FaXmark,
  FaRegTrashCan,
  FaMagnifyingGlass,
  FaPencil,
} from "react-icons/fa6";


export default function Inventory({ showCart, onShowCart }) {
  return (
    <main className="lg:grid lg:grid-cols-14 h-screen lg:gap-0">
      {/*Sidebar*/}
      <aside className=" hidden lg:block lg:col-span-3 ">
        <SideBar />
      </aside>

      {/*Dashboard*/}
      <section className="  col-span-11   flex flex-col h-full">
        {/* Header */}
        <MenuIcon />

        <section className="lg:grid lg:grid-cols-12 h-[90%]">
          {/* inventory */}
         <InventoryUi />
        </section>
      </section>
    </main>
  );
}