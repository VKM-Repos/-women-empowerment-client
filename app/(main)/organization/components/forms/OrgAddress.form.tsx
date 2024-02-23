import { TransitionParent } from "@/lib/utils/transition";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import StepFiveImg from "@/public/images/create-5.png";
import statesList from "@/lib/utils/nigerian-states.json";
import Button from "@/components/Common/Button/Button";
import { useOrganizationFormStore } from "@/lib/store/createOrgForm.store";

interface OrgAddressFormProps {
  handleNext: () => void;
  handleGoBack: () => void;
}

const OrgAddressForm: React.FC<OrgAddressFormProps> = ({
  handleNext,
  handleGoBack,
}) => {
  const { data, setData } = useOrganizationFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm<{state: string, postalCode: string, street: string}>({
     defaultValues: {
      state: data.organizationDetails.state || "",
      postalCode: data.organizationDetails.postalCode || "",
      street: data.organizationDetails.street || "",
    },
  });

  const onSubmit: SubmitHandler<{ state: string; postalCode: string; street: string }> = (formData) => {
  // Update the store with the entered address details
  setData({
    organizationDetails: {
      ...data.organizationDetails,
      state: formData.state,
      postalCode: formData.postalCode,
      street: formData.street,
    },
  });
  handleNext(); // Move to the next step
};


  return (
    <TransitionParent>
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start lg:p-12 p-4 font-quickSand">
        <div className="lg:col-span-2 hidden lg:block">
          <Image
            src={StepFiveImg}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-3 items-start ">
          <h1 className="text-primary text-3xl font-bold font-sora">
            Where is your organization located?
          </h1>
          <p className="text-base font-quickSand font-semibold">
            These details help people locate you and get in touch
          </p>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 pb-8">
              <div className="flex flex-col">
                <select
                  className="w-full md:w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                  value={watch("state")}
                  required
                  {...register("state", {
                    required: "This field is required",
                  })}
                  name="state"
                >
                  <option value="">Select a state</option>
                  {statesList.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))}
                   </select>
                {errors.state && (
                  <span className="text-error text-xs">
                    {errors.state.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  className="w-full md:w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                  type="text"
                  placeholder="Postal code"
                  {...register("postalCode", {
                    required: "This field is required",
                  })}
                  name="postalCode"
                />
                {errors.postalCode && (
                  <span className="text-error text-xs">
                    {errors.postalCode.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  className="w-full md:w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                  type="text"
                  placeholder="Street address"
                  {...register("street", {
                    required: "This field is required",
                  })}
                  name="street"
                />
                {errors.street && (
                  <span className="text-error text-xs">
                    {errors.street.message}
                  </span>
                )}
              </div>
            </div>
            <span className="flex gap-10">
              <Button
                label="Go Back"
                variant="primary"
                fullWidth={false}
                size="medium"
                onClick={handleGoBack}
              />
              <Button
                label="Continue"
                variant="primary"
                fullWidth={false}
                size="medium"
                state={isValid ? "active" : "disabled"}
              />
            </span>
          </form>
        </div>
      </div>
    </TransitionParent>
  );
};

export default OrgAddressForm;
