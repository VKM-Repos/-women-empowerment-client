'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useGET } from '@/lib/hooks/useGET.hook';
import { useAppContext } from '@/lib/context/app-context';
import { usePATCH } from '@/lib/hooks/usePATCH.hook';
import CoverImage from '../components/CoverImage';
import ProfileImage from '../components/ProfileImage';
import OrganizationForm from '../components/OrganizationForm';
import { TransitionParent } from '@/lib/utils/transition';
import { BreadcrumbComponent } from '../components/WithBreadcrumb';

export default function OrganizationDetails() {
  const { user } = useAppContext();
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(null);
  const [contentType, setContentType] = useState<string>('application/json');
  const [imageToUpdate, setImageToUpdate] = useState<string>('');

  const {
    data: organization,
    isPending,
    refetch,
  } = useGET({
    url: `organizations/${user?.organizationId}`,
    queryKey: ['GET_ORGANIZATION_DETAILS', 'DASHBOARD', user?.organizationId],
    withAuth: true,
    enabled: true,
  });

  const { mutate, isPending: updateOrgPending } = usePATCH(
    `organizations/${user?.organizationId}/${imageToUpdate}`,
    true,
    undefined,
    contentType
  );

  const handleUpdateProfileImage = (imageFile: File) => {
    const url = URL.createObjectURL(imageFile);
    setImagePreview(url);
    setContentType('image/*');
    setImageToUpdate('logo');
    mutate(imageFile, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  const handleRemoveProfileImage = () => {
    setImagePreview(null);
    setImageToUpdate('logo');
    setContentType('application/json');
    mutate(
      { logo: null },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  const handleUpdateCoverImage = (imageFile: File) => {
    const url = URL.createObjectURL(imageFile);
    setCoverImagePreview(url);
    setContentType('image/*');
    setImageToUpdate('cover-image');
    mutate(imageFile, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  const handleRemoveCoverImage = () => {
    setCoverImagePreview(null);
    setImageToUpdate('cover-image');
    setContentType('application/json');
    mutate(
      { coverImage: null },
      {
        onSuccess: () => {
          refetch();
        },
      }
    );
  };

  const handleUpdateOrganization = (formData: any) => {
    setImageToUpdate('');
    setContentType('application/json');
    mutate(formData, {
      onSuccess: () => {
        refetch();
      },
    });
  };

  return (
    <TransitionParent>
     <div className="mb-4">
       <BreadcrumbComponent />
     </div>
      <div className="relative -mt-4">
        <CoverImage
          organization={organization}
          onUpdateCoverImage={handleUpdateCoverImage}
          onRemoveCoverImage={handleRemoveCoverImage}
        />
        <div className="absolute bottom-0 left-2 md:left-10 z-20 translate-y-1/2 flex gap-1">
          <ProfileImage
            organization={organization}
            imagePreview={imagePreview}
            onUpdateProfileImage={handleUpdateProfileImage}
            onRemoveProfileImage={handleRemoveProfileImage}
          />
          { <h3 className=' lg:text-3xl text-base leading-tight font-semibold font-sora w-4/5 lg:w-3/5 text-primaryWhite'>{organization?.name}</h3>}
        </div>
      </div>
      <div className="mt-[7rem]">
        <OrganizationForm
          organization={organization}
          onUpdateOrganization={handleUpdateOrganization}
        />
      </div>
    </TransitionParent>
  );
}
