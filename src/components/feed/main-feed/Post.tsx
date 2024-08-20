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
import { TPost } from "@/types";
import { useCreateCommentMutation } from "@/redux/features/post/postApi";
import { toast } from "react-toastify";
import { useAppSelector } from "@/redux/hook";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { getTimeAgo } from "@/utils/getTimeAgo";

const Post = ({ post }: { post: TPost }) => {
  const user = useAppSelector(selectCurrentUser);
  const [like, setLike] = useState(false);
  const [viewComment, setViewComment] = useState(false);
  const [comment, setComment] = useState("");
  const [createComment] = useCreateCommentMutation();

  const handleComment = async () => {
    if (!comment) {
      toast.error("Please enter a comment", { toastId: 1 });
      return;
    }

    const submittedData = {
      commentBy: {
        userId: user?.id,
        name: user?.name,
        image: user?.image,
      },
      text: comment,
      postId: post?.id,
    };

    await createComment(submittedData)
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
        setComment("");
      })
      .catch((res) => {
        toast.error(res?.message);
      });
  };

  return (
    <>
      <div className="p-5 rounded-xl bg-white">
        <div className="flex items-center justify-between">
          <AppUser user={post?.postBy} />
          <BsThreeDots className="text-2xl cursor-pointer" />
        </div>
        <p className="text-sm py-[18px]">{post?.description}</p>

        <ImageGallery images={post?.images} />

        <div className="flex items-center justify-between pb-3 pt-[18px]">
          <AppGroupPhoto comments={post?.comments} />
          <p className="text-dark/60 font-medium text-sm flex gap-4 items-center">
            <span>{post?.comments?.length} Comments</span>
            <span>{post?.share} Share</span>
          </p>
        </div>

        {/* this is for like comment share  */}
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
          <button
            onClick={() => setViewComment((prev) => !prev)}
            className="flex items-center gap-2.5"
          >
            <FaRegCommentDots />
            <span>Comments</span>
          </button>
          <button className="flex items-center gap-2.5">
            <RiShareForwardLine />
            <span>Share</span>
          </button>
        </div>

        {/* this is for write comment  */}
        <div className="flex items-center gap-4 pt-3">
          <AppUser size="md" onlyImage user={post?.postBy} />

          <div className="flex w-10/12 rounded-md bg-dark/5 px-4 py-2">
            <input
              className="outline-none bg-transparent w-full pr-2"
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button className="flex items-center gap-4 text-lg">
              <RiFileGifLine />
              <IoImageOutline />
              <RiUserSmileLine />
            </button>
          </div>

          <button
            onClick={handleComment}
            className="size-[38px] aspect-square text-lg flex items-center justify-center rounded bg-primary/10 hover:bg-primary/15 text-primary"
          >
            <VscSend />
          </button>
        </div>
      </div>

      {viewComment &&
        (post?.comments.length > 0 ? (
          <div className="space-y-3 md:space-y-5 pt-3 md:pt-5 pl-3">
            {post?.comments?.map((comment: any, i: number) => (
              <div key={i} className="flex gap-1">
                <AppUser onlyImage size="md" user={comment?.commentBy} />
                <div className="bg-white w-full px-3 md:px-4 py-2 rounded-lg md:rounded-xl">
                  <div className="flex items-center justify-between">
                    <div className="pb-1 md:pb-2">
                      <h3 className="font-medium max-sm:text-sm">
                        {comment?.commentBy?.name}
                      </h3>
                      <p className="text-dark/60 text-xs md:text-sm">
                        {getTimeAgo(comment?.createdAt)}
                      </p>
                    </div>
                    <BsThreeDots className="text-xl md:text-2xl cursor-pointer" />
                  </div>
                  <p>{comment?.text}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center font-medium text-dark/60 bg-white py-2 rounded-lg mt-3 md:mt-5">
            No comments yet. Be the first to comment!
          </div>
        ))}
    </>
  );
};

export default Post;
