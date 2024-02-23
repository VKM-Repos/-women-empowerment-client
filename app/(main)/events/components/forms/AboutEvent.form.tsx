'use client'
import React from "react";
import Button from "@/components/Common/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEventFormStore } from "@/lib/store/createEventForm.store";


interface AboutEventProps {
  handleNext: () => void;
}

const AboutEvent: React.FC<AboutEventProps> = ({ handleNext }) => {
  const { data, setData } = useEventFormStore(); 

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<{ title: string, description: string }>({
    defaultValues: {
      title: data.eventDetails.title, 
      description: data.eventDetails.description, 
    },
  });

  const onSubmit: SubmitHandler<{ title: string, description: string }> = async (formData) => {
  setData({
    eventDetails: {
      ...data.eventDetails,
      title: formData.title,
      description: formData.description,
    },
  });
  handleNext(); 
};

  return (
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center lg:p-12 p-4 font-quickSand">
        <div className="w-full lg:col-span-2 hidden lg:flex flex-col gap-5 place-self-start">
          <p className="text-lg font-quickSand font-semibold text-primary">1 of 3</p>
          <h2 className="text-2xl font-sora text-gray-100 font-semibold">Tell us about your event</h2>
          <p className="text-lg text-gray-300 font-sora">This information puts it out there</p>
        </div>

        <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-6 items-start ">
          <h1 className="text-primary text-xl font-bold font-sora">
            About your event
          </h1>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col pb-8">
              <input
                {...register("title", {
                  required: "This field is required",
                })}
                className="w-full p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                type="text"
                placeholder="Event title"
                name="title"
              />
              {errors?.title?.message && (
                <p className="text-error text-sm mt-1">
                  {errors?.title?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col pb-8">
              <textarea
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
            <Button
              label="Continue"
              variant="primary"
              fullWidth={false}
              size="medium"
              state={isValid ? "active" : "disabled"}
            />
          </form>
        </div>
      </div>
  );
};

export default AboutEvent;
