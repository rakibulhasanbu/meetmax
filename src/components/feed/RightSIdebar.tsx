import { BsThreeDots } from "react-icons/bs";
import { users } from "../../../data";
import AppUser from "../ui/AppUser";
import { GoDotFill } from "react-icons/go";
import AppSearchInput from "../ui/AppSearchInput";
import ActiveUsers from "./ActiveUsers";
import AnimationWrapper from "../ui/AnimationWrapper";

const RightSIdebar = () => {
  return (
    <div className="px-5 pb-5">
      <AppSearchInput placeholder="Search Friends!" />

      <ActiveUsers />
      <div className="flex items-center justify-between pr-2 pb-5">
        <h3 className="font-bold text-lg">Friends</h3>
        <BsThreeDots className="text-2xl cursor-pointer" />
      </div>
      <div className="space-y-5 overflow-y-auto h-[calc(100vh-314px)] pr-2 pb-4">
        {users?.map((user, i) => (
          <AnimationWrapper
            transition={{ delay: i * 0.08 }}
            key={i}
            className="flex cursor-pointer items-center justify-between"
          >
            <AppUser size="md" user={user} />
            <GoDotFill className="text-green" />
          </AnimationWrapper>
        ))}
      </div>
    </div>
  );
};

export default RightSIdebar;
