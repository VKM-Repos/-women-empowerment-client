"use client";

import React from "react";
import { useLikesStore } from "@/lib/store/likes.store";
import { useModal } from "@/lib/context/modal-context";
import { useAppContext } from "@/lib/context/app-context";
import LoginWarningModal from "./LoginWarningModal";

interface LikeButtonProps {
  organizationId: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ organizationId }) => {
  const likes = useLikesStore((state) => state.likesCount[organizationId] || 0);
  const isLiked = useLikesStore(
    (state) => state.likes[organizationId] || false
  );
  const incrementLikes = useLikesStore((state) => state.incrementLikes);
  const decrementLikes = useLikesStore((state) => state.decrementLikes);
    const { showModal } = useModal();
    const {isAuthenticated, user} = useAppContext()
  const handleLikeClick = async () => {

    if(!isAuthenticated) {
    showModal(<LoginWarningModal />);
    }  else  { 
      try {
      if (isLiked) {
        // await unlikeOrganization(organizationId);
        decrementLikes(organizationId);
      } else {
        // await likeOrganization(organizationId);
        incrementLikes(organizationId);
      }
    } catch (error) {
      console.error("Error liking/unliking organization:", error);
    }
    }
    
  };

  return (
    <button onClick={handleLikeClick}>
      <span className="flex items-center justify-between gap-1">
        <svg
          className="w-5 aspect-square cursor-pointer"
          viewBox="0 0 25 24"
          fill={isLiked ? "red" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7504 21.1975L10.7496 21.1969C7.60326 18.3438 5.03218 16.0116 3.24167 13.8225C1.45691 11.6405 0.5 9.66166 0.5 7.52391C0.5 4.04866 3.22366 1.325 6.69891 1.325C8.66681 1.325 10.5634 2.24354 11.7992 3.69476L12.1798 4.14179L12.5605 3.69476C13.7963 2.24354 15.6929 1.325 17.6608 1.325C21.136 1.325 23.8597 4.04866 23.8597 7.52391C23.8597 9.66166 22.9028 11.6405 21.1179 13.8242C19.3314 16.0099 16.7679 18.3394 13.6312 21.1898L13.6107 21.2084L13.6096 21.2094L12.1811 22.5L10.7504 21.1975Z"
            stroke="red"
            strokeOpacity="0.4"
          />
        </svg>

        <p className="text-neutral-500 text-center text-xs md:text-sm self-center my-auto">
          {likes}
        </p>
      </span>
    </button>
  );
};

export default LikeButton;

export const likeOrganization = async (id: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/organizations/${id}/like`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to like organization");
  }

  return response.json();
};

export const unlikeOrganization = async (id: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/organizations/${id}/unlike`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to unlike organization");
  }

  return response.json();
};
