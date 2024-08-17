import Image from "next/image";
import { VscSend } from "react-icons/vsc";

const BirthDayCard = () => {
  return (
    <div className="bg-white rounded-xl">
      <h3 className="flex items-center justify-between px-5 py-3 border-b border-b-dark/20">
        <span className="font-semibold">Birthdays</span>
        <span className="text-primary cursor-pointer text-sm font-medium">
          See All
        </span>
      </h3>
      <div className="p-5">
        <div className="flex items-center gap-5">
          <Image
            width={50}
            height={50}
            alt="avatar"
            src={"/images/a.png"}
            className={
              "aspect-square rounded-md object-cover size-8  md:size-[50px]"
            }
          />

          <div className="font-medium">
            <h3>Edilson De Carvalho </h3>

            <p className="text-dark/60 text-sm">Birthday today</p>
          </div>
        </div>
        <div className="flex items-center w-full gap-3 pb-5 pt-3">
          <input
            type="text"
            placeholder="Write on his inbox"
            className="bg-dark/5 rounded-md w-11/12 px-4 py-2 outline-none"
          />
          <button className="size-[38px] flex items-center justify-center rounded bg-primary/10 text-primary">
            <VscSend />
          </button>
        </div>
        <div className="bg-dark/5 p-3 rounded-xl flex gap-5">
          <div className="min-w-10">
            <Image
              width={40}
              height={40}
              className="w-full aspect-square"
              alt="event image"
              src={"/images/b.png"}
            />
          </div>
          <div>
            <h4 className="text-sm font-semibold">Upcoming birthdays</h4>
            <p className="text-sm font-medium line-clamp-2 text-dark/60">
              See 12 others have upcoming birthdays
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthDayCard;
