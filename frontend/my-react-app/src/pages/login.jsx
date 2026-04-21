import { useState ,useEffect} from "react";

function LoginPage() {
  let [loginDetails, setLoginDetails] = useState({
    email : "",
    password : "",
  });  

  

 function submit(e) {
   e.preventDefault();
   console.log(loginDetails);
  }
  return (
    <section className="w-full h-screen  bg-gray-200 flex justify-center items-center ">
      <form
        onSubmit={submit}
        action=""
        className=" bg-gray-50 w-full lg:w-[30%] h-full md:h-[80vh] p-6 flex flex-col justify-center items-center "
      >
        <h1 className="text-2xl  text-gray-800 font-extrabold leading-relaxed p-5 space-2">
          Login
        </h1>

        <section className=" flex flex-col gap-8 w-full">
          <input
          value = {loginDetails.email} 
            onChange={(e) => setLoginDetails({...loginDetails, email : e.target.value})}
            type="text"
            placeholder="email"
            className=" p-5 rounded-2xl text-gray-700 outline-0  border border-neutral-400 "
          />
          <input
             value = {loginDetails.password} 
            onChange={(e) => setLoginDetails({...loginDetails, password : e.target.value})}
            type="text"
            placeholder="password"
            className=" p-5 rounded-2xl text-gray-700 outline-0 border border-neutral-400 "
          />
        </section>

        <article className="my-3 flex justify-between px-4 w-full">
          <p className="text-[14px]  text-neutral-700">
            {" "}
           
            <a href="" className="  text-purple-700  hover:text-purple-900">
              register now
            </a>
          </p>
          <a
            href=""
            className="text-[14px]  text-purple-700 hover:text-purple-900"
          >
            forget password
          </a>
        </article>
        <button type = "submit" className="my-6 py-4 px-12 font-bold rounded-[10px] outline-0 bg-gray-600 text-white hover:bg-gray-800 pointer ">
          login
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
