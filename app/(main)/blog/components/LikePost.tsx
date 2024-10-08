'use client';
import LoginWarningModal from '@/components/LandingPage/LoginWarningModal';
import { useAppContext } from '@/lib/context/app-context';
import { useModal } from '@/lib/context/modal-context';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type Props = {
  likesCount: number;
  postId: any;
};

const LikePost = ({ likesCount, postId }: Props) => {
  const { token, isAuthenticated } = useAppContext();
  const { showModal } = useModal();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [isLiked, setIsLiked] = useState(false);
  const [newLikesCount, setNewLikesCount] = useState(likesCount);

  const handleLikeClick = async () => {
    if (!isAuthenticated) {
      showModal(<LoginWarningModal redirectURL={window.location.pathname} />);
      return;
    }

    setLoading(true);

    try {
      // Optimistically update UI
      setIsLiked(prevIsLiked => !prevIsLiked);
      setNewLikesCount(prevLikesCount =>
        isLiked ? prevLikesCount - 1 : prevLikesCount + 1
      );

      if (isLiked) {
        await unlikePost(Number(postId));
      } else {
        await likePost(Number(postId));
      }
    } catch (error) {
      console.error('Error liking/unliking organization:', error);
      // Revert the optimistic update on error
      setIsLiked(prevIsLiked => !prevIsLiked);
      setNewLikesCount(prevLikesCount =>
        isLiked ? prevLikesCount + 1 : prevLikesCount - 1
      );
    } finally {
      setLoading(false);
    }
  };

  const likePost = async (id: number) => {
    if (!isAuthenticated) {
      router.push('/account/logout');
      throw new Error('User is not authenticated');
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}blogs/${id}/like`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response?.status == 401) {
      router.push('/account/logout');
    }
    if (!response.ok) {
      throw new Error('Failed to like post');
    }

    return response.json();
  };

  const unlikePost = async (id: number) => {
    if (!isAuthenticated) {
      throw new Error('User is not authenticated');
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}blogs/${id}/unlike`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to unlike post');
    }
    if (response?.status == 401) {
      router.push('/account/logout');
    }

    return response.json();
  };

  return (
    <button onClick={handleLikeClick}>
      <span className="flex items-center justify-between gap-1">
        <svg
          className="aspect-square w-5 cursor-pointer"
          viewBox="0 0 25 24"
          fill={isLiked ? 'red' : 'none'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7504 21.1975L10.7496 21.1969C7.60326 18.3438 5.03218 16.0116 3.24167 13.8225C1.45691 11.6405 0.5 9.66166 0.5 7.52391C0.5 4.04866 3.22366 1.325 6.69891 1.325C8.66681 1.325 10.5634 2.24354 11.7992 3.69476L12.1798 4.14179L12.5605 3.69476C13.7963 2.24354 15.6929 1.325 17.6608 1.325C21.136 1.325 23.8597 4.04866 23.8597 7.52391C23.8597 9.66166 22.9028 11.6405 21.1179 13.8242C19.3314 16.0099 16.7679 18.3394 13.6312 21.1898L13.6107 21.2084L13.6096 21.2094L12.1811 22.5L10.7504 21.1975Z"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth={2.5}
          />
        </svg>

        <p className="my-auto self-center text-center text-xs text-neutral-500 md:text-sm">
          {newLikesCount <= 0 ? '0' : newLikesCount}
        </p>
      </span>
    </button>
  );
};

export default LikePost;
