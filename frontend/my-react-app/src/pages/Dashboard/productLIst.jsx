import { useState, useContext, useEffect, useRef } from "react";
import Button from "../../components/ui/button";
import SearchBar from "../../components/ui/seachbar";
import { ReducerContext } from "../../App.jsx";
import { OrderContext } from "../../App.jsx";

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

function ProductList({ onChangeOrder }) {
  let [state, dispatch] = useContext(ReducerContext);
  let [productName, setProductName] = useState("");

  // ORDERED ITEM ID
  const itemIdRef = useRef(0);

  // STORING THIS STATE PROPERTY ("quantityOfItem")

  // FETCHING PRODUCTS
  useEffect(() => {
    getProducts(`${globalUrl}/products`);
  }, []);

  // GET ALL PRODUCT
  function getProducts(url) {
    getAllProduct(url).then((data) => {
      console.log(data);
      dispatch({
        type: "show_products",
        products: data.data,
      });
    });
  }

  //HANDLER FOR UPDATING PRODUCTNAME STATE
  function change(e) {
    setProductName(e.target.value);
  }

  // fetching a single product
  function getSingleProduct(e) {
    e.preventDefault();
    getAllProduct(`${globalUrl}/products`)
      .then((product) => {
        dispatch({
          type: "show_products",
          products: product.data,
        });
      })
      .catch((error) => {
        console.log(globalUrl);
        console.log("error getting product from the client", error);
      });
  }

  // STORING ALL PRODUCT CATEGORY VALUE IN SET
  let category = [...new Set(state.products.map((p) => p.category))];

  // product category button style
  let btnSyles =
    "hover:bg-blue-200 text-white hover:text-neutral-950   font-bold py-2  px-4 rounded-3xl bg-blue-800  outline-0 cursor-pointer";
  // product nav button style
  let navBtnStyle =
    " flex gap-2 bg-white w-20 shrink-0 text-neutral-900 rounded-[10px] p-2  border-2 border-gray-200 hover:border-blue-200 cursor-pointer hover:bg-blue-100";

  //CART
  let itemId = 0;
  return (
    <section className="flex flex-col   bg-gray-300 w-full  h-[90vh] p-3 ">
      {/* product analysis */}
      <nav className=" flex flex-row  gap-3    overflow-x-auto  p-2 shrink-0">
        <Button className={navBtnStyle}>Receipt</Button>
        <Button className={navBtnStyle}> Refunds</Button>
        <Button className={navBtnStyle}>Reports</Button>
      </nav>

      {/* search bar */}
      <SearchBar
        placeholder="search product name"
        StateValue={productName}
        handler={change}
        submit={getSingleProduct}
      />

      {/* porduct categories */}
      <article className="flex flex-row  gap-x-1 p-3  shrink-0 md: w-full overflow-x-auto">
        <Button
          className={btnSyles}
          onGet={() => getProducts(`${globalUrl}/products`)}
        >
          all
        </Button>
        {
          // DISPLAYING CATEGORY VALUES STORED IN SET
          category.map((values) => {
            return (
              <button
                key={values}
                className={btnSyles}
                onClick={() =>
                  getProducts(`${globalUrl}/products?category=${values}`)
                }
              >
                {values}
              </button>
            );
          })
        }
      </article>

      {/* Box 3 - Product Buttons Grid */}

      <ul className="  w-full flex-1  items-start  justify-center overflow-y-auto grid grid-cols-2 md:grid-cols-3 p-6 gap-1  ">
        {state.products.map((product) => {
          return (
            <li
              key={product._id}
              onClick={() => {
                dispatch({
                  type: "add_orders",
                  orders: {
                    id: ++itemIdRef.current,
                    name: product.name,
                    price: product.price,
                    itemQuantity: 1,
                    totalCost: product.price,
                  },
                });
              }}
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

export default ProductList;
