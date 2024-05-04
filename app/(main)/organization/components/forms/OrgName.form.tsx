'use client';
import React from 'react';
import { TransitionParent } from '@/lib/utils/transition';
import Image from 'next/image';
import StepOneImg from '@/public/images/create-org-1.png';
import Button from '@/components/Common/Button/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useOrganizationFormStore } from '@/lib/store/createOrgForm.store';
import { Form } from '@/components/UI/Form';
import FormInput from '@/components/Form/FormInput';

interface OrgNameFormProps {
  handleNext: () => void;
}

const OrgNameForm: React.FC<OrgNameFormProps> = ({ handleNext }) => {
  const { data, setData } = useOrganizationFormStore();
  const form = useForm<{ name: string }>({
    defaultValues: {
      name: data.organizationDetails.name,
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = form;

  const onSubmit: SubmitHandler<{ name: string }> = async formData => {
    setData({
      organizationDetails: {
        ...data.organizationDetails,
        name: formData.name,
      },
    });
    handleNext(); // Move to the next step
  };

  return (
    <TransitionParent>
      <div className="font-quickSand mx-auto grid w-full grid-cols-1 items-center gap-10 p-4 md:w-3/4 lg:grid-cols-5 lg:p-12">
        <div className="hidden lg:col-span-2 lg:block">
          <Image
            src={StepOneImg}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className="flex w-full flex-col items-start space-y-6 rounded-[1rem] bg-[#F0EBD6] p-0 md:p-[2rem] lg:col-span-3 ">
          <h1 className="text-primary font-sora text-xl font-bold md:text-3xl">
            Hey there 👋
          </h1>
          <p className="font-quickSand text-base font-semibold">
            Let’s create awareness for your Organization. Enter the name of your
            organization to get started
          </p>
          <Form {...form}>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col pb-8">
                <FormInput
                  label=""
                  placeholder="Organization Name"
                  {...register('name', {
                    required: 'Organization Name is required',
                  })}
                />
              </div>
              <Button
                label="Continue"
                variant="primary"
                fullWidth={false}
                size="medium"
                state={isValid ? 'active' : 'disabled'}
              />
            </form>
          </Form>
        </div>
      </div>
    </TransitionParent>
  );
};

export default OrgNameForm;
