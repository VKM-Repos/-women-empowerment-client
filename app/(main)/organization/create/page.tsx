"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { redirect, useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import OrgNameForm from "../components/forms/OrgName.form";
import OrgCategoryForm from "../components/forms/OrgCategory.form";
import OrgLogoForm from "../components/forms/OrgLogo.form";
import OrgLinksForm from "../components/forms/OrgLinks.form";
import OrgAddressForm from "../components/forms/OrgAddress.form";
import OrgContactForm from "../components/forms/OrgContact.form";
import OrgDescriptionForm from "../components/forms/OrgDescription.form";
import OrgImagesForm from "../components/forms/OrgImages.form";
import OrgStepComplete from "../components/forms/OrgStepComplete";
import {
  OrganizationFormStore,
  useOrganizationFormStore,
} from "@/lib/store/createOrgForm.store";
import toast from "react-hot-toast";
import axios from "axios";
import { useAppContext } from "@/lib/context/app-context";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";

function CreateOrganizationPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [orgId, setOrgId] = useState<number>();
  const { step, setStep, data, setData, resetStore } =
    useOrganizationFormStore();
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

    const handleSkip = () => {
      setStep(step + 1);
    };

    const createOrganization = async () => {
      setIsLoading(true);
      try {
        // check
        const { data } = useOrganizationFormStore.getState();
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const endpoint = `${apiUrl}organizations`;

        let formData = new FormData();
        formData.append(
          "organizationDetails",
          new Blob([JSON.stringify(data.organizationDetails)], {
            type: "application/json",
          })
        );
        console.log(formData);
        if (data.logo) {
          formData.append("logo", data.logo);
        }

        if (data.image) {
          formData.append("image", data.image);
        }

        const response = await axios.post(endpoint, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 200) {
          setIsLoading(false);
          setOrgId(response.data.id);
          toast.success("Organization created successfully");
          handleNext();
        } else {
          setIsLoading(false);
        }
      } catch (error: any) {
        // Handle network or other errors
        toast.error(`Error: ${error.response.data.detail}`);

      } finally {
        setIsLoading(false);
      }
    };

    const { handleSubmit } = useForm<OrganizationFormStore>();

    const onSubmitHandler: SubmitHandler<OrganizationFormStore> = async () => {
      await handleSubmit(createOrganization)();
    };

    switch (step) {
      case 1:
        return <OrgNameForm handleNext={handleNext} />;
      case 2:
        return (
          <OrgCategoryForm
            handleNext={handleNext}
            handleGoBack={handleGoBack}
          />
        );
      case 3:
        return (
          <OrgLogoForm
            handleNext={handleNext}
            handleSkip={handleSkip}
            handleGoBack={handleGoBack}
          />
        );
      case 4:
        return (
          <OrgLinksForm handleNext={handleNext} handleGoBack={handleGoBack} />
        );
      case 5:
        return (
          <OrgAddressForm handleNext={handleNext} handleGoBack={handleGoBack} />
        );
      case 6:
        return (
          <OrgContactForm handleNext={handleNext} handleGoBack={handleGoBack} />
        );
      case 7:
        return (
          <OrgDescriptionForm
            handleNext={handleNext}
            handleGoBack={handleGoBack}
          />
        );
      case 8:
        return (
          // TODO: prevent user from creating org by sending request twice when user clicks the button twice
          <OrgImagesForm
            handleNext={handleSubmit(onSubmitHandler)}
            handleSkip={handleSubmit(onSubmitHandler)}
            handleGoBack={handleGoBack}
            isLoading={isLoading}
          />
        );
      case 9:
        // pass the new org id created here
        return <OrgStepComplete orgId={orgId} />;
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

export default CreateOrganizationPage;
