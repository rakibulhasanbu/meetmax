"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import AppFormInput from "../ui/AppFormInput";
import { FiMail } from "react-icons/fi";
import AppButton from "../ui/AppButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { useForgotPasswordMutation } from "@/redux/features/auth/authApi";
import { toast } from "react-toastify";
import { setUser } from "@/redux/features/auth/authSlice";
import { MdAlternateEmail } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

interface FormData {
  email: string;
}

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
    toast.success("Forgot password code sent to your email account");
    router.push("/auth/new-password");
    // await forgotPassword(data.email)
    //   .unwrap()
    //   .then((res) => {
    //     toast.success(res?.message);
    //     router.push("/auth/reset-password");
    //     dispatch(setUser({ user: { email: data.email } }));
    //   })
    //   .catch((res) => {
    //     toast.error(res?.message);
    //   });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <AppFormInput
        name="email"
        type="email"
        register={register}
        required
        icon={<MdAlternateEmail />}
        placeholder="your email"
        error={errors.email}
      />

      <AppButton
        disabled={isLoading}
        type="submit"
        className="w-full py-3"
        label="Send code"
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

export default ForgotPassword;
