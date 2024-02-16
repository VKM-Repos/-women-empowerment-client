import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import StepSixImg from "@/public/images/create-6.png";
import Button from "@/components/Common/Button/Button";
import { useOrganizationFormStore } from "@/lib/store/createOrgForm.store";

interface OrgContactFormProps {
  handleNext: () => void;
  handleGoBack: () => void;
}

const OrgContactForm: React.FC<OrgContactFormProps> = ({
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
  } = useForm<{ email: string; phoneNumber: string }>({
    defaultValues: {
      email: data.organizationDetails.email || "",
      phoneNumber: data.organizationDetails.phoneNumber || "",
    },
  });

 const onSubmit: SubmitHandler<{ email: string; phoneNumber: string }> = (formData) => {
  // Update the store with the entered email and phone
  setData({
    organizationDetails: {
      ...data.organizationDetails,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
    },
  });
  handleNext();
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
          <h1 className="text-primary text-3xl font-bold font-sora">
            How can we reach you?
          </h1>
          <p className="text-base font-quickSand font-semibold">
            A means for people to contact your organization
          </p>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 pb-8">
              <div className="flex flex-col">
                <input
                  className="w-full md:w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: "This field is required" })}
                  name="email"
                />
                {errors.email && (
                  <span className="text-error text-xs">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  className="w-full md:w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                  type="text"
                  placeholder="phone number"
                  {...register("phoneNumber", { required: "This field is required" })}
                  name="phoneNumber"
                />
                {errors.phoneNumber && (
                  <span className="text-error text-xs">
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>
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

export default OrgContactForm;
