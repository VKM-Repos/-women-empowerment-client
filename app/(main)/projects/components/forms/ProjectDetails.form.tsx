import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useProjectFormStore } from '@/lib/store/createProjectForm.store';
import { Form, FormLabel } from '@/components/UI/Form';
import FormInput from '@/components/Form/FormInput';
import FormTextArea from '@/components/Form/FormTextArea';
import { z, ZodError } from 'zod';
import Button from '@/components/Common/Button/Button';

interface ProjectDetailsProps {
  handleNext: () => void;
  handleGoBack: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  handleNext,
  handleGoBack,
}) => {
  const { data, setData } = useProjectFormStore();

  const projectDetailsSchema = z.object({
    title: z
      .string()
      .min(5, { message: 'Please enter at least 5 characters for the title.' })
      .max(250),
    location: z
      .string()
      .min(3, { message: 'Please enter at least 3 characters for location' })
      .max(50),
    link: z.string().refine(
      value => {
        const regex =
          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
        return regex.test(value);
      },
      { message: 'Invalid URL format' }
    ),
    description: z
      .string()
      .min(100, { message: 'Description requires at least 100 characters' })
      .max(1000, { message: 'Description is too long!' }),
  });

  const form = useForm<{
    title: string;
    location: string;
    link: string;
    description: string;
  }>({
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
  }> = async formData => {
    try {
      const validatedData = projectDetailsSchema.parse(formData);

      // Autofill "https://" prefix for URL if necessary
      let link = validatedData.link.trim();
      if (!link.startsWith('http://') && !link.startsWith('https://')) {
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
        error.errors.forEach(validationError => {
          // Set error message for corresponding form field
          setError(validationError.path[0] as keyof typeof formData, {
            type: 'manual',
            message: validationError.message,
          });
        });
      }
    }
  };

  return (
    <div className="font-quickSand mx-auto grid w-full grid-cols-1 items-center gap-10 p-4 md:w-3/4 lg:grid-cols-5 lg:p-12">
      <div className="hidden w-full flex-col gap-5 place-self-start lg:col-span-2 lg:flex">
        <p className="font-quickSand text-primary text-lg font-semibold">
          2 of 4
        </p>
        <h2 className="font-sora text-gray-100 text-2xl font-semibold">
          Tell us about the project
        </h2>
        <p className="text-gray-300 font-quickSand text-base">
          This information puts it out there
        </p>
      </div>

      <div className="flex w-full flex-col items-start space-y-6 rounded-[1rem] bg-[#F0EBD6] p-0 md:p-[2rem] lg:col-span-3 ">
        <h1 className="text-primary font-sora text-xl font-bold">
          About your project
        </h1>
        <Form {...form}>
          <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-0">
              <FormInput
                label="Project title"
                placeholder="Eg. 'Girl-Child Care Scheme'"
                {...register('title', {
                  required: 'This field is required',
                })}
              />
            </div>
            <div className="flex flex-col">
              <FormInput
                label="Location"
                placeholder="E.g Cross River"
                {...register('location', {
                  required: 'This field is required',
                })}
              />
            </div>
            <div className="flex flex-col">
              <FormInput
                label="Link"
                placeholder="https://"
                {...register('link', {
                  required: 'This field is required',
                })}
              />
            </div>
            <div className="flex flex-col">
              <FormTextArea
                label="Description"
                placeholder="Project description"
                {...register('description', {
                  required: 'This field is required',
                })}
              />
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
                state={isValid ? 'active' : 'disabled'}
              />
            </span>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProjectDetails;
