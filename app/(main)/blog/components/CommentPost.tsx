'use client';

import LoginWarningModal from '@/components/LandingPage/LoginWarningModal';
import { useModal } from '@/lib/context/modal-context';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import BlogInfo from '../(modal)';

type Props = {
  commentsCount: number;
  postId: any;
};

const CommentPost = ({ commentsCount, postId }: Props) => {
  const { showModal } = useModal();

  const handleCommentClick = async () => {
    showModal(<BlogInfo blogId={postId} />);
  };

  return (
    <button onClick={handleCommentClick}>
      <span className="text-gray-300 flex items-center justify-between gap-1">
        <svg
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0935 1.82031C9.89808 1.82031 8.71436 2.05577 7.60994 2.51324C6.50551 2.97071 5.502 3.64123 4.65671 4.48652C2.94957 6.19366 1.9905 8.50905 1.9905 10.9233C1.98254 13.0253 2.71036 15.0638 4.04778 16.6855L2.22718 18.5061C2.10087 18.6341 2.0153 18.7967 1.98128 18.9733C1.94726 19.1499 1.96631 19.3326 2.03602 19.4983C2.11162 19.6621 2.23419 19.7998 2.38816 19.8938C2.54213 19.9878 2.72056 20.0339 2.9008 20.0263H11.0935C13.5078 20.0263 15.8232 19.0673 17.5303 17.3601C19.2374 15.653 20.1965 13.3376 20.1965 10.9233C20.1965 8.50905 19.2374 6.19366 17.5303 4.48652C15.8232 2.77938 13.5078 1.82031 11.0935 1.82031ZM11.0935 18.2057H5.09463L5.94121 17.3591C6.11075 17.1886 6.20591 16.9579 6.20591 16.7174C6.20591 16.4769 6.11075 16.2462 5.94121 16.0756C4.74925 14.885 4.00698 13.3179 3.84086 11.6414C3.67475 9.96481 4.09506 8.28254 5.0302 6.88115C5.96534 5.47975 7.35744 4.44594 8.96933 3.95585C10.5812 3.46576 12.3132 3.54971 13.8701 4.19339C15.4271 4.83707 16.7127 6.00066 17.5079 7.48592C18.3031 8.97118 18.5588 10.6862 18.2313 12.3388C17.9038 13.9915 17.0135 15.4794 15.712 16.5492C14.4104 17.619 12.7783 18.2044 11.0935 18.2057Z"
            fill="currentColor"
          />
          <path
            d="M11.0935 1.82031C9.89808 1.82031 8.71436 2.05577 7.60994 2.51324C6.50551 2.97071 5.502 3.64123 4.65671 4.48652C2.94957 6.19366 1.9905 8.50905 1.9905 10.9233C1.98254 13.0253 2.71036 15.0638 4.04778 16.6855L2.22718 18.5061C2.10087 18.6341 2.0153 18.7967 1.98128 18.9733C1.94726 19.1499 1.96631 19.3326 2.03602 19.4983C2.11162 19.6621 2.23419 19.7998 2.38816 19.8938C2.54213 19.9878 2.72056 20.0339 2.9008 20.0263H11.0935C13.5078 20.0263 15.8232 19.0673 17.5303 17.3601C19.2374 15.653 20.1965 13.3376 20.1965 10.9233C20.1965 8.50905 19.2374 6.19366 17.5303 4.48652C15.8232 2.77938 13.5078 1.82031 11.0935 1.82031ZM11.0935 18.2057H5.09463L5.94121 17.3591C6.11075 17.1886 6.20591 16.9579 6.20591 16.7174C6.20591 16.4769 6.11075 16.2462 5.94121 16.0756C4.74925 14.885 4.00698 13.3179 3.84086 11.6414C3.67475 9.96481 4.09506 8.28254 5.0302 6.88115C5.96534 5.47975 7.35744 4.44594 8.96933 3.95585C10.5812 3.46576 12.3132 3.54971 13.8701 4.19339C15.4271 4.83707 16.7127 6.00066 17.5079 7.48592C18.3031 8.97118 18.5588 10.6862 18.2313 12.3388C17.9038 13.9915 17.0135 15.4794 15.712 16.5492C14.4104 17.619 12.7783 18.2044 11.0935 18.2057Z"
            fill="currentColor"
            fill-opacity="0.2"
          />
        </svg>

        <p className="my-auto self-center text-center text-xs text-neutral-500 md:text-sm">
          {commentsCount}
        </p>
      </span>
    </button>
  );
};

export default CommentPost;
