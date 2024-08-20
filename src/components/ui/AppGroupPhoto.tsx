import Image from "next/image";
import Link from "next/link";

const AppGroupPhoto = ({ images }: { images: { url: string }[] }) => {
  return (
    <div className="flex -space-x-2.5 rtl:space-x-reverse">
      {images?.map((img, i) => (
        <div key={i} className="w-[22px]">
          <Image
            className="size-[22px] rounded-full"
            src={img.url}
            alt="banner image"
            width={22}
            height={22}
          />
        </div>
      ))}

      <Link
        className="flex items-center justify-center text-center size-[22px] text-xs font-medium text-white bg-dark rounded-full hover:bg-dark/90"
        href="#"
      >
        +{images?.length}
      </Link>
    </div>
  );
};

export default AppGroupPhoto;
