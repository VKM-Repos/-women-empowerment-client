"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { CreateOrganizationRequest } from "@/lib/types/organization.types";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import OrgNameForm from "../components/forms/OrgName.form";
import OrgCategoryForm from "../components/forms/OrgCategory.form";
import OrgLogoForm from "../components/forms/OrgLogo.form";
import OrgLinksForm from "../components/forms/OrgLinks.form";
import OrgAddressForm from "../components/forms/OrgAddress.form";
import OrgContactForm from "../components/forms/OrgContact.form";
import OrgDescriptionForm from "../components/forms/OrgDescription.form";
import OrgImagesForm from "../components/forms/OrgImages.form";
import OrgStepComplete from "../components/forms/OrgStepComplete";

interface CreateOrgResponse {
  status: boolean;
  message: string;
  // Add other fields as needed
}

interface ErrorResponse {
  status: boolean;
  message: string;
  // Add other fields as needed
}

function CreateOrganizationPage() {
  const router = useRouter();

  const RenderForm = () => {
    const [step, setStep] = useState(1);

    const [data, setData] = useState({
      OrgName: "",
      category: [],
      logo: "",
      webUrl: "",
      facebookUrl: "",
      address: [],
      email: "",
      phone: "",
      description: "",
      images: [],
    });

    const handleChange = (event: any) => {
      event.preventDefault();
      const { name, value } = event.target;
      setData({
        ...data,
        [name]: value,
      });
    };

    const {
      register,
      formState: { errors },
      handleSubmit,
      watch,
      reset,
    } = useForm<CreateOrganizationRequest>();

    const handleNext = (e: any) => {
      e.preventDefault();
      if (step <= 8 ) {
        // Get the form data using the react-hook-form watch function
        const formData = watch();

        // Update the data state with the current form data
        setData((prevData: any) => ({
          ...prevData,
          ...formData,
        }));

        // Move to the next step
        setStep((prevStep) => prevStep + 1);
      } else {
        handleSubmit(onSubmitHandler);
      }
    };

    const handleGoBack = () => {
      if (step > 1) {
        setStep((prevStep) => prevStep - 1);
      }
    };

    const handleSkip = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setStep((prevStep) => prevStep + 1);
    };

    async function createOrganization(data: CreateOrganizationRequest) {
      // Commenting the real API call for now
      // store.setRequestLoading(true);

      // Dummy API call that returns a 200 status and empty data
      const dummyApiCreateOrg = async (requestData: any) => {
        return { status: true, message: "Dummy API call successful" };
      };

      const requestData = {
        // all data
      };

      try {
        const response: CreateOrgResponse | ErrorResponse =
          await dummyApiCreateOrg(requestData);

        if (response.status) {
          toast.success(`Org created successfully, ${response.message}`);
          reset();
          //   push to the org detailed page with its id as the params
          //   router.push(`/organization/${id}`);
            router.push(`/organization/1`);
          console.log("successful registration", response.message);
        } else {
          if (response instanceof Error) {
            toast.error(`There has been an error, ${response.message}`);
            console.log("There has been an error", response);
          }
        }
      } catch (error: any) {
        if (error instanceof Error) {
          // Handle errors
          console.error(error.message);
          toast.error(`There has been an error: ${error.message}`);
        }
      } finally {
        // store.setRequestLoading(false);
      }
    }

    const onSubmitHandler: SubmitHandler<CreateOrganizationRequest> = (
      data
    ) => {
      createOrganization(data);
      console.log(data);
    };

    switch (step) {
      case 1:
        return (
          <OrgNameForm
            handleChange={handleChange}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <OrgCategoryForm
            handleChange={handleChange}
            handleSkip={handleSkip}
            handleGoBack={handleGoBack}
          />
        );
      case 3:
        return (
          <OrgLogoForm
            handleChange={handleChange}
            handleSkip={handleSkip}
            handleGoBack={handleGoBack}
          />
        );
      case 4:
        return (
          <OrgLinksForm
            handleChange={handleChange}
            handleSkip={handleSkip}
            handleGoBack={handleGoBack}
          />
        );
      case 5:
        return (
          <OrgAddressForm
            handleChange={handleChange}
            handleSkip={handleSkip}
            handleGoBack={handleGoBack}
          />
        );
      case 6:
        return (
          <OrgContactForm
            handleChange={handleChange}
            handleSkip={handleSkip}
            handleGoBack={handleGoBack}
          />
        );
      case 7:
        return (
          <OrgDescriptionForm
            handleChange={handleChange}
            handleSkip={handleSkip}
            handleGoBack={handleGoBack}
          />
        );
      case 8:
        return (
          <OrgImagesForm
            handleChange={handleChange}
            handleSkip={handleSkip}
            handleGoBack={handleGoBack}
          />
        );
      case 9:
        return (
          <OrgStepComplete
            handleSkip={handleSkip} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence initial={true} mode="wait">
      <div className="w-full min-h-screen top-0 bg-primaryWhite z-[200] py-[5rem] scrollable-section flex justify-center items-center">
        <RenderForm />
      </div>
    </AnimatePresence>
  );
}

export default CreateOrganizationPage;
