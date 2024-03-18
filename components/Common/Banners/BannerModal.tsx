'use client'

import Modal from "@/components/Common/Modal/Modal";
import { useModal } from "@/lib/context/modal-context";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Banner from '@/public/images/page-banner.png'
import BannerMob from '@/public/images/page-banner-mob.png'
import Link from 'next/link'
import Image from "next/image";


type Props = {};

export default function BannerModal({ }: Props) {
    const { hideModal } = useModal();

    return (
        <Modal onClose={hideModal} isOpen={true}>
            <AnimatePresence initial={false} mode="wait">
                <div className="relative w-[90%] h-[40vh] mx-auto">
                    <button onClick={hideModal} className='flex items-center justify-center absolute right-5 top-0 w-[2rem] aspect-square rounded-full text-2xl bg-primaryBlack text-white-100 z-[300]'>x</button>
                    <Link href='/iwd-agenda'>
                        <Image src={Banner} alt='banner' layout='relative' className="hidden md:block" />
                        <Image src={BannerMob} alt='banner' layout='relative' className="block md:hidden" />
                    </Link>
                </div>
            </AnimatePresence>
        </Modal>
    );
}