import React, { useEffect, useState } from 'react';
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
  type: 'ONLINE' | 'PHYSICAL';
  link?: string | null;
  location?: string | null;
  startDate: string;
  endDate: string;
}

const urlRegex =
  /^(https?:\/\/)?((([a-zA-Z\d]([a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(\#[-a-zA-Z\d_]*)?$/;

const schema = z.object({
  type: z.enum(['ONLINE', 'PHYSICAL']),
  link: z
    .string()
    .optional()
    .nullable()
    .refine(link => {
      if (!link) return true;
      return urlRegex.test(link);
    }, 'Invalid URL'),
  location: z.string().optional().nullable(),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
});

const EventType: React.FC<EventTypeProps> = ({ handleNext, handleGoBack }) => {
  const { data, setData } = useEventFormStore();
  const [selectedOption, setSelectedOption] = useState<string>('');

  const form = useForm<z.infer<typeof schema>>({
    defaultValues: {
      type: (data.eventDetails.type as 'ONLINE' | 'PHYSICAL') || undefined,
      link: data.eventDetails.link || '',
      location: data.eventDetails.location || '',
      startDate: data.eventDetails.startDate || '',
      endDate: data.eventDetails.endDate || '',
    },
    mode: 'all',
  });

  const {
    handleSubmit,
    formState: { errors },
    setError,
    register,
    setValue,
    watch,
    clearErrors,
  } = form;

  const eventType = watch('type');
  const eventStartDate = watch('startDate');
  const eventEndDate = watch('endDate');

  const validateDates = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const now = new Date();

    // Check if start date is in the past
    if (startDate < now) {
      return 'Event cannot start in the past, please choose a future date.';
    }

    // Check if end date is before start date
    if (endDate <= startDate) {
      return 'End date must be after the start date.';
    }

    // Optionally, check if end date is within a year from now
    if (
      endDate > new Date(now.getFullYear() + 1, now.getMonth(), now.getDate())
    ) {
      return 'End date must be within one year from now.';
    }

    return null;
  };

  useEffect(() => {
    clearErrors('startDate');
    clearErrors('endDate');
    clearErrors('type');
    clearErrors('link');
    clearErrors('location');
  }, [eventStartDate, eventEndDate, eventType, location]);

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async formData => {
    try {
      schema.parse(formData);
      let formattedLinkValue = formData.link?.trim() ?? '';
      if (
        formattedLinkValue &&
        !formattedLinkValue.startsWith('http://') &&
        !formattedLinkValue.startsWith('https://')
      ) {
        formattedLinkValue = `https://${formattedLinkValue}`;
      }

      if (eventType === 'ONLINE' && !formattedLinkValue) {
        setError('link', {
          type: 'manual',
          message: 'URL is required for online events',
        });
        clearErrors('startDate');
        clearErrors('endDate');
        clearErrors('type');
        clearErrors('location');
        return;
      }

      if (eventType === 'PHYSICAL' && !formData.location) {
        setError('location', {
          type: 'manual',
          message: 'Please enter the location for physical events',
        });
        clearErrors('startDate');
        clearErrors('endDate');
        clearErrors('type');
        clearErrors('link');

        return;
      }

      const dateError = validateDates(formData.startDate, formData.endDate);
      if (dateError) {
        setError('startDate', { type: 'manual', message: dateError });
        setError('endDate', { type: 'manual', message: dateError });
        return;
      }

      setData({
        eventDetails: {
          ...data.eventDetails,
          type: formData.type,
          link: formattedLinkValue || '',
          location: formData.location || '',
          startDate: formData.startDate,
          endDate: formData.endDate,
        },
      });
      handleNext();
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach(err => {
          const path = err.path[0];
          setError(path as keyof z.infer<typeof schema>, {
            type: 'manual',
            message: err.message,
          });
        });
      }
    }
  };

  const eventOptions: any[] = ['ONLINE', 'PHYSICAL'];

  const isFormValid =
    eventType &&
    eventStartDate &&
    eventEndDate &&
    Object.keys(errors).length === 0;

  const formatDateTime = (date: Date): string => {
    const pad = (num: number) => num.toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1); // Months are zero-indexed
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  };
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
                onChange={value => {
                  setValue('type', value);
                  setSelectedOption(value);
                }}
                defaultValue={''}
                options={eventOptions?.map(option => ({
                  label: option.toLowerCase().replace(/\s/g, '_'),
                  value: option,
                }))}
              />
              {errors.type && (
                <p className="text-error mt-0 text-xs font-medium">
                  {errors.type.message}
                </p>
              )}
            </div>

            <div className={cn('mt-4', !eventType ? 'hidden' : 'block')}>
              {eventType === 'ONLINE' && (
                <div className="flex flex-col gap-0">
                  <FormInput
                    label="Url link"
                    placeholder="https://"
                    {...register('link')}
                  />
                  {errors?.link && (
                    <p className="text-error mt-0 text-xs font-medium">
                      {errors?.link.message?.toString()}
                    </p>
                  )}
                </div>
              )}

              {eventType === 'PHYSICAL' && (
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
                      setValue('startDate', formatDateTime(value))
                    }
                  />
                  {errors.startDate && errors.endDate && (
                    <p className="text-error mt-0 text-xs font-medium">
                      {errors.startDate.message
                        ? errors.startDate.message
                        : errors.endDate?.message}
                    </p>
                  )}
                </span>
                <span>
                  <FormDateTimePicker
                    placeholder="end date"
                    date={eventEndDate}
                    onChange={(value: Date | any) =>
                      setValue('endDate', formatDateTime(value))
                    }
                  />
                  {/* {errors.endDate && (
                    <p className="text-error mt-0 text-xs font-medium">
                      {errors.endDate.message}
                    </p>
                  )} */}
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
