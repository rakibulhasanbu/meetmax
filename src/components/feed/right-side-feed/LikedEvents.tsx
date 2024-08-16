import AppButton from "@/components/ui/AppButton";
import AppUser from "@/components/ui/AppUser";
import { FaInstagram } from "react-icons/fa6";
import { LuGlobe2 } from "react-icons/lu";
import { RiFacebookBoxLine } from "react-icons/ri";
import { SlSocialTwitter } from "react-icons/sl";

const LikedEvents = () => {
  const user = {
    name: "Radovan SkillArena",
    role: "Founder & CEO at Trophy",
    profileImg: "https://randomuser.me/api/portraits/men/19.jpg",
  };
  return (
    <div className="bg-white rounded-2xl">
      <h3 className="flex items-center justify-between px-5 py-3 border-b border-b-dark/20">
        <span className="font-semibold">You Might Like</span>
        <span className="text-primary cursor-pointer text-sm font-medium">
          See All
        </span>
      </h3>
      <div className="p-5">
        <AppUser user={user} />
        <div className="flex items-center justify-center gap-4 py-5 text-2xl">
          <LuGlobe2 />
          <RiFacebookBoxLine />
          <SlSocialTwitter />
          <FaInstagram />
        </div>
        <div className="flex items-center gap-5">
          <AppButton label="Ignore" variant="outlined" />
          <AppButton label="Follow" />
        </div>
      </div>
    </div>
  );
};

export default LikedEvents;
