"use client";
import React from "react";
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
import { OrganizationFormStore, useOrganizationFormStore } from "@/lib/store/createOrgForm.store";
import toast from "react-hot-toast";


function CreateOrganizationPage() {
  const router = useRouter();
  const { step, setStep, data, setData, resetStore } = useOrganizationFormStore();

  const RenderForm = () => {
    const handleNext = () => {
      console.table(data)
      console.log('prev data', data);
      
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


   async function createOrganization() {
    const formData = useOrganizationFormStore.getState().data;
    console.log('final form data:', formData);

    try {
      if (formData) {       
        toast.success('org created successfully');
        handleNext();
      }
    } catch (error) {
      console.log('error dey');
    }
  }

    const {
    handleSubmit,
  } = useForm<OrganizationFormStore>();

    const onSubmitHandler: SubmitHandler<OrganizationFormStore> = () => {
      createOrganization();
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
          <OrgLinksForm
            handleNext={handleNext}
            handleGoBack={handleGoBack}
          />
        );
      case 5:
        return (
          <OrgAddressForm
            handleNext={handleNext}
            handleGoBack={handleGoBack}
          />
        );
      case 6:
        return (
          <OrgContactForm
            handleNext={handleNext}
            handleGoBack={handleGoBack}
          />
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
          <OrgImagesForm
            handleNext={handleSubmit(onSubmitHandler)}
            handleSkip={handleSubmit(onSubmitHandler)}
            handleGoBack={handleGoBack}
          />
        );
      case 9:
        return <OrgStepComplete handleNext={()=>{}} />;
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

export default CreateOrganizationPage;
