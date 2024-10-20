import { TransitionParent } from "@/lib/utils/transition";
import SearchForm from "@/components/LandingPage/SearchForm";
import { OrgCardLoader } from "../organization/components/OrgCardLoader";
import NoSearchResults from "@/components/EmptyStates/NoSearchResults";
import { OrganizationCard } from "@/components/LandingPage/OrganizationCard";
import { Organization } from "@/lib/types/organization.types";
import { Suspense } from "react";
import PaginationControls from "@/components/Common/Pagination/PaginationControls";
import GoBackBtn from "@/components/Common/GoBackBtn";

interface ResultsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
interface PaginatedResponseOrganization {
  content: Organization[];
  page: number;
  size: number;
  numberOfElements: number;
  totalElements: number;
}

export default function ResultsPage({
  searchParams,
}: ResultsPageProps) {
  const page = Number(searchParams["page"]) || 0;
  const per_page = Number(searchParams["per_page"]) || 10;


  const fetchData = async (): Promise<any> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}organizations/search?name=${searchParams["query"]}&page=${page}&size=${per_page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const FetchAndRenderData = async () => {
    const data = await fetchData();

    if (!data) {
      return null;
    }
    const entries = data?.content;


    if (entries?.length === 0) {
      return <NoSearchResults message={`${searchParams["query"]}`} />;
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
        <header className="w-full flex flex-col gap-5 p-8">
         <div className="relative -top-5 lg:left-0 -left-5 lg:w-[80%] w-full"><GoBackBtn /></div>
          <h3 className="text-3xl text-primary font-semibold font-sora text-center mt-4">
            Search Results for &ldquo;{searchParams["query"]}&rdquo;
          </h3>
          <div className="w-full md:w-3/5 mx-auto flex items-center justify-center gap-5">
            <span className="w-full md:w-[70%] mx-auto drop-shadow-2xl">
              <SearchForm placeholder={`${searchParams["query"]}`} />
            </span>
          </div>
        </header>
        <section className="w-full md:w-[65%] mx-auto flex flex-col p-4 gap-4 pb-[5rem]">
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
}
