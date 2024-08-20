"use client";

import { useGetPostsQuery } from "@/redux/features/post/postApi";
import AnimationWrapper from "@/components/ui/AnimationWrapper";
import Post from "./Post";
import Loading from "@/components/ui/Loading";
import EmptyPost from "./EmptyPost";
import { TPost } from "@/types";
const AllPosts = () => {
  const { data, isLoading } = useGetPostsQuery("");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {!data?.data ? (
        <EmptyPost />
      ) : (
        data?.data?.map((post: TPost, i: number) => (
          <AnimationWrapper key={i} transition={{ delay: i * 0.08 }}>
            <Post post={post} />
          </AnimationWrapper>
        ))
      )}
    </>
  );
};

export default AllPosts;
