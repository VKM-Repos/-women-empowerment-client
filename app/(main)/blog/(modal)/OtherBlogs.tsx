import React from 'react';
import { useGET } from '@/lib/hooks/useGET.hook';
import PostCardHorizontal from '../components/PostCardHorizontal';

interface OtherBlogsProps {
  currentBlogId: string;
}

const OtherBlogs: React.FC<OtherBlogsProps> = ({ currentBlogId }) => {
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
    <div>
      {isBlogError && <p>Error fetching list</p>}
      {isBlogLoading ? (
        // [1, 2, 3, 4, 5, 6, 7].map((item: any) => (
        //   <DiscussionCardLoader key={item?.id} />
        // ))
        <>loading...</>
      ) : !isBlogLoading && !isBlogError && blogs?.content?.length === 0 ? (
        <p className="no-result">No blogs yet</p>
      ) : (
        <div className="space-y-4">
          {blogs?.content
            ?.slice(0, 7)
            .filter((item: any) => item.id !== currentBlogId)
            .map((item: any) => (
              <PostCardHorizontal key={item?.id} data={item} />
            ))}
        </div>
      )}
    </div>
  );
};

export default OtherBlogs;
