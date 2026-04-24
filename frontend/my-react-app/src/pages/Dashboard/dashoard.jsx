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

function Sales({ showCart, onShowCart }) {
  let [orders, setOrders] = useState(0);

  // to change the number of orders
  function onChangeOrder() {
    setOrders((prev) => prev + 1);
  }

  if (showCart) {
    return <Cart onShowCart={onShowCart} />;
  }

  return (
    <section className=" relative  rounded-xl shadow-md w-full  mx-auto h-screen bg-red-300 ">
      {/* Icon Section */}
      <MenuIcon />
      {/* cart */}
      <section className=" lg:hidden fixed right-4 bottom-10">
        <h1>
          <FaCartShopping
            className="text-blue-800 text-2xl relative lg:hidden"
            onClick={onShowCart}
          />
          <p className="absolute -top-2 -right-2 text-red-700 text-[10px] font-extrabold">
            {orders}
          </p>
        </h1>
      </section>

      <section className="w-full md:grid md:grid-cols-2 bg-green-500 h-[90%]">
        {/* product display grid section */}
        <ProductList onChangeOrder={onChangeOrder} />
        {/* cart section */}
        <section className="hidden lg: relative w-[40%]">
          <Cart />
        </section>
      </section>
    </section>
  );
}


export default memo(Sales);
