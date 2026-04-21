import { useState, useEffect } from "react";

function RegisgerPage() {
  let [registerDetails, setRegisterDetails] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // event handler
  function submit() {

  }
  return (
    <section className="w-full h-screen md:p-4 bg-gray-200 flex justify-center items-center ">
      <form
        action=""
        className=" bg-gray-50 w-full lg:w-[30%] h-full md:h-[95vh] p-6 flex flex-col justify-center items-center "
      >
        <h1 className="text-2xl  text-gray-800 font-extrabold leading-relaxed p-5 space-2">
          Registeration
        </h1>

        <section className=" flex flex-col gap-8 w-full">
          <input
            value={registerDetails.userName}
            onChange={(e) =>
              setRegisterDetails({
                ...registerDetails,
                userName: e.target.value,
              })
            }
            type="text"
            placeholder="username"
            className=" p-5 rounded-2xl text-gray-700 outline-0  border border-neutral-400 "
          />
          <input
            value={registerDetails.email}
            onChange={(e) =>
              setRegisterDetails({
                ...registerDetails,
                email: e.target.value,
              })
            }
            type="text"
            placeholder="email"
            className=" p-5 rounded-2xl text-gray-700 outline-0 border border-neutral-400 "
          />
          <input
            value={registerDetails.password}
            onChange={(e) =>
              setRegisterDetails({
                ...registerDetails,
                password: e.target.value,
              })
            }
            type="text"
            placeholder="password"
            className=" p-5 rounded-2xl text-gray-700 outline-0 border border-neutral-400 "
          />
          <input
                value={registerDetails.confirmPassword}
            onChange = {(e) => setRegisterDetails({...registerDetails, confirmPassword: e.target.value})}
            type="text"
            placeholder=" confirm password"
            className=" p-5 rounded-2xl text-gray-700 outline-0 border border-neutral-400 "
          />
        </section>

        <article className="my-3 flex justify-between px-4 w-full">
          <p className="text-[14px]  text-neutral-700">
            {" "}
            Already have account?{" "}
            <a href="" className="  text-purple-700  hover:text-purple-900">
              login
            </a>
          </p>
        </article>
        <button onCick={submit} className="my-6 py-4 px-12 font-bold rounded-[10px] outline-0 bg-gray-600 text-white hover:bg-gray-800 pointer ">
          register
        </button>
      </form>
    </section>
  );
}

export default RegisgerPage;
