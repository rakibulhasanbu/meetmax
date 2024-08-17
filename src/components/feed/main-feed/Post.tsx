"use client";

import { BsThreeDots } from "react-icons/bs";
import {
  RiFileGifLine,
  RiHeart2Fill,
  RiHeart2Line,
  RiShareForwardLine,
  RiUserSmileLine,
} from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa6";
import { VscSend } from "react-icons/vsc";
import { IoImageOutline } from "react-icons/io5";
import ImageGallery from "./ImageGallery";
import AppUser from "@/components/ui/AppUser";
import AppGroupPhoto from "@/components/ui/AppGroupPhoto";
import { useState } from "react";
import { cn } from "@/utils/cn";

type TPost = {
  post: {
    comments: number;
    share: number;
    description: string;
    user: {
      name: string;
      profileImg: string;
      role: string;
    };
    createdAt: string;
    images: {
      url: string;
    }[];
  };
};

const Post = ({
  post: { user, images, description, comments, share },
}: TPost) => {
  const [like, setLike] = useState(false);
  return (
    <div className="p-5 rounded-xl bg-white">
      <div className="flex items-center justify-between">
        <AppUser user={user} />
        <BsThreeDots className="text-2xl cursor-pointer" />
      </div>
      <p className="text-sm py-[18px]">{description}</p>

      <ImageGallery images={images} />

      <div className="flex items-center justify-between pb-3 pt-[18px]">
        <AppGroupPhoto images={images} />
        <p className="text-dark/60 font-medium text-sm flex gap-4 items-center">
          <span>{comments} Comments</span>
          <span>{share} Share</span>
        </p>
      </div>

      <div
        className={
          "border-t border-b border-dark/20 flex items-center justify-between py-2.5"
        }
      >
        <button
          onClick={() => setLike((prev) => !prev)}
          className={cn("flex items-center gap-2.5", like && "text-primary")}
        >
          {like ? <RiHeart2Fill /> : <RiHeart2Line />}
          <span>Like</span>
        </button>
        <button className="flex items-center gap-2.5">
          <FaRegCommentDots />
          <span>Comments</span>
        </button>
        <button className="flex items-center gap-2.5">
          <RiShareForwardLine />
          <span>Share</span>
        </button>
      </div>

      <div className="flex items-center gap-4 pt-3">
        <AppUser size="md" onlyImage user={user} />

        <div className="flex w-10/12 rounded-md bg-dark/5 px-4 py-2">
          <input
            className="outline-none bg-transparent w-full pr-2"
            type="text"
            placeholder="Write a comment..."
          />
          <button className="flex items-center gap-4 text-lg">
            <RiFileGifLine />
            <IoImageOutline />
            <RiUserSmileLine />
          </button>
        </div>

        <button className="size-[38px] aspect-square text-lg flex items-center justify-center rounded bg-primary/10 hover:bg-primary/15 text-primary">
          <VscSend />
        </button>
      </div>
    </div>
  );
};

export default Post;
