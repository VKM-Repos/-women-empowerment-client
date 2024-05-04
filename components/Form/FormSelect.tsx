import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { SelectHTMLAttributes } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../UI/Form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../UI/Select";
import { useDisableNumberInputScroll } from "@/lib/hooks/useDisableNumberInputScroll";

export interface Option {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label?: string;
  required?: boolean;
  options: Option[];
}

const FormSelect: FC<SelectProps> = ({ name, label, required, options }) => {
  const { control } = useFormContext();

  useDisableNumberInputScroll();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const { value, onChange } = field;

        return (
          <FormItem className="flex flex-col gap-0">
            <FormLabel className="font-semibold flex gap-1">
              {label}
              {required && (
                <span className="text-error" title="required">
                  *
                </span>
              )}
            </FormLabel>
            <Select onValueChange={onChange} defaultValue={value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {options.map((option, index) => (
                  <SelectItem key={index} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default FormSelect;
