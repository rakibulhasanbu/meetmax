"use client";

import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { users } from "../../../data";
import AppUser from "../ui/AppUser";
import { useEffect, useRef, useState } from "react";
import AnimationWrapper from "../ui/AnimationWrapper";
import { useAppSelector } from "@/redux/hook";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { TTokenUser } from "@/types";

const ActiveUsers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const user = useAppSelector(selectCurrentUser);

  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        setContentWidth(containerRef.current.scrollWidth);
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    updateWidths();
    window.addEventListener("resize", updateWidths);

    return () => {
      window.removeEventListener("resize", updateWidths);
    };
  }, []);

  const totalUsers = [user && user, ...users];

  return (
    <div className="max-sm:bg-white max-sm:px-5 max-sm:py-4 md:py-[30px] w-full relative overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex gap-2.5 md:gap-5 hide-scrollbar"
        drag="x"
        // dragConstraints={{ left: -300, right: 0 }}
        dragConstraints={{ left: -(contentWidth - containerWidth), right: 0 }}
        dragElastic={0.1}
        whileTap={{ cursor: "grabbing" }}
      >
        {totalUsers?.map((user, i) => (
          <AnimationWrapper key={i} transition={{ delay: 0.08 * i }}>
            <AppUser
              myProfile={i === 0 && true}
              activeUser
              size="md"
              user={user as TTokenUser}
            />
          </AnimationWrapper>
        ))}
      </motion.div>

      <FaArrowRight className="absolute -right-0 top-1/3 bg-white rounded-full p-0.5 cursor-pointer" />
    </div>
  );
};

export default ActiveUsers;
