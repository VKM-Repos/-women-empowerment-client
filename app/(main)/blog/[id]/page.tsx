import React from 'react';
import { Metadata } from 'next';
import BlogDetailsClient from './blog-details-client';

const fetchBlogDetails = async (blogId: string): Promise<any> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}blogs/${blogId}`,
      {
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch details of the blog');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};

export default async function blogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetchBlogDetails(params.id);
  return <BlogDetailsClient data={data} />;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const blog = await fetchBlogDetails(params.id);

    return {
      title: blog?.title || 'Default Title',
      description: blog?.description || '',
      openGraph: {
        type: 'article',
        locale: 'en_US',
        url: blog?.coverImageUrl,
        title: blog?.title || 'Blog post',
        description: blog?.description || '',
        images: [
          {
            url:
              blog?.coverImageUrl ||
              'https://placehold.co/800x600?text=Women\n Hub',
            width: 800,
            height: 600,
            alt: blog?.title || '',
          },
        ],
        siteName: 'Women Hub',
      },
      twitter: {
        card: 'summary_large_image',
        title: blog?.title || '',
        description: blog?.description || '',
        images:
          blog?.coverImageUrl ||
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
