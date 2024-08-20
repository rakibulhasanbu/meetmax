"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import AppFormInput from "../ui/AppFormInput";
import { FiLock, FiMail } from "react-icons/fi";
import { MdAlternateEmail, MdOutlineLock } from "react-icons/md";
import AppButton from "../ui/AppButton";
import Link from "next/link";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/features/auth/authSlice";
import SocialAuth from "./SocialAuth";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();
  const dispatch = useAppDispatch();
  const [signInUser, { isLoading }] = useLoginMutation();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await signInUser(data)
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
        dispatch(
          setUser({ user: res.data.user, accessToken: res.data.accessToken })
        );
        if (res?.data?.user?.role === "admin") {
          router.push("/admin-dashboard");
        } else {
          router.push("/dashboard");
        }
      })
      .catch((res) => {
        toast.error(res?.message);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full font-medium space-y-3 lg:space-y-5"
    >
      <SocialAuth />
      <AppFormInput
        name="email"
        type="email"
        register={register}
        required
        icon={<MdAlternateEmail />}
        placeholder="your email"
        error={errors.email}
      />

      <AppFormInput
        name="password"
        type="password"
        register={register}
        required
        icon={<FiLock />}
        placeholder="Enter Password"
        error={errors.password}
      />
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-1">
          <input type="checkbox" name="checkbox" id="Remember" />
          <label className=" cursor-pointer" htmlFor="Remember">
            Remember me
          </label>
        </div>
        <Link
          href={"/auth/forgot-password"}
          className="hover:text-primary text-center font-medium"
        >
          Forgot password?
        </Link>
      </div>
      <AppButton
        disabled={isLoading}
        type="submit"
        className="w-full py-3"
        label="Sign In"
      />
      <p className="text-center font-medium flex gap-3.5 justify-center pt-2">
        Don&apos;t have any account?
        <Link href={"/auth/sign-up"} className="text-primary font-medium">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
