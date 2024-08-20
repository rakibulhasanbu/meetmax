"use client";

import AppButton from "@/components/ui/AppButton";
import AppDrawer from "@/components/ui/AppDrawer";
import AppDropDown from "@/components/ui/AppDropDown";
import AppModal from "@/components/ui/AppModal";
import AppUser from "@/components/ui/AppUser";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useCreatePostMutation } from "@/redux/features/post/postApi";
import { useAppSelector } from "@/redux/hook";
import { TTokenUser } from "@/types";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { IoImageOutline } from "react-icons/io5";
import { LuVideo } from "react-icons/lu";
import { RiUserSmileLine } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import { toast } from "react-toastify";

const CreatePost = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [description, setDescription] = useState("");

  const user = useAppSelector(selectCurrentUser);

  const [createPost, { isLoading }] = useCreatePostMutation();

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const dropdownData = ["Friends", "Public"];

  const handlePost = async () => {
    if (description === "") {
      return toast.error("Please write post and try again", { toastId: 1 });
    }

    const submittedData = {
      postBy: {
        userId: user?.id,
        name: user?.name,
        image: user?.image,
      },
      description,
    };

    await createPost(submittedData)
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
        setDescription("");
        handleCloseModal();
      })
      .catch((res) => {
        toast.error(res?.data?.message);
      });
  };

  return (
    <div>
      <div className="bg-white p-3 md:p-5 space-y-3 md:space-y-5 rounded-xl">
        <div className="flex items-center gap-4 pt-3">
          <AppUser size="md" onlyImage user={user as TTokenUser} />

          <input
            onClick={handleOpenModal}
            className="outline-none w-full bg-dark/5 px-4 py-2 rounded-md"
            type="text"
            placeholder="What’s happening?"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={handleOpenModal}
            className="max-sm:text-sm flex font-medium items-center gap-1 md:gap-2 min-w-fit"
          >
            <LuVideo className="text-sm md:text-xl" />
            Live Video
          </button>
          <button
            onClick={handleOpenModal}
            className="max-sm:text-sm flex font-medium items-center gap-1 md:gap-2 min-w-fit"
          >
            <IoImageOutline className="text-sm md:text-xl" />
            Photo/Video
          </button>
          <button
            onClick={handleOpenModal}
            className="max-sm:text-sm flex font-medium items-center gap-1 md:gap-2 min-w-fit"
          >
            <RiUserSmileLine className="text-sm md:text-xl" />
            Feeling
          </button>
          <AppButton
            onClick={handleOpenModal}
            className="w-fit px-5 py-1"
            label="Post"
          />
        </div>
      </div>

      {window.innerWidth > 668 ? (
        <AppModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <div className="bg-white  space-y-5 rounded-xl">
            <div className="flex items-center justify-between px-7 py-5 border-b border-b-dark/20">
              <span className="font-bold">Create a post</span>
              <div className="flex items-center gap-7">
                <span className="font-semibold text-dark/70">Visible for</span>
                <AppDropDown color="blue" data={dropdownData} />
                <RxCrossCircled
                  className="text-2xl cursor-pointer"
                  onClick={handleCloseModal}
                />
              </div>
            </div>
            <div className="flex gap-4 pt-3 px-7">
              <div className="">
                <AppUser size="md" onlyImage user={user as TTokenUser} />
              </div>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                className="outline-none w-full bg-dark/5 px-4 py-2 rounded-md resize-none"
                rows={6}
                placeholder="What’s happening?"
              />
            </div>

            <div className="flex items-center justify-between px-7 pb-7">
              <button className="flex font-medium items-center gap-2 min-w-fit">
                <LuVideo className="text-xl" />
                Live Video
              </button>
              <button className="flex font-medium items-center gap-2 min-w-fit">
                <IoImageOutline className="text-xl" />
                Photo/Video
              </button>
              <button className="flex font-medium items-center gap-2 min-w-fit">
                <RiUserSmileLine className="text-xl" />
                Feeling
              </button>
              <AppButton
                disabled={isLoading}
                onClick={handlePost}
                className="w-fit px-5 py-1"
                label="Post"
              />
            </div>
          </div>
        </AppModal>
      ) : (
        modalOpen && (
          <AppDrawer isOpen={modalOpen}>
            <div className="bg-white  space-y-3">
              <div className="flex items-center justify-between px-4 py-5 border-b border-b-dark/20">
                <div className="flex items-center gap-1">
                  <FaArrowLeft onClick={handleCloseModal} />
                  <span className="font-medium text-sm">Create a post</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-sm text-dark/70">
                    Visible for
                  </span>
                  <AppDropDown color="blue" data={dropdownData} />
                </div>
              </div>
              <div className="flex gap-4 pt-3 px-7">
                <div className="">
                  <AppUser size="md" onlyImage user={user as TTokenUser} />
                </div>
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  className="outline-none w-full bg-dark/5 px-4 py-2 rounded-md resize-none"
                  rows={6}
                  placeholder="What’s happening?"
                />
              </div>

              <div className="flex flex-col gap-3 px-4 pb-7">
                <button className="flex font-medium items-center gap-2 min-w-fit">
                  <LuVideo className="text-xl" />
                  Live Video
                </button>
                <button className="flex font-medium items-center gap-2 min-w-fit">
                  <IoImageOutline className="text-xl" />
                  Photo/Video
                </button>
                <button className="flex font-medium items-center gap-2 min-w-fit">
                  <RiUserSmileLine className="text-xl" />
                  Feeling
                </button>
                <AppButton
                  disabled={isLoading}
                  onClick={handlePost}
                  className="px-5"
                  label="Post"
                />
              </div>
            </div>
          </AppDrawer>
        )
      )}
    </div>
  );
};

export default CreatePost;
