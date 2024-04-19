"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { redirect, useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

import toast from "react-hot-toast";
import axios from "axios";
import { useAppContext } from "@/lib/context/app-context";
import {
  EventFormStore,
  useEventFormStore,
} from "@/lib/store/createEventForm.store";
import AboutEvent from "../components/forms/AboutEvent.form";
import EventType from "../components/forms/EventType.form";
import EventImage from "../components/forms/EventImage.form";
import { useModal } from "@/lib/context/modal-context";
import SuccessModal from "@/app/(main)/events/components/forms/SuccessModal";
import Loading from "../../loading";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";

function CreateEventPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { showModal } = useModal();
  const { step, setStep, data, setData, resetStore } = useEventFormStore();
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
      setIsLoading(true);
      try {
        const { data } = useEventFormStore.getState();
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const endpoint = `${apiUrl}events`;

        let formData = new FormData();
        formData.append("title", data?.eventDetails?.title);
        formData.append("description", data?.eventDetails?.description);
        formData.append("type", data?.eventDetails?.type);
        formData.append("link", data?.eventDetails?.link);
        formData.append("location", data?.eventDetails?.location);
        formData.append("startDate", data?.eventDetails?.startDate);
        formData.append("endDate", data?.eventDetails?.endDate);
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
          setIsLoading(false);
          // console.log(response);
          const { id } = response?.data;
          // Handle success
          resetStore();
          toast.success("event created successfully");
          showModal(
            <SuccessModal
              eventId={id}
              title="All Done!"
              message="Your event has be created and is ready to be published"
            />
          );
        } else {
          setIsLoading(false);
          // Handle other response statuses or errors
          toast.error(` ${response?.status}`);
        }
      } catch (error: any) {
        // Handle network or other errors
        console.error("Error creating event:", error);
        toast.error(error?.response?.statusText);
        if (error?.response?.status == 401) {
          router.push("/account/logout");
        }
      } finally {
        setIsLoading(false);
      }
    };

    const { handleSubmit } = useForm<EventFormStore>();

    const onSubmitHandler: SubmitHandler<EventFormStore> = async () => {
      await handleSubmit(createEvent)();
    };

    switch (step) {
      case 1:
        return <AboutEvent handleNext={handleNext} />;
      case 2:
        return (
          <EventType handleNext={handleNext} handleGoBack={handleGoBack} />
        );
      case 3:
        return (
          <EventImage
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

export default CreateEventPage;
