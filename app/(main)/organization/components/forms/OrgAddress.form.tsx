import { TransitionParent } from '@/lib/utils/transition'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddressFormData } from "@/lib/types/organization.types";
import Image from "next/image";
import StepFiveImg from "@/public/images/create-5.png";
import Button from "@/components/Common/Button/Button";


interface OrgAddressFormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSkip: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleGoBack: () => void;
}

const OrgAddressForm: React.FC<OrgAddressFormProps> = ({
  handleChange,
  handleSkip,
  handleGoBack,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormData>();

  const onSubmit: SubmitHandler<AddressFormData> = (data) => {
    // Perform any additional validation or processing if needed
    console.log(data);
    handleSkip
  };

  return (

        <TransitionParent>
  <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center p-12">
    <div className="lg:col-span-2">
      <Image src={StepFiveImg} alt="" width={100} height={100} layout="responsive" />
    </div>

    <div className="lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-[3rem] flex flex-col space-y-6 items-start ">
      <h1 className="text-primary text-3xl font-bold">Where is your organization located?</h1>
      <p>These details help people locate you and get in touch</p>
       <form className="w-full" >
      <div className="flex flex-col gap-5 pb-8">
    
      <div>
      
        <input
        className="w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
          type="text"
          placeholder="City"
          {...register("city", { required: "This field is required" })}
          onChange={handleChange}
        />
        {errors.city && <span className="text-error text-xs">{errors.city.message}</span>}
      </div>
      <div>
        <input
        className="w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
          type="text"
          placeholder="Postal code"
          {...register("postalCode", { required: "This field is required" })}
          onChange={handleChange}
        />
        {errors.postalCode && <span className="text-error text-xs">{errors.postalCode.message}</span>}
      </div>
           <div>
        <input
        className="w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
          type="text"
          placeholder="Street address"
          {...register("street", { required: "This field is required" })}
          onChange={handleChange}
        />
        {errors.street && <span className="text-error text-xs">{errors.street.message}</span>}
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
  );
};

export default OrgAddressForm;
