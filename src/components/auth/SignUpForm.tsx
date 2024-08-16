"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import AppFormInput from "../ui/AppFormInput";
import { FaRegUser } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { MdOutlineLock } from "react-icons/md";
import AppButton from "../ui/AppButton";
import Link from "next/link";
import { useSignupUserMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const token = useAppSelector(useCurrentToken);

  const router = useRouter();

  const [userSingUp, { isLoading }] = useSignupUserMutation();

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await userSingUp(data)
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
        dispatch(
          setUser({ user: res.data.user, accessToken: res.data.accessToken })
        );
        router.push("/");
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
      className="md:max-w-[80%] max-sm:space-y-3 space-y-2 2xl:space-y-5"
    >
      <AppFormInput
        name="name"
        type="text"
        label="Your name"
        register={register}
        icon={<FaRegUser />}
        placeholder="Enter your name"
        required
        error={errors.name}
      />
      <AppFormInput
        name="email"
        type="email"
        label="Your e-mail"
        register={register}
        required
        icon={<FiMail />}
        placeholder="Enter Your e-mail"
        error={errors.email}
      />
      <AppFormInput
        name="password"
        type="password"
        label="Password"
        register={register}
        required
        icon={<MdOutlineLock />}
        placeholder="at least 8 characters"
        error={errors.password}
      />
      <div className="flex gap-2 2xl:pb-8 2xl:pt-4">
        <input
          type="checkbox"
          name="checkbox"
          id=""
          className="border-dark-grey h-fit mt-1 outline-none"
        />
        <p className="text-dark-grey font-light">
          By creating an account you agree to the{" "}
          <Link href={""} className="text-primary underline underline-offset-2">
            terms of use
          </Link>{" "}
          and our{" "}
          <Link href={""} className="text-primary underline underline-offset-2">
            privacy policy
          </Link>
        </p>
      </div>
      <AppButton
        disabled={isLoading}
        type="submit"
        className="w-full py-3"
        label="Create account"
      />
      <p className="text-center">
        Already have an account?{" "}
        <Link href={"/auth/sign-in"} className="text-primary font-medium">
          Log in
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;
