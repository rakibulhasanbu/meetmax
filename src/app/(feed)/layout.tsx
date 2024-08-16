import Navbar from "@/components/shared/Navbar";
import PrivateLayout from "@/components/shared/PrivetLayout";

const FeedLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100dvh-78px)] overflow-x-hidden overflow-y-auto">
        {children}
      </div>
    </>
  );
};

export default FeedLayout;
