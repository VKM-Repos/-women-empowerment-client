"use client";
import React, { useEffect, useState } from "react";
import Tab from "./components/Tab";
import { useGET } from "@/lib/hooks/useGET.hook";
import { useAppContext } from "@/lib/context/app-context";
import { TransitionParent } from "@/lib/utils/transition";
import { BreadcrumbComponent } from "../components/WithBreadcrumb";
import Button from "@/components/Common/Button/Button";
import NoContent from "@/components/EmptyStates/NoContent";
import Project, { Loader } from "./components/Project";
interface ProjectTab {
  name: string;
}

const tabs: ProjectTab[] = [{ name: "All Projects" }, { name: "Drafts" }];
export default function ProjectPage() {
  const [selectedProjectType, setSelectedProjectType] = useState<ProjectTab>(
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
    <TransitionParent className="p-0 md:px-8 md:py-4 space-y-2">
      <BreadcrumbComponent />     
          <div className="w-full flex justify-between">
              <div className="flex gap-4 md:gap-8">
                {tabs?.map((tab) => (
                  <Tab
                    key={tab.name}
                    name={tab.name}
                    selectedProjectType={selectedProjectType === tab}
                    setSelectedProjectType={() => setSelectedProjectType(tab)}
                  />
                ))}
              </div>
        
             <Button
              label="Add Project"
              variant="primary"
              state="active"
              size="normal"
              fullWidth={false}
              onClick={() => (window.location.href = '/projects/create')}
              />
          </div>
          <div className="flex flex-col gap-5 py-4">
            {isPending && (
               [1, 2, 3, 4, 5].map((item: any) => (
            <Loader key={item.id} />
          )))
          }
            {projects?.content?.length < 1 ? (
            <div className="flex justify-center">
            <NoContent
              message={`There's nothing here.`}
              buttonText={'Add Project'}
              buttonLink={() => (window.location.href = '/projects/create')}
              withButton={true}
            />
            </div>
            ) : (
              projects?.content?.map((project: any) => (
                <Project
                  key={project?.name}
                  project={project}
                  projectStatus={selectedProjectType.name}
                />
              ))
            )}
          </div>

    </TransitionParent>
  );
}
