"use client";

import AppButton from "@/components/ui/AppButton";
import AppDropDown from "@/components/ui/AppDropDown";
import AppModal from "@/components/ui/AppModal";
import AppUser from "@/components/ui/AppUser";
import { useState } from "react";
import { IoImageOutline } from "react-icons/io5";
import { LuVideo } from "react-icons/lu";
import { RiUserSmileLine } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";

const CreatePost = () => {
  const user = {
    profileImg: "/images/a.png",
    name: "Saleh Ahmed",
    role: "Admin",
  };

  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const dropdownData = ["Friends", "Public"];

  return (
    <div>
      <div className="bg-white p-3 md:p-5 space-y-3 md:space-y-5 rounded-xl">
        <div className="flex items-center gap-4 pt-3">
          <AppUser size="md" onlyImage user={user} />

          <input
            onClick={handleOpenModal}
            className="outline-none w-full bg-dark/5 px-4 py-2 rounded-md"
            type="text"
            placeholder="What’s happening?"
          />
        </div>

        <div className="flex items-center justify-between">
          <button className="max-sm:text-sm flex font-medium items-center gap-1 md:gap-2 min-w-fit">
            <LuVideo className="text-sm md:text-xl" />
            Live Video
          </button>
          <button className="max-sm:text-sm flex font-medium items-center gap-1 md:gap-2 min-w-fit">
            <IoImageOutline className="text-sm md:text-xl" />
            Photo/Video
          </button>
          <button className="max-sm:text-sm flex font-medium items-center gap-1 md:gap-2 min-w-fit">
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

      <AppModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className="bg-white  space-y-5 rounded-xl">
          <div className="flex items-center justify-between px-7 py-5 border-b border-b-dark/20">
            <span className="font-bold">Create a post</span>
            <div className="flex items-center gap-7">
              <span className="font-semibold text-dark/70">Visible for</span>
              <AppDropDown data={dropdownData} />
              <RxCrossCircled
                className="text-2xl cursor-pointer"
                onClick={handleCloseModal}
              />
            </div>
          </div>
          <div className="flex gap-4 pt-3 px-7">
            <div className="">
              <AppUser size="md" onlyImage user={user} />
            </div>
            <textarea
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
            <AppButton className="w-fit px-5 py-1" label="Post" />
          </div>
        </div>
      </AppModal>
    </div>
  );
};

export default CreatePost;
