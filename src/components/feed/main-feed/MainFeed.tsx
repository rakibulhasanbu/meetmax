import AnimationWrapper from "@/components/ui/AnimationWrapper";
import { posts } from "../../../../data";
import Post from "./Post";
import CreatePost from "./CreatePost";

const MainFeed = () => {
  return (
    <div className="space-y-8 pb-8">
      <CreatePost />
      {posts.map((post, i) => (
        <AnimationWrapper key={i} transition={{ delay: i * 0.08 }}>
          <Post post={post} />
        </AnimationWrapper>
      ))}
    </div>
  );
};

export default MainFeed;
