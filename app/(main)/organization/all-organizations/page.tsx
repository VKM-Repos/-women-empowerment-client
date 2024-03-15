'use client'

import React, { useState } from "react";
import { TransitionParent } from "@/lib/utils/transition";
import Image from "next/image";
import SearchForm from "@/components/LandingPage/SearchForm";
import { useInfiniteQuery } from "@tanstack/react-query";
import { OrgCardLoader } from "../components/OrgCardLoader";
import { OrganizationCard } from "@/components/LandingPage/OrganizationCard";
import { Organization } from "@/lib/types/organization.types";
import Pagination from "@/components/Common/Pagination/Pagination";
import NoContent from "@/components/EmptyStates/NoContent";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/lib/context/app-context";





interface PaginatedResponseOrganization {
  content: Organization[];
  page: number;
  size: number;
  numberOfElements: number;
  totalElements: number;
  totalPages?: number; // Add this property if it exists
  nextCursor?: string | null; // Add this property if it exists
}


const PAGE_SIZE = 5;


const AllOrganizationsPage = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useAppContext();

  const [pageIndex, setPageIndex] = useState(0);

  const fetchOrganizationsPage = async (page: number): Promise<PaginatedResponseOrganization> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}organizations?page=${page}&size=${PAGE_SIZE}`);
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

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    ...result
  } = useInfiniteQuery<PaginatedResponseOrganization, Error>({
    queryKey: ["organizations"],
    queryFn: ({ pageParam }: any) => fetchOrganizationsPage(pageParam),
    initialPageParam: '0',  // Convert the initial page number to string
    getNextPageParam: (lastPage) => (lastPage.nextCursor ? lastPage.nextCursor.toString() : undefined),  // Convert the nextCursor to string
    maxPages: 50, // Set your desired maximum number of pages
  });

  console.log('result>>>>>>', result);


  const organizations = result.data?.pages.flatMap((page) => page.content) || [];
  const pageCount = result.data ? result.data.pages[result.data?.pages?.length - 1]?.totalElements : 0;

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
              {/* filter */}
              {/* <Filter /> */}
            </span>
          </div>
        </header>
        <section className="w-full md:w-[65%] mx-auto flex flex-col md:p-12 p-4 gap-y-[2rem]">
          {result.isError && <p>Error fetching Organization</p>}

          {result.isLoading ? (
            [1, 2, 3, 4, 5, 6].map((item: any) => <OrgCardLoader key={item?.id} />)
          ) : !result.isLoading && !result.isError && organizations.length === 0 ? (
            <NoContent
              message="No organization yet."
              buttonText={
                isAuthenticated ? "Add organization" : "Login to add"
              }
              buttonLink={
                isAuthenticated
                  ? () => router.push("/organization/create")
                  : () => router.push("/account/login")
              }
            />
          ) : (
            <>
              {organizations.map((organization: Organization) => (
                <OrganizationCard organization={organization} key={organization.id} />
              ))}
              <div className="flex gap-3 flex-wrap p-6 py-12">
                <Pagination
                  fetchMore={() => fetchNextPage()}
                  canPreviousPage={pageIndex > 0}
                  canNextPage={hasNextPage}
                  pageCount={pageCount}
                  pageIndex={pageIndex}
                  isFetchingNextPage={isFetchingNextPage}
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

