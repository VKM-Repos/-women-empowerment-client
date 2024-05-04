"use client";

import { FC } from "react";

import { useFormContext } from "react-hook-form";


import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../UI/Form";
import { Textarea } from "../UI/Textarea";

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
}

const FormTextArea: FC<InputProps> = ({ name, label, placeholder }) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              className="resize-none font-medium bg-[#F9F9F9] placeholder:text-gray-400"
              placeholder={placeholder}
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
