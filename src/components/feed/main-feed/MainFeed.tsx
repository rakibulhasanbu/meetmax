import CreatePost from "./CreatePost";
import AllPosts from "./AllPosts";

const MainFeed = () => {
  return (
    <div className="space-y-8 pb-8">
      <CreatePost />
      <AllPosts />
    </div>
  );
};

export default MainFeed;
