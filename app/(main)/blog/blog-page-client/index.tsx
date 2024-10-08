'use client';
import { TransitionParent } from '@/lib/utils/transition';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import BlogHero from '@/public/images/blog-hero.png';
import RecentPosts from '../components/RecentPosts';
import AllPosts from '../components/AllPosts';
import PaginationControls from '@/components/Common/Pagination/PaginationControls';

type Props = {
  data: any;
  perPage: number;
  initialRecentPosts: any[];
};

const BlogPageClient = ({ data, perPage, initialRecentPosts }: Props) => {
  const [allBlogPosts, setAllBlogPosts] = useState<any[]>(data?.content || []);

  useEffect(() => {
    if (data?.content.length > 0) {
      setAllBlogPosts(data?.content);
    }
  }, [data]);

  return (
    <TransitionParent>
      <div className="mx-auto min-h-screen w-[95vw] space-y-[2rem] pb-[5rem]">
        <section className="bg-primary relative mx-auto grid h-[23rem] w-[92%] grid-cols-1 place-content-start items-center overflow-hidden rounded-[1rem] p-4 md:w-[95%] md:place-content-center md:p-16 lg:h-[25rem] lg:grid-cols-5 ">
          <div className="relative z-10 col-span-1 flex w-full flex-col items-start gap-2 lg:col-span-3">
            <h1 className="text-primaryWhite font-sora text-pretty text-left text-[29px]  font-semibold leading-tight tracking-normal md:text-[40px]">
              Explore a collection of inspiring blogs, leadership insights, and
              community triumphs.
            </h1>
          </div>
          <div className="z-1 absolute bottom-0 right-1/4 col-span-1 block md:right-3 lg:col-span-2">
            <Image src={BlogHero} alt="blog-hero" width={500} height={350} />
          </div>
        </section>

        <section className="mx-auto flex w-full max-w-xl flex-col items-center px-4">
          <div className="mt-10 flex w-full flex-col gap-5">
            <p className="text-gray-200 font-sora text-center text-base md:text-lg">
              Stay updated by subscribing to our newsletter for the latest
              stories and insights.
            </p>
            <div className="font-quickSand flex gap-5">
              <input
                type="text"
                className="border-gray-500 font-quickSand w-[80%] rounded-md border px-5 py-2 focus:outline-none"
                placeholder="sarahbling@gmail.com"
              />
              <button className="text-white-100 bg-btnWarning rounded-md px-5 py-2.5">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {initialRecentPosts.length > 0 ? (
          <div className="mx-auto w-full space-y-[4rem] md:w-[90%]">
            <RecentPosts data={initialRecentPosts} />

            {allBlogPosts.length > 0 ? (
              <>
                <AllPosts data={allBlogPosts} />
                <PaginationControls
                  totalPages={Math.ceil(data.totalElements / perPage)}
                  currentPage={data.page}
                />
              </>
            ) : (
              <span className="text-center">
                There are no more blog posts to display.
              </span>
            )}
          </div>
        ) : (
          <span className="text-center">There are no blog posts yet</span>
        )}
      </div>
    </TransitionParent>
  );
};

export default BlogPageClient;
