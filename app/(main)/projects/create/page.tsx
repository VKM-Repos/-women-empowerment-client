"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { redirect, useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

import toast from "react-hot-toast";
import axios from "axios";
import { useAppContext } from "@/lib/context/app-context";
import { EventFormStore, useEventFormStore } from "@/lib/store/createEventForm.store";

import { useModal } from "@/lib/context/modal-context";
import SuccessModal from "@/app/(main)/events/components/forms/SuccessModal";

function CreateProjectPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();
  const { showModal } = useModal();
  const { step, setStep, data, setData, resetStore } =
    useEventFormStore();
    const {token} = useAppContext()

    

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
//   setIsLoading(true)
//     try {
//       const { data } = useEventFormStore.getState();
//       const apiUrl = process.env.NEXT_PUBLIC_API_URL;
//       const endpoint = `${apiUrl}/events`;

//       let formData = new FormData();
//       formData.append("organizationDetails", new Blob([JSON.stringify(data.eventDetails)], { type: "application/json" }))
//       console.log(formData);

//       // Append additional fields or files as needed
//       if (data.image) {
//         formData.append('image', data.image);
//       }

      

//       const response = await axios.post(endpoint, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       if (response.status === 200) {
//         setIsLoading(false)
//         // Handle success
//         toast.success('Event created successfully');
//         // showModal
//         showModal(<SuccessModal title="All Done!" message="Your event has be created and ready to be published"  />);
//       } else {
//         setIsLoading(false)
//         // Handle other response statuses or errors
//         toast.error(`Error creating event: ${response.data}`);
//       }
//     } catch (error) {
//       // Handle network or other errors
//       console.error('Error creating event:', error);
//       toast.error('Error creating event');
//     }

      try {
          console.log('modal');
          showModal(<SuccessModal title="All Done!" message="Your project has been created!" />);
        } catch (error) {
          console.error('Error displaying modal:', error);
        }
  };



    const { handleSubmit } = useForm<EventFormStore>();

    const onSubmitHandler: SubmitHandler<EventFormStore> = () => {
      createEvent();
    };

    switch (step) {
      case 1:
        return (
        // <ProjectCategory handleNext={handleNext} />
        <></>
        );
      case 2:
        return (
          // <ProjectDetails
          //   handleNext={handleNext}
          //   handleGoBack={handleGoBack}
          // />
          <></>
        );
      case 3:
        return (
          // <ProjectCalender
          //   handleNext={handleNext}
          //   handleGoBack={handleGoBack}
          // />
          <></>
        );
      case 4:
        return (
          // <ProjectImage
          //   handleNext={handleSubmit(onSubmitHandler)}
          //   handleGoBack={handleGoBack}
          // />
          <></>

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
