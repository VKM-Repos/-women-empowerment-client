"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { redirect, useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

import toast from "react-hot-toast";
import axios from "axios";
import { useAppContext } from "@/lib/context/app-context";

import { useModal } from "@/lib/context/modal-context";
import SelectCategory from "../components/forms/SelectCategory.form";
import { ProjectFormStore, useProjectFormStore } from "@/lib/store/createProjectForm.store";
import ProjectDetails from "../components/forms/ProjectDetails.form";
import ProjectCalender from "../components/forms/ProjectCalender.form";
import ProjectImage from "../components/forms/ProjectImage.form";
import SuccessModal from "../components/forms/SuccessModal";


function CreateProjectPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { showModal } = useModal();
  const { step, setStep, data, setData, resetStore } = useProjectFormStore();
  const { token } = useAppContext();

  const RenderForm = () => {
    const handleNext = () => {
      setStep(step + 1);
    };

    const handleGoBack = () => {
      if (step > 1) {
        setStep(step - 1);
      }
    };

    const createEvent = async () => {


      try {
        console.log('modal');
        showModal(<SuccessModal title="All Done!" message="Your project has been created!" projectId={1} />);
      } catch (error) {
        console.error('Error displaying modal:', error);
      }
    };



    const { handleSubmit } = useForm<ProjectFormStore>();

    const onSubmitHandler: SubmitHandler<ProjectFormStore> = () => {
      createEvent();
    };

    switch (step) {
      case 1:
        return (
          <SelectCategory handleNext={handleNext} />
        );
      case 2:
        return (
          <ProjectDetails
            handleNext={handleNext}
            handleGoBack={handleGoBack}
          />
        );
      case 3:
        return (
          <ProjectCalender
            handleNext={handleNext}
            handleGoBack={handleGoBack}
          />
        );
      case 4:
        return (
          <ProjectImage
            handleNext={handleSubmit(onSubmitHandler)}
            handleGoBack={handleGoBack}
            isLoading={isLoading}
          />

        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence initial={true} mode="wait">
      <RenderForm />
    </AnimatePresence>
  );
}

export default CreateProjectPage;
