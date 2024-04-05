import React, { Suspense, useState } from "react";
import { TransitionParent } from "@/lib/utils/transition";
import SearchForm from "@/components/LandingPage/SearchForm";
import { OrgCardLoader } from "../components/OrgCardLoader";
import { OrganizationCard } from "@/components/LandingPage/OrganizationCard";
import { Organization } from "@/lib/types/organization.types";
import PaginationControls from "@/components/Common/Pagination/PaginationControls";

interface PaginatedResponseOrganization {
  content: Organization[];
  page: number;
  size: number;
  numberOfElements: number;
  totalElements: number;
}

interface ResultsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}



const AllOrganizationsPage = ({
  searchParams,
}: ResultsPageProps) => {

  const page = Number(searchParams["page"]) || 0;
  const per_page = Number(searchParams["per_page"]) || 10;


  const fetchOrganizationsPage = async (): Promise<PaginatedResponseOrganization> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}organizations?page=${page}&size=${per_page}`);
      if (!response.ok) {
        throw new Error('Failed to fetch organizations');
      }

      const data: PaginatedResponseOrganization = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching organizations:', error);
      throw error;
    }
  };


  const FetchAndRenderData = async () => {
    const data = await fetchOrganizationsPage();

    if (!data) {
      return null;
    }
    const entries = data?.content;


    if (entries?.length === 0) {
      return <>No organizations found.</>;
    } else {
      return (
        <>
          {entries?.map((organization: Organization) => (
            <OrganizationCard
              organization={organization}
              key={organization?.id}
            />
          ))}
          <PaginationControls
            totalPages={Math.ceil(data.totalElements / per_page)}
            currentPage={data.page}
          />
        </>
      );
    }
  };
  return (
    <main className="w-full pb-[7rem]">
      <TransitionParent>
        <header className="w-full flex flex-col gap-10 border-b border-gray-500 h-[15rem] p-8 shadow-sm">
          <h3 className="text-3xl text-btnWarning font-semibold font-sora text-center">All organizations</h3>
          <div className="w-full md:w-3/5 mx-auto flex items-center justify-center gap-5">
            <span className="w-full md:w-[70%] mx-auto drop-shadow-2xl">
              <SearchForm placeholder="search for organization" />
            </span>
            <span className="w-fit drop-shadow-2xl">
              {/* filter */}
              {/* <Filter /> */}
            </span>
          </div>
        </header>
        <section className="w-full md:w-[65%] mx-auto flex flex-col md:p-12 p-4 gap-y-[2rem]">
          <Suspense
            fallback={[1, 2, 3, 4, 5, 6].map((item: any) => (
              <OrgCardLoader key={item?.id} />
            ))}
          >
            <FetchAndRenderData />
          </Suspense>
        </section>
      </TransitionParent>
    </main>
  );
};

export default AllOrganizationsPage;

