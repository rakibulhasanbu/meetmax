"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import AppFormInput from "../ui/AppFormInput";
import AppButton from "../ui/AppButton";
import Link from "next/link";
import { FiLock } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "react-toastify";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";

interface FormData {
  password: string;
  confirmPassword: string;
}

const NewPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const [newPassword, { isLoading }] = useForgotPasswordMutation();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    if (data.password.length < 7 || data.confirmPassword.length < 7) {
      toast.error(
        "Your new password and confirm password minimum 6 character long",
        {
          toastId: 1,
        }
      );
    } else if (data.password !== data.confirmPassword) {
      toast.error("Your new password and confirm password do not match", {
        toastId: 1,
      });
    } else {
      toast.success("Set password successfully");
      router.push("/");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 lg:space-y-5">
      <AppFormInput
        name="password"
        type="password"
        register={register}
        required
        icon={<FiLock />}
        placeholder="Create new Password"
        error={errors.password}
      />
      <AppFormInput
        name="confirmPassword"
        type="password"
        register={register}
        required
        icon={<FiLock />}
        placeholder="Enter confirm password"
        error={errors.confirmPassword}
      />

      <AppButton
        disabled={isLoading}
        type="submit"
        className="w-full py-3"
        label="Confirm"
      />

      <Link
        href={"/auth/sign-in"}
        className="text-primary text-center flex items-center justify-center gap-1 font-medium"
      >
        <IoIosArrowBack className="text-lg" /> Back to Sign in
      </Link>
    </form>
  );
};

export default NewPassword;
