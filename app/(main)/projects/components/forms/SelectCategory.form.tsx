'use client';
import React, { useState } from 'react';
import Button from '@/components/Common/Button/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useProjectFormStore } from '@/lib/store/createProjectForm.store';
import { useGET } from '@/lib/hooks/useGET.hook';
import toast from 'react-hot-toast';
import LoadingDots from '@/components/Common/Loaders/LoadingDots';
import { TransitionFromBottom } from '@/lib/utils/transition';
import { Category } from '@/lib/types/category.types';
import FormMessage from '@/components/Form/FormMessage';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface SelectCategoryProps {
  handleNext: () => void;
}

const SelectCategory: React.FC<SelectCategoryProps> = ({ handleNext }) => {
  const { data, setData } = useProjectFormStore();

  const {
    data: categories,
    isLoading,
    isError,
    refetch
  } = useGET({
    url: '/categories',
    queryKey: ['categories'],
    withAuth: false,
    enabled: true,
  });

  const categoryFormSchema = z.object({
    categoryId: z.number(),
  });

  type CategoryFormValue = z.infer<typeof categoryFormSchema>;

  const defaultValues: Partial<CategoryFormValue> = {
    categoryId: data?.projectDetails.categoryId,
  };

  const form = useForm<CategoryFormValue>({
    defaultValues,
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = form;

  const [displayedCategories, setDisplayedCategories] = useState(6);

  const onSubmit: SubmitHandler<CategoryFormValue> = formData => {
    if (!formData.categoryId) {
      setError('categoryId', {
        type: 'manual',
        message: 'please select a category',
      });
    }

    // Update the store with the selected categories
    setData({
      projectDetails: {
        ...data.projectDetails,
        categoryId: formData.categoryId,
      },
    });
    handleNext();
  };

  const handleSeeMoreLessClick = () => {
    setDisplayedCategories(prev =>
      prev === 6 ? categories.content.length : 6
    );
  };

  return (
    <div className="font-quickSand mx-auto grid w-full grid-cols-1 items-center gap-10 p-4 md:w-3/4 lg:grid-cols-5 lg:p-12">
      <div className="hidden w-full flex-col gap-5 place-self-start lg:col-span-2 lg:flex">
        <p className="font-quickSand text-primary text-lg font-semibold">
          1 of 4
        </p>
        <h2 className="font-sora text-gray-100 text-2xl font-semibold">
          Let’s begin with what Category of project you have
        </h2>
        <p className="text-gray-300 font-quickSand text-base">
          This helps users find your projects with ease
        </p>
      </div>

      <div className=" flex w-full flex-col items-start space-y-6 rounded-[1rem] bg-[#F0EBD6] p-0 md:p-[2rem] lg:col-span-3">
        <h1 className="text-primary font-sora text-3xl font-bold">
          Choose a category
        </h1>
        <p className="font-quickSand text-base">
          Select a category that best suit your project
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="">
            <ul className="font-quickSand flex w-full flex-wrap gap-3">
              {isLoading && <LoadingDots />}
              {isError && <p className='text-xs font-bold text-error'>Error fetching categories. <button className='underline' onClick={refetch}>try again</button></p>}

              {Array.isArray(categories?.content) &&
                categories.content
                  .slice(0, displayedCategories)
                  .map((option: Category) => (
                    <div className="w-fit" key={option.id}>
                      <TransitionFromBottom>
                        <label className="border-btnWarning hover:border-btnWarning [&:has(input:checked)]:border-btnWarning [&:has(input:checked)]:bg-btnWarning [&:has(input:checked)]:text-primaryWhite flex cursor-pointer flex-nowrap rounded-lg border bg-transparent px-2 py-1 text-base text-sm transition-colors">
                          <input
                            {...register('categoryId', {
                              required: 'Select a category',
                              // valueAsNumber: true
                            })}
                            type="radio"
                            name="categoryId"
                            value={option.id}
                            className="hidden cursor-pointer"
                          />
                          <span className="flex whitespace-nowrap">
                            {option.name}
                          </span>
                        </label>
                      </TransitionFromBottom>
                    </div>
                  ))}
            </ul>

            <FormMessage errors={errors.categoryId} />
            <div className="flex w-full justify-end">
              <p
                className="text-gray-200 w-fit cursor-pointer py-4 text-right text-sm font-bold hover:underline"
                onClick={handleSeeMoreLessClick}
              >
                {displayedCategories <= 6 ? 'See More' : 'See Less'}
              </p>
            </div>
          </div>
          <span className="flex gap-10">
            <Button
              label="Continue"
              variant="primary"
              fullWidth={false}
              size="medium"
              state={isValid ? 'active' : 'disabled'}
            />
          </span>
        </form>
      </div>
    </div>
  );
};

export default SelectCategory;
