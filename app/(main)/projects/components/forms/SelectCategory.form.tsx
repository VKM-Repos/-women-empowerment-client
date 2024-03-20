'use client'
import React, { useState } from "react";
import Button from "@/components/Common/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useProjectFormStore } from "@/lib/store/createProjectForm.store";
import { useGET } from "@/lib/hooks/useGET.hook";
import toast from "react-hot-toast";
import LoadingDots from "@/components/Common/Loaders/LoadingDots";
import { TransitionFromBottom } from "@/lib/utils/transition";
import { Category } from "@/lib/types/category.types";


interface SelectCategoryProps {
    handleNext: () => void;
}

const SelectCategory: React.FC<SelectCategoryProps> = ({ handleNext }) => {
    const { data, setData } = useProjectFormStore();

    const { data: categories, isLoading, isError } = useGET({
        url: "/categories",
        queryKey: ["categories"],
        withAuth: false,
        enabled: true,
    });

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<{ categoryId: number }>({
        defaultValues: {
            categoryId: data.projectDetails.categoryId,
        },
    });

    const [displayedCategories, setDisplayedCategories] = useState(6);

    const onSubmit: SubmitHandler<{ categoryId: number }> = (formData) => {
        if (!formData.categoryId) {
            toast.error('Select a category');
            return;
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
        setDisplayedCategories((prev) => (prev === 6 ? categories.content.length : 6));
    };


    return (
        <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center lg:p-12 p-4 font-quickSand">
            <div className="w-full lg:col-span-2 hidden lg:flex flex-col gap-5 place-self-start">
                <p className="text-lg font-quickSand font-semibold text-primary">1 of 4</p>
                <h2 className="text-2xl font-sora text-gray-100 font-semibold">Let’s begin with what Category of project you have</h2>
                <p className="text-lg text-gray-300 font-sora">This helps users find your projects with ease</p>
            </div>

            <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-6 items-start ">
                <h1 className="text-primary text-3xl font-bold font-sora">Choose a category</h1>
                <p className="text-base font-quickSand font-semibold">
                    Select a category that best suit your project
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                    <div className="flex flex-col pb-8">
                        <ul className="w-full flex gap-3 flex-wrap">

                            {isLoading && <LoadingDots />}

                            {Array.isArray(categories?.content) && categories.content.slice(0, displayedCategories).map((option: Category) => (
                                <li className="w-fit" key={option.id}>
                                    <TransitionFromBottom>
                                        <label className="flex flex-nowrap cursor-pointer py-1 px-2 text-sm transition-colors bg-transparent text-base border border-btnWarning rounded-lg hover:border-btnWarning [&:has(input:checked)]:border-btnWarning [&:has(input:checked)]:bg-btnWarning [&:has(input:checked)]:text-primaryWhite">
                                            <input
                                                {...register('categoryId', {
                                                    required: 'Select a category',
                                                })}
                                                type="radio"
                                                name="categoryId"
                                                value={option.id}
                                                className="cursor-pointer hidden"
                                            />
                                            <span className="flex whitespace-nowrap">{option.name}</span>
                                        </label>
                                    </TransitionFromBottom>
                                </li>
                            ))}
                        </ul>
                        <span
                            className="w-full text-right text-sm font-bold text-gray-200 cursor-pointer hover:underline"
                            onClick={handleSeeMoreLessClick}
                        >
                            {displayedCategories <= 6 ? 'See More' : 'See Less'}
                        </span>
                        {errors?.categoryId?.message && (
                            <p className="text-error text-sm mt-1">{errors?.categoryId?.message}</p>
                        )}
                    </div>
                    <span className="flex gap-10">
                        <Button label="Continue" variant="primary" fullWidth={false} size="medium" state={isValid ? "active" : "disabled"} />
                    </span>
                </form>
            </div>
        </div>
    );
};

export default SelectCategory;
