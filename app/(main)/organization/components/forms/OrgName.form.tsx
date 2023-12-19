'use client'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateOrganizationRequest } from "@/lib/types/organization.types";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import StepOneImg from "@/public/images/create-org-1.png";
import Button from "@/components/Common/Button/Button";

interface OrgNameFormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleNext: (e: any) => void;
}

const OrgNameForm: React.FC<OrgNameFormProps> = ({
  handleChange,
  handleNext,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateOrganizationRequest>();



  return (
 <TransitionParent>
  <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center p-12">
    <div className="lg:col-span-2">
      <Image src={StepOneImg} alt="" width={100} height={100} layout="responsive" />
    </div>

    <div className="lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-[3rem] flex flex-col space-y-6 items-start ">
      <h1 className="text-primary text-3xl font-bold">Hey there  👋</h1>
      <p>Let’s create awareness for your Organization. 
          Enter the name of your organization to get started</p>
       <form className="w-full" >
      <div className="flex flex-col pb-8">
        <input
        className="w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
          type="text"
          placeholder="Organization Name"
          {...register("OrgName", { required: "This field is required" })}
          onChange={handleChange}
        />
        {errors.OrgName && <span className="text-error text-xs">{errors.OrgName.message}</span>}
      </div>
      <Button label="Continue" variant="secondary" fullWidth={false} size="medium" onClick={handleNext} />
    </form>
    </div>
  </div>
    
 </TransitionParent>
  );
};

export default OrgNameForm;
