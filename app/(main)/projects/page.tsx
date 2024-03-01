"use client";
import React, { useEffect, useState } from "react";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import ProjectManagers from "@/public/images/project-managers-illustration.png";
import SearchForm from "@/components/LandingPage/SearchForm";
import { useGET } from "@/lib/hooks/useGET.hook";
import Button from "@/components/Common/Button/Button";
import { ProjectCard } from "./components/ProjectCard";
import { Project } from "@/lib/types/project.types";
import { ProjectCardLoader } from "./components/ProjectCardLoader";
import FilterDropdown from "@/components/Common/Dropdown/FilterDropdown";
import Dropdown from "@/components/Common/Dropdown/Dropdown";
import { Category } from "@/lib/types/category.types";
import { useModal } from "@/lib/context/modal-context";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/lib/context/app-context";
import LoginWarningModal from "@/components/LandingPage/LoginWarningModal";
import CreateOrgFirstModal from "../events/components/CreateOrgFirstModal";
const ProjectPage = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const { showModal } = useModal();

  const router = useRouter();
  const { isAuthenticated, user } = useAppContext();
  // fetch lists of projects
  const {
    data: projects,
    isLoading: isProjectLoading,
    isError: isProjectError,
  } = useGET({
    url: "/project",
    queryKey: ["project"],
    withAuth: false,
    enabled: true,
  });

  const {
    data: categories,
    isLoading,
    isError,
  } = useGET({
    url: "/categories",
    queryKey: ["categories"],
    withAuth: false,
    enabled: true,
  });

  const handleCreateProject = () => {
    if (!isAuthenticated) {
      showModal(<LoginWarningModal />);
    } else if (isAuthenticated && user?.role !== "ADMIN") {
      showModal(<CreateOrgFirstModal />);
    } else {
      window.location.href = "/projects/create";
    }
  };
  return (
    <main className="w-full">
      <TransitionParent>
        <header className="bg-primary w-[92%] mx-auto md:w-[95%] h-[25rem] rounded-[1.2rem] grid grid-cols-1 lg:grid-cols-2 place-content-start md:place-content-center items-center p-4 md:p-16 relative overflow-hidden">
          <div className="w-full md:col-span-1 flex flex-col items-start justify-center gap-2 md:gap-4 mt-6 lg:mt-0 relative left-0 lg:left-[5%] z-20">
            <h1 className="md:text-[45px] text-[22px] text-left text-primaryWhite font-sora font-semibold leading-tight">
              Explore Ongoing Projects for Change
            </h1>
            <div className="w-full md:w-3/4">
              <SearchForm placeholder="Search for a project" />
            </div>
          </div>
          <div className="md:col-span-1 relative lg:absolute lg:bottom-0 -bottom-10 md:right-10 block z-10">
            <Image
              src={ProjectManagers}
              alt="group of project managers illustration"
              width={1000}
              height={1000}
              className="lg:w-[23rem] w-[15rem] mx-auto aspect-auto"
            />
          </div>
        </header>
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
        <section className="w-full md:w-[95%] mx-auto flex justify-center gap-5 md:gap-10 flex-wrap md:gap-y-16 pb-[8rem]">
          <div className="w-full flex items-center justify-between">
            <span className="text-base md:text-xl text-gray-300 font-semibold font-quickSand">
              Click below to <br /> Discover Initiatives Making a Difference
            </span>
            {/* add filter dropdown here */}
            {/* <FilterDropdown>
              <div className="w-full flex flex-col gap-2">
                <p>Show me projects on</p>
                <span className="w-full border border-gray-500">
                  <Dropdown
                  options={categories?.content.map((category: Category) => ({
                    id: category.id,
                    label: category.name,
                  }))}
                  onSelect={(selectedCategory: any) => setSelectedOption(selectedCategory.id)}
                  placeholder="select category" 
                />
                </span>
              </div>
            </FilterDropdown> */}
          </div>
          {isProjectError && <p>Error fetching Projects</p>}

          {isProjectLoading ? (
            [1, 2, 3, 4, 5, 6, 7, 8].map((item: any) => (
              <ProjectCardLoader key={item?.id} />
            ))
          ) : !isProjectLoading &&
            !isProjectError &&
            projects?.content?.length === 0 ? (
            <p className="no-result">No projects yet</p>
          ) : (
            <>
              {projects?.content?.map((project: Project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </>
          )}
        </section>
      </TransitionParent>
    </main>
  );
};

export default ProjectPage;
