"use client";
import React from "react";
import { useModal } from "@/lib/context/modal-context";
import { useRouter } from "next/navigation";
import Button from "../../../../../components/Common/Button/Button";
import Icon from "../../../../../components/Common/Icons/Icon";
import Modal from "../../../../../components/Common/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import { useEventFormStore } from "@/lib/store/createEventForm.store";
import { usePOST } from "@/lib/hooks/usePOST.hook";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";

type Props = {
  title: string;
  message: string;
  eventId: number | null;
};

function SuccessModal({ title, message, eventId }: Props) {
  const { hideModal } = useModal();
  const router = useRouter();
  const { resetStore } = useEventFormStore();
  const { mutate, isPending } = usePOST(`events/${eventId}/publish`);
  const handlePublish = () => {
    resetStore();
    mutate(
      {},
      {
        onSuccess: () => {
          hideModal();
          // router.push(`/events`);
          router.push(`/events/${eventId}`);
        },
        onError: () => {},
      }
    );
  };
  const handleSaveToDrafts = () => {
    resetStore();
    hideModal();
    router.push(`/events/${eventId}`);
  };

  return (
    <Modal onClose={hideModal} isOpen={true}>
      <AnimatePresence initial={false} mode="wait">
        {isPending ? (
          <LoadingThinkingWomen />
        ) : (
          <div className="lg:w-2/5 w-full mx-auto bg-[#F6F7F8] pt-8 rounded-[1rem] px-8 py-4 pb-8 flex flex-col relative">
            <div className="w-full h-full flex flex-col items-center justify-center gap-5 text-center">
              <Icon name="success-icon" size={120} />
              <h3 className="text-2xl text-primary font-sora">{title}</h3>
              <p className="text-sm text-gray-200 font-quickSand">{message}</p>
              <span className="w-full md:w-3/4 flex items-center justify-between mx-auto">
                <Button
                  label="Save to drafts"
                  variant="primary"
                  size="medium"
                  fullWidth={false}
                  state="active"
                  onClick={handleSaveToDrafts}
                />
                <Button
                  label="Publish"
                  variant="primary"
                  size="medium"
                  fullWidth={false}
                  state="active"
                  onClick={handlePublish}
                />
              </span>
            </div>
          </div>
        )}
      </AnimatePresence>
    </Modal>
  );
}

export default SuccessModal;
