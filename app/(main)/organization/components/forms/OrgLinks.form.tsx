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
    formState: { errors },
  } = useForm<{ webUrl: string; facebookUrl: string }>({
    defaultValues: {
      webUrl: data.webUrl || "",
      facebookUrl: data.facebookUrl || "",
    },
  });

  const [selectedOption, setSelectedOption] = useState("");

  const onSubmit: SubmitHandler<{ webUrl: string; facebookUrl: string }> = (formData) => {
    // add more validation for facebook url and must include ...facebook.com/page
    
    // Update the store with the entered values
    setData({
      webUrl: formData.webUrl,
      facebookUrl: formData.facebookUrl,
    });

    handleNext();
  };

  return (
    <div className="w-full">
      <TransitionParent>
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
          <h1 className="text-primary text-3xl font-bold font-sora">
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
                    type="url"
                    placeholder="Website URL"
                    {...register('webUrl', {
                            required: 'this field is empty',
                          })}
                  />
                  {errors.webUrl && (
                    <span className="text-error text-xs">
                      {errors.webUrl.message}
                    </span>
                  )}
                </div>
              )}

              {selectedOption === "facebook" && (
                <div className="flex flex-col">
                  <input
                    className="w-full md:w-4/5 p-3 bg-primaryWhite rounded-md text-gray-100 placeholder:text-gray-200 focus:outline-btnWarning"
                    type="url"
                    placeholder="Facebook URL"
                    {...register('facebookUrl', {
                            required: 'this field is empty',
                          })}
                  />
                  {errors.facebookUrl && (
                    <span className="text-error text-xs">
                      {errors.facebookUrl.message}
                    </span>
                  )}
                </div>
              )}
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
    </div>
  );
};

export default OrgLinksForm;
