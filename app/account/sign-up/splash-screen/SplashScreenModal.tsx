import Modal from '@/components/Common/Modal/Modal';
import { useModal } from '@/lib/context/modal-context';
import { AnimatePresence } from 'framer-motion';
import React from 'react'
import SplashScreen from './SplashScreen';

type Props = {}

const SplashScreenModal = (props: Props) => {
  const { hideModal } = useModal();

  return (
    <Modal onClose={hideModal} isOpen={true}>
      <AnimatePresence initial={false} mode="wait">
        <SplashScreen />
      </AnimatePresence>
    </Modal>
  )
}

export default SplashScreenModal