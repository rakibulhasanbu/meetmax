import { IoSearch } from "react-icons/io5";

type TAppSearchInput = {
  placeholder?: string;
};

const AppSearchInput = ({ placeholder }: TAppSearchInput) => {
  return (
    <div className="flex py-1.5 md:py-2.5 items-center px-4 border placeholder:text-dark/80 border-dark/40 rounded-md md:rounded-10 w-full">
      <IoSearch className="text-xl" />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full h-full border-transparent outline-none px-2"
      />
    </div>
  );
};

export default AppSearchInput;
