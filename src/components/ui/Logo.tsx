import Image from "next/image";
import Link from "next/link";

type TLogo = {
  isLink?: boolean;
  imageClassName?: string;
  parentClassName?: string;
  variant?: "sm" | "md";
};

const Logo = ({
  isLink = true,
  imageClassName,
  parentClassName,
  variant,
}: TLogo) => {
  return isLink ? (
    <Link
      href={"/"}
      className={`flex gap-1 md:gap-2.5 items-center select-none ${parentClassName}`}
    >
      <Image
        src={"/images/logo.png"}
        alt="logo"
        width={28}
        height={28}
        className={`object-cover ${
          variant === "md"
            ? "max-sm:w-7"
            : variant === "sm"
            ? "max-sm:w-5"
            : "max-sm:w-5"
        } ${imageClassName}`}
      />
      <h2
        className={`text-lg md:text-3xl font-bold  ${
          variant === "md"
            ? "max-sm:text-2xl text-2xl"
            : variant === "sm"
            ? "max-sm:text-base"
            : ""
        }`}
      >
        Meetmax
      </h2>
    </Link>
  ) : (
    <div className={`flex items-center select-none ${parentClassName}`}>
      <Image
        src={"/images/logo.png"}
        alt="logo"
        width={28}
        height={28}
        className={`object-cover ${imageClassName}`}
      />
      <h2 className="text-3xl font-semibold">Meetmax</h2>
    </div>
  );
};

export default Logo;
