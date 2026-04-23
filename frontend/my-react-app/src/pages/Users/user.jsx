import { memo } from "react";
import MenuIcon from "../../components/layout/layout";
function User() {
  return (
    <section className=" h-screen bg-gray-100 ">
      <MenuIcon />
      <section className=" flex flex-col gap-1 bg-gray-100 min-w-full p-4">
        <h1 className=" font-bold text-2xl ">User Management</h1>
        <p className="text-gray-500 text-[11px]">
          Manage staff accounts and roles
        </p>
        <button className="w-full bg-blue-800 text-white px-5 py-2 rounded-[10px] my-2">
          + add User
        </button>

        {/* Users */}
        <section className="grid grid-cols-1 gap-2">
          <UserDetails />
        </section>
      </section>
    </section>
  );
}

function UserDetails() {
  return (
    <article className=" flex flex-col gap-2 p-5 bg-white rounded-[10px] h-auto">
      <header className="flex justify-between items-center">
        <p className="bg-blue-200 text-blue-900 font-extrabold rounded-[50px] px-3 py-2">
          JS
        </p>
        <button className="bg-blue-200 text-blue-900 text-[11px] font-bold  px-1 rounded-[7px] ">
          Active
        </button>
      </header>

      <section>
        <h1 className="text-neutral-900 text-[14px] font-medium ">
          John Smith
        </h1>
        <p className="text-gray-500 text-[11px]">john@store.com</p>
        <p className="text-blue-800 text-[10px] font-bold p-1">admin</p>
      </section>

      <section className="  flex border-t border-gray-300">
        <p>icon</p>
        <p>icon</p>
      </section>
    </article>
  );
}
export default memo(User);
