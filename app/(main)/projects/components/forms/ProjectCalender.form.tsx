import React, { useEffect } from 'react';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { useProjectFormStore } from '@/lib/store/createProjectForm.store';
import Button from '@/components/Common/Button/Button';
import FormSelect from '@/components/Form/FormSelect';
import { FormDatePicker } from '@/components/Form/FormDatePicker';
import FormLabel from '@/components/Form/FormLabel';
import { ZodError, z } from 'zod';

interface ProjectCalenderProps {
  handleNext: () => void;
  handleGoBack: () => void;
}

const schema = z.object({
  status: z.string().min(1, 'Status is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
});

const ProjectCalender: React.FC<ProjectCalenderProps> = ({ handleNext, handleGoBack }) => {
 const { data, setData } = useProjectFormStore();

  const form = useForm<z.infer<typeof schema>>({
    defaultValues: {
      status: data.projectDetails.status,
      startDate: data.projectDetails.startDate,
      endDate: data.projectDetails.endDate,
    },
    mode: 'all',
  });

  const {
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
    clearErrors,
  } = form;

  const projectStatus = watch('status');
  const projectStartDate = watch('startDate');
  const projectEndDate = watch('endDate');

  const validateDates = (start: string, end: string, status: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const now = new Date();

    if (status === 'UPCOMING') {
      if (startDate <= now) {
        return 'Start date must be in the future for upcoming projects';
      }
      if (endDate < startDate) {
        return 'End date must be after the start date for upcoming projects';
      }
    } else if (status === 'ONGOING') {
      if (startDate > now) {
        return 'Start date cannot be in the future for ongoing projects';
      }
      if (endDate < now) {
        return 'End date cannot be in the past for ongoing projects';
      }
      if (endDate < startDate) {
        return 'End date must be after the start date for ongoing projects';
      }
    } else if (status === 'COMPLETED') {
      if (startDate > now) {
        return 'Start date cannot be in the future for completed projects';
      }
      if (endDate > now) {
        return 'End date cannot be in the future for completed projects';
      }
      if (endDate < startDate) {
        return 'End date must be after the start date for completed projects';
      }
    }

    return null;
  };

  useEffect(() => {
    clearErrors('startDate');
    clearErrors('endDate');
  }, [projectStartDate, projectEndDate, projectStatus, clearErrors]);

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async (formData) => {
    try {
      schema.parse(formData);

      const dateError = validateDates(formData.startDate, formData.endDate, formData.status);
      if (dateError) {
        setError('startDate', { type: 'manual', message: dateError });
        setError('endDate', { type: 'manual', message: dateError });
        return;
      }

      setData({
        projectDetails: {
          ...data.projectDetails,
          status: formData.status,
          startDate: formData.startDate,
          endDate: formData.endDate,
        },
      });
      handleNext();
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach((err) => {
          const path = err.path[0];
          setError(path as keyof z.infer<typeof schema>, {
            type: 'manual',
            message: err.message,
          });
        });
      }
    }
  };

  const statusOptions = ['ONGOING', 'UPCOMING', 'COMPLETED'];

  const isFormValid =
    projectStatus &&
    projectStartDate &&
    projectEndDate &&
    Object.keys(errors).length === 0;

  const formatDateTime = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

 



  return (
    <div className="font-quickSand mx-auto grid w-full grid-cols-1 items-center gap-10 p-4 md:w-3/4 lg:grid-cols-5 lg:p-12">
      <div className="hidden w-full flex-col gap-5 place-self-start lg:col-span-2 lg:flex">
        <p className="font-quickSand text-primary text-lg font-semibold">3 of 4</p>
        <h2 className="font-sora text-gray-100 text-2xl font-semibold">The Happening</h2>
        <p className="text-gray-300 font-quickSand text-base">Let us know the what & when of your project</p>
      </div>

      <div className="flex w-full flex-col items-start space-y-6 rounded-[1rem] bg-[#F0EBD6] p-0 md:p-[2rem] lg:col-span-3">
        <h1 className="text-primary font-sora text-xl font-bold">About your project</h1>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <FormLabel label="Choose status" />
            <FormSelect
              value={projectStatus}
              onChange={(value) => {
                setValue('status', value);
              }}
              defaultValue={data.projectDetails.status || ''}
              placeholder="Choose status"
              options={statusOptions.map((option) => ({
                label: option.toLowerCase().replace(/\s/g, '_'),
                value: option,
              }))}
            />
            {errors.status && (
              <p className="text-error mt-0 text-xs font-medium">{errors.status.message}</p>
            )}
          </div>

          <div className="mt-4">
            <FormLabel label="Select date range" />
            <div className="grid grid-cols-2 gap-5 pb-8">
              <span>
                <FormDatePicker
                  placeholder="Start date"
                  date={projectStartDate}
                  onChange={(value: Date | any) => setValue('startDate', formatDateTime(value))}
                />
                {errors.startDate && (
                  <p className="text-error mt-0 text-xs font-medium">{errors.startDate.message ? errors.startDate.message : errors.endDate?.message}</p>
                )}
              </span>
              <span>
                <FormDatePicker
                  placeholder="End date"
                  date={projectEndDate}
                  onChange={(value: Date | any) => setValue('endDate', formatDateTime(value))}
                />
                {/* {errors.endDate && (
                  <p className="text-error mt-0 text-xs font-medium">{errors.endDate.message}</p>
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
      </div>
    </div>
  );
};

export default ProjectCalender;
