import Image from "next/image";
import Logo from "../ui/Logo";

const AuthWrapper = ({
  children,
  src,
  title,
  subTitle,
}: Readonly<{
  children: React.ReactNode;
  src: string;
  title: string;
  subTitle: string;
}>) => {
  return (
    <section className="flex h-screen overflow-hidden">
      <div className="max-sm:w-full w-1/2 2xl:w-3/5 h-full px-8 md:px-20 2xl:px-40 py-8 2xl:py-10">
        <Logo variant="md" />
        <div className="py-8 2xl:pt-20">
          <h1 className="text-3xl 2xl:text-4xl pb-1 leading-10 2xl:leading-[52px]">
            {title}
          </h1>
          <p className="text-sm 2xl:text-base font-light text-dark-grey md:max-w-[70%] 2xl:max-w-[50%] pb-6 2xl:pb-12">
            {subTitle}
          </p>
          {children}
        </div>
      </div>
      <div className="max-sm:hidden w-1/2 2xl:w-2/5 bg-black h-full select-none">
        <Image
          src={src}
          width={1200}
          height={1000}
          className="w-full h-full"
          alt="auth"
        />
      </div>
    </section>
  );
};

export default AuthWrapper;
