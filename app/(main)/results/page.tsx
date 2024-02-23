"use client";
import React, { useEffect, useState } from "react";
import { TransitionParent } from "@/lib/utils/transition";
import SearchForm from "@/components/LandingPage/SearchForm";
import { useGET } from "@/lib/hooks/useGET.hook";

import { OrganizationCard } from "@/components/LandingPage/OrganizationCard";
import { Organization } from "@/lib/types/organization.types";
import Pagination from "@/components/Common/Pagination/Pagination";
import { OrgCardLoader } from "../organization/components/OrgCardLoader";
import { useSearchParams } from "next/navigation";
import NoSearchResults from "@/components/EmptyStates/NoSearchResults";

const Results = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const [pageIndex, setPageIndex] = useState(1);
  const pageCount = 10;

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
        <section className="w-full md:w-[65%] mx-auto flex flex-col p-4 gap-4">
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
              {searchResults?.content?.map((result: any) => (
                // ... (render search result components)
                <></>
              ))}
              {/* ... (pagination for search results) */}
            </>
          )}
        </section>
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

export default Results;
