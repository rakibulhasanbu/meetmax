"use client";

import { useGoogleAuthRegisterMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hook";
import { authWithGoogle } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { FaApple } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io5";
import { toast } from "react-toastify";

const SocialAuth = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [registerGoogleAuth] = useGoogleAuthRegisterMutation();
  const handleGoogleLogin = () => {
    authWithGoogle()
      .then((user: any) => {
        registerGoogleAuth({ accessToken: user?.accessToken })
          .unwrap()
          .then((res: any) => {
            console.log(res);
            toast.success(res?.message || "Successfully registered.", {
              toastId: 1,
            });
            dispatch(
              setUser({
                user: res.data.user,
                accessToken: res.data.accessToken,
              })
            );
            router.push("/");
          })
          .catch((res: any) => {
            toast.error(res?.data?.message || "something went wrong", {
              toastId: 1,
            });
          });
      })
      .catch((err) => {
        toast.error("Trouble login through Google Account.");
        return console.log(err);
      });
  };
  return (
    <div className="max-sm:space-y-3 space-y-2 2xl:space-y-5">
      <div className="flex items-center gap-3 md:gap-5 justify-between">
        <button
          onClick={handleGoogleLogin}
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
