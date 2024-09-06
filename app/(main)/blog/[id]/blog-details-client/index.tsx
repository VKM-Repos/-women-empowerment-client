'use client';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import { TransitionParent } from '@/lib/utils/transition';
import { useRouter } from 'next/navigation';
import FallBack from '@/public/images/blog-fallback.png';
import React from 'react';
import LikePost from '../../components/LikePost';
import Newsletter from '@/public/images/newsletter-logo.png';
import CommentPost from '../../components/CommentPost';
import ShareDropdown from '@/components/LandingPage/ShareDropDown';
import BlogInfo from '../../(modal)';
import { useModal } from '@/lib/context/modal-context';
import Image from 'next/image';
import PostCardVertical from '../../components/PostCardVertical';
import { useGET } from '@/lib/hooks/useGET.hook';
import Link from 'next/link';

type Props = {
  data: any;
};

const BlogDetailsClient = ({ data }: Props) => {
  const router = useRouter();

  const goBack = () => router.back();

  const calculateReadTime = (text: string) => {
    const wordsPerMinute = 200; // Average reading speed
    const words = text.split(' ').length;
    const readTime = Math.ceil(words / wordsPerMinute);
    return readTime;
  };
  const urlToShare = `https://womenhub.org/blog/${data?.id}`;
  const readTime = calculateReadTime(data?.body ? data?.body : '');

  const { showModal } = useModal();

  const handleCommentClick = async () => {
    showModal(<BlogInfo blogId={data.id} />);
  };

  const {
    data: blogs,
    isError: isBlogError,
    isLoading: isBlogLoading,
  } = useGET({
    url: 'blogs',
    queryKey: ['blogs'],
    withAuth: false,
    enabled: false,
  });
  return (
    <TransitionParent>
      <div className="mx-auto  min-h-screen w-[95vw] space-y-[2rem] pb-[5rem]">
        <section className="bg-primary mx-auto grid h-[28rem] w-full grid-cols-1 items-center rounded-[1rem] p-4 md:w-[90%] md:grid-cols-2 md:p-12">
          <div className="relative col-span-1 flex w-full flex-col items-start justify-start gap-2 place-self-start pt-0 lg:pt-12">
            <button onClick={goBack} className="">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1541 26.8945L5.95741 17.6979C5.81807 17.5585 5.71914 17.4076 5.66061 17.245C5.60302 17.0824 5.57422 16.9082 5.57422 16.7225C5.57422 16.5367 5.60302 16.3625 5.66061 16.1999C5.71914 16.0373 5.81807 15.8864 5.95741 15.747L15.1541 6.55039C15.4095 6.29493 15.7286 6.16116 16.1114 6.14908C16.495 6.13793 16.8262 6.2717 17.1049 6.55039C17.3836 6.80585 17.5289 7.12495 17.541 7.50768C17.5522 7.89134 17.4184 8.22251 17.1397 8.5012L10.3119 15.329H25.8835C26.2783 15.329 26.6095 15.4623 26.877 15.7289C27.1436 15.9965 27.2769 16.3276 27.2769 16.7225C27.2769 17.1173 27.1436 17.448 26.877 17.7146C26.6095 17.9821 26.2783 18.1159 25.8835 18.1159H10.3119L17.1397 24.9437C17.3952 25.1992 17.5289 25.5243 17.541 25.9191C17.5522 26.3139 17.4184 26.6391 17.1397 26.8945C16.8842 27.1732 16.5591 27.3125 16.1643 27.3125C15.7695 27.3125 15.4328 27.1732 15.1541 26.8945Z"
                  fill="white"
                />
              </svg>
            </button>
            <span className=" bg-btnWarning text-white-100 font-quickSand rounded-lg p-1 px-2 text-xs">
              {data?.category.name ?? ''}
            </span>
            <h2 className="text-white-100 font-sora max-w-lg text-pretty text-lg font-semibold leading-none md:text-[2.3rem]">
              {data?.title ? data?.title : ''}
            </h2>
            <p className="font-extra-light text-white-100/80 text-sm">
              Published by:{' '}
              <strong>{data?.author ? data?.author : 'Women Hub'}</strong> •{' '}
              {data?.datePublished}
            </p>
            <p className="font-light text-white-100 font-quickSand text-sm">
              {readTime} mins Read
            </p>
          </div>
          <div className="relative col-span-1">
            <div className="absolute left-5 top-3 z-[10] mx-auto hidden aspect-video w-full rounded-[1rem] bg-[#B5FFE1] md:block" />
            <span className="relative z-[15] w-full overflow-hidden ">
              <ImageWithFallback
                src={
                  data?.coverImageUrl
                    ? data?.coverImageUrl
                    : 'https://placehold.co/500x500?text=Women\n Hub'
                }
                fallbackSrc={FallBack.src}
                aspectRatio={{ width: 100, height: 55 }}
                alt={data?.title}
                className="relative z-[15] mx-auto aspect-video w-full overflow-hidden rounded-[1rem] object-cover"
              />
            </span>
          </div>
        </section>

        <article className="mx-auto mt-[5rem] w-[80%] space-y-10">
          <div
            className=" space-y-6 text-base md:text-lg"
            dangerouslySetInnerHTML={{
              __html: data?.body ? data?.body : '',
            }}
          />
        </article>
        <section className="mx-auto mt-[5rem] w-[90%] space-y-10">
          <div className="flex items-center justify-between border-y py-2">
            <div className="flex gap-0 px-2 ">
              <LikePost likesCount={data?.numberOfLikes} postId={data?.id} />
              <ShareDropdown text={''} urlToShare={urlToShare} />
              <CommentPost
                commentsCount={data?.numberOfComments}
                postId={data?.id}
              />
            </div>
            <button
              onClick={handleCommentClick}
              className=" bg-btnWarning text-white-100 w-fit rounded-lg p-3 px-4 text-sm md:text-base"
            >
              Add comment
            </button>
          </div>
        </section>
        <section className="mx-auto mt-[5rem] w-[90%] ">
          <div className="flex h-[30rem] w-full flex-col items-center justify-center rounded-[1rem] bg-[#F0EBD6]">
            <div className="mx-auto flex w-full max-w-xl  flex-col items-center gap-y-4 px-4">
              <Image
                src={Newsletter}
                alt="newsletter"
                width={200}
                height={200}
              />
              <h3 className="text-primary md:text-large font-sora text-base font-semibold">
                Subscribe Newsletter
              </h3>
              <p className="text-gray-200 font-quickSand text-pretty text-center">
                Stay updated by subscribing to our newsletter for the latest
                stories and insights.
              </p>
              <div className="flex w-full gap-5">
                <input
                  type="text"
                  className="border-gray-500 w-full rounded-md border px-5 py-2 focus:outline-none"
                  placeholder="sarahbling@gmail.com"
                />
                <button className="text-white-100 bg-btnWarning rounded-md px-5 py-2.5">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto mt-[5rem] flex w-[90%] flex-col items-center space-y-4">
          <h2 className="lg:text-large w-full text-left text-base font-semibold">
            Recent posts
          </h2>
          <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 ">
            {blogs?.content.slice(0, 3).map((blog: any) => (
              <div key={blog.id} className="col-span-1">
                <PostCardVertical data={blog} />
              </div>
            ))}
          </div>

          <Link
            href={`/blog`}
            className=" bg-btnWarning text-white-100 mt-6 w-fit rounded-lg p-3 px-4 text-sm md:text-base"
          >
            Show More
          </Link>
        </section>
      </div>
    </TransitionParent>
  );
};

export default BlogDetailsClient;
