"use client";
import React, { useState } from "react";
import Button from "@/components/Common/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useProjectFormStore } from "@/lib/store/createProjectForm.store";

interface ProjectCalenderProps {
    handleNext: () => void;
    handleGoBack: () => void;
}

const ProjectCalender: React.FC<ProjectCalenderProps> = ({ handleNext, handleGoBack }) => {
    const { data, setData } = useProjectFormStore();
    const [selectedOption, setSelectedOption] = useState<string>("");

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid },
    } = useForm<{
        status: string;
        startDate: string;
        endDate: string;
    }>({
        defaultValues: {
            status: data.projectDetails.status || "",
            startDate: data.projectDetails.startDate || "",
            endDate: data.projectDetails.endDate || "",
        },
    });

    const onSubmit: SubmitHandler<{
        status: string;
        startDate: string;
        endDate: string;
    }> = async (formData) => {
        setData({
            projectDetails: {
                ...data.projectDetails,
                status: selectedOption,
                startDate: formData.startDate,
                endDate: formData.endDate,
            },
        });
        handleNext();
    };

    return (
        <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center lg:p-12 p-4 font-quickSand">
            <div className="w-full lg:col-span-2 hidden lg:flex flex-col gap-5 place-self-start">
                <p className="text-lg font-quickSand font-semibold text-primary">
                    3 of 4
                </p>
                <h2 className="text-2xl font-sora text-gray-100 font-semibold">
                    The Happening
                </h2>
                <p className="text-lg text-gray-300 font-sora">
                    Let us know the the the what & when of your project
                </p>
            </div>

            <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-6 items-start ">
                <h1 className="text-primary text-xl font-bold font-sora">
                    About your project
                </h1>
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-5 pb-8">
                        <select
                            className="w-full p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                            value={selectedOption}
                            {...register("status", {
                                required: "this field is empty",
                            })}
                            onChange={(e) => setSelectedOption(e.target.value)}

                        >
                            <option value="">Select status</option>
                            <option value="UPCOMING">Upcoming</option>
                            <option value="ONGOING">Ongoing</option>
                            <option value="COMPLETED">Completed</option>
                        </select>

                    </div>
                    <div className="flex flex-col pb-8">
                        <label htmlFor="Project time and date" className="">Project Date and Time</label>
                        {/* <DatePicker /> */}
                        <span className="flex items-start justify-start gap-5">
                            <input
                                className="w-1/3 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                                type="date"
                                placeholder="Start Date"
                                {...register("startDate", {
                                    required: "this field is empty",
                                })}
                                name="startDate"
                            />
                            <input
                                className="w-1/3 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                                type="date"
                                placeholder="End Date"
                                {...register("endDate", {
                                    required: "this field is empty",
                                })}
                                name="endDate"
                            />
                        </span>
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

export default ProjectCalender;
