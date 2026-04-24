import { useState } from "react";
import { memo } from "react";
import UserModalForm from "../../modal/adduserModal.jsx";
import SideBar from "../Dashboard/sidebar.jsx";
import Userlist from "./userlist.jsx";

export default function Users({ showCart, onShowCart }) {
  let [userModal, setUserModal] = useState(false);

  // to toggle userModal
  function onChangeModal() {
    setUserModal((prev) => !prev);
  }

  return (
    <main className="lg:grid lg:grid-cols-14 md:h-screen lg:gap-0">
      {/*Sidebar*/}
      <aside className=" hidden lg:block lg:col-span-3 ">
        <SideBar />
      </aside>

      {/* user management */}
      <section className="  col-span-11   flex flex-col h-screen md:h-full">
        {/* userList */}
        <Userlist userModal={userModal} onChangeModal={onChangeModal} />
      </section>
    </main>
  );
}
