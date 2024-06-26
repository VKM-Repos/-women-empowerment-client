'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import StepTwoImg from '@/public/images/create-org-2.png';
import Button from '@/components/Common/Button/Button';
import { TransitionFromBottom, TransitionParent } from '@/lib/utils/transition';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useOrganizationFormStore } from '@/lib/store/createOrgForm.store';
import { useGET } from '@/lib/hooks/useGET.hook';
import { Category } from '@/lib/types/category.types';
import LoadingDots from '@/components/Common/Loaders/LoadingDots';

interface OrgCategoryFormProps {
  handleNext: (data: { categoryIds: number[] }) => void;
  handleGoBack: () => void;
}


const OrgCategoryForm: React.FC<OrgCategoryFormProps> = ({ handleNext, handleGoBack }) => {
  const { data, setData } = useOrganizationFormStore();

  const { data: categories, isLoading, isError, refetch } = useGET({
    url: "/categories",
    queryKey: ["categories"],
    withAuth: false,
    enabled: true,
  });

  console.log(categories?.content);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ categoryIds: number[] }>({
    defaultValues: {
      categoryIds: data.organizationDetails.categoryIds || [],
    },
  });

  const [displayedCategories, setDisplayedCategories] = useState(6);

  const onSubmit: SubmitHandler<{ categoryIds: number[] }> = (formData) => {
    if (!formData.categoryIds || formData.categoryIds.length < 1) {
      toast.error('Select a category.');
      return;
    }

    // Update the store with the selected categories
    setData({
      organizationDetails: {
        ...data.organizationDetails,
        categoryIds: formData.categoryIds,
      },
    });
    handleNext(formData);
  };


  const handleSeeMoreLessClick = () => {
    setDisplayedCategories((prev) => (prev === 6 ? categories.content.length : 6));
  };

  return (
    <TransitionParent>
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start lg:p-12 p-4 font-quickSand">
        <div className="lg:col-span-2 hidden lg:block">
          <Image src={StepTwoImg} alt="" width={100} height={100} layout="responsive" />
        </div>

        <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-3 items-start ">
          <h1 className="text-primary text-xl md:text-3xl font-bold font-sora">Choose a category</h1>
          <p className="text-base font-quickSand">
            Select a category that best describe what your organization stands for
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col pb-8 py-4">
              <ul className="w-full flex gap-2 flex-wrap">

                {isLoading && <LoadingDots />}
                {isError && <p className='text-xs font-bold text-error'>Error fetching categories. <button className='underline' onClick={() => refetch()}>try again</button></p>}

                {Array.isArray(categories?.content) && categories.content.slice(0, displayedCategories).map((option: Category) => (
                  <li className="w-fit" key={option.id}>
                    <TransitionFromBottom>
                      <label className="flex flex-nowrap cursor-pointer py-1 px-2 text-sm transition-colors bg-transparent text-base border border-btnWarning rounded-lg hover:border-btnWarning [&:has(input:checked)]:border-btnWarning [&:has(input:checked)]:bg-btnWarning [&:has(input:checked)]:text-primaryWhite">
                        <input
                          {...register('categoryIds', {
                            required: 'Select a category',
                          })}
                          type="checkbox"
                          name="categoryIds"
                          value={option.id}
                          className="cursor-pointer hidden"
                        />
                        <span className="flex whitespace-nowrap">{option.name}</span>
                      </label>
                    </TransitionFromBottom>
                  </li>
                ))}
              </ul>
              {/* Display "see more/less" text with onClick event */}
              <span
                className="w-full mt-2 text-right text-sm font-bold text-gray-300 cursor-pointer hover:underline"
                onClick={handleSeeMoreLessClick}
              >
                {displayedCategories <= 6 ? 'See More' : 'See Less'}
              </span>
              {errors?.categoryIds?.message && (
                <p className="text-error text-sm mt-1">{errors?.categoryIds?.message}</p>
              )}
            </div>
            <span className="flex gap-4">
              <Button
                label="Go Back"
                variant="secondary"
                fullWidth={false}
                size="medium"
                onClick={handleGoBack}
              />
              <Button label="Continue" variant="primary" fullWidth={false} size="medium" state={isValid ? "active" : "disabled"} />
            </span>
          </form>
        </div>
      </div>
    </TransitionParent>
  );
};

export default OrgCategoryForm;
