'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import StepTwoImg from '@/public/images/create-org-2.png';
import Button from '@/components/Common/Button/Button';
import { TransitionFromBottom, TransitionParent } from '@/lib/utils/transition';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useOrganizationFormStore } from '@/lib/store/createOrgForm.store';

interface OrgCategoryFormProps {
  handleNext: (data: { category: string[] }) => void;
  handleGoBack: () => void;
}

const options = [
  'Technology',
  'Leadership & Development',
  'Entrepreneurship',
  'Human Rights',
  'Grants',
  'Activism',
  'Economic Empowerment',
  'Sexual Orientation',
  'Art & Life Style',
  'Business & Finance',
];

const OrgCategoryForm: React.FC<OrgCategoryFormProps> = ({ handleNext, handleGoBack }) => {
  const { data, setData } = useOrganizationFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ category: string[] }>({
    defaultValues: {
      category: data.category || [],
    },
  });

  const [displayedCategories, setDisplayedCategories] = useState(6);

  const onSubmit: SubmitHandler<{ category: string[] }> = (formData) => {
    if (!formData.category || formData.category.length < 2) {
      toast.error('Select at least 2 categories.');
      return;
    }

    setData({ category: formData.category });
    handleNext(formData);
  };

  const handleSeeMoreLessClick = () => {
    setDisplayedCategories((prev) => (prev === 6 ? options.length : 6));
  };

  return (
    <TransitionParent>
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start lg:p-12 p-4 font-quickSand">
        <div className="lg:col-span-2 hidden lg:block">
          <Image src={StepTwoImg} alt="" width={100} height={100} layout="responsive" />
        </div>

        <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-3 items-start ">
          <h1 className="text-primary text-3xl font-bold font-sora">Choose a category</h1>
          <p className="text-base font-quickSand font-semibold">
            Select at least 2 categories that best describe what your organization stands for
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col pb-8">
              <ul className="w-full flex gap-3 flex-wrap">
                {options.slice(0, displayedCategories).map((option, i) => (
                  <li className="w-fit" key={option}>
                    <TransitionFromBottom>
                      <label className="flex flex-nowrap cursor-pointer py-2 px-4 transition-colors bg-transparent text-base border border-btnWarning rounded-lg hover:border-btnWarning [&:has(input:checked)]:border-btnWarning [&:has(input:checked)]:bg-btnWarning [&:has(input:checked)]:text-primaryWhite">
                        <input
                          {...register('category', {
                            required: 'Select at least two categories',
                          })}
                          type="checkbox"
                          name="category"
                          value={option}
                          className="cursor-pointer hidden"
                        />
                        <span className="flex whitespace-nowrap">{option}</span>
                      </label>
                    </TransitionFromBottom>
                  </li>
                ))}
              </ul>
              {/* Display "see more/less" text with onClick event */}
              <span
                className="w-full text-right text-sm font-bold text-gray-200 cursor-pointer hover:underline"
                onClick={handleSeeMoreLessClick}
              >
                {displayedCategories <= 6 ? 'See More' : 'See Less'}
              </span>
              {errors?.category?.message && (
                <p className="text-error text-sm mt-1">{errors?.category?.message}</p>
              )}
            </div>
            <span className="flex gap-10">
              <Button
                label="Go Back"
                variant="secondary"
                fullWidth={false}
                size="medium"
                onClick={handleGoBack}
              />
              <Button label="Continue" variant="secondary" fullWidth={false} size="medium" />
            </span>
          </form>
        </div>
      </div>
    </TransitionParent>
  );
};

export default OrgCategoryForm;
