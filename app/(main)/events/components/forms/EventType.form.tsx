"use client";
import React, { useState } from "react";
import Button from "@/components/Common/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEventFormStore } from "@/lib/store/createEventForm.store";

interface EventTypeProps {
  handleNext: () => void;
  handleGoBack: () => void;
}

const EventType: React.FC<EventTypeProps> = ({ handleNext, handleGoBack }) => {
  const { data, setData } = useEventFormStore();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<{
    type: string;
    link: string;
    location: string;
    startDate: string;
    endDate: string;
  }>({
    defaultValues: {
      type: data.type || "",
      link: data.link || "",
      location: data.location || "",
      startDate: data.startDate || "",
      endDate: data.endDate || "",
    },
  });

  const onSubmit: SubmitHandler<{
    type: string;
    link: string;
    location: string;
    startDate: string;
    endDate: string;
  }> = async (formData) => {
    setData({
        ...data,
        type: selectedOption,
        link: formData.link,
        location: formData.location,
        startDate: formData.startDate,
        endDate: formData.endDate,
    });
    handleNext();
  };

  return (
    <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center lg:p-12 p-4 font-quickSand">
      <div className="w-full lg:col-span-2 hidden lg:flex flex-col gap-5 place-self-start">
        <p className="text-lg font-quickSand font-semibold text-primary">
          2 of 3
        </p>
        <h2 className="text-2xl font-sora text-gray-100 font-semibold">
          What type of event are you having
        </h2>
        <p className="text-lg text-gray-300 font-sora">
          Let us know the what, when and where about your event
        </p>
      </div>

      <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-6 items-start ">
        <h1 className="text-primary text-xl font-bold font-sora">
          About your event
        </h1>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-5 pb-8">
            <select
              className="w-full p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="ONLINE">Online</option>
              <option value="PHYSICAL">Physical</option>
            </select>

            {selectedOption === "ONLINE" && (
              <div className="flex flex-col">
                <input
                  className="w-full p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                  type="url"
                  placeholder="URL link"
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
            )}

            {selectedOption === "PHYSICAL" && (
              <div className="flex flex-col">
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
            )}
          </div>
          <div className="flex flex-col pb-8">
            <label htmlFor="Event time and date" className="">Event Date and Time</label>
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

export default EventType;
