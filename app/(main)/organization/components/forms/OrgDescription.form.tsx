import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import StepSevenImg from "@/public/images/create-7.png";
import Button from "@/components/Common/Button/Button";
import { TransitionParent } from "@/lib/utils/transition";
import { useOrganizationFormStore } from "@/lib/store/createOrgForm.store";

interface OrgDescriptionFormProps {
  handleNext: () => void;
  handleGoBack: () => void;
}

const OrgDescriptionForm: React.FC<OrgDescriptionFormProps> = ({
  handleNext,
  handleGoBack,
}) => {
  const { data, setData } = useOrganizationFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<{ description: string }>({
    defaultValues: {
      description: data.organizationDetails.description || "",
    },
  });

const onSubmit: SubmitHandler<{ description: string }> = (formData) => {
  // Update the store with the entered description
  setData({
    organizationDetails: {
      ...data.organizationDetails,
      description: formData.description,
    },
  });
  handleNext();
};


  return (
    <TransitionParent>
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start lg:p-12 p-4 font-quickSand">
        <div className="lg:col-span-2 hidden lg:block">
          <Image
            src={StepSevenImg}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-3 items-start ">
          <h1 className="text-primary text-3xl font-bold font-sora">
            About your organization
          </h1>
          <p className="text-base font-quickSand font-semibold">
            To help people understand your organization give a basic description
            about your company
          </p>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col pb-8">
              <textarea
                placeholder="Description"
                className="w-full h-[10rem] p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                {...register("description", {
                  required: "This field is required",
                })}
                name="description"
              />
              {errors.description && (
                <span className="text-error text-xs">
                  {errors.description.message}
                </span>
              )}
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
                variant="secondary"
                fullWidth={false}
                size="medium"
              />
            </span>
          </form>
        </div>
      </div>
    </TransitionParent>
  );
};

export default OrgDescriptionForm;
