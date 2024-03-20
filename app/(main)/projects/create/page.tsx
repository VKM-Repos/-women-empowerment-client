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
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";


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

    const createProject = async () => {
      setIsLoading(true);
      try {
        const { data } = useProjectFormStore.getState();
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const endpoint = `${apiUrl}projects`;

        let formData = new FormData();
        formData.append("categoryId", data?.projectDetails?.categoryId.toString());
        formData.append("title", data?.projectDetails?.title);
        formData.append("description", data?.projectDetails?.description);
        formData.append("status", data?.projectDetails?.status);
        formData.append("link", data?.projectDetails?.link);
        formData.append("location", data?.projectDetails?.location);
        formData.append("startDate", data?.projectDetails?.startDate);
        formData.append("endDate", data?.projectDetails?.endDate);

        if (data.image) {
          formData.append("image", data.image);
        }

        const response: any = await axios.post(endpoint, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 200) {
          resetStore();
          setIsLoading(false);
          const { id } = response?.data;
          toast.success("Project created successfully");
          showModal(<SuccessModal title="All Done!" message="Your project has been created!" projectId={id} />);
          handleNext();
        } else {
          setIsLoading(false);
          toast.error(` ${response?.status}`);
        }

      } catch (error: any) {
        // Handle network or other errors
        console.error("Error creating project:", error);
        toast.error(error?.response?.statusText);
      } finally {
        setIsLoading(false);
      }
    };



    const { handleSubmit } = useForm<ProjectFormStore>();

    const onSubmitHandler: SubmitHandler<ProjectFormStore> = () => {
      createProject();
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
      {isLoading && <LoadingThinkingWomen />}
      <RenderForm />
    </AnimatePresence>
  );
}

export default CreateProjectPage;
