"use client";
import React, { useEffect, useState } from "react";
import { TransitionParent } from "@/lib/utils/transition";
import SearchForm from "@/components/LandingPage/SearchForm";
import { useGET } from "@/lib/hooks/useGET.hook";

import { OrganizationCard } from "@/components/LandingPage/OrganizationCard";
import { Organization } from "@/lib/types/organization.types";
import Pagination from "@/components/Common/Pagination/Pagination";
import { OrgCardLoader } from "../organization/components/OrgCardLoader";
import { useRouter, useSearchParams } from "next/navigation";
import NoSearchResults from "@/components/EmptyStates/NoSearchResults";
import Link from "next/link";
import { useAppContext } from "@/lib/context/app-context";
import { useInfiniteQuery } from "@tanstack/react-query";
import NoContent from "@/components/EmptyStates/NoContent";


interface PaginatedResponseOrganization {
  content: Organization[];
  page: number;
  size: number;
  numberOfElements: number;
  totalElements: number;
  totalPages?: number; // Add this property if it exists
  nextCursor?: string | null; // Add this property if it exists
}


const PAGE_SIZE = 10;


const Results = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const router = useRouter();
  const { user, isAuthenticated } = useAppContext();

  const [pageIndex, setPageIndex] = useState(0);

  const searchOrganizationsPage = async (page: number): Promise<PaginatedResponseOrganization> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/organizations?page=${page}&size=${PAGE_SIZE}`);
      if (!response.ok) {
        throw new Error('Failed to fetch organizations');
      }

      const data: PaginatedResponseOrganization = await response.json();
      return data;
    } catch (error) {
      console.error('Error searching organizations:', error);
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
    queryFn: ({ pageParam }: any) => searchOrganizationsPage(pageParam),
    initialPageParam: '0',  // Convert the initial page number to string
    getNextPageParam: (lastPage) => (lastPage.nextCursor ? lastPage.nextCursor.toString() : undefined),  // Convert the nextCursor to string
    maxPages: 50, // Set your desired maximum number of pages
  });



  const organizations = result.data?.pages.flatMap((page) => page.content) || [];
  const pageCount = result.data ? result.data.pages[result.data?.pages?.length - 1]?.totalElements : 0;

  // useGET hook for fetching search results
  const {
    data: searchResults,
    isLoading: isSearchLoading,
    isError: isSearchError,
  } = useGET({
    url: `/organizations/search?name=${query}`,
    queryKey: ["searchResults", query],
    withAuth: false,
    enabled: !!query,
  });

  console.log("search:", searchResults);

  return (
    <main className="w-full">
      <TransitionParent>
        <header className="w-full flex flex-col gap-5 p-8">
          <h3 className="text-3xl text-btnWarning font-semibold font-sora text-center">
            Search Results for &ldquo;{query}&rdquo;
          </h3>
          <div className="w-full md:w-3/5 mx-auto flex items-center justify-center gap-5">
            <span className="w-[70%] drop-shadow-2xl">
              <SearchForm placeholder={`${query}`} />
            </span>
          </div>
        </header>
        <section className="w-full md:w-[65%] mx-auto flex flex-col p-4 gap-4 pb-[5rem]">
          {isSearchError && <p>Error fetching search results</p>}

          {isSearchLoading ? (
            [1, 2, 3, 4, 5, 6].map((item: any) => (
              <OrgCardLoader key={item?.id} />
            ))
          ) : !isSearchLoading &&
            !isSearchError &&
            searchResults?.content?.length === 0 ? (
            <NoSearchResults message={`${query}`} />
          ) : (
            <>
              {searchResults?.content?.map((organization: Organization) => (
                <OrganizationCard
                  organization={organization}
                  key={organization.id}
                />
              ))}
              {/* ... (pagination for search results) */}
            </>
          )}
        </section>
        {!isSearchLoading &&
          !isSearchError &&
          searchResults?.content?.length === 0 ? (
          <>
            <section className="w-full md:w-[65%] mx-auto flex flex-col md:p-12 p-4 gap-y-[2rem]">
              <div>
                <span className="flex gap-10 items-center justify-start text-base font-sora text-gray-300">
                  <p>Search for : </p>
                  <span className="flex gap-5">
                    <Link href="/results?name=tech" className="hover:text-btnWarning underline">
                      Tech
                    </Link>
                    <Link href="/results?name=gender%20equity" className="hover:text-btnWarning underline">
                      gender equity
                    </Link>
                    <Link href="/results?name=sensitization" className="hover:text-btnWarning underline">
                      Sensitization
                    </Link>
                    <Link href="/results?name=feminism" className="hover:text-btnWarning underline">
                      Feminism
                    </Link>
                  </span>
                </span>
              </div>
              {result.isError && <p>Error fetching Organization</p>}

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
          </>
        ) : null}
      </TransitionParent>
    </main>
  );
};

export default Results;
