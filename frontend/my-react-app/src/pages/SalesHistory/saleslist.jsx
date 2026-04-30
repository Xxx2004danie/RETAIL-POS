import { useState, useContext, createContext } from "react";
import MenuIcon from "../../components/layout/layout";
import showReceiptModal from "../../modal/showReceiptModal";
import ReceiptModal from "../../modal/showReceiptModal";
import { TbEyeFilled } from "react-icons/tb";

export let ReceiptContext = createContext();
export default function SalesList() {
  let [showReceipt, setShowReceipt] = useState(false);

  // toggle showReceipt

  function onShow() {
    setShowReceipt(true);
  }

  function onClose() {
    setShowReceipt(false);
  }
  return (
    <ReceiptContext.Provider value={{ showReceipt, onShow, onClose }}>
      <section className=" h-screen  relative">
        <MenuIcon />
        <section className="p-4 flex flex-col gap-5 bg-gray-200 h-[90vh]">
          <header>
            <h1 className=" text-neutral-900 font-bold text-2xl">
              Sale History
            </h1>
            <p className="text-[12px] text-gray-600">view past transactions</p>
          </header>
          <button className=" w-full bg-gray-300 flex justify-start rounded-[10px] p-2 text-[11px] font-medium">
            {" "}
            Export{" "}
          </button>

          {/* sales results */}
          <section className="flex flex-col lg:flex-row lg:h-[65vh] mb-2 gap-2">
            <section className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:w-[20%]">
              <article className=" bg-gray-50 border border-gray-300 p-4 rounded-[10px]">
                <p className="text-[11px] text-gray-500">Today's Revenue</p>
                <h1 className="text-neutral-950  font-bold text-2xl">
                  $111.00
                </h1>
              </article>

              <article className=" bg-gray-50 border border-gray-300 p-4 rounded-[10px]">
                <p className="text-[11px] text-gray-500">profit</p>
                <h1 className="text-neutral-950  font-bold text-2xl">$39</h1>
              </article>

              <article className=" bg-gray-50 border border-gray-300 p-4 rounded-[10px]">
                <p className="text-[11px] text-gray-500">No. orders made</p>
                <h1 className="text-neutral-950  font-bold text-2xl">10</h1>
              </article>

              <article className=" bg-gray-50 border border-gray-300 p-4 rounded-[10px]">
                <p className="text-[11px] text-gray-500">NO. product sold</p>
                <h1 className="text-neutral-950  font-bold text-2xl">20</h1>
              </article>
            </section>

            {/* sales history */}
            <section className="w-full flex-1 overflow-x-auto  overflow-y-auto bg-white border border-gray-200 rounded-[10px] lg:w-[80%]">
              {/* table header */}
              <article className="flex  text-white font-bold  bg-gray-700  gap-11 p-4">
                <h1 className="shrink-0">Order Id</h1>
                <h1 className="shrink-0">Date</h1>
                <h1 className="shrink-0">Items</h1>
                <h1 className="shrink-0">Total</h1>
                <h1 className="shrink-0">Payment</h1>
                <h1 className="shrink-0">Cashier</h1>
                <h1 className="shrink-0">View</h1>
              </article>

              {/* table rows */}
              <TableRows />
              <TableRows />
              <TableRows />
              <TableRows />
              <TableRows />
              <TableRows />
              <TableRows />
              <TableRows />
              <TableRows />
            </section>
          </section>
        </section>

        {/* Receipt */}
        {showReceipt && <ReceiptModal />}
      </section>
    </ReceiptContext.Provider>
  );
}

function TableRows() {
  let { showReceipt, onShow, onClose } = useContext(ReceiptContext);
  return (
    <article className="bg-white flex items-center gap-14 px-4 py-2 border-t border-gray-300">
      <h1 className="font-bold text-blue-800  ">ORD-1</h1>
      <article className="leading-tight">
        <p>2026</p>
        <p>04-1</p>
        <p>10:12</p>
      </article>

      <p>2</p>
      <h2 className="text-neutral-950 font-bold">$4.50</h2>
      <button className="bg-blue-300  text-blue-600 px-2 rounded-[7px]">
        cash
      </button>
      <h3 className="text-neutral-800 font-medium">sarah</h3>
      <p onClick={onShow}>
        <TbEyeFilled />
      </p>
    </article>
  );
}
