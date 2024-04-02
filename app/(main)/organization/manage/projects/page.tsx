"use client";
import React, { useEffect, useState } from "react";
import Tab from "./components/Tab";
import Project from "./components/Project";
import orgLogo from "@/public/images/wtn.svg";
import Link from "next/link";
import { useGET } from "@/lib/hooks/useGET.hook";
import { useAppContext } from "@/lib/context/app-context";
import { TransitionParent } from "@/lib/utils/transition";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";
interface EventTab {
  name: string;
}

const tabs: EventTab[] = [{ name: "All Projects" }, { name: "Drafts" }];
export default function Events() {
  const [selectedProjectType, setSelectedProjectType] = useState<EventTab>(
    tabs[0]
  );
  const [fetchCount, setFetchCount] = useState(0);
  const { user } = useAppContext();

  const {
    data: projects,
    isPending,
    refetch,
  } = useGET({
    url: `organizations/${user?.organizationId}/projects${
      selectedProjectType?.name == "Drafts" ? "/drafts" : ""
    }`,
    queryKey: ["GET_ALL_PROJECTS", selectedProjectType?.name, fetchCount],
    withAuth: true,
    enabled: true,
  });
  useEffect(() => {
    setFetchCount(fetchCount + 1);
    refetch();
  }, [selectedProjectType.name]);

  return (
    <TransitionParent>
      {isPending ? (
        <LoadingThinkingWomen />
      ) : (
        <div>
          <div className="w-full flex justify-between my-10">
            <div className="flex items-center gap-10">
              <div className="flex gap-10">
                {tabs?.map((tab) => (
                  <Tab
                    key={tab.name}
                    name={tab.name}
                    selectedProjectType={selectedProjectType === tab}
                    setSelectedProjectType={() => setSelectedProjectType(tab)}
                  />
                ))}
              </div>
            </div>
            <div>
              <Link
                href={"/projects/create"}
                className="px-5 py-2 bg-btnWarning rounded-md font-light font-sora text-white-100"
              >
                Add Project
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {projects?.content?.length < 1 ? (
              <div className="flex justify-center">
                {" "}
                <h2 className="text-2xl font-sora text-gray-400">
                  No project created yet in {selectedProjectType.name}
                </h2>
              </div>
            ) : (
              projects?.content?.map((project: any) => (
                <Project
                  key={project?.name}
                  project={project}
                  projectStatus={selectedProjectType.name}
                  imageWidth={130}
                  includeMenu={true}
                />
              ))
            )}
          </div>
        </div>
      )}
    </TransitionParent>
  );
}
