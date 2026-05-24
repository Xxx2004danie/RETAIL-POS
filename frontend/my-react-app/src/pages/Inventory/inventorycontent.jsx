import { useState, useContext, useReducer, useEffect } from "react";
import SearchBar from "../../components/ui/seachbar.jsx";
import ProductModalForm from "../../modal/addproductModal.jsx";
import { FaXmark, FaRegTrashCan, FaPencil } from "react-icons/fa6";

import { ReducerContext } from "../../app.jsx";
import { getAllProduct, createProduct } from "../../service/productApi.jsx";
import { globalUrl } from "../../constant/port.jsx";

export default function InventoryUi() {
  let [showModal, setShowModal] = useState(false);
  let [state, dispatch] = useContext(ReducerContext);

  // toggle inventory modal
  function onShow() {
    setShowModal(true);
  }

  function onClose() {
    setShowModal(false);
  }

  // GETTING ALL PRODUCT
  useEffect(() => {
    getAllProduct(`${globalUrl}/products`).then((value) => {
      dispatch({
        type: "show_products",
        data: value.data,
      });
    });
  }, []);

  return (
    <section className="flex flex-col  relative gap-4 p-4 bg-gray-200 h-[90vh]">
      <header>
        <h1 className=" text-neutral-900 font-bold text-2xl">Inventory</h1>
        <p className="text-[12px] text-gray-600">Manage product stock</p>
      </header>

      <button
        onClick={onShow}
        className="w-full bg-blue-800 text-white flex justify-start px-5 py-2 rounded-[10px] my-2"
      >
        + add product
      </button>

      {/* search bar */}
      <SearchBar placeholder="search inventory" />

      {/*inventory list */}
      <section className="w-full flex-1 overflow-y-auto  overflow-x-auto border border-gray-300 rounded-[10px]">
        {/* table header */}
        <article className="flex  justify-around gap-10 p-4 w-full">
          <h1 className="shrink-0">Product</h1>
          <h1 className="shrink-0">Category</h1>
          <h1 className="shrink-0">Stock</h1>
          <h1 className="shrink-0">Price</h1>
          <h1 className="shrink-0">Actions</h1>
        </article>
        {/* table rows */}
        {state.products.map((product) => {
          return (
            <article
              key={product._id}
              className="bg-white w-full flex items-center justify-around gap-12 p-4 border-t border-gray-300"
            >
              <h1 className="font-bold text-neutral-950  ">{product.name}</h1>
              <p className="bg-blue-300  text-blue-600 px-2 rounded-[7px]">
                cash
              </p>
              <p>{product.stock}</p>
              <h2 className="text-neutral-950 font-bold">{`$${product.price}`}</h2>
              <article className="flex gap-3">
                <FaRegTrashCan />
                <FaPencil />
              </article>
            </article>
          );
        })}
      </section>

      {showModal && <ProductModalForm onClose={onClose} />}
    </section>
  );
}
