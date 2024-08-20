"use client";

import Image from "next/image";
import Logo from "../ui/Logo";
import AppSearchInput from "../ui/AppSearchInput";
import { RiChatSmileLine } from "react-icons/ri";
import { useAppSelector } from "@/redux/hook";
import {
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import AppDropDown from "../ui/AppDropDown";

const Navbar = ({
  searchHave,
  haveDropDown,
  logoHave = false,
}: {
  searchHave?: boolean;
  logoHave?: boolean;
  haveDropDown?: boolean;
}) => {
  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector(useCurrentToken);
  return (
    <div className="md:h-[78px] h-[62px] py-3.5 md:py-4 px-4 md:px-12 flex items-center justify-between">
      {token && user?.email && (
        <Image
          width={50}
          height={50}
          alt="avatar"
          src={user.image}
          className={
            "md:hidden aspect-square rounded-xl object-cover size-8  md:size-[42px]"
          }
        />
      )}

      <div className="flex md:gap-44 md:w-6/12">
        <Logo parentClassName={logoHave ? "" : "max-sm:hidden"} />
        {searchHave && (
          <AppSearchInput placeholder="Search for something here..." />
        )}
      </div>

      {token && user?.email && (
        <div className="max-sm:hidden flex items-center  gap-5">
          <h3 className="font-medium">{user.name}</h3>
          <Image
            width={50}
            height={50}
            alt="avatar"
            src={user.image}
            className={
              "aspect-square rounded-xl object-cover size-8  md:size-[42px]"
            }
          />
        </div>
      )}
      {token && user?.email && (
        <RiChatSmileLine className="md:hidden text-2xl" />
      )}
      {haveDropDown && (
        <AppDropDown
          shadow
          padding="py-1 md:py-2"
          width="w-32 md:w-36"
          data={["English (UK)", "Bangla", "Arabic"]}
        />
      )}
    </div>
  );
};

export default Navbar;
