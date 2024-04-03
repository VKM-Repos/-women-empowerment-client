import React, { Suspense, useEffect, useState } from "react";
import db from "@/data/db.json";
import { OrganizationCard } from "@/components/LandingPage/OrganizationCard";
import EventCard from "../../(community)/discussions/components/EventCard";
import Button from "@/components/Common/Button/Button";
import { Organization } from "@/lib/types/organization.types";
import { Category } from "@/lib/types/category.types";
import { OrgCardLoader } from "../../organization/components/OrgCardLoader";
import { CategoryCard } from "../components/CategoryCard";
import EventCardLoader from "../../events/components/EventCardLoader";
import { Event } from "@/lib/types/events.types";
import SearchForm from "@/components/LandingPage/SearchForm";
import toast from "react-hot-toast";
import { TransitionOpacityAlone } from "@/lib/utils/transition";
import PaginationControls from "@/components/Common/Pagination/PaginationControls";
import CategoryCarousel from "../components/CategoryCarousel";

interface OrgPaginatedResponse {
  content: any;
  page: number;
  size: number;
  numberOfElements: number;
  totalElements: number;
}

interface PageProps {
  params: { id: string; [key: string]: string | string[] | undefined };
}

export default async function CategoryDetailsPage({ params }: PageProps) {
  let page = Number(params["page"]) || 0;
  let per_page = Number(params["per_page"]) || 5;

  console.log(params, "page<<<<<<<<<<");

  const fetchOrganizationsByCategoryId =
    async (): Promise<OrgPaginatedResponse> => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}categories/${params?.id}/organizations?page=${page}&size=${per_page}`,
          { next: { revalidate: 180 } }
        );
        // const response = await fetch(
        //   `${process.env.NEXT_PUBLIC_API_URL}categories/${params?.id}/organizations`,
        //   { next: { revalidate: 180 } }
        // );
        if (!response.ok) {
          toast.error("Failed to fetch organizations");
        }

        const data: any = await response.json();

        return data;
      } catch (error) {
        console.error("Error fetching organizations:", error);
        throw error;
      }
    };

  const RenderOrganizationByCategoryId = async () => {
    const data: any = await fetchOrganizationsByCategoryId();

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

  const fetchEvents = async (): Promise<any> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}events`, {
        next: { revalidate: 180 },
      });
      if (!response.ok) {
        toast.error("Failed to fetch events");
      }

      const data: any = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  };

  const RenderEvents = async () => {
    const data = await fetchEvents();

    if (!data) {
      return null;
    }
    const entries = data?.content;

    if (entries?.length === 0) {
      return <>No Events found.</>;
    } else {
      return (
        <>
          {entries?.slice(0, 5).map((event: Event) => (
            <EventCard key={event.id} event={event} />
          ))}
          <div className="w-fit mx-auto my-8">
            <Button
              label="SEE MORE EVENTS"
              variant="outline"
              fullWidth={false}
              size="normal"
              // onClick={() => window.location.href = "/events"}
            />
          </div>
        </>
      );
    }
  };

  const fetchCategories = async (): Promise<any> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}categories`,
        { next: { revalidate: 180 } }
      );
      if (!response.ok) {
        toast.error("Failed to fetch organizations");
      }

      const data: any = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching organizations:", error);
      throw error;
    }
  };

  const RenderCategories = async () => {
    const data = await fetchCategories();

    if (!data) {
      return null;
    }
    const entries = data?.content;

    if (entries?.length === 0) {
      return <>No categories found.</>;
    } else {
      return (
        <div className="">
          <CategoryCarousel category={entries} params={params} />
        </div>
      );
    }
  };

  // Fetch categories and filter the matched category
  const loadCategories = async () => {
    const categoriesData = await fetchCategories();
    const matchedCategory = categoriesData?.content.find(
      (category: any) => category.id == params.id
    );
    return { categories: categoriesData?.content, matchedCategory };
  };

  // Usage in your component
  const { categories, matchedCategory } = await loadCategories();

  // console.log(matchedCategory);

  return (
    <TransitionOpacityAlone>
      <section className="w-screen flex flex-col items-center justify-start space-y-[2rem] min-h-screen">
        <div className="bg-primary w-[92%] md:w-[95%] lg:h-[20rem] h-[20rem] rounded-[1rem] grid grid-cols-1 lg:grid-cols-2 place-content-start md:place-content-center items-center p-4 md:p-16 relative overflow-hidden ">
          <div className="w-full flex flex-col gap-2 items-start relative z-10">
            <h6 className="md:text-[26px] text-sm text-center text-primaryWhite font-sora font-semibold">
              Find organizations in:
            </h6>
            <h1 className="md:text-[45px] text-[29px] text-center text-primaryWhite font-sora font-semibold">
              {matchedCategory?.name}
            </h1>
            <SearchForm
              placeholder={`Search for organizations under ${matchedCategory?.name}`}
            />
          </div>
          <div className="md:col-span-1 absolute bottom-0 md:right-0 right-1/4 block z-1">
            <img
              loading="lazy"
              alt="Event Image"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c43bb1d-5bd1-4831-872b-474116f3e3dc?apiKey=12cdcbacd64a44978db653c66e993585&"
              className="lg:w-[16rem] w-[7rem] mx-auto aspect-auto rounded-br-xl"
            />
          </div>
          <div className="w-fit absolute right-0 bottom-0"></div>
        </div>

        <section className="w-full md:w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-6 gap-10 relative px-4">
          <div className="lg:col-span-4 w-full flex flex-col py-[2rem]">
            <h3 className="text-orange-500 text-lg md:text-2xl font-sora font-semibold items-stretch justify-center py-1 border-b-neutral-200 border-b border-solid max-md:max-w-full mb-5">
              Organizations in {matchedCategory?.name}
            </h3>
            <section className=" flex flex-col gap-4">
              <Suspense
                fallback={[1, 2, 3, 4, 5].map((item: any) => (
                  <OrgCardLoader key={item?.id} />
                ))}
              >
                <RenderOrganizationByCategoryId />
              </Suspense>
            </section>
          </div>

          <div className="lg:col-span-2 w-full hidden lg:flex flex-col space-y-8  border-none py-[2rem] relative h-full overflow-y-scroll scrollable-section ">
            <aside className="w-full rounded-[1.5rem] ">
              <h3 className="text-orange-500 text-lg md:text-2xl font-sora font-semibold items-stretch justify-center py-1 border-b-neutral-200 border-b border-solid max-md:max-w-full mb-5">
                EVENTS
              </h3>

              <section className="flex flex-col lg:gap-[0.1rem] gap-[3rem]  py-1">
                <Suspense
                  fallback={[1, 2, 3, 4, 5, 6].map((item: any) => (
                    <EventCardLoader key={item?.id} />
                  ))}
                >
                  <RenderEvents />
                </Suspense>
              </section>
            </aside>

            <aside className="w-full py-4 rounded-[1.5rem] ">
              {/* <h3 className="text-orange-500 text-2xl font-sora font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid -mt-[50px]">
                  NEWS CENTER
                </h3> */}
              {/* <section className="flex flex-col lg:gap-[0.1rem] gap-[3rem] py-1">
                {db.news.map((item) => (
                  <NewsCard key={item.id} news={item} />
                ))}
                <div className="w-fit mx-auto my-8">
                  <Button
                    label="MORE FROM NEWS CENTER"
                    variant="outline"
                    fullWidth={false}
                    size="normal"
                  />
                </div>
              </section> */}
              {/* <NoContent
                  message="No blogs yet."
                  buttonText={"Visit blog"}
                  buttonLink={() => router.push("/blog")}
                /> */}
            </aside>
          </div>
        </section>

        <div className="py-[2rem] w-full  mx-auto flex flex-col gap-2 pb-[7rem] relative">
            <Suspense fallback={<>Loading...</>}>
              <RenderCategories />
            </Suspense>
        </div>
      </section>
    </TransitionOpacityAlone>
  );
}
