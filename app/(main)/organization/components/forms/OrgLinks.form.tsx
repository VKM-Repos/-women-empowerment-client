import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import StepFourImg from "@/public/images/create-4.png";
import Button from "@/components/Common/Button/Button";
import { useOrganizationFormStore } from "@/lib/store/createOrgForm.store";
import toast from "react-hot-toast";

interface OrgLinksFormProps {
  handleNext: () => void;
  handleGoBack: () => void;
}

const OrgLinksForm: React.FC<OrgLinksFormProps> = ({
  handleNext,
  handleGoBack,
}) => {
  const { data, setData } = useOrganizationFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ website: string; facebook: string }>({
    defaultValues: {
      website: data.organizationDetails.website || "",
      facebook: data.organizationDetails.facebook || "",
    },
  });

  const [selectedOption, setSelectedOption] = useState("");

  const onSubmit: SubmitHandler<{ website: string; facebook: string }> = (formData) => {
    // Perform additional validation for the Facebook URL
    if (formData.facebook && !formData.facebook.includes('facebook.com/')) {
      toast.error('Invalid Facebook URL. Must include facebook.com/.');
      return;
    }

    // Autofill "https://" prefix for facebook URL
    if (formData.facebook && !formData.facebook.startsWith('https://')) {
      formData.facebook = 'https://' + formData.facebook;
    }
    
    // Autofill "https://" prefix for website URL
    if (formData.website && !formData.website.startsWith('https://')) {
      formData.website = 'https://' + formData.website;
    }

    // Update the store with the entered values
    setData({
      organizationDetails: {
        ...data.organizationDetails,
        website: formData.website,
        facebook: formData.facebook,
      },
    });

    handleNext();
  };


  return (
    <TransitionParent className="w-screen">
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start lg:p-12 p-4 font-quickSand">
        <div className="lg:col-span-2 hidden lg:block">
          <Image
            src={StepFourImg}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-3 items-start ">
          <h1 className="text-primary text-xl md:text-3xl font-bold font-sora">
            Add a Link
          </h1>
          <p className="text-base font-quickSand font-semibold">
            Add your website link or Facebook page
          </p>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-5 pb-8">
              <select
                className="w-full md:w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="website">Website</option>
                <option value="facebook">Facebook Page</option>
              </select>

              {/* Show component according to the selected option value */}
              {selectedOption === "website" && (
                <div className="flex flex-col">
                  <input
                    className="w-full md:w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                    type="text"
                    placeholder="Website URL"
                    {...register('website', {
                      required: 'this field is empty',
                    })}
                    name="website"
                  />
                  {errors.website && (
                    <span className="text-error text-xs">
                      {errors.website.message}
                    </span>
                  )}
                </div>
              )}

              {selectedOption === "facebook" && (
                <div className="flex flex-col">
                  <input
                    className="w-full md:w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                    type="text"
                    placeholder="Facebook URL"
                    {...register('facebook', {
                      required: 'this field is empty',
                    })}
                    name="facebook"
                  />
                  {errors.facebook && (
                    <span className="text-error text-xs">
                      {errors.facebook.message}
                    </span>
                  )}
                </div>
              )}
            </div>
            <span className="flex gap-4">
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

export default OrgLinksForm;
