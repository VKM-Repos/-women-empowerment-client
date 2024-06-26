"use client";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import formatIdToTitle from "@/lib/utils/formatIdToTitle";
import WomenHubProjects from "@/public/images/women-hub-projects.png";
import { Project } from "@/lib/types/project.types";
import Image from "next/image";
import ImageWithFallback from "@/components/Common/ImageWithFallBack";

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const imageControls = useAnimation();

  const handleHoverStart = () => {
    imageControls.start({ scale: 1.3 });
  };

  const handleHoverEnd = () => {
    imageControls.start({ scale: 1 });
  };

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const truncatedText = (text: string, maxLength: number) => {
    return text.length > maxLength && !expanded
      ? `${text.slice(0, maxLength)}...`
      : text;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'bg-[#FF7400] text-primaryWhite';
      case 'ONGOING':
        return 'bg-[#FFFFFF] text-primary';
      case 'UPCOMING':
        return 'bg-[#93E5AB] text-primary';
      default:
        return '';
    }
  };

  return (
    <Link
      href={`/projects/${project.id}`}
      className="justify-center bg-primaryWhite flex-col space-y-4 md:w-[320px]  w-[340px] h-[390px] md:h-[500px] mx-auto shadow-lg p-4 rounded-xl"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className=" "
      >
        <div className=" bg-slate-200 h-[60%] overflow-hidden flex items-center justify-center relative">
          <div className="bg-gradient-to-t from-primaryBlack/40 to-transparent absolute inset-0 "></div>
          <motion.div
            animate={imageControls}
            className="w-full h-[12rem] md:h-[18rem] overflow-hidden"
          >
           <ImageWithFallback
            src={
              project?.image ||
              "https://placehold.co/200x300?text=Women\n Hub"
            }
            fallbackSrc={"https://placehold.co/200x300?text=Women\n Hub"}
            aspectRatio={{ width: 300, height: 400 }}
            alt={project?.title}
            className="w-full"
          />
          </motion.div>
          <span className={`w-fit text-xs font-bold font-quickSand p-1 px-2 rounded-md absolute bottom-2 left-2 ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        <div className="flex flex-col gap-0 h-[40%] ">
          <h6 className="text-xs font-bold font-quickSand text-gray-200 pt-3">{project.category.name}</h6>
          <h4 className="text-primary font-sora text-base md:text-base lg:text-lg  font-semibold w-full whitespace-nowrap truncate">{project.title}</h4>
          <p className="text-xs md:text-sm font-quickSand font-medium  text-gray-100 h-[3rem] md:h-[4rem] overflow-hidden">
            {truncatedText(project?.description, 100)}
            {/* {project.description.length > 50 && (
              <span className="text-info text-xs">See more</span>
            )} */}
          </p>
          <div className="w-full grid grid-cols-8 gap-2 items-center">
            <span className="col-span-1 overflow-hidden">
              <ImageWithFallback
                src={project.organization.logo || ""}
                fallbackSrc={"https://placehold.co/200x300?text=Women\n Hub"}
                aspectRatio={{ width: 100, height: 100 }}
                alt={project?.title}
                className="w-full aspect-square rounded-full"
              />
            </span>
            <span className="w-full col-span-7 text-gray-200 text-xs font-semibold font-sora whitespace-nowrap truncate">
              {project.organization.name}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};
