"use client";

import { useGetPostsQuery } from "@/redux/features/post/postApi";
import AnimationWrapper from "@/components/ui/AnimationWrapper";
import Post from "./Post";
import Loading from "@/components/ui/Loading";
const AllPosts = () => {
  const { data, isLoading } = useGetPostsQuery("");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {data?.data?.map((post: any, i: number) => (
        <AnimationWrapper key={i} transition={{ delay: i * 0.08 }}>
          <Post post={post} />
        </AnimationWrapper>
      ))}
    </>
  );
};

export default AllPosts;
