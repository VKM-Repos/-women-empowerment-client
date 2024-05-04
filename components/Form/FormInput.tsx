import { FC, InputHTMLAttributes, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { useDisableNumberInputScroll } from "@/lib/hooks/useDisableNumberInputScroll";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../UI/Form";
import { Input } from "../UI/Input";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

const FormInput: FC<InputProps> = ({ name, label, ...rest }) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(false);
  const { control } = useFormContext();

  const { type, required } = rest;

  useDisableNumberInputScroll();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const { value, onChange } = field;
        return (
          <FormItem className="flex flex-col gap-0">
            <FormLabel className="flex gap-1 font-semibold -mb-1">
              {label}
              {required && (
                <span className="text-error " title="required">
                  *
                </span>
              )}
            </FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  type={
                    type === "password"
                      ? isPasswordVisible
                        ? "text"
                        : "password"
                      : type
                  }
                  placeholder={rest.placeholder}
                  onChange={onChange}
                  value={value}
                  className="font-medium bg-[#F9F9F9] placeholder:text-black/30 "
                />
                {rest.type === "password" && (
                  <div
                    className="absolute transform -translate-y-1/2 cursor-pointer top-1/2 right-4"
                    onClick={() => setPasswordVisibility(!isPasswordVisible)}
                  >
                    {isPasswordVisible ? (
                      <EyeOff name="eye-off" />
                    ) : (
                      <Eye name="eye" />
                    )}
                  </div>
                )}
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default FormInput;
