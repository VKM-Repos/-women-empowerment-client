import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import StepSevenImg from '@/public/images/create-7.png';
import Button from '@/components/Common/Button/Button';
import { TransitionParent } from '@/lib/utils/transition';
import { useOrganizationFormStore } from '@/lib/store/createOrgForm.store';
import FormTextArea from '@/components/Form/FormTextArea';
import { Form } from '@/components/UI/Form';
import { ZodError, z } from 'zod';

interface OrgDescriptionFormProps {
  handleNext: () => void;
  handleGoBack: () => void;
  isLoading: boolean;
}

const OrgDescriptionForm: React.FC<OrgDescriptionFormProps> = ({
  handleNext,
  handleGoBack,
  isLoading,
}) => {
  const { data, setData } = useOrganizationFormStore();

  const orgDescriptionSchema = z.object({
    description: z
      .string()
      .min(100, { message: 'Description requires at least 100 characters' })
      .max(1000, { message: 'Description is too long!' }),
  });

  const form = useForm<{ description: string }>({
    defaultValues: {
      description: data.organizationDetails.description || '',
    },
  });
  const {
    register,
    handleSubmit,
    formState: { isValid },
    setError,
  } = form;

  const onSubmit: SubmitHandler<{ description: string }> = formData => {
    try {
      const validatedData = orgDescriptionSchema.parse(formData);
      setData({
        organizationDetails: {
          ...data.organizationDetails,
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
    <TransitionParent>
      <div className="font-quickSand mx-auto grid w-full grid-cols-1 items-start gap-10 p-4 md:w-3/4 lg:grid-cols-5 lg:p-12">
        <div className="hidden lg:col-span-2 lg:block">
          <Image
            src={StepSevenImg}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className="flex w-full flex-col items-start space-y-3 rounded-[1rem] bg-[#F0EBD6] p-0 md:p-[2rem] lg:col-span-3 ">
          <h1 className="text-primary font-sora text-xl font-bold md:text-3xl">
            About your organization
          </h1>
          <p className="font-quickSand text-base">
            To help people understand your organization give a basic description
            about your company
          </p>

          <Form {...form}>
            <form
              className="flex w-full flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <FormTextArea
                  label="Description"
                  placeholder="Describe your project"
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
                  label="Submit"
                  variant="primary"
                  fullWidth={false}
                  size="medium"
                  state={isValid ? 'active' : 'disabled'}
                  disabled={isLoading}
                />
              </span>
            </form>
          </Form>
        </div>
      </div>
    </TransitionParent>
  );
};

export default OrgDescriptionForm;
