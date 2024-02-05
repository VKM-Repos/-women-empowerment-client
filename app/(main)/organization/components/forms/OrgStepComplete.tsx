import React from "react";

import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import StepComplete from "@/public/images/create-finish.png";
import Button from "@/components/Common/Button/Button";
import { useOrganizationFormStore } from "@/lib/store/createOrgForm.store";
import { useRouter } from "next/navigation";

interface OrgStepCompleteProps {
  handleNext: () => void;
}

const OrgStepComplete: React.FC<OrgStepCompleteProps> = ({ handleNext }) => {
  const router = useRouter();
  const { resetStore } = useOrganizationFormStore();

  const handleContinue = () => {
    resetStore(); // Reset the store before redirecting
    router.push("1");
  };
  return (
    <TransitionParent>
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 md:gap-10 gap-0 items-center lg:p-12 p-4 font-quickSand">
        <div className="lg:col-span-2 p-12 md:p-0 lg:block">
          <Image
            src={StepComplete}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className="w-full  lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-0 md:p-[2rem] min-h-[20rem] flex flex-col space-y-3 items-center md:items-start ">
          <h1 className="text-primary text-3xl font-bold font-sora md:text-left text-center">
            Your organization has been successfully registered.
          </h1>
          <Button
            label="Continue"
            variant="secondary"
            fullWidth={false}
            size="medium"
            onClick={handleContinue}
          />
        </div>
      </div>
    </TransitionParent>
  );
};

export default OrgStepComplete;
