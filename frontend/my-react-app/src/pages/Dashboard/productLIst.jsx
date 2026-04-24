import Button from "../../components/ui/button"
import SearchBar from "../../components/ui/seachbar";
import {
  FaCartShopping,
  FaRegCreditCard,
  FaMoneyBillWave,
  FaMobileScreen,
  FaRegTrashCan,
} from "react-icons/fa6";
export default function ProductList({onChangeOrder}) {

    
      // product category button style
      let btnSyles =
        "hover:bg-blue-200 text-white hover:text-neutral-950   font-bold py-2  px-4 rounded-3xl bg-blue-800  outline-0 cursor-pointer";
      // product nav button style
      let navBtnStyle =
        " flex gap-2 bg-white w-20 shrink-0 text-neutral-900 rounded-[10px] p-2  border-2 border-gray-200 hover:border-blue-200 cursor-pointer hover:bg-blue-100";
    
    return (
                <section className="flex flex-col  flex-1  bg-gray-200 w-full  h-full p-3 ">
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
        
                  <section className="w-full   ">
                    <section className="grid grid-cols-2 gap-2   ">
                      <Buttonb onChangeOrder={onChangeOrder} />
                    </section>
                  </section>
                </section>
    )
}

function Buttonb({ onChangeOrder }) {
  return (
    <button
      onClick={onChangeOrder}
      className=" flex flex-col  items-center justify-center  bg-white h-25  text-neutral-900  border-2 border-gray-200 hover:border-blue-200 rounded-lg p-2 text-left hover:shadow transition"
    >
      <p className="text-sm text-blue-400 ">Product B</p>
      <h1 className="text-lg font-bold ">$15</h1>
    </button>
  );
}
