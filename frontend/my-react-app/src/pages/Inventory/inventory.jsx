import MenuIcon from "../../components/layout/layout.jsx";
export default function Inventory() {
     return (
       <section className="h-screen">
    
         <MenuIcon/>
           <section className="flex flex-col gap-4 p-4 bg-gray-200">
             <header>
               <h1 className=" text-neutral-900 font-bold text-2xl">
                 Inventory
               </h1>
               <p className="text-[12px] text-gray-600">Manage product stock</p>
             </header>

             <button className="w-full bg-blue-800 text-white flex justify-start px-5 py-2 rounded-[10px] my-2">
               + add product
             </button>
             <input
               type="text"
               placeholder="Search inventory"
               className=" w-full bg-gray-50 rounded-[10px] p-2 text-[11px] text-gray-400 font-medium"
             />

             {/*inventory list */}
             <section className="w-full overflow-x-auto border border-gray-300 rounded-[10px]">
               {/* table header */}
               <article className="flex   gap-10 p-4">
                 <h1 className="shrink-0">Product</h1>
                 <h1 className="shrink-0">Category</h1>
                 <h1 className="shrink-0">Stock</h1>
                 <h1 className="shrink-0">Price</h1>
                 <h1 className="shrink-0">Actions</h1>
               </article>
               {/* table rows */}
               <Rows />
               <Rows />
               <Rows />
            
               <Rows />
             </section>
           </section>
         </section>
       
     );
}

function Rows() {
      return (
        <article className="bg-white flex items-center gap-12 p-4 border-t border-gray-300">
          <h1 className="font-bold text-neutral-950  ">cocacola</h1>
          <p className="bg-blue-300  text-blue-600 px-2 rounded-[7px]">cash</p>
          <p>2</p>
          <h2 className="text-neutral-950 font-bold">$4.50</h2>
          <article className="flex">
            <p>i</p>
            <p>i</p>
          </article>
        </article>
      );
    };
