import RightSIdebar from "@/components/feed/RightSIdebar";
import Sidebar from "@/components/feed/Sidebar";

const page = () => {
  return (
    <div className="grid grid-cols-[16%_65%_19%] h-screen">
      <div className="fixed w-[16%] h-[calc(100dvh-78px)] overflow-y-auto">
        <Sidebar />
      </div>

      <div className="col-start-2 overflow-y-auto h-screen rounded-t-2xl">
        <div className="bg-dark/5 min-h-screen">
          {/* Your scrollable content here */}
        </div>
      </div>

      <div className="fixed right-0 w-[19%] h-[calc(100dvh-78px)]">
        <RightSIdebar />
      </div>
    </div>
  );
};

export default page;
