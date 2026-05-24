import {
  
  FaMagnifyingGlass,
 
} from "react-icons/fa6";
export default function SearchBar({
  placeholder,
  StateValue,
  handler,
  submit,
}) {
  return (
    <form
      onSubmit={submit}
      action=""
      className="w-full flex  bg-gray-200 items-center  px-4"
    >
      <FaMagnifyingGlass className=" text-[11px] text-gray-500 " />
      <input
        type="text"
        value={StateValue}
        placeholder={placeholder}
        className=" flex-1  bg-transparent outline-0 w-full rounded-[10px] py-4 pl-4 text-[11px] text-gray-800 font-medium"
        onChange={handler}
      />
      <button type="submit">search</button>
    </form>
  );
}
