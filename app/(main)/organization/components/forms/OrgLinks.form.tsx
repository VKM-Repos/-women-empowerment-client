import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TransitionParent } from '@/lib/utils/transition';
import Image from 'next/image';
import StepFourImg from '@/public/images/create-4.png';
import Button from '@/components/Common/Button/Button';
import { useOrganizationFormStore } from '@/lib/store/createOrgForm.store';
import toast from 'react-hot-toast';
import FormSelect from '@/components/Form/FormSelect';
import { Form } from '@/components/UI/Form';
import FormInput from '@/components/Form/FormInput';


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
        data.organizationDetails.website ||
        data.organizationDetails.facebook
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    watch,
  } = form;

  const onSubmit: SubmitHandler<{
    linkType: string;
    linkValue: string;
  }> = formData => {
    if (!linkType.trim()) {
      setError('linkType', {
        type: 'manual',
        message: 'Link is required',
      });
      return;
    }

    // Perform additional validation for the Facebook URL
    if (
      formData.linkType === 'facebook' &&
      !formData.linkValue.includes('facebook.com/')
    ) {
      toast.error('Invalid Facebook URL. Must include facebook.com/.');
      return;
    }

    // Update the store with the entered values
    setData({
      organizationDetails: {
        ...data.organizationDetails,
        [formData.linkType]: formData.linkValue,
      },
    });

    handleNext();
  };

  const linkType = watch('linkType');

  const linkOptions: any[] = [
    { label: 'Website', value: 'website' },
    { label: 'Facebook Page', value: 'facebook' },
  ];

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
          <p className="font-quickSand text-base font-semibold">
            Add your website link or Facebook page
          </p>
          <Form {...form}>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-5 pb-8">
                <FormSelect
                  label="Select Link Type"
                  required
                  options={linkOptions}
                  {...register('linkType')}
                />

                {linkType === 'website' && (
                  <div className="flex flex-col">
                    <FormInput
                      label=''
                      placeholder="Website URL"
                      {...register('linkValue')}
                    />
                  </div>
                )}

                {linkType === 'facebook' && (
                  <div className="flex flex-col">
                    <FormInput
                      label=''
                      placeholder="Facebook URL"
                      {...register('linkValue')}
                    />
                  </div>
                )}
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

export default OrgLinksForm;
