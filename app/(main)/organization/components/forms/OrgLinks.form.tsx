import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateOrganizationRequest } from "@/lib/types/organization.types";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import StepFourImg from "@/public/images/create-4.png";
import Button from "@/components/Common/Button/Button";

interface OrgLinksFormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSkip: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleGoBack: () => void;
}

const OrgLinksForm: React.FC<OrgLinksFormProps> = ({
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
      <Image src={StepFourImg} alt="" width={100} height={100} layout="responsive" />
    </div>

    <div className="lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-[3rem] flex flex-col space-y-6 items-start ">
      <h1 className="text-primary text-3xl font-bold">Add a Link</h1>
      <p>Add your  website link or facebook page</p>
       <form className="w-full" >
      <div className="flex flex-col gap-5 pb-8">
         <div>
     
        <input
        className="w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"

          type="text"
          placeholder="Website URL"
          {...register("webUrl")}
          onChange={handleChange}
        />
        {errors.webUrl && <span className="text-error text-xs">{errors.webUrl.message}</span>}
      </div>
      <div>

        <input
        className="w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"

          type="text"
          placeholder="Facebook URL"
          {...register("facebookUrl")}
          onChange={handleChange}
        />
          {errors.facebookUrl && <span className="text-error text-xs">{errors.facebookUrl.message}</span>}
      </div>
      </div>
        <span className="flex gap-10">
      <Button label="Go Back" variant="secondary" fullWidth={false} size="medium"  onClick={handleGoBack}/>
      <Button label="Continue" variant="secondary" fullWidth={false} size="medium"  onClick={handleSkip} />
      </span>
    </form>
    </div>
  </div>
    
 </TransitionParent>
  );
};

export default OrgLinksForm;
