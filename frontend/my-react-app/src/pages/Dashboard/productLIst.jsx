import { useContext, useEffect, useReducer } from "react";
import Button from "../../components/ui/button";
import SearchBar from "../../components/ui/seachbar";
import { ReducerContext } from "../../App.jsx";
import { OrderContext } from "../../App";

// API CALL
import { getAllProduct, createProduct } from "../../service/productApi.jsx";

import {
  FaCartShopping,
  FaRegCreditCard,
  FaMoneyBillWave,
  FaMobileScreen,
  FaRegTrashCan,
} from "react-icons/fa6";

//GLOBAL URL
import { globalUrl } from "../../constant/port";

export default function ProductList({ onChangeOrder }) {
  let { orders, onChangeOrders } = useContext(OrderContext);
  let [state, dispatch] = useContext(ReducerContext);

  // FETCHING PRODUCTS
  useEffect(() => {
    getAllProduct(`${globalUrl}/products`).then((data) => {
      console.log(data);
      dispatch({
        type: "show_products",
        products: data.data,
      });
    });
  }, []);

  // product category button style
  let btnSyles =
    "hover:bg-blue-200 text-white hover:text-neutral-950   font-bold py-2  px-4 rounded-3xl bg-blue-800  outline-0 cursor-pointer";
  // product nav button style
  let navBtnStyle =
    " flex gap-2 bg-white w-20 shrink-0 text-neutral-900 rounded-[10px] p-2  border-2 border-gray-200 hover:border-blue-200 cursor-pointer hover:bg-blue-100";

  return (
    <section className="flex flex-col   bg-gray-300 w-full  h-[90vh] p-3 ">
      {/* product analysis */}
      <nav className=" flex flex-row  gap-3    overflow-x-auto  p-2 shrink-0">
        <Button className={navBtnStyle}>Receipt</Button>
        <Button className={navBtnStyle}> Refunds</Button>
        <Button className={navBtnStyle}>Reports</Button>
      </nav>

      {/* search bar */}
      <SearchBar placeholder="search product name" />

      {/* porduct categories */}
      <article className="flex flex-row p-3  shrink-0 ">
        <Button className={btnSyles}>all</Button>
      </article>

      {/* Box 3 - Product Buttons Grid */}

      <ul className="  w-full flex-1 overflow-y-auto grid grid-cols-2 md:grid-cols-3    p-1 gap-1">
        {state.products.map((product) => {
          return (
            <li
              C
              onClick={onChangeOrders}
              className=" flex flex-col  items-center justify-center  bg-gray-50 h-25 md:h-auto  text-neutral-900  border-2 border-white hover:border-blue-200 rounded-lg p-2 text-left hover:shadow transition"
            >
              <p className="text-sm text-blue-400 ">{product.name}</p>
              <h1 className="text-lg font-bold ">{product.price}</h1>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
