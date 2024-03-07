"use client";

import React, { useState, useEffect } from "react";
import { useModal } from "@/lib/context/modal-context";
import { useAppContext } from "@/lib/context/app-context";
import LoginWarningModal from "./LoginWarningModal";
import { useGET } from "@/lib/hooks/useGET.hook";

interface LikeButtonProps {
  organizationId: number;
  likesCount: number;
}

const LikeButton: React.FC<LikeButtonProps> = ({ organizationId, likesCount }) => {
  const { token, isAuthenticated } = useAppContext();
  const { showModal } = useModal();

  const [isLiked, setIsLiked] = useState(false);

  const { data: organization, refetch: refetchOrganization, isPending } = useGET({
    url: `organizations/${organizationId}`,
    queryKey: ["GET_ORGANIZATION_DETAILS", organizationId],
    withAuth: true,
    enabled: true,
  });

  console.log(organization);


  useEffect(() => {
    refetchOrganization()
  }, []);

  useEffect(() => {
    const fetchLikeStatus = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/organizations/${organizationId}/like-check`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setIsLiked(data.message || false);
        }
      } catch (error) {
        console.error("Error fetching like status:", error);
      }
    };

    if (isAuthenticated) {
      fetchLikeStatus();
    }
  }, [organizationId, token, isAuthenticated]);

  const handleLikeClick = async () => {
    if (!isAuthenticated) {
      showModal(<LoginWarningModal />);
      return;
    }

    try {
      if (isLiked) {
        await unlikeOrganization(organizationId);
      } else {
        await likeOrganization(organizationId);
      }

      setIsLiked(!isLiked);
    } catch (error) {
      console.error("Error liking/unliking organization:", error);
    }
  };

  const likeOrganization = async (id: number) => {
    if (!isAuthenticated) {
      throw new Error("User is not authenticated");
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations/${id}/like`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to like organization");
    }

    return response.json();
  };

  const unlikeOrganization = async (id: number) => {
    if (!isAuthenticated) {
      throw new Error("User is not authenticated");
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/organizations/${id}/unlike`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to unlike organization");
    }

    return response.json();
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
          {likesCount <= 0 ? '0' : likesCount}
        </p>
      </span>
    </button>
  );
};

export default LikeButton;
