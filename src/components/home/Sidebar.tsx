import Link from "next/link";
import { FiLogOut, FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuGlobe2, LuUsers } from "react-icons/lu";
import { RiChatSmileLine, RiNotification3Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
  const navLinks = [
    {
      href: "/",
      label: "Feed",
      icon: <RxDashboard />,
    },
    {
      href: "/community",
      label: "My community",
      icon: <LuUsers />,
    },
    {
      href: "/messages",
      label: "Messages",
      icon: <RiChatSmileLine />,
    },
    {
      href: "/notification",
      label: "Notification",
      icon: <RiNotification3Line />,
    },
    {
      href: "/explore",
      label: "Explore",
      icon: <LuGlobe2 />,
    },
    {
      href: "/profile",
      label: "Profile",
      icon: <FiUser />,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      href: "/",
      label: "Logout",
      icon: <FiLogOut />,
    },
  ];
  return (
    <div className="py-2.5 px-5 space-y-2.5">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="flex items-center gap-5 rounded-lg text-dark hover:text-white font-bold px-5 py-3.5 hover:bg-dark"
        >
          {link.icon}
          <span>{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
