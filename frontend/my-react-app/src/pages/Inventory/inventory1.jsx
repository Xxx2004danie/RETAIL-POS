import { memo } from "react";
import MenuIcon from "../../components/layout/layout.jsx";
import SearchBar from "../../components/ui/seachbar.jsx";
import InventoryUi from "./inventorycontent.jsx";
import SideBar from "../Dashboard/sidebar.jsx";

import {
  FaXmark,
  FaRegTrashCan,
  FaMagnifyingGlass,
  FaPencil,
} from "react-icons/fa6";

function Inventory({ showCart, onShowCart }) {
  return (
    <main className=" lg:grid lg:grid-cols-14  lg:gap-0 lg:screen">
      {/*Sidebar*/}
      <aside className=" hidden lg:block lg:col-span-3 h-screen ">
        <SideBar />
      </aside>

      {/*Dashboard*/}
      <section className="  col-span-11   flex flex-col h-screen">
        {/* Header */}
        <MenuIcon />

        <section className="lg:grid lg:grid-cols-1 h-[90vh]">
          {/* inventory */}
          <InventoryUi />
        </section>
      </section>
    </main>
  );
}

export default memo(Inventory);
