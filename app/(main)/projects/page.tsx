import React, { Suspense } from "react";
import {
  TransitionFromBottomAlone,
  TransitionParent,
} from "@/lib/utils/transition";
import Image from "next/image";
import ProjectManagers from "@/public/images/project-managers-illustration.png";
import SearchForm from "@/components/LandingPage/SearchForm";
import Button from "@/components/Common/Button/Button";
import { ProjectCard } from "./components/ProjectCard";
import { Project } from "@/lib/types/project.types";
import { ProjectCardLoader } from "./components/ProjectCardLoader";
import FilterDropdown from "@/components/Common/Dropdown/FilterDropdown";

import PaginationControls from "@/components/Common/Pagination/PaginationControls";
import ProjectCTA from "./components/ProjectCTA";
import ProjectSearchForm from "./components/ProjectSearchForm";
import NoSearchResults from "@/components/EmptyStates/NoSearchResults";
import GoBackBtn from "@/components/Common/GoBackBtn";

interface ResultsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

interface PaginatedResponseData {
  content: Project[];
  page: number;
  size: number;
  numberOfElements: number;
  totalElements: number;
}

const ProjectPage = async ({ searchParams }: ResultsPageProps) => {
  const page = Number(searchParams["page"]) || 0;
  const per_page = Number(searchParams["per_page"]) || 8;

  const fetchProjects = async (): Promise<PaginatedResponseData> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}projects?page=${page}&size=${per_page}`,
        { cache: "no-store" }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }

      const data: PaginatedResponseData = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  };

  const fetchSearchResults = async (): Promise<PaginatedResponseData> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}projects/search?page=${page}&size=${per_page}&title=${searchParams["title"]}`,
        { cache: "no-store" }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }

      const data: PaginatedResponseData = await response.json();
      console.log(data);

      return data;
    } catch (error) {
      console.error("Error fetching search results:", error);
      throw error;
    }
  };

  const FetchAndRenderData = async () => {
    let data: PaginatedResponseData;

    if (searchParams["title"]) {
      data = await fetchSearchResults();
    } else {
      data = await fetchProjects();
    }

    if (!data) {
      return null;
    }
    const entries = data?.content;

    if (entries?.length === 0) {
      return <NoSearchResults message={`${searchParams["title"]}`} />;
    } else {
      return (
        <>
          <div className="w-[90%] mx-auto flex items-center justify-between">
            <span className="text-base md:text-lg text-gray-300 font-semibold font-quickSand">
              Click below to <br /> Discover Initiatives Making a Difference
            </span>
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
          <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-y-8 ">
            {entries?.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <PaginationControls
            totalPages={Math.ceil(data.totalElements / per_page)}
            currentPage={data.page}
          />
        </>
      );
    }
  };

  return (
    <main className="w-full">
      <TransitionParent>
        {!searchParams["title"] ? (
          <>
            <header className="bg-primary w-[92%] mx-auto md:w-[95%] h-[25rem] rounded-[1.2rem] grid grid-cols-1 lg:grid-cols-2 place-content-start md:place-content-center items-center p-4 md:p-16 relative overflow-hidden">
              <div className="w-full md:col-span-1 flex flex-col items-start justify-center gap-2 md:gap-4 mt-6 lg:mt-0 relative left-0 lg:left-[5%] z-20">
                <h1 className="md:text-[45px] text-[22px] text-left text-primaryWhite font-sora font-semibold leading-tight">
                  Explore Ongoing Projects for Change
                </h1>
                <div className="w-full md:w-3/4">
                  <ProjectSearchForm placeholder="Search for a project" />
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
            <ProjectCTA />
          </>
        ) : (
          <header className="w-full flex flex-col gap-5 p-8">
            <div className="relative -top-5 lg:left-0 -left-5 lg:w-[80%] w-full">
              <GoBackBtn />
            </div>
            <h3 className="text-3xl text-primary font-semibold font-sora text-center mt-4">
              Search Results for &ldquo;{searchParams["title"]}&rdquo;
            </h3>
            <div className="w-full md:w-3/5 mx-auto flex items-center justify-center gap-5">
              <span className="w-full md:w-[70%] mx-auto drop-shadow-2xl">
                <ProjectSearchForm placeholder={`${searchParams["title"]}`} />
              </span>
            </div>
          </header>
        )}
        <TransitionFromBottomAlone>
          <section className="w-full flex flex-col items-center justify-center justify-items-center gap-5 md:gap-10 md:gap-y-16 pb-[8rem] ">
            <Suspense
              fallback={[1, 2, 3, 4].map((item: any) => (
                  <ProjectCardLoader key={item?.id} />
              ))}
            >
              <FetchAndRenderData />
            </Suspense>
          </section>
        </TransitionFromBottomAlone>
      </TransitionParent>
    </main>
  );
};

export default ProjectPage;
