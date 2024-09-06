'use client';
import { useModal } from '@/lib/context/modal-context';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from '@/components/Common/Modal/Modal';
import { useRouter } from 'next/navigation';
import AuthorDetails from '../../(community)/discussions/components/AuthorDetails';
import { useGET } from '@/lib/hooks/useGET.hook';
import BlogContent from './BlogContent';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { useAppContext } from '@/lib/context/app-context';
import OtherBlogs from './OtherBlogs';
import { X } from 'lucide-react';

type Props = {
  blogId: any;
};

const BlogInfo = ({ blogId }: Props) => {
  const { hideModal } = useModal();
  const router = useRouter();
  const { token } = useAppContext();

  const {
    data: blog,
    isLoading: isBlogLoading,
    isError: isBlogError,
  } = useGET({
    url: `blogs/${blogId}`,
    queryKey: ['blog-details', blogId],
    withAuth: false,
    enabled: !!blogId,
  });

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
    refetch: refetchComments,
  } = useGET({
    url: `blogs/${blogId}/comments`,
    queryKey: ['comments', blogId],
    withAuth: false,
    enabled: !!blogId,
  });

  return (
    <Modal onClose={hideModal} isOpen={true}>
      <AnimatePresence initial={false} mode="wait">
        <div className="bg-primaryWhite font-sora relative mx-auto h-[85dvh] w-full overflow-hidden rounded-[1rem] py-4 lg:w-3/4">
          <div className="relative h-full w-full overflow-y-auto">
            <button
              onClick={hideModal}
              className="absolute right-5 top-0 w-fit"
            >
              <span className="bg-black-100 text-primaryWhite flex aspect-square h-12 w-12 items-center justify-center rounded-full">
                <X size={32} />
              </span>
            </button>
            <div className="mx-auto my-auto mt-12 flex w-full flex-col items-center gap-10 px-4">
              <div className="relative grid min-w-full grid-cols-1 justify-start gap-10 md:grid-cols-2">
                <div className="col-span-1 flex flex-col items-start justify-start gap-4 p-2">
                  <div className="flex items-center gap-4 md:hidden">
                    <AuthorDetails
                      photoUrl={
                        blog?.coverImageUrl !== null
                          ? blog?.coverImageUrl
                          : 'https://placehold.co/400x400?text=Women\n Hub'
                      }
                      name={blog?.author || 'Women Hub'}
                    />
                  </div>
                  <BlogContent
                    title={blog?.title}
                    date={blog?.datePublished}
                    commentsCount={blog?.numberOfComments || 0}
                  />
                  <CommentForm
                    blogId={blogId}
                    token={token}
                    refetchComments={refetchComments}
                  />
                  <div className="">
                    <h5 className="font-sora text-primaryBlack/80 text-base font-semibold md:text-lg">
                      Comments
                    </h5>
                    <CommentList blogId={blogId} />
                  </div>
                </div>
                <div className="col-span-1 flex flex-col items-start justify-start gap-10">
                  <div className="">
                    <h5 className="font-sora text-primaryBlack/80 text-base font-semibold md:text-lg">
                      Other posts
                    </h5>
                    <OtherBlogs currentBlogId={blogId} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </Modal>
  );
};

export default BlogInfo;
