import { FaApple } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io5";

const SocialAuth = () => {
  return (
    <div className="max-sm:space-y-3 space-y-2 2xl:space-y-5">
      <div className="flex items-center gap-3 md:gap-5 justify-between">
        <button
          type="button"
          className="bg-dark/5 w-full flex items-center justify-center rounded-lg gap-3 md:gap-5 py-3.5 font-medium "
        >
          <IoLogoGoogle className="text-lg" /> Log in with Google
        </button>
        <button
          type="button"
          className="bg-dark/5 w-full flex items-center justify-center rounded-lg gap-3 md:gap-5 py-3.5 font-medium "
        >
          <FaApple className="text-lg" /> Log in with Apple
        </button>
      </div>
      <div className="flex items-center gap-3 md:gap-5">
        <hr className="w-full border-dark/20" />
        <span className="font-bold text-lg">OR</span>
        <hr className="w-full border-dark/20" />
      </div>
    </div>
  );
};

export default SocialAuth;
