import React from 'react';
import { Metadata } from 'next';
import OrganizationDetails from './page-client';
import { Organization } from '@/lib/types/organization.types';

const fetchOrganizationDetails = async (id: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}organizations/${id}`,
      {
        cache: 'no-store',
        credentials: 'include',
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch details of the organization');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching details:', error);
    throw error;
  }
};

export default async function OrganizationDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetchOrganizationDetails(params.id);
  return <OrganizationDetails organization={data} />;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const organization: Organization = await fetchOrganizationDetails(
      params.id
    );

    return {
      title: organization?.name || '',
      description: organization?.description || '',
      openGraph: {
        type: 'article',
        locale: 'en_US',
        url: `https://womenhub.org/organizations/${params.id}`,
        title: organization?.name || '',
        description: organization?.description || '',
        images: [
          {
            url:
              organization?.coverImage ||
              'https://placehold.co/800x600?text=Women\n Hub',
            width: 800,
            height: 600,
            alt: organization?.name || '',
          },
        ],
        siteName: 'Women Hub',
      },
      twitter: {
        card: 'summary_large_image',
        title: organization?.name || '',
        description: organization?.description || '',
        images:
          organization?.coverImage ||
          'https://placehold.co/500x500?text=Women\n Hub',
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error',
      description: 'Error generating metadata',
    };
  }
}
