import React from 'react';
import DiscussionInfo from '../components/DiscussionInfo';
import { Discussion } from '@/lib/types/discussion.types';


export default async function DiscussionDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return <DiscussionInfo discussionId={params.id} />;
  
}

const fetchDiscussionById = async (discussionId: string): Promise<Discussion> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}discussions/${discussionId}`, {
      cache: 'no-store'
    });

    if (!response) {
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
}) {

  const discussion: any = fetchDiscussionById(params.id)

  return {
    title: discussion?.title,
    description: discussion?.content,
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://womenhub.org/discussions/${params.id}`,
      title: discussion?.title,
      description: discussion?.content,
      images: [
        {
          url: discussion?.createdBy?.photoUrl,
          width: 800,
          height: 600,
          alt: discussion?.createdBy?.name,
        },
      ],
      siteName: 'Women Hub',
    },
    twitter: {
      // card: 'summary_large_image',
      // site: '@yourtwitterhandle',
      title: discussion?.title,
      description: discussion?.content,
      images: discussion?.createdBy?.photoUrl,
    },
  };
}
