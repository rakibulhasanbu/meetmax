"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLogOut, FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuGlobe2, LuUsers } from "react-icons/lu";
import { RiChatSmileLine, RiNotification3Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import AnimationWrapper from "../ui/AnimationWrapper";
import { useAppDispatch } from "@/redux/hook";
import { logOut } from "@/redux/features/auth/authSlice";

const Sidebar = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const navLinks = [
    {
      href: "/",
      label: "Feed",
      icon: <RxDashboard />,
    },
    {
      href: "#community",
      label: "My community",
      icon: <LuUsers />,
    },
    {
      href: "#Messages",
      label: "Messages",
      icon: <RiChatSmileLine />,
    },
    {
      href: "#Notification",
      label: "Notification",
      icon: <RiNotification3Line />,
    },
    {
      href: "#Explore",
      label: "Explore",
      icon: <LuGlobe2 />,
    },
    {
      href: "#Profile",
      label: "Profile",
      icon: <FiUser />,
    },
    {
      href: "#Settings",
      label: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      href: "#Logout",
      label: "Logout",
      icon: <FiLogOut />,
    },
  ];
  return (
    <div className="py-2.5 px-5 space-y-2.5">
      {navLinks.map((link, i) => (
        <AnimationWrapper key={link.href} transition={{ delay: i * 0.08 }}>
          {link.label === "Logout" ? (
            <button
              onClick={() => dispatch(logOut())}
              className={cn(
                "flex w-full items-center gap-5 rounded-lg text-dark hover:text-white font-medium px-5 py-3.5 hover:bg-dark",
                pathname === link.href && "bg-dark text-white"
              )}
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.label}</span>
            </button>
          ) : (
            <Link
              href={link.href}
              className={cn(
                "flex items-center gap-5 rounded-lg text-dark hover:text-white font-medium px-5 py-3.5 hover:bg-dark",
                pathname === link.href && "bg-dark text-white"
              )}
            >
              <span className="text-lg">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          )}
        </AnimationWrapper>
      ))}
    </div>
  );
};

export default Sidebar;
