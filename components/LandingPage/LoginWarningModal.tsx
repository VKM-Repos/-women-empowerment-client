'use client';

import Modal from '@/components/Common/Modal/Modal';
import { useModal } from '@/lib/context/modal-context';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import LoginWarning from './LoginWarning';

type Props = {
  redirectURL: string;
};

export default function LoginWarningModal({ redirectURL }: Props) {
  const { hideModal } = useModal();

  return (
    <Modal onClose={hideModal} isOpen={true}>
      <AnimatePresence initial={false} mode="wait">
        <LoginWarning
          title="Warning"
          message="Please login to complete action"
          redirectURL={redirectURL}
        />
      </AnimatePresence>
    </Modal>
  );
}
