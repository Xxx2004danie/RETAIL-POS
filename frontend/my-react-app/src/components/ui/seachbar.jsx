import {
  
  FaMagnifyingGlass,
 
} from "react-icons/fa6";
export default function SearchBar({ placeholder }) {
  return (
    <form action="" className="w-full relative px-2">
      <FaMagnifyingGlass className="absolute text-[11px] text-gray-500 top-1/2 left-3 -translate-y-1/2" />
      <input
        type="text"
        placeholder={placeholder}
        className=" w-full bg-gray-50 rounded-[10px] py-2 pl-7 text-[11px] text-gray-400 font-medium"
      />
    </form>
  );
}
