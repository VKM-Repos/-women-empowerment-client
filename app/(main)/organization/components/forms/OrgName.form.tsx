'use client'
import React from "react";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import StepOneImg from "@/public/images/create-org-1.png";
import Button from "@/components/Common/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useOrganizationFormStore } from "@/lib/store/createOrgForm.store";


interface OrgNameFormProps {
  handleNext: () => void;
}

const OrgNameForm: React.FC<OrgNameFormProps> = ({ handleNext }) => {
  const { data, setData } = useOrganizationFormStore(); 

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ name: string }>({
    defaultValues: {
      name: data.organizationDetails.name, // Set default value from the store
    },
  });

  const onSubmit: SubmitHandler<{ name: string }> = async (formData) => {
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
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center lg:p-12 p-4 font-quickSand">
        <div className="lg:col-span-2 hidden lg:block">
          <Image
            src={StepOneImg}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-6 items-start ">
          <h1 className="text-primary text-3xl font-bold font-sora">
            Hey there 👋
          </h1>
          <p className="text-base font-quickSand font-semibold">
            Let’s create awareness for your Organization. Enter the name of your
            organization to get started
          </p>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col pb-8">
              <input
                {...register("name", {
                  required: "Organization Name is required",
                })}
                className="md:w-4/5 w-full p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                type="text"
                placeholder="Organization Name"
                name="name"
              />
              {errors?.name?.message && (
                <p className="text-error text-sm mt-1">
                  {errors?.name?.message}
                </p>
              )}
            </div>
            <Button
              label="Continue"
              variant="primary"
              fullWidth={false}
              size="medium"
              state={isValid ? "active" : "disabled"}
            />
          </form>
        </div>
      </div>
    </TransitionParent>
  );
};

export default OrgNameForm;
