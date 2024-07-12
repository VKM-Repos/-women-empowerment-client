'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import AlertIcon from '../../../components/AlertIcon';
import Image from 'next/image';
import Icon from '@/components/Common/Icons/Icon';

type Props = {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
};

const AddImage = ({ onSubmit, isLoading }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    clearErrors,
    watch,
    reset, // Added reset from react-hook-form
  } = useForm<{ image: File | null; imagePreview: string }>();

  useEffect(() => {
    setValue('imagePreview', imagePreview);
  }, [imagePreview, setValue]);

  const handleChooseFile = () => {
    inputRef.current?.click();
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    clearErrors('image');

    const imageFile = e.target.files?.[0];

    if (imageFile) {
      if (imageFile.size > 2 * 1024 * 1024) {
        setError('image', {
          type: 'manual',
          message: 'File size limit is 2MB',
        });
        return;
      }

      const allowedTypes = ['image/png', 'image/jpeg'];
      if (!allowedTypes.includes(imageFile.type)) {
        setError('image', {
          type: 'manual',
          message: 'Incompatible file. Please upload a PNG or JPEG file.',
        });
        return;
      }

      const imageUrl = URL.createObjectURL(imageFile);
      setImagePreview(imageUrl);
    }
  };

  const removeImage = () => {
    clearErrors('image');
    setImagePreview('');
  };

  const onSubmitForm = (data: { image: File | null }) => {
    if (!data.image) {
      setError('image', {
        type: 'manual',
        message: 'Please select an image',
      });
      return;
    }
    const formData = new FormData();
    formData.append('image', data.image);
    onSubmit(formData);
    reset(); // Reset the form after submission
    setImagePreview(''); // Clear the image preview after submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
      <div className="flex gap-4">
        {watch('imagePreview') && (
          <span className="relative aspect-square w-[10rem] overflow-hidden rounded shadow-md lg:w-[15rem]">
            <Image
              src={imagePreview}
              alt="Image Preview"
              width={400}
              height={400}
              className="h-full w-full bg-center object-cover"
            />
            <button
              type="button"
              className="bg-primaryBlack/50 text-primaryWhite absolute inset-0 flex items-center justify-center text-xs"
              onClick={removeImage}
            >
              <Icon name="delete-round" size={42} />
            </button>
          </span>
        )}
        <span>
          <input
            ref={inputRef}
            type="file"
            onChange={e => {
              handleImageChange(e);
              setValue('image', e.target.files?.[0] || null);
            }}
            name="image"
            className="hidden"
            accept="image/*"
          />
          <button
            type="button"
            onClick={handleChooseFile}
            className="border-btnWarning flex w-full items-center justify-center rounded-full border-2 focus:outline-none"
          >
            <svg
              className="aspect-square w-[10rem]"
              viewBox="0 0 144 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M95.9492 55.5V60.5H88.4492V68H83.4492V60.5H75.9492V55.5H83.4492V48H88.4492V55.5H95.9492ZM74.6992 73C75.6941 72.9997 76.6481 72.6041 77.3514 71.9004C78.0546 71.1967 78.4496 70.2424 78.4492 69.2475C78.4489 68.2526 78.0534 67.2986 77.3496 66.5953C76.6459 65.8921 75.6916 65.4972 74.6967 65.4975C74.2041 65.4977 73.7163 65.5949 73.2613 65.7835C72.8062 65.9722 72.3928 66.2486 72.0445 66.5971C71.6963 66.9456 71.4202 67.3592 71.2318 67.8144C71.0434 68.2695 70.9466 68.7574 70.9467 69.25C70.9469 69.7426 71.0441 70.2304 71.2327 70.6854C71.4214 71.1405 71.6979 71.5539 72.0463 71.9022C72.3948 72.2504 72.8084 72.5266 73.2636 72.7149C73.7188 72.9033 74.2066 73.0002 74.6992 73ZM83.4492 81.085L82.1667 79.66C81.6978 79.1379 81.1242 78.7203 80.4833 78.4345C79.8424 78.1486 79.1485 78.0009 78.4467 78.0009C77.7449 78.0009 77.051 78.1486 76.4101 78.4345C75.7692 78.7203 75.1956 79.1379 74.7267 79.66L73.0867 81.4875L60.9492 68L53.4492 76.3325V60.5H70.9492V55.5H53.4492C52.1231 55.5 50.8514 56.0268 49.9137 56.9645C48.976 57.9021 48.4492 59.1739 48.4492 60.5V90.5C48.4492 91.8261 48.976 93.0979 49.9137 94.0355C50.8514 94.9732 52.1231 95.5 53.4492 95.5H83.4492C84.7753 95.5 86.0471 94.9732 86.9848 94.0355C87.9224 93.0979 88.4492 91.8261 88.4492 90.5V73H83.4492V81.085Z"
                fill="#FF7400"
              />
            </svg>
          </button>
          <br /> <br />
          {errors.image ? (
            <span className="text-error flex items-center gap-2 text-xs font-semibold">
              <AlertIcon size="24" /> {errors.image.message}
            </span>
          ) : (
            <p className="text-gray-200 text-xs">
              PNG or JPEGS only <strong>&bull; 2MB max</strong>
            </p>
          )}
        </span>
      </div>
    </form>
  );
};

export default AddImage;
