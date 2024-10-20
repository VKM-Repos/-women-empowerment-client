import React, { FC } from 'react';

interface FormMessage {
  errors: any;
}

const FormMessage: FC<FormMessage> = ({ errors }) => {
  return (
    <>
      {errors && (
        <span className="text-error text-xs">{errors.message}</span>
      )}
    </>
  );
};

export default FormMessage;
