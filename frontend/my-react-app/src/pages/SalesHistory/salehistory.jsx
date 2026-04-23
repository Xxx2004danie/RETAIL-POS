import { memo } from "react";
import MenuIcon from "../../components/layout/layout";
function SalesHistory() {
  return (
    <section className=" h-screen">
      <MenuIcon />
      <section className="p-4 flex flex-col gap-5 bg-gray-200">
        <header>
          <h1 className=" text-neutral-900 font-bold text-2xl">Sale History</h1>
          <p className="text-[12px] text-gray-600">view past transactions</p>
        </header>
        <button className=" w-full bg-gray-300 flex justify-start rounded-[10px] p-2 text-[11px] font-medium">
          {" "}
          Export{" "}
        </button>

        {/* sales results */}
        <section className="grid grid-cols-2 gap-2">
          <article className=" bg-gray-50 border border-gray-300 p-4 rounded-[10px]">
            <p className="text-[11px] text-gray-500">Today's Sales</p>
            <h1 className="text-neutral-950  font-bold text-2xl">$111.00</h1>
          </article>

          <article className=" bg-gray-50 border border-gray-300 p-4 rounded-[10px]">
            <p className="text-[11px] text-gray-500">Today's Sales</p>
            <h1 className="text-neutral-950  font-bold text-2xl">$111.00</h1>
          </article>

          <article className=" bg-gray-50 border border-gray-300 p-4 rounded-[10px]">
            <p className="text-[11px] text-gray-500">Today's Sales</p>
            <h1 className="text-neutral-950  font-bold text-2xl">$111.00</h1>
          </article>

          <article className=" bg-gray-50 border border-gray-300 p-4 rounded-[10px]">
            <p className="text-[11px] text-gray-500">Today's Sales</p>
            <h1 className="text-neutral-950  font-bold text-2xl">$111.00</h1>
          </article>
        </section>

        {/* sales history */}
        <section className="w-full overflow-x-auto border border-gray-300 rounded-[10px]">
          {/* table header */}
          <article className="flex   gap-11 p-4">
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
        </section>
      </section>
    </section>
  );
}

function TableRows() {
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
      <p>ic</p>
    </article>
  );
}

export default memo(SalesHistory);
