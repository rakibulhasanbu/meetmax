import AnimationWrapper from "@/components/ui/AnimationWrapper";
import { posts } from "../../../../data";
import Post from "./Post";

const MainFeed = () => {
  return (
    <div className="">
      {posts.map((post, i) => (
        <AnimationWrapper key={i} transition={{ duration: i * 0.08 }}>
          <Post post={post} />
        </AnimationWrapper>
      ))}
    </div>
  );
};

export default MainFeed;
