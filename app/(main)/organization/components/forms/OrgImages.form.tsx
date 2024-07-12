import React, { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TransitionParent } from '@/lib/utils/transition';
import Button from '@/components/Common/Button/Button';
import StepEightImg from '@/public/images/create-8.png';
import Image from 'next/image';
import { useOrganizationFormStore } from '@/lib/store/createOrgForm.store';
import Icon from '@/components/Common/Icons/Icon';
import AlertIcon from '../AlertIcon';
import InfoIcon from '../InfoIcon';
import toast from 'react-hot-toast';

interface OrgImagesFormProps {
  handleNext: () => void;
  handleGoBack: () => void;
  handleSkip: () => void;
}

const OrgImagesForm: React.FC<OrgImagesFormProps> = ({
  handleNext,
  handleGoBack,
  handleSkip,
}) => {
  const { data, setData } = useOrganizationFormStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const [showInfo, setShowInfo] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    clearErrors,
    watch,
  } = useForm<{ image: File | null; imagePreview: string | null }>(
    {
      defaultValues: {
      image: data.image,
      imagePreview: data.imagePreview,
    },
    }
  );

  useEffect(() => {
    setValue('imagePreview', data.imagePreview);
  }, [data.imagePreview, setValue]);

  const handleChooseFile = () => {
    inputRef.current?.click();
  };

  const handleImagesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
      setData({ imagePreview: imageUrl });
      setData({ image: imageFile });
      setValue('image', imageFile);
      setValue('imagePreview', imageUrl);
      clearErrors('image');
    }
  };

  const removeImage = () => {
    clearErrors('image');
    setData({ imagePreview: '' });
    setValue('image', null);
    setValue('imagePreview', null);
  };

  const onSubmit: SubmitHandler<{ image: File | null }> = formData => {
    if (formData.image) {
      handleNext();
    } else {
      toast.error('No image selected');
    }
  };
  return (
    <TransitionParent>
      <div className="font-quickSand mx-auto grid w-full grid-cols-1 items-start gap-10 p-4 md:w-3/4 lg:grid-cols-5 lg:p-12">
        <div className="hidden lg:col-span-2 lg:block">
          <Image
            src={StepEightImg}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className="flex w-full flex-col items-start space-y-3 rounded-[1rem] bg-[#F0EBD6] p-0 md:p-[2rem] lg:col-span-3 ">
          <span className="flex w-full items-center justify-between">
            <h1 className="text-primary font-sora text-xl font-bold md:text-3xl">
              Add Cover Image
            </h1>
            <div className="relative -mt-12 flex w-fit flex-col">
              <span
                onMouseEnter={() => setShowInfo(true)}
                onMouseLeave={() => setShowInfo(false)}
                className="relative flex cursor-pointer items-center justify-center"
              >
                <InfoIcon />
              </span>
              {showInfo && (
                <span className="bg-white-100 text-gray-200 absolute right-[1.5rem] top-0 w-fit whitespace-nowrap rounded-lg p-1 px-4 text-xs">
                  1500 by 500 px image size recommended
                </span>
              )}
            </div>
          </span>
          <p className="font-quickSand text-sm md:text-base">
            This will be displayed as the cover image of your dashboard.
          </p>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col pb-8">
              <div className="w-full focus:outline-none ">
                <div className="flex flex-nowrap  items-center gap-4 overflow-x-auto">
                  {watch('imagePreview') && (
                    <span className="border-btnWarning relative aspect-square w-[10rem] overflow-hidden rounded-full border-2">
                      <Image
                        src={data?.imagePreview}
                        alt={`Image Preview`}
                        width={400}
                        height={400}
                        className="h-full w-full bg-center object-cover"
                      />
                      <button
                        type="button"
                        className="bg-primaryBlack/50 text-primaryWhite absolute inset-0 flex items-center justify-center rounded-full text-xs"
                        onClick={() => removeImage()}
                      >
                        <Icon name="delete-round" size={42} />
                      </button>
                    </span>
                  )}
                  <span>
                    <input
                      ref={inputRef}
                      type="file"
                      onChange={handleImagesChange}
                      name="image"
                      className="hidden"
                      accept="image/*"
                    />
                    <button
                      type="button"
                      onClick={handleChooseFile}
                      className="text-small flex w-full flex-col items-start justify-center space-y-6  rounded-md py-6 focus:outline-none "
                    >
                      <svg
                        width="144"
                        height="144"
                        viewBox="0 0 144 144"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.949219"
                          y="0.5"
                          width="142.5"
                          height="142.5"
                          rx="71.25"
                          stroke="#FF7400"
                        />
                        <path
                          d="M95.9492 55.5V60.5H88.4492V68H83.4492V60.5H75.9492V55.5H83.4492V48H88.4492V55.5H95.9492ZM74.6992 73C75.6941 72.9997 76.6481 72.6041 77.3514 71.9004C78.0546 71.1967 78.4496 70.2424 78.4492 69.2475C78.4489 68.2526 78.0534 67.2986 77.3496 66.5953C76.6459 65.8921 75.6916 65.4972 74.6967 65.4975C74.2041 65.4977 73.7163 65.5949 73.2613 65.7835C72.8062 65.9722 72.3928 66.2486 72.0445 66.5971C71.6963 66.9456 71.4202 67.3592 71.2318 67.8144C71.0434 68.2695 70.9466 68.7574 70.9467 69.25C70.9469 69.7426 71.0441 70.2304 71.2327 70.6854C71.4214 71.1405 71.6979 71.5539 72.0463 71.9022C72.3948 72.2504 72.8084 72.5266 73.2636 72.7149C73.7188 72.9033 74.2066 73.0002 74.6992 73ZM83.4492 81.085L82.1667 79.66C81.6978 79.1379 81.1242 78.7203 80.4833 78.4345C79.8424 78.1486 79.1485 78.0009 78.4467 78.0009C77.7449 78.0009 77.051 78.1486 76.4101 78.4345C75.7692 78.7203 75.1956 79.1379 74.7267 79.66L73.0867 81.4875L60.9492 68L53.4492 76.3325V60.5H70.9492V55.5H53.4492C52.1231 55.5 50.8514 56.0268 49.9137 56.9645C48.976 57.9021 48.4492 59.1739 48.4492 60.5V90.5C48.4492 91.8261 48.976 93.0979 49.9137 94.0355C50.8514 94.9732 52.1231 95.5 53.4492 95.5H83.4492C84.7753 95.5 86.0471 94.9732 86.9848 94.0355C87.9224 93.0979 88.4492 91.8261 88.4492 90.5V73H83.4492V81.085Z"
                          fill="#FF7400"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
              {errors.image ? (
                <span className="text-error flex items-center gap-2 text-xs font-semibold">
                  <AlertIcon size="24" /> {errors.image.message}
                </span>
              ) : (
                <p className="text-gray-200 text-xs">
                  PNG or JPEGS only <strong>&bull; 2MB max</strong>
                </p>
              )}
            </div>
            <span className="relative flex w-full flex-wrap gap-4">
              <Button
                label="Go Back"
                variant="secondary"
                fullWidth={false}
                size="medium"
                onClick={handleGoBack}
              />
              <Button
                label="Continue"
                variant="primary"
                fullWidth={false}
                size="medium"
                state={watch('imagePreview') ? 'active' : 'disabled'}
              />
              <button
                className="text-primary text-sm underline md:flex-1"
                onClick={handleSkip}
              >
                Skip
              </button>
            </span>
          </form>
        </div>
      </div>
    </TransitionParent>
  );
};

export default OrgImagesForm;
