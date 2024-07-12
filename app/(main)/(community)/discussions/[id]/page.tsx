import React from 'react';
import DiscussionInfo from '../components/DiscussionInfo';
import { Discussion } from '@/lib/types/discussion.types';
import { Metadata } from 'next';

export default function DiscussionDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return <DiscussionInfo discussionId={params.id} />;
}

const fetchDiscussionById = async (discussionId: string): Promise<Discussion> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}discussions/${discussionId}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error('Failed to fetch discussion');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching discussion:', error);
    throw error;
  }
};

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const discussion = await fetchDiscussionById(params.id);

    return {
      title: discussion?.title || 'Default Title',
      description: discussion?.content || 'Default Description',
      openGraph: {
        type: 'article',
        locale: 'en_US',
        url: `https://womenhub.org/discussions/${params.id}`,
        title: discussion?.title || 'Default Title',
        description: discussion?.content || 'Default Description',
        images: [
          {
            url: discussion?.createdBy?.photoUrl || '',
            width: 800,
            height: 600,
            alt: discussion?.createdBy?.name || 'Default Alt Text',
          },
        ],
        siteName: 'Women Hub',
      },
      twitter: {
        title: discussion?.title || 'Default Title',
        description: discussion?.content || 'Default Description',
        images: discussion?.createdBy?.photoUrl || '',
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
