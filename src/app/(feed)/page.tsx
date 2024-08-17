import MainFeed from "@/components/feed/main-feed/MainFeed";
import FeedRightEvents from "@/components/feed/right-side-feed/FeedRightEvents";
import RightSIdebar from "@/components/feed/RightSIdebar";
import Sidebar from "@/components/feed/Sidebar";

const page = () => {
  return (
    <div className="grid grid-cols-[16%_65%_19%]">
      <div className="fixed w-[16%] h-[calc(100dvh-78px)] overflow-y-auto">
        <Sidebar />
      </div>

      <div className="col-start-2 overflow-y-auto rounded-t-2xl">
        <div className="bg-dark/5 min-h-screen flex gap-8 pt-8 px-8">
          <div className="w-[62%]">
            <MainFeed />
          </div>
          <div className="w-[38%]">
            <FeedRightEvents />
          </div>
        </div>
      </div>

      <div className="fixed right-0 w-[19%] h-[calc(100dvh-78px)]">
        <RightSIdebar />
      </div>
    </div>
  );
};

export default page;
