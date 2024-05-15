'use client'
import React from "react";
import Button from "@/components/Common/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEventFormStore } from "@/lib/store/createEventForm.store";
import FormTextArea from "@/components/Form/FormTextArea";
import { Form } from "@/components/UI/Form";
import { ZodError, z } from "zod";
import FormInput from "@/components/Form/FormInput";


interface AboutEventProps {
  handleNext: () => void;
}

const AboutEvent: React.FC<AboutEventProps> = ({ handleNext }) => {
  const { data, setData } = useEventFormStore();

  const aboutEventSchema = z.object({
    title: z
      .string()
      .min(5, { message: 'Please enter at least 5 characters for the title.' })
      .max(250),
    description: z
      .string()
      .min(30, { message: 'Description requires at least 30 characters' })
      .max(1000, { message: 'Description is too long!' }),
  });

  const form = useForm<{ title: string, description: string }>({
    defaultValues: {
      title: data.eventDetails.title,
      description: data.eventDetails.description,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isValid },
    setError,
  } = form;

  const onSubmit: SubmitHandler<{ title: string, description: string }> = async (formData) => {
    try {
      const validatedData = aboutEventSchema.parse(formData);
      setData({
      eventDetails: {
        ...data.eventDetails,
        title: validatedData.title,
        description: validatedData.description,
      },
    });
    handleNext();
    } catch (error) {
       if (error instanceof ZodError) {
        error.errors.forEach(validationError => {
          setError(validationError.path[0] as keyof typeof formData, {
            type: 'manual',
            message: validationError.message,
          });
        });
      }
    }
    
  };

  return (
    <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center lg:p-12 p-4 font-quickSand">
      <div className="w-full lg:col-span-2 hidden lg:flex flex-col gap-5 place-self-start">
        <p className="text-lg font-quickSand font-semibold text-primary">1 of 3</p>
        <h2 className="text-2xl font-sora text-gray-100 font-semibold">Tell us about your event</h2>
        <p className="text-base text-gray-300 font-quickSand">This information puts it out there</p>
      </div>

      <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-6 items-start ">
        <h1 className="text-primary text-xl font-bold font-sora">
          About your event
        </h1>
        <Form {...form}>
            <form
              className="flex w-full flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-0">
              <FormInput
                label="Event title"
                placeholder="Eg. 'Girl-Child Care Scheme'"
                {...register('title', {
                  required: 'This field is required',
                })}
              />
            </div>
              <div className="flex flex-col">
                <FormTextArea
                  label="Description"
                  placeholder="Describe your event"
                  {...register('description', {
                    required: 'This field is required',
                  })}
                />
              </div>
              <span className="flex gap-10">
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

export default AboutEvent;
