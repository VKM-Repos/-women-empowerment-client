import React from 'react';
import { useGET } from '@/lib/hooks/useGET.hook';
import CommentCard from './CommentCard';

interface CommentListProps {
  blogId: string;
}

const CommentList: React.FC<CommentListProps> = ({ blogId }) => {
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

  if (isCommentsLoading || !comments) {
    return <>loading...</>;
  }

  return (
    <div>
      {isCommentsError && <p>Error fetching comments</p>}
      {isCommentsLoading ? (
        <p>Loading comments...</p>
      ) : comments?.length === 0 ? (
        <p className="text-gray-300">
          No comments yet. Be the first to leave a comment!
        </p>
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
