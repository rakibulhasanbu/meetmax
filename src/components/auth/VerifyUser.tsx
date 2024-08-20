"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import AppFormInput from "../ui/AppFormInput";
import AppButton from "../ui/AppButton";
import Link from "next/link";
import { TbNumber123 } from "react-icons/tb";
import {
  useResendEmailMutation,
  useVerifyUserMutation,
} from "@/redux/features/auth/authApi";
import { useAppSelector } from "@/redux/hook";
import {
  selectCurrentUser,
  useCurrentToken,
} from "@/redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import { useEffect } from "react";

interface FormData {
  code: string;
}

const VerifyUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();
  const token = useAppSelector(useCurrentToken);
  const [verifyUser, { isLoading }] = useVerifyUserMutation();
  const [resendEmail, { isLoading: resendLoading }] = useResendEmailMutation();
  const user = useAppSelector(selectCurrentUser);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await verifyUser({ token: data.code, email: user?.email })
      .unwrap()
      .then((res) => {
        console.log(res);
        toast.success(res?.message);
        router.push("/auth/sign-in");
      })
      .catch((res) => {
        console.log(res);
        toast.error(res?.data?.message, { toastId: 1 });
      });
  };

  const handleResend = async () => {
    await resendEmail(user?.email)
      .unwrap()
      .then((res) => {
        toast.success(res?.message);
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
      className="space-y-3 md:space-y-5 font-medium"
    >
      <AppFormInput
        name="code"
        type="text"
        register={register}
        required
        icon={<TbNumber123 />}
        placeholder="Enter code"
        error={errors.code}
      />

      <AppButton
        disabled={isLoading}
        type="submit"
        className="w-full py-3"
        label="Continue"
      />

      <p className="text-center">
        Don&apos;t receive code?{" "}
        <button
          onClick={handleResend}
          disabled={resendLoading}
          type="button"
          className="text-primary font-medium"
        >
          Click to resend
        </button>
      </p>

      <Link
        href={"/auth/sign-in"}
        className="text-primary text-center flex items-center justify-center gap-1 font-medium"
      >
        <IoIosArrowBack className="text-lg" /> Back to Sign in
      </Link>
    </form>
  );
};

export default VerifyUser;
