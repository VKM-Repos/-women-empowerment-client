"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [orgId, setOrgId] = useState<number>();
  const { step, setStep, data, setData, resetStore } =
    useOrganizationFormStore();
  const { token, fetchUser } = useAppContext();

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
          fetchUser();
          setIsLoading(false);
          setOrgId(response.data.id);
          resetStore();
          toast.success("Organization created successfully");
          handleNext();
        } else {
          setIsLoading(false);
        }
        if (response?.status == 401) {
          router.push("/account/logout");
        }
      } catch (error: any) {
        // Handle network or other errors
        toast.error(`Error: ${error.response.data.detail}`);
        if (error?.response?.status == 401) {
          router.push("/account/logout");
        }
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
          <OrgImagesForm
            handleNext={handleNext}
            handleSkip={handleSkip}
            handleGoBack={handleGoBack}
          />
        );
      case 5:
        return (
          <OrgLinksForm handleNext={handleNext} handleGoBack={handleGoBack} />
        );
      case 6:
        return (
          <OrgAddressForm handleNext={handleNext} handleGoBack={handleGoBack} />
        );
      case 7:
        return (
          <OrgContactForm handleNext={handleNext} handleGoBack={handleGoBack} />
        );
      case 8:
        return (
          <OrgDescriptionForm
            handleNext={handleSubmit(onSubmitHandler)}
            handleGoBack={handleGoBack}
            isLoading={isLoading}
          />
        );
      case 9:
        return <OrgStepComplete orgId={orgId} />;
      default:
        return null;
    }
  };
  return (
    <>
      {isLoading && <LoadingThinkingWomen />}
      <div className="min-w-full">
        {RenderForm()}
      </div>
    </>
  );
}

export default CreateOrganizationPage;
