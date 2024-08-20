"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import AppFormInput from "../ui/AppFormInput";
import { FaRegUser } from "react-icons/fa6";
import { MdAlternateEmail, MdOutlineLock } from "react-icons/md";
import AppButton from "../ui/AppButton";
import Link from "next/link";
import { useSignupUserMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { RiUserSmileLine } from "react-icons/ri";
import { FiCalendar, FiLock } from "react-icons/fi";
import SocialAuth from "./SocialAuth";
import { TbGenderMale } from "react-icons/tb";
import { cn } from "@/utils/cn";

interface FormData {
  name: string;
  email: string;
  password: string;
  gender: string;
  dateOfBirth: string;
}

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    defaultValues: { gender: "male" },
  });

  const token = useAppSelector(useCurrentToken);

  const router = useRouter();

  const [userSingUp, { isLoading }] = useSignupUserMutation();

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await userSingUp(data)
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
        dispatch(setUser({ user: res.data }));

        if (res?.data?.emailVerified) {
          router.push("/");
        } else {
          router.push(`/auth/verify-user`);
        }
      })
      .catch((res) => {
        toast.error(res?.message);
      });
  };

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full font-medium space-y-3 2xl:space-y-5"
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
        name="name"
        type="text"
        register={register}
        icon={<RiUserSmileLine />}
        placeholder="Your name"
        required
        error={errors.name}
      />

      <AppFormInput
        name="password"
        type="password"
        register={register}
        required
        icon={<FiLock />}
        placeholder="Create Password"
        error={errors.password}
      />
      <div className="flex max-sm:flex-col items-center gap-3 md:gap-5 justify-between">
        <div className="relative w-full">
          <FiCalendar className="input-icon text-xl" />
          <input
            {...register("dateOfBirth")}
            type="date"
            className="w-full input-box md:py-3"
            placeholder="Date of Birth"
          />
          <p
            className={cn(
              "absolute top-1/4 pointer-events-none -z-0 font-medium text-dark/60 left-12",
              watch("dateOfBirth") && "text-dark"
            )}
          >
            {watch("dateOfBirth") ? watch("dateOfBirth") : "Date of birth"}
          </p>
        </div>

        <div className="w-full input-box relative">
          <TbGenderMale className="input-icon text-xl" />
          <div className="pl-8 flex items-center gap-8">
            <div className="flex gap-2">
              <input
                type="radio"
                id="male"
                value={"male"}
                {...register("gender")}
                className="cursor-pointer"
              />
              <label
                className={cn(
                  "cursor-pointer font-medium",
                  watch("gender") === "male" ? "text-dark" : "text-dark/60"
                )}
                htmlFor="male"
              >
                Male
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="female"
                value={"female"}
                {...register("gender")}
                className="cursor-pointer"
              />
              <label
                className={cn(
                  "cursor-pointer font-medium",
                  watch("gender") === "female" ? "text-dark" : "text-dark/60"
                )}
                htmlFor="female"
              >
                Female
              </label>
            </div>
          </div>
        </div>
      </div>
      <AppButton
        disabled={isLoading}
        type="submit"
        className="w-full py-3"
        label="Sign Up"
      />
      <p className="text-center font-medium flex gap-3.5 justify-center pt-2">
        Already have an account?
        <Link href={"/auth/sign-in"} className="text-primary font-medium">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
