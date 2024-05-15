import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import StepSixImg from "@/public/images/create-6.png";
import Button from "@/components/Common/Button/Button";
import { useOrganizationFormStore } from "@/lib/store/createOrgForm.store";
import { Form } from "@/components/UI/Form";
import FormInput from "@/components/Form/FormInput";
import { ZodError, z } from "zod";

interface OrgContactFormProps {
  handleNext: () => void;
  handleGoBack: () => void;
}

const OrgContactForm: React.FC<OrgContactFormProps> = ({
  handleNext,
  handleGoBack,
}) => {
  const { data, setData } = useOrganizationFormStore();

     const orgContactSchema = z.object({
      phoneNumber: z.string().min(11, { message: "Please enter a valid phone number." }).max(11, { message: "Phone number should not exceed 11 numbers." }).regex(/^\+?\d+$/, { message: "Invalid phone number format." }),
      email: z.string().email({ message: "Invalid email address format." }).max(250, { message: "Email address should not exceed 250 characters." }),
    });

  const form= useForm<{ email: string; phoneNumber: string }>({
    defaultValues: {
      email: data.organizationDetails.email || "",
      phoneNumber: data.organizationDetails.phoneNumber || "",
    },
  });
  const {
        register,
        handleSubmit,
        formState: { isValid },
        setError,
    } = form;

  const onSubmit: SubmitHandler<{ email: string; phoneNumber: string }> = (formData) => {

    try {
        const validatedData = orgContactSchema.parse(formData);
      setData({
        organizationDetails: {
          ...data.organizationDetails,
          email: validatedData.email,
          phoneNumber: validatedData.phoneNumber,
        },
      });
      handleNext();
    } catch (error) {
       if (error instanceof ZodError) {
                error.errors.forEach((validationError) => {
                    // Set error message for corresponding form field
                    setError(validationError.path[0] as keyof typeof formData, {
                        type: "manual",
                        message: validationError.message,
                    });
                });
            }
    }

  
  };


  return (
    <TransitionParent>
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start lg:p-12 p-4 font-quickSand">
        <div className="lg:col-span-2 hidden lg:block">
          <Image
            src={StepSixImg}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-3 items-start ">
          <h1 className="text-primary text-xl md:text-3xl font-bold font-sora">
            How can we reach you?
          </h1>
          <p className="text-base font-quickSand">
            A means for people to contact your organization
          </p>
         
           <Form {...form}>
            <form className="w-full py-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-5 pb-8">
                <div className="flex flex-col">
                <FormInput
                  label="Email Address"
                  placeholder="hello@womenhub.com"
                  {...register('email', {
                    required: 'This field is required',
                  })}
                />
                </div>
                <div className="flex flex-col">
                  <FormInput
                  label="Phone number"
                  placeholder="+234"
                  {...register('phoneNumber', {
                    required: 'This field is required',
                  })}
                />
                </div>
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

export default OrgContactForm;
