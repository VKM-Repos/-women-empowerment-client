import React from "react";
import { TransitionParent } from '@/lib/utils/transition'
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateOrganizationRequest } from "@/lib/types/organization.types";
import Image from "next/image";
import StepTwoImg from "@/public/images/create-org-2.png";
import Button from "@/components/Common/Button/Button";

interface OrgCategoryFormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSkip: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleGoBack: () => void;
}


const options = ["Technology", "Leadership & Development", "Entrepreneurship", "Human Rights", "Grants", "Activism", "Economic Empowerment", "Sexual Orientation", "Art & Life Style", "Business & Finance"]

const OrgCategoryForm: React.FC<OrgCategoryFormProps> = ({
  handleChange,
  handleSkip,
  handleGoBack,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateOrganizationRequest>();

  // const onSubmit: SubmitHandler<CreateOrganizationRequest> = (data) => {
  //   // Perform any additional validation or processing if needed
  //   console.log(data);
  //   handleSkip
  // };

  return (
     <TransitionParent>
  <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center p-12">
    <div className="lg:col-span-2">
      <Image src={StepTwoImg} alt="" width={100} height={100} layout="responsive" />
    </div>

    <div className="lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-[3rem] flex flex-col space-y-6 items-start ">
      <h1 className="text-primary text-3xl font-bold">Choose a category</h1>
      <p className="text-base text-gray-200">Select at least 2 categories that best describes what your organization stand for</p>
       <form className="w-full">
      <div className="flex flex-col pb-8">
        {/* <input
        className="w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
          type="text"
          placeholder="Organization Name"
          {...register("OrgName", { required: "This field is required" })}
          onChange={handleChange}
        /> */}
             <ul className="w-full flex gap-3 flex-wrap">
          {options.map((option, i) => {
            return (
              <li className="w-fit" key={option}>
                <label className="flex flex-nowrap cursor-pointer py-2 px-4 transition-colors bg-transparent text-base border border-btnWarning rounded-lg hover:border-btnWarning [&:has(input:checked)]:border-btnWarning [&:has(input:checked)]:bg-btnWarning [&:has(input:checked)]:text-primaryWhite">
                  <input
                    type="checkbox"
                    name='category'
                    value={option}
                    className="cursor-pointer hidden"
                  />
                  <span className="flex whitespace-nowrap">{option}</span>
                </label>
              </li>
            );
          })}
        </ul>
        {errors.OrgName && <span className="text-error text-xs">{errors.OrgName.message}</span>}
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

export default OrgCategoryForm;
