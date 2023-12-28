
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateOrganizationRequest } from "@/lib/types/organization.types";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import StepSixImg from "@/public/images/create-6.png";
import Button from "@/components/Common/Button/Button";


interface OrgContactFormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSkip: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleGoBack: () => void;
}

const OrgContactForm: React.FC<OrgContactFormProps> = ({
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
    <>
        <TransitionParent>
  <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center p-12">
    <div className="lg:col-span-2">
      <Image src={StepSixImg} alt="" width={100} height={100} layout="responsive" />
    </div>

    <div className="lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-[3rem] flex flex-col space-y-6 items-start ">
      <h1 className="text-primary text-3xl font-bold">How can we reach you?</h1>
      <p>A means for people to contact your organization</p>
       <form className="w-full" >
      <div className="flex flex-col gap-5 pb-8">
      <div>
        <input
        className="w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
          type="text"
          placeholder="Email"
          {...register("email", { required: "This field is required" })}
          onChange={handleChange}
          />
        {errors.email && <span  className="text-error text-xs">{errors.email.message}</span>}
      </div>
      <div>
       
        <input
        className="w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
          type="text"
          placeholder="phone number"
          {...register("phone", { required: "This field is required" })}
          onChange={handleChange}
          />
        {errors.phone && <span  className="text-error text-xs">{errors.phone.message}</span>}
      </div>

      </div>
        <span className="flex gap-10">
      <Button label="Go Back" variant="secondary" fullWidth={false} size="medium"  onClick={handleGoBack}/>
      <Button label="Continue" variant="secondary" fullWidth={false} size="medium" onClick={handleSkip}  />
      </span>
    </form>
    </div>
  </div>
    
 </TransitionParent>
          </>
  );
};

export default OrgContactForm;
