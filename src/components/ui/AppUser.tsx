import { cn } from "@/utils/cn";
import Image from "next/image";

type TAppUser = {
  user: {
    profileImg: string;
    name: string;
    role: string;
  };
  createdAt?: string;
  size?: "md" | "lg";
  onlyImage?: boolean;
};

const AppUser = ({ user, createdAt, size, onlyImage }: TAppUser) => {
  return (
    <div className="flex items-center gap-5">
      <Image
        width={50}
        height={50}
        alt="avatar"
        src={user.profileImg}
        className={cn(
          "aspect-square rounded-full object-cover",
          size === "lg" && "size-8  md:size-[50px]",
          size === "md" && "size-8  md:size-[40px]"
        )}
      />
      {onlyImage && (
        <div className="">
          <h3 className="font-medium">{user.name}</h3>
          <p className="text-dark/60">{createdAt ? createdAt : user.role}</p>
        </div>
      )}
    </div>
  );
};

export default AppUser;
