"use client";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import React from "react";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";
import WomenHubProjects from "@/public/images/women-hub-projects.png";
import { Project } from "@/lib/types/project.types";
import Image from "next/image";

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const imageControls = useAnimation();

  const handleHoverStart = () => {
    imageControls.start({ scale: 1.3 });
  };

  const handleHoverEnd = () => {
    imageControls.start({ scale: 1 });
  };

  return (
    <Link
      href={`/projects/${project.id}`}
      as={`/projects/${formatIdToTitle(project.name)}`}
      className="justify-center items-stretch bg-primaryWhite flex-col space-y-4 lg:min-w-[302px] min-w-[250px] h-[420px] lg:h-[460px] shadow-lg pt-6 px-6 rounded-3xl"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className=" "
      >
        <div className=" bg-slate-200 h-[60%] overflow-hidden flex items-center justify-center relative">
          <div className="bg-gradient-to-t from-primaryBlack/40 to-transparent absolute inset-0 "></div>
          <motion.img
            loading="lazy"
            // srcSet={project.image}
            src={WomenHubProjects.src}
            animate={imageControls}
            className=" object-contain object-center h-[20rem] overflow-hidden max-md:mr-0.5"
          />
          <span className="w-fit text-xs bg-btnWarning text-primaryWhite p-1 px-2 rounded-md absolute bottom-2 left-2">
            {project.status}
          </span>
        </div>
        <div className="flex flex-col gap-2 h-[40%]">
          <h6 className="text-xs md:text-sm font-quickSand">{project.category.name}</h6>
          <h4 className="text-green-800 font-sora text-lg md:text-xl lg:text-2xl  font-semibold leading-5">{project.name}</h4>
          <p className="text-xs md:text-sm  text-gray-200">{project.description}</p>
          <div className="w-full grid grid-cols-8 items-center">
            <span className="col-span-2 md:col-span-1">
              <Image
                src={project.organization.logo || ""}
                alt={`author`}
                width={100}
                height={100}
                className="w-full md:w-2/3  aspect-square rounded-full object-contain"
              />
            </span>
            <span className="w-full col-span-6 md:col-span-6 text-primary text-sm font-semibold font-sora ">
              {project.organization.name}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
