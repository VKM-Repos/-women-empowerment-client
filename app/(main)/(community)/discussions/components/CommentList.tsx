import React from 'react';
import { useGET } from '@/lib/hooks/useGET.hook';
import CommentForm from './CommentForm';
import CommentCard from './CommentCard';
import DiscussionDetailsLoader from './DiscussionDetailsLoader';

interface CommentListProps {
  discussionId: string;
}

const CommentList: React.FC<CommentListProps> = ({ discussionId }) => {
  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
    refetch: refetchComments,
  } = useGET({
    url: `discussions/${discussionId}/comments`,
    queryKey: ['comments', discussionId],
    withAuth: false,
    enabled: !!discussionId,
  });


  if (isCommentsLoading || !comments) {
    return <DiscussionDetailsLoader />;
  }

  return (
    <div>
      {isCommentsError && <p>Error fetching comments</p>}
      {isCommentsLoading ? (
        <p>Loading comments...</p>
      ) : comments?.length === 0 ? (
        <p className="text-gray-300">No comments yet. Be the first to leave a comment!</p>
      ) : (
        <div className="flex flex-col gap-10">
          {comments.map((comment: any) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentList;
