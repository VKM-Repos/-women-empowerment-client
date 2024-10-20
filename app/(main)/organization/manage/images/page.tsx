'use client';
import React, { useEffect } from 'react';
import { useAppContext } from '@/lib/context/app-context';
import { TransitionParent } from '@/lib/utils/transition';
import { BreadcrumbComponent } from '../components/WithBreadcrumb';
import ImageList, { Loader } from './components/ImageList';
import AddImage from './components/AddImage';
import { usePOST } from '@/lib/hooks/usePOST.hook';
import { useGET } from '@/lib/hooks/useGET.hook';
import { useDELETE } from '@/lib/hooks/useDelete.hook';
import toast from 'react-hot-toast';

export default function OrgImagePage() {
  const { user } = useAppContext();
  const organizationId = user?.organizationId;

  const {
    data: organization,
    isPending,
    refetch,
  } = useGET({
    url: `organizations/${organizationId}`,
    queryKey: ['GET_ORG_DETAILS', organizationId],
    withAuth: true,
    enabled: true,
  });

  const { mutate: addImage, isPending: updatingImage } = usePOST(
    `organizations/${organizationId}/images`,
    true,
    'multipart/form-data'
  );

  const handleAddImage = (formData: FormData) => {
    addImage(formData, {
      onSuccess: () => {
        refetch();
        toast.success('Image added successfully');
      },
      onError: () => {
        toast.error('Failed to add image');
      },
    });
  };

  const { mutate: deleteImage, isPending: deletingImage } = useDELETE(true);

  const handleRemoveImage = (imageId: number) => {
    const deleteUrl = `organizations/${organizationId}/images/${imageId}`;
    deleteImage(deleteUrl, {
      onSuccess: () => {
        toast.success('Image deleted successfully');
        refetch();
      },
      onError: () => {
        toast.error('Failed to delete image');
      },
    });
  };

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <TransitionParent className="space-y-2 p-0 md:px-8 md:py-4">
      <BreadcrumbComponent />
      <div className="flex w-[100%] flex-col items-center gap-5">
        <h2 className="font-sora text-large md:text-extra-large w-full max-w-xl text-center font-semibold">
          Share Your Empowerment Journey
        </h2>
        <p className="font-quickSand text-gray-300 w-full max-w-md text-center text-base text-sm">
          Embark on a visual storytelling journey by sharing up to four
          impactful images that represent your personal empowerment story.
        </p>
      </div>

      <div className="flex flex-wrap items-start justify-start gap-5 pt-6">
        {isPending && [1, 2, 3].map(item => <Loader key={item} />)}
        {organization?.images?.length > 0 &&
          organization.images.map((image: any) => (
            <ImageList
              key={image.id}
              image={image}
              onRemoveImage={() => handleRemoveImage(image.id)}
            />
          ))}
        {organization?.images.length < 5 && (
          <AddImage onSubmit={handleAddImage} isLoading={updatingImage} />
        )}
      </div>

      {organization?.images.length < 5 && (
        <div className="flex w-full items-center justify-center">
          <button
            onClick={() =>
              document
                .querySelector('form')
                ?.dispatchEvent(
                  new Event('submit', { cancelable: true, bubbles: true })
                )
            }
            className="text-white-100 font-light font-sora bg-btnWarning mt-6 rounded px-4 py-2"
            disabled={updatingImage}
          >
            {updatingImage ? 'Updating...' : 'Update'}
          </button>
        </div>
      )}
    </TransitionParent>
  );
}
