'use client'
import React from 'react'
import Button from '@/components/Common/Button/Button'
import LoginWarningModal from '@/components/LandingPage/LoginWarningModal';
import CreateOrgFirstModal from '../../events/components/CreateOrgFirstModal';
import { useModal } from '@/lib/context/modal-context';
import { useAppContext } from '@/lib/context/app-context';

type Props = {}

function ProjectCTA({ }: Props) {
    const { showModal } = useModal();
    const { isAuthenticated, user } = useAppContext();


    const handleCreateProject = () => {
        if (!isAuthenticated) {
            showModal(<LoginWarningModal redirectURL='/projects/create' />);
        } else if (isAuthenticated && user?.role !== "ADMIN") {
            showModal(<CreateOrgFirstModal />);
        } else {
            window.location.href = "/projects/create";
        }
    };
    return (
        <section className="w-full md:w-[75%] mx-auto flex flex-col items-center justify-center text-center md:p-12 p-4 gap-y-[1rem]">
            <h3 className="md:text-[32px] text-[18px] text-primary font-sora font-semibold leading-tight">
                Women hub bringing the new initiatives to have you onboard.
            </h3>
            <p className="text-gray-100 text-center text-base font-normal font-quickSand">
                You can add your projects for awareness, collaborations and
                sponsorships
            </p>
            <div className="w-fit mx-auto">
                <Button
                    label="Start a project"
                    variant="primary"
                    fullWidth={false}
                    size="normal"
                    onClick={handleCreateProject}
                />
            </div>
        </section>
    )
}

export default ProjectCTA