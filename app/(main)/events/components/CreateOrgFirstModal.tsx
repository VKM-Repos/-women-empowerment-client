'use client'

import Modal from "@/components/Common/Modal/Modal";
import CreateOrgFirst from "@/components/ErrorMessage/CreateOrgFirst";
import { useModal } from "@/lib/context/modal-context";
import { AnimatePresence } from "framer-motion";
import React from "react";

type Props = {};

export default function CreateOrgFirstModal({}: Props) {
  const { hideModal } = useModal();

  return (
    <Modal onClose={hideModal} isOpen={true}>
      <AnimatePresence initial={false} mode="wait">
        <CreateOrgFirst
          title="Register Your Organization"
          message="...you don’t have an organization. You need to register your organization before you can add an event"
        />
      </AnimatePresence>
    </Modal>
  );
}
