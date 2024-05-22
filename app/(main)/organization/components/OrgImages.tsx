import * as React from 'react';
import { Organization } from '@/lib/types/organization.types';
import { User } from '@/lib/types/user.types';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/UI/Carousel';
import NoContent from '@/components/EmptyStates/NoContent';
import { useRouter } from 'next/navigation';

interface OrgImagesProps {
  organization: Organization;
  user: any;
}

const OrgImages: React.FC<OrgImagesProps> = ({ organization, user }) => {
    const router = useRouter()
  return (
    <section className='space-y-8 p-2 relative'>
      <div className="text-primary whitespace-nowrap text-lg lg:text-2xl font-quickSand">
        Latest images
        <div className="bg-btnWarning mt-1 h-1 w-[4rem] rounded" />
      </div>

     <div className="w-full">
         {organization?.images?.length > 0 ? (
        <Carousel opts={{ align: 'start' }} className="w-full relative">
          <CarouselContent>
            {organization.images.map(image => (
              <CarouselItem
                key={image.id}
                className="p-1 md:basis-1/3 lg:basis-1/3"
              >
                    <div className="relative overflow-hidden rounded">
                      <ImageWithFallback
                        src={
                          image.url ||
                          'https://placehold.co/400x400?text=Women\n Hub'
                        }
                        fallbackSrc={
                          'https://placehold.co/400x400?text=Women\n Hub'
                        }
                        aspectRatio={{ width: 1, height: 1 }}
                        alt={`Image ${image.id}`}
                        className=""
                      />
                    </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <span className='absolute -top-10 right-12 flex items-center justify-end gap-2'>
            <CarouselPrevious />
            <CarouselNext />
          </span>
        </Carousel>
      ) : (
        <NoContent
          message="No images yet."
          buttonText={'Add Images'}
          buttonLink={() => router.push('/organization/manage/images')
          }
          withButton={user?.organizationId == organization?.id}
        />
      )}
     </div>
    </section>
  );
};

export default OrgImages;
