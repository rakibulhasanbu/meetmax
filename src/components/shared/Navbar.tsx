import Image from "next/image";
import Logo from "../ui/Logo";
import AppInput from "../ui/AppInput";
import { IoSearch } from "react-icons/io5";
import AppSearchInput from "../ui/AppSearchInput";

const Navbar = () => {
  const user = {
    profileImg: "/images/a.png",
    name: "Saleh Ahmed",
    role: "Admin",
  };

  return (
    <div className="h-[78px] py-4 px-12 flex items-center justify-between">
      <div className="flex gap-44 w-6/12">
        <Logo />
        <AppSearchInput placeholder="Search for something here..." />
      </div>
      <div className="flex items-center gap-5">
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
    </div>
  );
};

export default Navbar;
