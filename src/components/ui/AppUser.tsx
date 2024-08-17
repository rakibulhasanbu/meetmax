import { cn } from "@/utils/cn";
import Image from "next/image";
import { LuPlus } from "react-icons/lu";

type TAppUser = {
  user: {
    profileImg: string;
    name: string;
    role?: string;
  };
  createdAt?: string;
  size?: "md" | "lg";
  onlyImage?: boolean;
  onlyName?: boolean;
  activeUser?: boolean;
  myProfile?: boolean;
};

const AppUser = ({
  user,
  createdAt,
  size,
  onlyImage = false,
  onlyName = false,
  activeUser = false,
  myProfile = false,
}: TAppUser) => {
  return !activeUser ? (
    <div className="flex items-center gap-5">
      <Image
        width={50}
        height={50}
        alt="avatar"
        src={user.profileImg}
        className={cn(
          "aspect-square rounded-full object-cover",
          size === "lg" && "size-8  md:size-[50px] md:min-w-[50px]",
          size === "md" && "size-8  md:size-[40px] md:min-w-[40px]"
        )}
      />
      {!onlyImage && (
        <div className="">
          <h3 className="font-medium">{user.name}</h3>
          {!onlyName && (
            <p className="text-dark/60 text-sm">
              {createdAt ? createdAt : user.role}
            </p>
          )}
        </div>
      )}
    </div>
  ) : (
    <div className="flex justify-center flex-col gap-3">
      <div className="w-[50px] relative">
        <Image
          width={50}
          height={50}
          alt="avatar"
          src={user.profileImg}
          className={
            "aspect-square rounded-full pointer-events-none border-2 border-primary object-cover size-8  md:size-[50px]"
          }
        />
        {myProfile && (
          <div className="absolute -bottom-2 left-0 flex items-center justify-center  w-full">
            <LuPlus className=" text-dark bg-white rounded-full p-0.5" />
          </div>
        )}
      </div>
      {!onlyImage && (
        <div className="">
          <h3 className="font-medium text-center">{user.name.split(" ")[0]}</h3>
          {!onlyName && (
            <p className="text-dark/60">{createdAt ? createdAt : user.role}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AppUser;
