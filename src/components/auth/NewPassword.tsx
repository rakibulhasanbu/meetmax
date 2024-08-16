"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import AppFormInput from "../ui/AppFormInput";
import AppButton from "../ui/AppButton";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";

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

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:max-w-[80%] space-y-5"
    >
      <AppFormInput
        name="password"
        type="password"
        label="password"
        register={register}
        required
        icon={<MdOutlineLock />}
        placeholder="at least 8 character"
        error={errors.password}
      />
      <AppFormInput
        name="confirmPassword"
        type="password"
        label="Confirm password"
        register={register}
        required
        icon={<MdOutlineLock />}
        placeholder="Enter confirm password"
        error={errors.confirmPassword}
      />
      <div className="pt-8">
        <AppButton type="submit" className="w-full py-3" label="Confirm" />
      </div>

      <Link
        href={"/auth/sign-in"}
        className="text-dark-grey text-center flex items-center justify-center gap-1 font-medium"
      >
        <IoArrowBackOutline className="text-lg" /> Back to log in
      </Link>
    </form>
  );
};

export default NewPassword;
