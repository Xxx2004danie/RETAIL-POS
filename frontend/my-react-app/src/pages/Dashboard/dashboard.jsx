import { memo } from "react";
import { useState } from "react";
import SideBar from "./sidebar";

import Button from "../../components/ui/button";
import MenuIcon from "../../components/layout/layout.jsx";
import Cart from "./cart.jsx";
import ProductList from "./productLIst.jsx";
import {
  FaCartShopping,
  FaRegCreditCard,
  FaMoneyBillWave,
  FaMobileScreen,
  FaRegTrashCan,
} from "react-icons/fa6";

function Sale({ showCart, onShowCart }) {
  return (
    <main className="md:grid md:grid-cols-14 h-screen md:gap-0 md:w-full">
      {/*Sidebar*/}
      <aside className=" hidden md:block md:col-span-3 ">
        <SideBar />
      </aside>

      {/*Dashboard*/}
      <section className="  col-span-11   flex flex-col h-screen md:h-full">
        <MenuIcon />
        <section className="md:grid md:grid-cols-12 h-[90vh] md:border-t md:border-gray-200 ">
          {/* product display grid */}
          <section className="md:col-span-8 h-full">
            <ProductList />
          </section>
          {/* chart */}
          <section className="  hidden md:block md:col-span-4  h-full">
            <Cart></Cart>
          </section>
        </section>
      </section>
    </main>
  );
}

export default memo(Sale);