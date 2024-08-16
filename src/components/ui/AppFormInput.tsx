"use client";

import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

type TAppFormInput = {
  name: string;
  type: "password" | "number" | "text" | "date" | "url" | "file" | "email";
  placeholder: string;
  label: string;
  className?: string;
  icon?: any;
  register: UseFormRegister<any>;
  required?: true | false;
  disabled?: boolean;
  error?: any;
};

const AppFormInput = ({
  name,
  type,
  placeholder,
  icon,
  register,
  required,
  error,
  disabled,
  className,
  label,
}: TAppFormInput) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className={`w-[100%] ${error ? "mb-1" : "2xl:mb-4"}`}>
      <label className="text-lg font-light pb-2 text-dark-grey" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <input
          {...register(name, {
            ...(required && { required: true }),
            ...(type === "number" && { valueAsNumber: true }),
          })}
          type={
            type === "password" ? (passwordVisible ? "text" : "password") : type
          }
          min={0}
          disabled={disabled}
          placeholder={placeholder}
          className={`input-box ${error && "border-red"} ${className}`}
        />
        <span className={`input-icon ${error && "text-red"}`}>{icon}</span>

        {type === "password" ? (
          !passwordVisible ? (
            <FaRegEyeSlash
              className="input-icon left-[auto] right-4 cursor-pointer"
              onClick={() => setPasswordVisible((currentVal) => !currentVal)}
            />
          ) : (
            <FaRegEye
              className="input-icon left-[auto] right-4 cursor-pointer"
              onClick={() => setPasswordVisible((currentVal) => !currentVal)}
            />
          )
        ) : (
          ""
        )}
      </div>
      {error && (
        <p className="text-sm text-red my-1">
          <span className="capitalize text-sm">{label}</span> is required.
        </p>
      )}
    </div>
  );
};

export default AppFormInput;
