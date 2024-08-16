import { cn } from "@/utils/cn";
import { UseFormRegister } from "react-hook-form";

type TAppFormInput = {
  name: string;
  placeholder: string;
  label: string;
  className?: string;
  register: UseFormRegister<any>;
  required?: true | false;
  disabled?: boolean;
  error?: any;
};

const AppFormTextArea = ({
  name,
  placeholder,
  register,
  required,
  error,
  className,
  label,
}: TAppFormInput) => {
  return (
    <div className="">
      <label className="text-lg font-light pb-2 text-dark-grey" htmlFor={name}>
        {label}
      </label>
      <textarea
        {...register(name, {
          ...(required && { required: true }),
        })}
        className={cn(
          "input-box resize-none overflow-y-auto pl-4",
          error && "border-red",
          className
        )}
        rows={5}
        placeholder={placeholder}
        id={name}
      ></textarea>
      {error && (
        <p className="text-sm text-red my-1">
          <span className="capitalize text-sm">{label}</span> is required.
        </p>
      )}
    </div>
  );
};

export default AppFormTextArea;
