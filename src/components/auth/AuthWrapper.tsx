import Logo from "../ui/Logo";

const AuthWrapper = ({
  children,
  title,
  subTitle,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  subTitle: string;
}>) => {
  return (
    <section className="flex flex-col items-center justify-center h-[calc(100vh-78px)] overflow-hidden max-sm:w-full">
      <h1 className="text-3xl font-bold 2xl:text-4xl pb-1 leading-10 2xl:leading-[52px]">
        {title}
      </h1>
      <p className="text-sm 2xl:text-base font-medium md:max-w-[70%] 2xl:max-w-[50%] pb-6 2xl:pb-9">
        {subTitle}
      </p>
      <div className="bg-white app-shadow md:w-2/5 p-5 md:p-10 rounded-2xl">
        {children}
      </div>
    </section>
  );
};

export default AuthWrapper;
