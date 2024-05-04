import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useProjectFormStore } from "@/lib/store/createProjectForm.store";
import { Form } from "@/components/UI/Form";
import FormInput from "@/components/Form/FormInput";
import FormTextArea from "@/components/Form/FormTextArea";
import { z, ZodError } from "zod";
import Button from "@/components/Common/Button/Button";

interface ProjectDetailsProps {
    handleNext: () => void;
    handleGoBack: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ handleNext, handleGoBack }) => {
    const { data, setData } = useProjectFormStore();

    const projectDetailsSchema = z.object({
        title: z.string().min(5, { message: "Please enter at least 5 characters for the title." }).max(250),
        location: z.string().min(3, { message: "Please enter at least 3 characters for location" }).max(50),
        link: z.string().refine((value) => {
            const regex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
            return regex.test(value);
        }, { message: "Invalid URL format" }),
        description: z.string().min(100, { message: "Description requires at least 100 characters" }).max(1000, {message: "Description is too long!"}),
    });

    const form = useForm<{ title: string; location: string; link: string; description: string }>({
        defaultValues: {
            title: data.projectDetails.title,
            location: data.projectDetails.location,
            link: data.projectDetails.link,
            description: data.projectDetails.description,
        },
    });

    const {
        register,
        handleSubmit,
        formState: { isValid },
        setError,
    } = form;

    const onSubmit: SubmitHandler<{
        title: string;
        location: string;
        link: string;
        description: string;
    }> = async (formData) => {
        try {
            const validatedData = projectDetailsSchema.parse(formData);

            // Autofill "https://" prefix for URL if necessary
            let link = validatedData.link.trim();
            if (!link.startsWith("http://") && !link.startsWith("https://")) {
                link = `https://${link}`;
            }

            setData({
                projectDetails: {
                    ...data.projectDetails,
                    title: validatedData.title,
                    location: validatedData.location,
                    link,
                    description: validatedData.description,
                },
            });
            handleNext();
        } catch (error) {
            if (error instanceof ZodError) {
                error.errors.forEach((validationError) => {
                    // Set error message for corresponding form field
                    setError(validationError.path[0] as keyof typeof formData, {
                        type: "manual",
                        message: validationError.message,
                    });
                });
            }
        }
    };

    return (
        <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center lg:p-12 p-4 font-quickSand">
            <div className="w-full lg:col-span-2 hidden lg:flex flex-col gap-5 place-self-start">
                <p className="text-lg font-quickSand font-semibold text-primary">2 of 4</p>
                <h2 className="text-2xl font-sora text-gray-100 font-semibold">Tell us about the project</h2>
                <p className="text-lg text-gray-300 font-sora">This information puts it out there</p>
            </div>

            <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-6 items-start ">
                <h1 className="text-primary text-xl font-bold font-sora">About your project</h1>
                <Form {...form}>
                    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col">
                            <FormInput
                                label=""
                                placeholder="Project title"
                                {...register("title", {
                                    required: "This field is required",
                                })}
                            />
                        </div>
                        <div className="flex flex-col">
                            <FormInput
                                label=""
                                placeholder="Location"
                                {...register("location", {
                                    required: "This field is required",
                                })}
                            />
                        </div>
                        <div className="flex flex-col">
                            <FormInput
                                label=""
                                placeholder="https://"
                                {...register("link", {
                                    required: "This field is required",
                                })}
                            />
                        </div>
                        <div className="flex flex-col">
                            <FormTextArea
                                label=""
                                placeholder="Project description"
                                {...register("description", {
                                    required: "This field is required",
                                })}
                            />
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
                </Form>
            </div>
        </div>
    );
};

export default ProjectDetails;
