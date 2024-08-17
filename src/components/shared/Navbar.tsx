import Image from "next/image";
import Logo from "../ui/Logo";
import AppInput from "../ui/AppInput";
import { IoSearch } from "react-icons/io5";
import AppSearchInput from "../ui/AppSearchInput";
import { RiChatSmileLine } from "react-icons/ri";

const Navbar = () => {
  const user = {
    profileImg: "/images/a.png",
    name: "Saleh Ahmed",
    role: "Admin",
  };

  return (
    <div className="md:h-[78px] h-[62px] py-3.5 md:py-4 px-4 md:px-12 flex items-center justify-between">
      <Image
        width={50}
        height={50}
        alt="avatar"
        src={user.profileImg}
        className={
          "md:hidden aspect-square rounded-xl object-cover size-8  md:size-[42px]"
        }
      />
      <div className="flex md:gap-44 md:w-6/12">
        <Logo parentClassName="max-sm:hidden" />
        <AppSearchInput placeholder="Search for something here..." />
      </div>
      <div className="max-sm:hidden flex items-center  gap-5">
        <h3 className="font-medium">{user.name}</h3>
        <Image
          width={50}
          height={50}
          alt="avatar"
          src={user.profileImg}
          className={
            "aspect-square rounded-xl object-cover size-8  md:size-[42px]"
          }
        />
      </div>
      <RiChatSmileLine className="md:hidden text-2xl" />
    </div>
  );
};

export default Navbar;
