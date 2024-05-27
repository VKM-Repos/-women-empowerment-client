import React, { useState } from 'react';
import Button from '@/components/Common/Button/Button';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { useEventFormStore } from '@/lib/store/createEventForm.store';
import FormLabel from '@/components/Form/FormLabel';
import FormSelect from '@/components/Form/FormSelect';
import { FormDateTimePicker } from '@/components/Form/FormDateTimePicker';
import { ZodError, z } from 'zod';
import { cn } from '@/lib/utils';
import FormInput from '@/components/Form/FormInput';
import { Form } from '@/components/UI/Form';

interface EventTypeProps {
  handleNext: () => void;
  handleGoBack: () => void;
}

interface EventTypeFormData {
  type: string;
  link: string;
  location: string;
  startDate: string;
  endDate: string;
}

const schema = z.object({
  type: z.string().min(1, 'Event type is required'),
  link: z
    .string(),
  location: z.string(),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z
    .string()
    .min(1, 'End date is required')
});

const EventType: React.FC<EventTypeProps> = ({ handleNext, handleGoBack }) => {
  const { data, setData } = useEventFormStore();
  const [selectedOption, setSelectedOption] = useState<string>('');

  const form = useForm<z.infer<typeof schema>>({
    defaultValues: {
      type: data.eventDetails.type || '',
      link: data.eventDetails.link || '',
      location: data.eventDetails.location || '',
      startDate: data.eventDetails.startDate || '',
      endDate: data.eventDetails.endDate || '',
    },
    mode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { errors },
    setError,
    register,
    setValue,
    watch,
  } = form;

  let eventType = watch('type');
  let eventStartDate = watch('startDate');
  let eventEndDate = watch('endDate');

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (formData: EventTypeFormData) => {
    try {
      schema.parse(formData);
      setData({
        eventDetails: {
          ...data.eventDetails,
          type: formData.type,
          link: formData.link,
          location: formData.location,
          startDate: formData.startDate,
          endDate: formData.endDate,
        },
      });
      handleNext();
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach((err) => {
          const path = err.path[0];
          setError(path as keyof typeof formData, {
            type: 'manual',
            message: err.message,
          });
        });
      }
    }
  };

  const eventOptions: any[] = ['ONLINE', 'PHYSICAL'];

  const isFormValid = eventType && eventStartDate && eventEndDate && Object.keys(errors).length === 0;

  return (
    <div className="font-quickSand mx-auto grid w-full grid-cols-1 items-center gap-10 p-4 md:w-3/4 lg:grid-cols-5 lg:p-12">
      <div className="hidden w-full flex-col gap-5 place-self-start lg:col-span-2 lg:flex">
        <p className="font-quickSand text-primary text-lg font-semibold">
          2 of 3
        </p>
        <h2 className="font-sora text-gray-100 text-2xl font-semibold">
          What type of event are you having
        </h2>
        <p className="text-gray-300 font-quickSand text-base">
          Let us know the what, when and where about your event
        </p>
      </div>

      <div className="flex w-full flex-col items-start space-y-6 rounded-[1rem] bg-[#F0EBD6] p-0 md:p-[2rem] lg:col-span-3 ">
        <h1 className="text-primary font-sora text-xl font-bold">
          About your event
        </h1>
        <Form {...form}>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <FormLabel label="Select event type" />
            <FormSelect
              placeholder="Select event type"
              value={eventType}
              onChange={(value) => {
                setValue('type', value);
                setSelectedOption(value);
              }}
              defaultValue={''}
              options={eventOptions?.map((option) => ({
                label: option.toLowerCase().replace(/\s/g, '_'),
                value: option,
              }))}
            />
            {errors && errors.type && (
              <p className="text-error mt-0 text-xs font-medium">
                {errors.type.message}
              </p>
            )}
          </div>

          <div className={cn('mt-4', !eventType ? 'hidden' : 'block')}>
            {eventType === 'online' && (
              <div className="flex flex-col gap-0">
                <FormInput
                  label="Url link"
                  placeholder="https://"
                  {...register('link')}
                />
              </div>
            )}

            {eventType === 'physical' && (
              <div className="flex flex-col gap-0">
                <FormInput
                  label="location"
                  placeholder="Enter event location"
                  {...register('location')}
                />
              </div>
            )}
          </div>

          <div className="mt-4">
            <FormLabel label="Select date range" />
            <div className="flex gap-5 pb-8">
              <span>
                <FormDateTimePicker
                  placeholder="start date"
                  date={eventStartDate}
                  onChange={(value: Date | any) =>
                    setValue('startDate', value.toISOString().split('.')[0])
                  }
                />
                {errors && errors.startDate && (
                  <p className="text-error mt-0 text-xs font-medium">
                    {errors.startDate.message}
                  </p>
                )}
              </span>
              <span>
                <FormDateTimePicker
                  placeholder="end date"
                  date={eventEndDate}
                  onChange={(value: Date | any) =>
                    setValue('endDate', value.toISOString().split('.')[0])
                  }
                />
                {errors && errors.endDate && (
                  <p className="text-error mt-0 text-xs font-medium">
                    {errors.endDate.message}
                  </p>
                )}
              </span>
            </div>
          </div>

          <span className="flex gap-10">
            <Button
              label="Go Back"
              variant="secondary"
              fullWidth={false}
              size="medium"
              onClick={handleGoBack}
            />
            <Button
              label="Continue"
              variant="primary"
              fullWidth={false}
              size="medium"
              state={isFormValid ? 'active' : 'disabled'}
            />
          </span>
        </form>
        </Form>
      </div>
    </div>
  );
};

export default EventType;