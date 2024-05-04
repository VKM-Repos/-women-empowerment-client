import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useProjectFormStore } from '@/lib/store/createProjectForm.store';
import { Form, FormLabel } from '@/components/UI/Form';
import Button from '@/components/Common/Button/Button';
import FormSelect, { Option } from '@/components/Form/FormSelect';
import { z, ZodError } from 'zod';
import FormDatePicker from '@/components/Form/FormDatePicker';

interface ProjectCalenderProps {
  handleNext: () => void;
  handleGoBack: () => void;
}

const ProjectCalender: React.FC<ProjectCalenderProps> = ({
  handleNext,
  handleGoBack,
}) => {
  const { data, setData } = useProjectFormStore();

  const projectCalenderSchema = z.object({
    status: z.string().min(1, { message: 'Please select the status' }),
    startDate: z.string().min(1, { message: 'Start date is required' }),
    endDate: z.string().min(1, { message: 'End date is required' }),
  });

  const form = useForm<{
    status: string;
    startDate: string;
    endDate: string;
  }>({
    defaultValues: {
      status: data.projectDetails.status || '',
      startDate: data.projectDetails.startDate || '',
      endDate: data.projectDetails.endDate || '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { isValid },
    setError,
  } = form;

  const onSubmit: SubmitHandler<{
    status: string;
    startDate: string;
    endDate: string;
  }> = async formData => {
    try {
      const validatedData = projectCalenderSchema.parse(formData);

      setData({
        projectDetails: {
          ...data.projectDetails,
          status: validatedData.status,
          startDate: validatedData.startDate,
          endDate: validatedData.endDate,
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

  const statusOptions: Option[] = [
    { label: 'Upcoming', value: 'UPCOMING' },
    { label: 'Ongoing', value: 'ONGOING' },
    { label: 'Completed', value: 'COMPLETED' },
  ];

  return (
    <div className="font-quickSand mx-auto grid w-full grid-cols-1 items-center gap-10 p-4 md:w-3/4 lg:grid-cols-5 lg:p-12">
      <div className="hidden w-full flex-col gap-5 place-self-start lg:col-span-2 lg:flex">
        <p className="font-quickSand text-primary text-lg font-semibold">
          3 of 4
        </p>
        <h2 className="font-sora text-gray-100 text-2xl font-semibold">
          The Happening
        </h2>
        <p className="text-gray-300 font-sora text-lg">
          Let us know the what & when of your project
        </p>
      </div>

      <div className="flex w-full flex-col items-start space-y-6 rounded-[1rem] bg-[#F0EBD6] p-0 md:p-[2rem] lg:col-span-3 ">
        <h1 className="text-primary font-sora text-xl font-bold">
          About your project
        </h1>
        <Form {...form}>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5">
              <FormSelect
                label="Status"
                options={statusOptions}
                {...register('status', {
                  required: 'Please select the status',
                })}
              />
            </div>
            <div className="">
              <FormLabel className="mb-2 flex gap-1 font-semibold">
              Select Date range
            </FormLabel>
            <div className="flex gap-5 pb-8">
              <FormDatePicker name="startDate" label="Start Date" />
              <FormDatePicker name="endDate" label="End Date" />
            </div>
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
                state={isValid ? 'active' : 'disabled'}
              />
            </span>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProjectCalender;
