import React from 'react';
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

const ProjectCalender: React.FC<ProjectCalenderProps> = ({
  handleNext,
  handleGoBack,
}) => {
  const { data, setData } = useProjectFormStore();

  const form = useForm<{
    status: string;
    startDate: string;
    endDate: string;
  }>({
    defaultValues: {
      status: data.projectDetails.status ,
      startDate: data.projectDetails.startDate,
      endDate: data.projectDetails.endDate,
    },
    mode: "onChange"
  });

  const {
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = form;

  let projectStatus = watch('status')
  let projectStartDate = watch('startDate')
  let projectEndDate = watch('endDate')

  const onSubmit: SubmitHandler<{
    status: string;
    startDate: string;
    endDate: string;
  }> = async formData => {
    try {

       schema.parse(formData)
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
      // Loop through Zod error details and set errors using setError
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

  const statusOptions: any[] = ['ONGOING', 'UPCOMING', 'COMPLETED'];
  
    const { status, startDate, endDate } = useWatch({
    control: form.control,
    defaultValue: form.getValues(),
  });
const isFormValid = status && startDate && endDate && Object.keys(errors).length === 0;



  return (
    <div className="font-quickSand mx-auto grid w-full grid-cols-1 items-center gap-10 p-4 md:w-3/4 lg:grid-cols-5 lg:p-12">
      <div className="hidden w-full flex-col gap-5 place-self-start lg:col-span-2 lg:flex">
        <p className="font-quickSand text-primary text-lg font-semibold">
          3 of 4
        </p>
        <h2 className="font-sora text-gray-100 text-2xl font-semibold">
          The Happening
        </h2>
        <p className="text-gray-300 font-quickSand text-base">
          Let us know the what & when of your project
        </p>
      </div>

      <div className="flex w-full flex-col items-start space-y-6 rounded-[1rem] bg-[#F0EBD6] p-0 md:p-[2rem] lg:col-span-3 ">
        <h1 className="text-primary font-sora text-xl font-bold">
          About your project
        </h1>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <FormLabel label="choose status" />
              <FormSelect
                value={projectStatus}
                onChange={(value) => {setValue('status', value); console.log('status+++++', value);
                }}
                defaultValue={data.projectDetails.status || ""}
                placeholder="Choose status"
                options={statusOptions?.map(option => ({
                  label: option,
                  value: option.toLowerCase().replace(/\s/g, '_'),
                }))}
              />
              {errors && errors.status && (
                <p className="text-error mt-0 text-xs font-medium">
                  {errors.status.message}
                </p>
              )}
            </div>
            <div className="mt-4">
              <FormLabel label="Select date range" />
              <div className="flex gap-5 pb-8">
                <span>
                  <FormDatePicker
                  placeholder="start date"
                  date={projectStartDate}
                  onChange={(value: Date | any) => setValue('startDate', value.toISOString())}
                />
                {errors && errors.startDate && (
                  <p className="text-error mt-0 text-xs font-medium">
                    {errors.startDate.message}
                  </p>
                )}
                </span>
                <span>
                  <FormDatePicker
                  placeholder="end date"
                  date={projectEndDate}
                  onChange={(value: Date | any) => setValue('endDate', value.toISOString())}
             
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
      </div>
    </div>
  );
};

export default ProjectCalender;
