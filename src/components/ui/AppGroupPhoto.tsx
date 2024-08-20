import Image from "next/image";
import Link from "next/link";

const AppGroupPhoto = ({ comments }: { comments: any[] }) => {
  return (
    <div className="flex -space-x-2.5 rtl:space-x-reverse">
      {(comments?.length > 3 ? comments?.slice(0, 3) : comments)?.map(
        (comment: any, i: number) => (
          <div key={i} className="w-[22px]">
            <Image
              className="size-[22px] rounded-full"
              src={comment?.commentBy?.image}
              alt="banner image"
              width={22}
              height={22}
            />
          </div>
        )
      )}

      {comments?.length > 0 && (
        <Link
          className="flex items-center justify-center text-center size-[22px] text-xs font-medium text-white bg-dark rounded-full hover:bg-dark/90"
          href="#"
        >
          +{comments?.length}
        </Link>
      )}
    </div>
  );
};

export default AppGroupPhoto;
