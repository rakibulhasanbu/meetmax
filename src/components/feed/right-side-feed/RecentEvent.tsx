import AnimationWrapper from "@/components/ui/AnimationWrapper";
import AppGroupPhoto from "@/components/ui/AppGroupPhoto";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

const RecentEvent = () => {
  const events = [
    {
      title: "Graduation Ceremony",
      description: "The graduation ceremony is also sometimes called...",
      image: "/images/e1.png",
      seen: 8,
      users: [
        {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
      ],
    },
    {
      title: "Photography Ideas",
      description:
        "Reflections. Reflections work because they can create...Reflections. Reflections work because they can create...",
      image: "/images/e2.png",
      seen: 11,
      users: [
        {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
      ],
    },
  ];
  return (
    <div className="bg-white rounded-2xl">
      <h3 className="flex items-center justify-between px-5 py-3 border-b border-b-dark/20">
        <span className="font-semibold">Recent Event</span>
        <BsThreeDots className="text-2xl cursor-pointer" />
      </h3>
      <div className="p-5 space-y-5">
        {events.map((event, i) => (
          <AnimationWrapper
            key={i}
            transition={{ duration: i * 0.08 }}
            className="bg-dark/5 p-3 rounded-xl"
          >
            <div className="flex gap-5">
              <div className="min-w-10">
                <Image
                  width={40}
                  height={40}
                  className="w-full aspect-square"
                  alt="event image"
                  src={event.image}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold">{event.title}</h4>
                <p className="text-sm font-medium line-clamp-2 text-dark/60">
                  {event.description}
                </p>
              </div>
            </div>
            <hr className="text-dark/20 my-2.5" />
            <div className="flex text-sm font-medium items-center justify-between">
              <span>{event.seen} seen</span>
              <AppGroupPhoto images={event.users} />
            </div>
          </AnimationWrapper>
        ))}
      </div>
    </div>
  );
};

export default RecentEvent;
