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

export default function Sale({ showCart, onShowCart }) {
  return (
    <main className="lg:grid lg:grid-cols-14 md:h-screen lg:gap-0">
      {/*Sidebar*/}
      <aside className=" hidden lg:block lg:col-span-3 ">
        <SideBar />
      </aside>

      {/*Dashboard*/}
      <section className="  col-span-11   flex flex-col h-screen md:h-full">
        <MenuIcon />
        <section className="lg:grid lg:grid-cols-12 h-[90%]  ">
          {/* product display grid */}
          <section className="lg:col-span-8  h-full">
            <ProductList />
          </section>
          {/* chart */}
          <section className="  hidden lg:block lg:col-span-4">
            <Cart></Cart>
          </section>
        </section>
      </section>
    </main>
  );
}