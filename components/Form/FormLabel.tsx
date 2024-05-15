import React, { FC } from 'react';
import { Label } from '../UI/Label';

interface FormLabel {
  label: any;
}

const FormLabel: FC<FormLabel> = ({label}) => {
  return (
    <Label className='className="flex gap-0 mb-1 font-semibold'>
        {label}
    </Label>
  );
};

export default FormLabel;
