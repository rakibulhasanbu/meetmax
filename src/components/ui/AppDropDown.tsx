import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import AnimationWrapper from "./AnimationWrapper";

const AppDropDown = ({ data }: { data: string[] }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(data[0]);

  const handleBlur = () => {
    setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  return (
    <div className="relative">
      <button
        onBlur={handleBlur}
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center cursor-pointer w-24 gap-1 px-3 py-1 rounded-md bg-dark/5 text-primary font-medium"
      >
        {value} <IoIosArrowDown className="text-lg text-dark" />
      </button>

      {open && (
        <AnimationWrapper
          className="bg-white absolute left-0 border border-grey w-full px-2 py-1 overflow-hidden duration-200 z-50"
          transition={{ duration: 0.2 }}
        >
          {data?.map((item, i) => (
            <button
              onClick={() => setValue(item)}
              className="hover:text-primary"
              key={i}
            >
              {item}
            </button>
          ))}
        </AnimationWrapper>
      )}
    </div>
  );
};

export default AppDropDown;
