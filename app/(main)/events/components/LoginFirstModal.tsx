"use client";

import Modal from "@/components/Common/Modal/Modal";
import LoginFirst from "@/components/ErrorMessage/LoginFirst";
import { useModal } from "@/lib/context/modal-context";
import { AnimatePresence } from "framer-motion";
import React from "react";

type Props = {
  redirectURL: string;
};

export default function LoginFirstModal({ redirectURL }: Props) {
  const { hideModal } = useModal();

  return (
    <Modal onClose={hideModal} isOpen={true}>
      <AnimatePresence initial={false} mode="wait">
        <LoginFirst
          title="Add an event"
          message="You have to Login to add an event"
          redirectURL={redirectURL}
        />
      </AnimatePresence>
    </Modal>
  );
}
