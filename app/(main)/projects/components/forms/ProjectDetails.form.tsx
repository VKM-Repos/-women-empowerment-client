'use client'
import React from "react";
import Button from "@/components/Common/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useProjectFormStore } from "@/lib/store/createProjectForm.store";



interface ProjectDetailsProps {
    handleNext: () => void;
    handleGoBack: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ handleNext, handleGoBack }) => {
    const { data, setData } = useProjectFormStore();

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm<{ title: string, location: string, link: string, description: string }>({
        defaultValues: {
            title: data.projectDetails.title,
            location: data.projectDetails.title,
            link: data.projectDetails.title,
            description: data.projectDetails.description,
        },
    });

    const onSubmit: SubmitHandler<{ title: string, location: string, link: string, description: string }> = async (formData) => {
        // Autofill "https://" prefix for URL
        if (formData.link && !formData.link.startsWith('https://')) {
        formData.link = 'https://' + formData.link;
        }
        

        
        setData({
            projectDetails: {
                ...data.projectDetails,
                title: formData.title,
                location: formData.location,
                link: formData.link,
                description: formData.description,
            },
        });
        handleNext();
    };

    return (
        <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center lg:p-12 p-4 font-quickSand">
            <div className="w-full lg:col-span-2 hidden lg:flex flex-col gap-5 place-self-start">
                <p className="text-lg font-quickSand font-semibold text-primary">2 of 4</p>
                <h2 className="text-2xl font-sora text-gray-100 font-semibold">Tell us about the project</h2>
                <p className="text-lg text-gray-300 font-sora">This information puts it out there</p>
            </div>

            <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-6 items-start ">
                <h1 className="text-primary text-xl font-bold font-sora">
                    About your project
                </h1>
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col pb-4">
                        <input
                            {...register("title", {
                                required: "This field is required",
                            })}
                            className="w-full p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                            type="text"
                            placeholder="Project title"
                            name="title"
                        />
                        {errors?.title?.message && (
                            <p className="text-error text-sm mt-1">
                                {errors?.title?.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col pb-4">
                        <input
                            className="w-full p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                            type="address"
                            placeholder="Location"
                            {...register("location", {
                                required: "this field is empty",
                            })}
                            name="location"
                        />
                        {errors.location && (
                            <span className="text-error text-xs">
                                {errors.location.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col pb-4">
                        <input
                            className="w-full p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                            type="text"
                            placeholder="Project link"
                            {...register("link", {
                                required: "this field is empty",
                            })}
                            name="link"
                        />
                        {errors.link && (
                            <span className="text-error text-xs">
                                {errors.link.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col pb-4">
                        <textarea
                            maxLength={500}
                            placeholder="Description"
                            className="w-full h-[6rem] p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                            {...register("description", {
                                required: "This field is required",
                            })}
                            name="description"
                        />
                        {errors.description && (
                            <span className="text-error text-xs">
                                {errors.description.message}
                            </span>
                        )}
                    </div>
                    <span className="flex gap-10">
                        <Button
                            label="Go Back"
                            variant="primary"
                            fullWidth={false}
                            size="medium"
                            onClick={handleGoBack}
                        />
                        <Button
                            label="Continue"
                            variant="primary"
                            fullWidth={false}
                            size="medium"
                            state={isValid ? "active" : "disabled"}
                        />
                    </span>
                </form>
            </div>
        </div>
    );
};

export default ProjectDetails;
