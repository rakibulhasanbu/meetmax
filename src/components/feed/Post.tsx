import { BsThreeDots } from "react-icons/bs";
import AppUser from "../ui/AppUser";
import Image from "next/image";
import AppGroupPhoto from "../ui/AppGroupPhoto";
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

type TPost = {
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

const Post = ({ user, images, description, comments, share }: TPost) => {
  return (
    <div className="p-[18px] rounded-2xl">
      <div className="flex items-center justify-between">
        <AppUser user={user} />
        <BsThreeDots />
      </div>
      <p className="text-sm py-[18px]">{description}</p>

      {/* {images.length === 1 ? (
        <Image
          src={images[0].url}
          height={270}
          width={480}
          className="w-full rounded-2xl h-[268px] object-cover"
          alt="image"
        />
      ) : (
        images.length === 3 && (
          <div className="grid grid-cols-2 gap-3">
            <Image
              src={images[0].url}
              height={270}
              width={480}
              className="w-full rounded-2xl h-[268px] object-cover"
              alt="image"
            />
            <div className="grid grid-cols-2">
              <Image
                src={images[1].url}
                height={270}
                width={480}
                className="w-full rounded-2xl h-[268px] object-cover"
                alt="image"
              />
              <Image
                src={images[2].url}
                height={270}
                width={480}
                className="w-full rounded-2xl h-[268px] object-cover"
                alt="image"
              />
            </div>
          </div>
        )
      )} */}
      <ImageGallery images={images} />

      <div className="flex items-center justify-between pt-[18px]">
        <AppGroupPhoto images={images} />
        <p className="text-dark/60 font-medium text-sm flex gap-4 items-center">
          <span>{comments} Comments</span>
          <span>{share} Share</span>
        </p>
      </div>

      <div className="border-t border-b border-dark/20 flex items-center justify-between py-2.5">
        <button className="flex items-center gap-2.5">
          <RiHeart2Line />
          {/* <RiHeart2Fill /> */}
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

      <div className="flex items-center gap-4">
        <AppUser onlyImage user={user} />

        <div className="flex rounded-[10px] px-4 py-3">
          <input type="text" placeholder="Write a comment..." />
          <button className="flex items-center gap-4">
            <RiFileGifLine />
            <IoImageOutline />
            <RiUserSmileLine />
          </button>
        </div>

        <button className="size-[38px] flex items-center justify-center rounded bg-primary/80 text-primary">
          <VscSend />
        </button>
      </div>
    </div>
  );
};

export default Post;
