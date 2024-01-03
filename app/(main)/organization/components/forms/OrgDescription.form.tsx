
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateOrganizationRequest } from "@/lib/types/organization.types";
import Image from "next/image";
import StepSevenImg from "@/public/images/create-7.png";
import Button from "@/components/Common/Button/Button";
import { TransitionParent } from "@/lib/utils/transition";


interface OrgDescriptionFormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSkip: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleGoBack: () => void;
}

const OrgDescriptionForm: React.FC<OrgDescriptionFormProps> = ({
  handleChange,
  handleSkip,
  handleGoBack,
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
      <Image src={StepSevenImg} alt="" width={100} height={100} layout="responsive" />
    </div>

    <div className="lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-[3rem] flex flex-col space-y-6 items-start ">
      <h1 className="text-primary text-3xl font-bold">About your organization</h1>
      <p>To help people understand your organization give a basic description about your company</p>
       <form className="w-full" >
      <div className="flex flex-col pb-8">

        <textarea
        placeholder="Description"
        className="w-full h-[10rem] p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
          {...register("description", { required: "This field is required" })}
          onChange={handleChange}
        />
        {errors.description && <span className="text-error text-xs">{errors.description.message}</span>}
  
      </div>
        <span className="flex gap-10">
      <Button label="Go Back" variant="secondary" fullWidth={false} size="medium"  onClick={handleGoBack}/>
      <Button label="Continue" variant="secondary" fullWidth={false} size="medium" onClick={handleSkip} />
      </span>
    </form>
    </div>
  </div>
    
 </TransitionParent>
  );
};

export default OrgDescriptionForm;
