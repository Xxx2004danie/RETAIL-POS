import { memo } from "react";
import { useState } from "react";
import {
  FaXmark,
  FaCartShopping,
  FaRegCreditCard,
  FaMoneyBillWave,
  FaMobileScreen,
  FaRegTrashCan,
  FaMagnifyingGlass,
} from "react-icons/fa6";

function Cart({ onShowCart }) {
  let [isAdd, setIsAdd] = useState(true);
  return (
    <section className=" z-10 absolute md:static top-0 right-0 h-screen md:h-[90%]  lg:h-full w-full flex flex-col items-start">
      <header className="w-full flex flex-row justify-between p-4 h-[10%]">
        <h1 className="text-neutral-900 font-extrabold">current order</h1>
        <p className="md:hidden">
          {" "}
          <FaXmark onClick={onShowCart} />
        </p>
      </header>
      {isAdd ? (
        <section className="flex-1  w-full h-[90%] ">
          <ul className="h-[60%] px-5 overflow-auto border-y border-gray-200">
            <List />

            <List />
            <List />
            <List />
          </ul>

          <section className="p-4 flex flex-col gap-1  h-[40%]">
            <article className="flex justify-between">
              <p className="text-gray-400 text-[11px]">Subtotal</p>
              <p className="text-neutral-900 text-[12px]">$1</p>
            </article>

            <article className="flex justify-between">
              <p className="text-gray-400 text-[11px]">Tax(80%)</p>
              <p className="text-neutral-900 text-[12px]">$0.30</p>
            </article>

            <section className="flex justify-between">
              <p className="text-neutral-950 font-bold">Total</p>
              <p className="text-blue-800 font-extrabold ">$13.5%</p>
            </section>

            <button className="bg-blue-800 hover:bg-blue-500 text-white w-full  p-3  my-1.5 rounded-[10px]">
              charge %500
            </button>

            {/*payment method */}
            <form action="" className="w-full flex justify-between">
              <button className="hover:bg-gray-200 bg-gray-300 text-neutral-900 text-[15px] py-2 px-6 rounded-[10px]">
                <FaMoneyBillWave />
              </button>
              <button className="hover:bg-gray-200 bg-gray-300 text-neutral-900 text-[15px] py-2 px-6 rounded-[10px]">
                <FaMobileScreen />
              </button>
              <button className="hover:bg-gray-200 bg-gray-300 text-neutral-900 text-[15px] py-2 px-6 rounded-[10px]">
                <FaRegCreditCard />
              </button>
            </form>
          </section>
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center gap-2 flex-1  w-full">
          <p className="bg-gray">icon</p>
          <p className="text-gray-600">No items yet</p>
          <p className="text-gray-400 text-[11px]"> tap a product to add it</p>
        </section>
      )}
    </section>
  );
}

function List() {
  return (
    <li className="  flex justify-between items-center py-4  md:py-0 px-0 border-b border-gray-200">
      <article className="flex items-center gap-4  md:2">
        <article className="flex flex-col">
          <h1 className="text-neutral-900 font-bold">latte</h1>
          <p className="text-gray-600 text-[10px]">$100</p>
        </article>
      </article>
      <button className="bg-gray-300 py-1 w-15 rounded-[10px] text-[10px] flex flex-row justify-around">
        <p>-</p>
        <p>1</p>
        <p>+</p>
      </button>
      <article className="flex items-center gap-3">
        <p className="font-medium text-[12px]">$30</p>
        <p>
          <FaRegTrashCan />
        </p>
      </article>
    </li>
  );
}

export default memo(Cart);
