import React from 'react';
import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { TransitionParent } from '@/lib/utils/transition';
import Image from 'next/image';
import StepFourImg from '@/public/images/create-4.png';
import Button from '@/components/Common/Button/Button';
import { useOrganizationFormStore } from '@/lib/store/createOrgForm.store';
import toast from 'react-hot-toast';
import { Form } from '@/components/UI/Form';
import FormInput from '@/components/Form/FormInput';
import FormLabel from '@/components/Form/FormLabel';
import FormSelect from '@/components/Form/FormSelect';

interface OrgLinksFormProps {
  handleNext: () => void;
  handleGoBack: () => void;
}

const OrgLinksForm: React.FC<OrgLinksFormProps> = ({
  handleNext,
  handleGoBack,
}) => {
  const { data, setData } = useOrganizationFormStore();

  const form = useForm<{ linkType: string; linkValue: string }>({
    defaultValues: {
      linkType: data.organizationDetails.website ? 'website' : 'facebook',
      linkValue:
        data.organizationDetails.website || data.organizationDetails.facebook,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    register,
    watch,
  } = form;

  const onSubmit: SubmitHandler<{
    linkType: string;
    linkValue: string;
  }> = formData => {
    const { linkType, linkValue } = formData;

    // Append "https://" prefix for URL if necessary
    let formattedLinkValue = linkValue.trim();
    if (
      !formattedLinkValue.startsWith('http://') &&
      !formattedLinkValue.startsWith('https://')
    ) {
      formattedLinkValue = `https://${formattedLinkValue}`;
    }

    // Perform specific validation for Facebook URLs
    if (linkType === 'facebook') {
      if (!formattedLinkValue.includes('facebook.com/')) {
        toast.error('Invalid Facebook URL. Must include facebook.com/.');
        return;
      }
    }

    // Update the store with the entered values
    setData({
      organizationDetails: {
        ...data.organizationDetails,
        [linkType]: formattedLinkValue,
      },
    });

    handleNext();
  };

  const linkType = useWatch({ control: form.control, name: 'linkType' });

  const isFormValid = Object.keys(errors).length === 0;

  const linkOptions: any[] = ['website', 'facebook'];

  return (
    <TransitionParent className="w-screen">
      <div className="font-quickSand mx-auto grid w-full grid-cols-1 items-start gap-10 p-4 md:w-3/4 lg:grid-cols-5 lg:p-12">
        <div className="hidden lg:col-span-2 lg:block">
          <Image
            src={StepFourImg}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className="flex w-full flex-col items-start space-y-3 rounded-[1rem] bg-[#F0EBD6] p-0 md:p-[2rem] lg:col-span-3 ">
          <h1 className="text-primary font-sora text-xl font-bold md:text-3xl">
            Add a Link
          </h1>
          <p className="font-quickSand text-base">
            Add your website link or Facebook page
          </p>
          <Form {...form}>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-5 pb-8">
                <div className="flex flex-col">
                  <FormLabel label="Select link" />
                  <FormSelect
                    placeholder="Select link"
                    value={linkType}
                    onChange={value => {
                      setValue('linkType', value);
                    }}
                    defaultValue={''}
                    options={linkOptions?.map(option => ({
                      label: option,
                      value: option.toLowerCase().replace(/\s/g, '_'),
                    }))}
                  />
                </div>

                {linkType === 'website' && (
                  <div className="flex flex-col">
                    <FormInput
                      label="Website Url"
                      placeholder="https://"
                      {...register('linkValue')}
                    />
                  </div>
                )}

                {linkType === 'facebook' && (
                  <div className="flex flex-col">
                    <FormInput
                      label="Facebook Url"
                      placeholder="https://facebook.com/"
                      {...register('linkValue')}
                    />
                  </div>
                )}
              </div>
              <span className="flex gap-4">
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
    </TransitionParent>
  );
};

export default OrgLinksForm;
