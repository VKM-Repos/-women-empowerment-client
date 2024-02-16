import React, { useRef, useEffect } from "react";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import StepThreeImg from "@/public/images/create-3.png";
import Button from "@/components/Common/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { useOrganizationFormStore } from "@/lib/store/createOrgForm.store";
import { motion } from "framer-motion";

interface OrgLogoFormProps {
  handleNext: () => void;
  handleGoBack: () => void;
  handleSkip: () => void;
}

const OrgLogoForm: React.FC<OrgLogoFormProps> = ({
  handleNext,
  handleGoBack,
  handleSkip,
}) => {
  const { data, setData } = useOrganizationFormStore();
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<{ logo: string | null }>();

  // Set default value from the store on initial render
  useEffect(() => {
    setValue("logo", data.logo);
  }, [data.logo, setValue]);

  const handleChooseFile = () => {
    inputRef.current?.click();
  };

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];

    if (imageFile) {
      // Update the logo in the store as a string
      const imageUrl = URL.createObjectURL(imageFile);
      setData({ logo: imageUrl });
    }
  };

  const removeImage = () => {
    const updatedImages = data.image;
    //  write a fn to delete or pop out the image string
    setData({ logo: "" });
    // setData({ images: updatedImages });
  };

  const onSubmit: SubmitHandler<{ logo: string | null }> = () => {
    handleNext();
  };

  return (
    <TransitionParent>
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-start lg:p-12 p-4 font-quickSand">
        <div className="lg:col-span-2 hidden lg:block">
          <Image
            src={StepThreeImg}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className="w-full lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] flex flex-col space-y-3 items-start ">
          <h1 className="text-primary text-3xl font-bold font-sora">
            Add Logo
          </h1>
          <p className="text-base font-quickSand font-semibold">
            Let’s create awareness for your Organization. Enter the name of your
            organization to get started
          </p>
          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col pb-8">
              <div className="w-full focus:outline-none ">
                <input
                  ref={inputRef}
                  type="file"
                  onChange={handleImage}
                  className="hidden"
                  name="logo"
                  accept="image/*"
                />
                <div className="flex items-center gap-4">
                  {watch("logo") && (
                    <span className="w-[15rem] aspect-square rounded-full border-2 border-btnWarning overflow-hidden relative">
                      <motion.img
                        src={watch("logo") as string}
                        alt={`logo Preview`}
                        className="w-full object-contain"
                      />
                      <button
                        type="button"
                        className="absolute inset-0 text-xs bg-primaryBlack/50 text-primaryWhite rounded-full"
                        onClick={() => removeImage()}
                      >
                        remove
                      </button>
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={handleChooseFile}
                    className="py-6 w-full flex flex-col space-y-6 items-start justify-center  text-small focus:outline-none rounded-md "
                  >
                    <svg
                      width="144"
                      height="144"
                      viewBox="0 0 144 144"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.949219"
                        y="0.5"
                        width="142.5"
                        height="142.5"
                        rx="71.25"
                        stroke="#FF7400"
                      />
                      <path
                        d="M95.9492 55.5V60.5H88.4492V68H83.4492V60.5H75.9492V55.5H83.4492V48H88.4492V55.5H95.9492ZM74.6992 73C75.6941 72.9997 76.6481 72.6041 77.3514 71.9004C78.0546 71.1967 78.4496 70.2424 78.4492 69.2475C78.4489 68.2526 78.0534 67.2986 77.3496 66.5953C76.6459 65.8921 75.6916 65.4972 74.6967 65.4975C74.2041 65.4977 73.7163 65.5949 73.2613 65.7835C72.8062 65.9722 72.3928 66.2486 72.0445 66.5971C71.6963 66.9456 71.4202 67.3592 71.2318 67.8144C71.0434 68.2695 70.9466 68.7574 70.9467 69.25C70.9469 69.7426 71.0441 70.2304 71.2327 70.6854C71.4214 71.1405 71.6979 71.5539 72.0463 71.9022C72.3948 72.2504 72.8084 72.5266 73.2636 72.7149C73.7188 72.9033 74.2066 73.0002 74.6992 73ZM83.4492 81.085L82.1667 79.66C81.6978 79.1379 81.1242 78.7203 80.4833 78.4345C79.8424 78.1486 79.1485 78.0009 78.4467 78.0009C77.7449 78.0009 77.051 78.1486 76.4101 78.4345C75.7692 78.7203 75.1956 79.1379 74.7267 79.66L73.0867 81.4875L60.9492 68L53.4492 76.3325V60.5H70.9492V55.5H53.4492C52.1231 55.5 50.8514 56.0268 49.9137 56.9645C48.976 57.9021 48.4492 59.1739 48.4492 60.5V90.5C48.4492 91.8261 48.976 93.0979 49.9137 94.0355C50.8514 94.9732 52.1231 95.5 53.4492 95.5H83.4492C84.7753 95.5 86.0471 94.9732 86.9848 94.0355C87.9224 93.0979 88.4492 91.8261 88.4492 90.5V73H83.4492V81.085Z"
                        fill="#FF7400"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {errors.logo && (
                <span className="text-error text-xs">
                  {errors.logo.message}
                </span>
              )}
            </div>
            <span className="w-full flex gap-10 relative">
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
              <button
                className="text-primary absolute inset-y-0 right-0"
                onClick={handleSkip}
              >
                Skip
              </button>
            </span>
          </form>
        </div>
      </div>
    </TransitionParent>
  );
};

export default OrgLogoForm;
