import { TransitionParent } from '@/lib/utils/transition';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import StepFiveImg from '@/public/images/create-5.png';
import statesList from '@/lib/utils/nigerian-states.json';
import Button from '@/components/Common/Button/Button';
import { useOrganizationFormStore } from '@/lib/store/createOrgForm.store';
import FormSelect from '@/components/Form/FormSelect';
import { Form } from '@/components/UI/Form';
import FormInput from '@/components/Form/FormInput';

interface OrgAddressFormProps {
  handleNext: () => void;
  handleGoBack: () => void;
}

const OrgAddressForm: React.FC<OrgAddressFormProps> = ({
  handleNext,
  handleGoBack,
}) => {
  const { data, setData } = useOrganizationFormStore();
  const form = useForm<{ state: string; postalCode: string; street: string }>({
    defaultValues: {
      state: data.organizationDetails.state || '',
      postalCode: data.organizationDetails.postalCode || '',
      street: data.organizationDetails.street || '',
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
  } = form;

  const onSubmit: SubmitHandler<{
    state: string;
    postalCode: string;
    street: string;
  }> = formData => {
    // Update the store with the entered address details
    setData({
      organizationDetails: {
        ...data.organizationDetails,
        state: formData.state,
        postalCode: formData.postalCode,
        street: formData.street,
      },
    });
    handleNext(); // Move to the next step
  };

  return (
    <TransitionParent>
      <div className="font-quickSand mx-auto grid w-full grid-cols-1 items-start gap-10 p-4 md:w-3/4 lg:grid-cols-5 lg:p-12">
        <div className="hidden lg:col-span-2 lg:block">
          <Image
            src={StepFiveImg}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className="flex w-full flex-col items-start space-y-3 rounded-[1rem] bg-[#F0EBD6] p-0 md:p-[2rem] lg:col-span-3 ">
          <h1 className="text-primary font-sora text-xl font-bold md:text-3xl">
            Where is your organization located?
          </h1>
          <p className="font-quickSand text-base font-semibold">
            These details help people locate you and get in touch
          </p>
          <Form {...form}>
            <form className="w-full py-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-5 pb-8">
                <div className="flex flex-col">
                  <FormSelect
                    label=""
                    // required
                    options={statesList?.map(option => ({
                      label: option,
                      value: option.toLowerCase().replace(/\s/g, '_'),
                    }))}
                    {...register('state', {
                      required: 'This field is required',
                    })}
                  />
                </div>
                <div className="flex flex-col">
                <FormInput
                  label=""
                  placeholder="Postal Code"
                  {...register('postalCode', {
                    required: 'This field is required',
                  })}
                />
                </div>
                <div className="flex flex-col">
                  <FormInput
                  label=""
                  placeholder="Street Address"
                  {...register('street', {
                    required: 'This field is required',
                  })}
                />
                </div>
              </div>
              <span className="flex gap-4">
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
    </TransitionParent>
  );
};

export default OrgAddressForm;
