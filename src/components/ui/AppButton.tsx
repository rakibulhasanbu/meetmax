"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import { ReactNode } from "react";
import { ImSpinner3 } from "react-icons/im";

type TAppButton = {
  label: string;
  className?: string;
  children?: any;
  type?: "button" | "reset" | "submit";
  href?: string;
  variant?: "filled" | "outlined" | "noDesign";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  disabled?: boolean;
};

const AppButton = ({
  label,
  className,
  children,
  type = "button",
  href,
  variant = "filled",
  icon,
  iconPosition = "right",
  disabled,
  onClick,
}: TAppButton) => {
  return href ? (
    <Link key={label} href={href} className="block min-w-fit">
      <button
        className={cn(
          "text-sm md:text-base min-w-fit rounded-md md:rounded-lg",
          icon && "flex items-center gap-1 md:gap-2",
          variant === "filled" ? "" : "",
          className
        )}
        type={type}
      >
        {iconPosition === "left" && icon} {label}{" "}
        {iconPosition === "right" && icon}
      </button>
    </Link>
  ) : disabled ? (
    <button
      key={label}
      disabled={disabled}
      className={cn(
        "text-sm md:text-base min-w-fit rounded-md md:rounded-lg",
        icon && "flex items-center gap-1 md:gap-2",
        variant === "filled"
          ? "bg-primary hover:bg-[#3074f4] text-white"
          : "border border-primary/20 text-primary hover:bg-primary/20",
        className
      )}
      type={"button"}
    >
      {/* {iconPosition === "left" && icon} {label} {children}
      {iconPosition === "right" && icon} */}

      <ImSpinner3 className="text-center block mx-auto text-2xl font-bold animate-spin" />
    </button>
  ) : (
    <button
      key={label}
      disabled={disabled}
      className={cn(
        "text-sm md:text-lg py-2 w-full rounded-md md:rounded-lg",
        icon && "flex items-center gap-1 md:gap-2",
        variant === "filled"
          ? "bg-primary hover:bg-[#3074f4] text-white"
          : "border border-primary/20 text-primary hover:bg-primary/20",
        className
      )}
      type={type}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {iconPosition === "left" && icon} {label} {children}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default AppButton;
