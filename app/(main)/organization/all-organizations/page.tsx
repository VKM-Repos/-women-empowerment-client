'use client'
import React, { useState } from "react";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import SearchForm from "@/components/LandingPage/SearchForm";
import { useGET } from "@/lib/hooks/useGET.hook";
import { OrgCardLoader } from "../components/OrgCardLoader";
import { OrganizationCard } from "@/components/LandingPage/OrganizationCard";
import { Organization } from "@/lib/types/organization.types";
import Pagination from "@/components/Common/Pagination/Pagination";


const AllOrganizationsPage = () => {

  const [pageIndex, setPageIndex] = useState(1);
  const pageCount = 50;
     // fetch lists of organizations
  const {
    data: organizations,
    isLoading: isOrganizationLoading,
    isError: isOrganizationError,
  } = useGET({
    url: "/organizations",
    queryKey: ["organizations"],
    withAuth: false,
    enabled: true,
  });

  // fetch lists of events
  const {
    data: events,
    isLoading: isEventsLoading,
    isError: isEventsError,
  } = useGET({
    url: "/events",
    queryKey: ["events"],
    withAuth: false,
    enabled: true,
  });
  return (
     <main className="w-full">
        <TransitionParent>
        <header className="w-full flex flex-col gap-10 border-b border-gray-500 h-[15rem] p-8 shadow-sm">
            <h3 className="text-3xl text-btnWarning font-semibold font-sora text-center">All organizations</h3>
            <div className="w-full md:w-3/5 mx-auto flex items-center justify-center gap-5">
                <span className="w-[70%] drop-shadow-2xl">
                    <SearchForm placeholder="search for organization" />
                </span>
                <span className="w-fit drop-shadow-2xl">
                filter
            {/* <Filter /> */}
                </span>
            </div>
        </header>
        <section className="w-full md:w-[65%] mx-auto flex flex-col md:p-12 p-4 gap-y-[2rem]">

              {isOrganizationError && <p>Error fetching Organization</p>}

              {isOrganizationLoading ? (
                [1, 2, 3, 4, 5, 6].map((item: any) => (
                  <OrgCardLoader key={item?.id} />
                ))
              ) : !isOrganizationLoading &&
                !isOrganizationError &&
                organizations?.content?.length === 0 ? (
                <p className="no-result">No Organizations yet</p>
              ) : (
                <>
                  {organizations?.content?.map((organization: Organization) => (
                    <OrganizationCard
                      organization={organization}
                      key={organization.id}
                    />
                  ))}
                   <div className="flex gap-3 flex-wrap p-6 py-12">
                    <Pagination
                        gotoPage={setPageIndex}
                        canPreviousPage={pageIndex > 0}
                        canNextPage={pageIndex < pageCount - 1}
                        pageCount={pageCount}
                        pageIndex={pageIndex}
                    />
                    </div>
                </>
              )}
        </section>
    </TransitionParent>
     </main>
  );
};

export default AllOrganizationsPage;
