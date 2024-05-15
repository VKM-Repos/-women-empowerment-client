import React, { FC } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../UI/Select';

interface Options {
  label: string;
  value: string;
}
interface FormSelect {
  value: any;
  onChange: (value: any) => void;
  defaultValue: any;
  placeholder: string;
  options: Options[];
}

const FormSelect: FC<FormSelect> = ({ value, onChange, defaultValue, placeholder, options }) => {
// log

  return (
    <Select onValueChange={onChange} defaultValue={defaultValue} value={value}>
      <SelectTrigger className="w-full select-none">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options &&
          options.map((option: any, id) => (
            <SelectItem value={option.value} key={id}>
              {option.label.toLowerCase()}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default FormSelect;
