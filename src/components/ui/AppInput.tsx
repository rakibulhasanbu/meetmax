"use client";

import { useState } from "react";

type TAppInput = {
  name?: string;
  type: "password" | "number" | "text" | "date" | "url" | "file" | "email";
  placeholder: string;
  icon?: string;
  disabled?: boolean;
  error?: any;
  value?: any;
  setValue?: (value: any) => void;
};

const AppInput = ({
  name,
  type,
  placeholder,
  icon,
  error,
  setValue,
  disabled,
  value,
}: TAppInput) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className={`relative w-[100%] ${error ? "mb-1" : "mb-4"}`}>
      <input
        defaultValue={value}
        onChange={setValue}
        type={
          type === "password" ? (passwordVisible ? "text" : "password") : type
        }
        disabled={disabled}
        placeholder={placeholder}
        className={`input-box ${!icon && "pl-4"} ${error && "border-red"}`}
      />
      <i className={`fi ${icon} input-icon ${error && "top-1/4"}`}></i>

      {type === "password" ? (
        <i
          className={`fi  ${
            !passwordVisible ? "fi-rr-eye-crossed" : "fi-rr-eye"
          } input-icon left-[auto] right-4 cursor-pointer`}
          onClick={() => setPasswordVisible((currentVal) => !currentVal)}
        ></i>
      ) : (
        ""
      )}
      {error && (
        <p className="text-sm text-red my-1">
          <span className="capitalize text-sm">{placeholder}</span> is required.
        </p>
      )}
    </div>
  );
};

export default AppInput;
