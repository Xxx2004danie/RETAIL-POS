import { memo } from "react";
import MenuIcon from "../../components/layout/layout";
import SideBar from "../Dashboard/sidebar";
import Sale from "../Dashboard/dashboard";
import SalesList from "./saleslist";

export default function SalesHistory() {
 
  return (
    <main className="lg:grid lg:grid-cols-14 md:h-screen lg:gap-0">
      {/*Sidebar*/}
      <aside className=" hidden lg:block lg:col-span-3 ">
        <SideBar />
      </aside>

      {/* user management */}
      <section className="  col-span-11   flex flex-col h-screen md:h-full">
        {/* userList */}
        <SalesList />
      </section>
    </main>
  );
}
