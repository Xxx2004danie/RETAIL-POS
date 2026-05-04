import { memo, useReducer } from "react";
import { useState, useContext } from "react";
import SideBar from "./sidebar";
import { OrderContext } from "../../App.jsx";
import { ReducerContext } from "../../App.jsx";

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

  let { orders, onChangeOrders } = useContext(OrderContext);
  return (
    <main className="md:grid md:grid-cols-14 h-screen md:gap-0 md:w-full">
      {/*Sidebar*/}
      <aside className=" hidden md:block md:col-span-3 ">
        <SideBar />
      </aside>

      {/*Dashboard*/}
      <section className="   col-span-11   flex flex-col h-screen md:h-full">
        <MenuIcon />
        <section className="md:grid md:grid-cols-12 h-[90vh] md:border-t md:border-gray-200 ">
          {/* product display grid */}
          <section className="  md:col-span-6 lg:col-span-8 h-[90vh]">
            <ProductList />
          </section>
          {/* chart */}
          <section className="  hidden md:block md:col-span-5  lg:col-span-4  h-[90vh]">
            <Cart></Cart>
          </section>
        </section>

        {/* carticon */}
        <button className="absolute bottom-10 right-10 md:hidden">
          <article className="relative">
            <p className="absolute -top-2 -right-2 text-red-800 text-[10px] font-extrabold">
              {orders}
            </p>
            <FaCartShopping
              className="text-blue-800 text-3xl"
              onClick={onShowCart}
            />
          </article>
        </button>
      </section>

      {showCart && <Cart onShowCart={onShowCart} />}
    </main>
  );
}

export default memo(Sale);