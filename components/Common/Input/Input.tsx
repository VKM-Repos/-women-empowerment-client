'use client'
import React, { useRef, useState } from 'react';

type InputType =
  | 'text'
  | 'tel'
  | 'select'
  | 'checkbox'
  | 'dropdown'
  | 'file'
  | 'radio'
  | 'password';

interface CustomInputProps {
  type: InputType;
  name: string;
  value?: string | FileList | boolean ;
  options?: string[];
  placeholder?: string;
  required?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Input: React.FC<CustomInputProps> = ({
  type,
  name,
  value,
  options,
  placeholder,
  required,
  checked,
  onChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleInputChange = (newValue: string | FileList | boolean) => {
    if (onChange) {
      onChange({ target: { name, value: newValue } } as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>);
    }
  };

  //  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files ? event.target.files[0] : null;
  //   setSelectedFile(file);
  //   handleInputChange(file || null); 
  // };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleInputChange(event.target.value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event.target.checked);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event.target.value);
  };

  const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event.target.value);
  };

  const handleChooseFile = () => {
    inputRef.current?.click();
  };

  return (
    <>
      {type === 'text' && (
        <input
          type="text"
          name={name}
          value={value as string}
          placeholder={placeholder}
          required={required}
          onChange={(event) => handleInputChange(event.target.value)}
          className="w-full border-gray-500 caret-secondaryGreen text-small focus:outline-none border-2 rounded-md p-2"
        />
      )}
      {type === 'file' && (
        <div className="w-full border-gray-500 caret-secondaryGreen text-small focus:outline-none border-2 rounded-md p-2">
          <input
            ref={inputRef}
            type="file"
            name={name}
            required={required}
            // onChange={handleFileChange}
            className="hidden"
          />
          <div className="flex items-center">
            <button
              type="button"
              onClick={handleChooseFile}
              className="mr-2 w-full border-gray-500 caret-secondaryGreen text-small focus:outline-none border-2 rounded-md p-2"
            >
              Choose File
            </button>
            {selectedFile && <span>{selectedFile.name}</span>}
          </div>
        </div>
      )}
      {type === 'select' && (
        <select
          name={name}
          value={value as string}
          required={required}
          onChange={handleSelectChange}
          className="w-full border-gray-500 caret-secondaryGreen text-small focus:outline-none border-2 rounded-md p-2"
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {type === 'checkbox' && (
        <input
          type="checkbox"
          name={name}
          checked={value as boolean}
          required={required}
          onChange={handleCheckboxChange}
          className="w-full border-gray-500 caret-secondaryGreen text-small focus:outline-none border-2 rounded-md p-2"
        />
      )}
      {type === 'radio' && (
        <input
          type="radio"
          name={name}
          value={value as string}
          checked={checked}
          required={required}
          onChange={handleRadioChange}
          className="hidden"
        />
      )}
      {type === 'password' && (
        <input
          type="password"
          name={name}
          value={value as string}
          placeholder={placeholder}
          required={required}
          onChange={handlePasswordChange}
          className="w-full border-gray-500 caret-secondaryGreen text-small focus:outline-none border-2 rounded-md p-2"
        />
      )}
      {type === 'tel' && (
        <input
          type="tel"
          name={name}
          value={value as string}
          placeholder={placeholder}
          required={required}
          onChange={handleTelChange}
          className="w-full border-gray-500 caret-secondaryGreen text-small focus:outline-none border-2 rounded-md p-2"
        />
      )}
      {/* Add other input types as needed */}
    </>
  );
};

export default Input;
