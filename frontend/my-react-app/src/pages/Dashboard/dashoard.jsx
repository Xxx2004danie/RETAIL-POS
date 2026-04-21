import { useState } from "react"
import SideBar from "./sidebar";
import Button from "../../components/ui/button";
import MenuIcon from "../../components/layout/layout.jsx";
import { FaEnvelope, } from "react-icons/fa6";
import Cart from "./cart.jsx";



function Sales({ showCart, onShowCart }) {
  let [orders, setOrders] = useState(0)

  // to change the number of orders
  function onChangeOrder() {
    setOrders((prev) => prev + 1)
  }

  // product category button style
  let btnSyles =
    "bg-gray-200 text-neutral-900  font-bold py-2  px-4 rounded-3xl hover:bg-blue-800 hover:text-white outline-0 cursor-pointer";
  // product nav button style
  let navBtnStyle =
    "bg-white w-20 shrink-0 text-neutral-900 rounded-[10px] p-2  border-2 border-gray-200 hover:border-blue-200 cursor-pointer hover:bg-blue-100";
  
if (showCart) {
       return(<Cart onShowCart={onShowCart} />)
  } 
  
  return (
    <section className=" relative bg-red-100  rounded-xl shadow-md w-full max-w-md mx-auto h-screen">
      {/* Icon Section */}
      <MenuIcon />
      {/* cart */}
      <h1 className="fixed right-2 bottom-10">
        <FaEnvelope className = "text-blue-800 text-2xl" onClick={onShowCart} />
        <p className= "text-blue-700 text-[10px]">{orders}</p>
      </h1>

      {/* Content Section */}
      <section className="flex flex-col  flex-1  bg-gray-100 w-full h-[90%] p-3 ">
        {/* Box 1 */}
        <nav className=" flex flex-row  gap-3     overflow-x-auto  p-2 shrink-0">
          <Button className={navBtnStyle}>Receipt</Button>
        </nav>

        {/* porduct categories */}
        <article className="flex flex-row p-3  shrink-0 ">
          <Button className={btnSyles}>all</Button>
        </article>

        {/* Box 3 - Product Buttons Grid */}

        <section className="w-full   ">
          <section className="grid grid-cols-2 gap-2   ">
            <Buttonb onChangeOrder = {onChangeOrder} />
          </section>
        </section>
      </section>
    </section>
  );
}

function Buttonb({onChangeOrder}) {
  return (
    <button onClick={onChangeOrder } className=" flex flex-col  items-center  bg-white h-25  text-neutral-900  border-2 border-gray-200 hover:border-blue-200 rounded-lg p-2 text-left hover:shadow transition">
      <p className="text-sm ">Product B</p>
      <h1 className="text-lg font-bold ">$15</h1>
    </button>
  );
}

export default Sales;