"use client";

import { useGetPostsQuery } from "@/redux/features/post/postApi";
import BottomMobileNavbar from "../shared/BottomMobileNavbar";
import ActiveUsers from "./ActiveUsers";
import CreatePost from "./main-feed/CreatePost";
import Post from "./main-feed/Post";
import BirthDayCard from "./right-side-feed/BirthdayCard";
import RecentEvent from "./right-side-feed/RecentEvent";
import Loading from "../ui/Loading";
import EmptyPost from "./main-feed/EmptyPost";
import AnimationWrapper from "../ui/AnimationWrapper";

const MobileFeed = () => {
  const { data, isLoading } = useGetPostsQuery("");

  if (isLoading) {
    return <Loading />;
  }

  let slicedArray;
  if (data?.data?.length > 2) {
    slicedArray = data?.data?.slice(2);
  }
  return (
    <div className="md:hidden bg-dark/5 space-y-2 pb-14">
      <ActiveUsers />

      <CreatePost />

      {!data?.data ? <EmptyPost /> : <Post post={data?.data[0]} />}

      <RecentEvent />

      {!data?.data ? (
        <EmptyPost />
      ) : (
        data?.data[1] && <Post post={data?.data[1]} />
      )}

      <BirthDayCard />

      <BottomMobileNavbar />

      {!data?.data ? (
        <EmptyPost />
      ) : (
        slicedArray &&
        slicedArray.map((post: any, i: number) => (
          <AnimationWrapper key={i} transition={{ delay: i * 0.08 }}>
            <Post post={post} />
          </AnimationWrapper>
        ))
      )}
    </div>
  );
};

export default MobileFeed;
