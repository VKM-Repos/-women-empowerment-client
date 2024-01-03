import React from "react";

import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import StepComplete from "@/public/images/create-finish.png";
import Button from "@/components/Common/Button/Button";
import { redirect } from "next/navigation";

interface OrgStepCompleteProps {
  handleSkip: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const OrgStepComplete: React.FC<OrgStepCompleteProps> = ({ handleSkip }) => {
  return (
    <TransitionParent>
      <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center p-12">
        <div className="lg:col-span-2">
          <Image
            src={StepComplete}
            alt=""
            width={100}
            height={100}
            layout="responsive"
          />
        </div>

        <div className="lg:col-span-3 bg-[#F0EBD6] rounded-[1rem] p-[3rem] flex flex-col space-y-6 items-start ">
          <h1 className="text-primary text-3xl font-bold">
            Your organization has been successfully registered.
          </h1>
          <Button
            label="Continue"
            variant="secondary"
            fullWidth={false}
            size="medium"
            onClick={redirect("/organization")}
          />
        </div>
      </div>
    </TransitionParent>
  );
};

export default OrgStepComplete;
