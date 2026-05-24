import MenuIcon from "../../components/layout/layout";
import UserModalForm from "../../modal/adduserModal";
import { ReducerContext } from "../../App";
import { useReducer, useContext, useEffect } from "react";
import { globalUrl } from "../../constant/port.jsx";
import { getAllUsers, deleteUser, createUser } from "../../service/userApi.jsx";

export default function Userlist({ userModal, onChangeModal }) {
  let [state, dispatch] = useContext(ReducerContext);

  //GETTING ALL USERS
  useEffect(() => {
    getAllUsers(`${globalUrl}/users`)
      .then((users) => {
        dispatch({
          type: "show_users",
          users: users.data.users,
        });
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }, []);

  return (
    <section className="relative h-screen bg-gray-100 ">
      <MenuIcon />
      <section className=" flex flex-col gap-1 md:gap-3 lg:h-[90vh]  min-w-full p-4">
        <h1 className=" font-bold text-2xl ">User Management</h1>
        <p className="text-gray-500 text-[11px]">
          Manage staff accounts and roles
        </p>
        <button
          onClick={onChangeModal}
          className="w-full bg-blue-800 text-white px-5 py-2 rounded-[10px] my-2 md:max-w-lg"
        >
          + add User
        </button>

        {/* Users */}
        <ul className="grid grid-cols-1 lg:flex-1 overflow-y-auto md:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {state.users.map((user) => {
            return (
              <li
                key={user._id}
                className=" flex flex-col gap-2 md:gap-3 p-5 border border-gray-300 bg-white rounded-[10px] h-auto "
              >
                <header className="flex justify-between items-center">
                  <p className="bg-blue-200 text-blue-900 font-extrabold rounded-[50px] px-3 py-2">
                    {user.phoneNumber}
                  </p>
                  <button className="bg-blue-200 text-blue-900 text-[11px] font-bold  px-1 rounded-[7px] "></button>
                </header>

                <section>
                  <h1 className="text-neutral-900 text-[14px] font-medium ">
                    {user.name}
                  </h1>
                  <p className="text-gray-500 text-[11px]">{user.email}</p>
                  <p className="text-blue-800 text-[10px] font-bold p-1">
                    {user.role}
                  </p>
                </section>

                <section className="  flex border-t border-gray-300">
                  <p>icon</p>
                  <p>icon</p>
                </section>
              </li>
            );
          })}
        </ul>
      </section>
      {/* user Modal */}
      {userModal && <UserModalForm onChangeModal={onChangeModal} />}
    </section>
  );
}

function UserDetails() {
  return (
    <article className=" flex flex-col gap-2 md:gap-3 p-5 border border-gray-300 bg-white rounded-[10px] h-auto ">
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
