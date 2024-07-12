import React from 'react';
import { Discussion } from '@/lib/types/discussion.types';
import DiscussionCardThumbnail from '../components/DiscussionCardThumbnail';
import DiscussionCardLoader from '../components/DiscussionCardLoader';
import { useGET } from '@/lib/hooks/useGET.hook';

interface OtherDiscussionProps {
  currentDiscussionId: string;
}

const OtherDiscussion: React.FC<OtherDiscussionProps> = ({
  currentDiscussionId,
}) => {
  const {
    data: discussions,
    isError: isDiscussionsError,
    isLoading: isDiscussionsLoading,
  } = useGET({
    url: 'discussions',
    queryKey: ['discussions'],
    withAuth: false,
    enabled: false,
  });

  return (
    <div>
      {isDiscussionsError && <p>Error fetching list</p>}
      {isDiscussionsLoading ? (
        [1, 2, 3, 4, 5, 6, 7].map((item: any) => (
          <DiscussionCardLoader key={item?.id} />
        ))
      ) : !isDiscussionsLoading &&
        !isDiscussionsError &&
        discussions?.content?.length === 0 ? (
        <p className="no-result">No discussions yet</p>
      ) : (
        <>
          {discussions?.content
            ?.slice(0, 7)
            .filter((item: Discussion) => item.id !== currentDiscussionId)
            .map((item: Discussion) => (
              <DiscussionCardThumbnail key={item?.id} discussion={item} />
            ))}
        </>
      )}
    </div>
  );
};

export default OtherDiscussion;
