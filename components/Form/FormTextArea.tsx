"use client";

import { FC, InputHTMLAttributes } from "react";

import { useFormContext } from "react-hook-form";


import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../UI/Form";
import { Textarea } from "../UI/Textarea";
import { useDisableNumberInputScroll } from "@/lib/hooks/useDisableNumberInputScroll";


interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
}

const FormTextArea: FC<InputProps> = ({ name, label, ...rest }) => {
    const { control } = useFormContext();

  const { required } = rest;

  useDisableNumberInputScroll();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="flex gap-0 -mb-1 font-semibold">
              {label}
              {required && (
                <span className="text-error " title="required">
                  *
                </span>
              )}
            </FormLabel>
          <FormControl>
            <Textarea
              className="resize-none font-medium bg-[#F9F9F9] placeholder:text-gray-400"
              placeholder={rest.placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTextArea;
