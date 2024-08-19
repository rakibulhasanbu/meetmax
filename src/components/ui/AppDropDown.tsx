import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import AnimationWrapper from "./AnimationWrapper";
import { cn } from "@/utils/cn";

const AppDropDown = ({
  data,
  color,
  width,
  padding,
  shadow,
}: {
  data: string[];
  color?: "blue" | "dark";
  width?: string;
  padding?: string;
  shadow?: boolean;
}) => {
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
        className={cn(
          "flex items-center justify-between text-sm cursor-pointer min-w-fit gap-1 px-3 py-1 rounded-md  font-medium",
          color === "blue" ? "text-primary bg-dark/5" : "text-dark/60 bg-white",
          width,
          padding,
          shadow && "drop-shadow-lg md:drop-shadow-xl"
        )}
      >
        {value}{" "}
        <IoIosArrowDown
          className={cn(
            "text-lg text-dark",
            open && "rotate-180 transition-all duration-500"
          )}
        />
      </button>

      {open && (
        <AnimationWrapper
          className={cn(
            "flex flex-col items-start text-sm text-dark/60 absolute left-0 border border-grey w-full px-2 py-1 overflow-hidden duration-200 z-50",
            shadow && "drop-shadow-lg md:drop-shadow-xl bg-white "
          )}
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
