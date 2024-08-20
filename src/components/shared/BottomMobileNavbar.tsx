"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSettingsOutline } from "react-icons/io5";
import { LuGlobe2, LuUsers } from "react-icons/lu";
import { RiNotification3Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

const BottomMobileNavbar = () => {
  const pathname = usePathname();
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
      href: "#Explore",
      label: "Explore",
      icon: <LuGlobe2 />,
    },
    {
      href: "#Notification",
      label: "Notification",
      icon: <RiNotification3Line />,
    },
    {
      href: "#Settings",
      label: "Settings",
      icon: <IoSettingsOutline />,
    },
  ];
  return (
    <div className="fixed bottom-0 w-full bg-white pt-2.5 px-4 flex justify-between">
      {navLinks?.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={cn(
            "flex flex-col items-center gap-1 text-dark hover:text-primary",
            pathname === link.href && "font-medium"
          )}
        >
          {link.icon}
          <span className="text-xs pb-1.5">{link.label}</span>
          {pathname === link.href && (
            <hr className="border rounded-xl w-full" />
          )}
        </Link>
      ))}
    </div>
  );
};

export default BottomMobileNavbar;
