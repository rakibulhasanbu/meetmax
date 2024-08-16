import Image from "next/image";
import Link from "next/link";

const AppGroupPhoto = ({ images }: { images: { url: string }[] }) => {
  return (
    <div className="flex -space-x-3 rtl:space-x-reverse">
      {images.map((img, i) => (
        <Image
          key={i}
          className="max-2xl:size-[22px]"
          src={img.url}
          alt="banner image"
          width={22}
          height={22}
        />
      ))}

      <Link
        className="flex items-center justify-center text-center max-2xl:size-10 2xl:size-[22px] text-xs font-medium text-white bg-dark rounded-full hover:bg-dark/90"
        href="#"
      >
        +9
      </Link>
    </div>
  );
};

export default AppGroupPhoto;
