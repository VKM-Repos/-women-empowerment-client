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
      description: blog?.description || 'Default Description',
      openGraph: {
        type: 'article',
        locale: 'en_US',
        url: `https://womenhub.org/blogs/${params.id}`,
        title: blog?.title || 'Default Title',
        description: blog?.content || 'Default Description',
        images: [
          {
            url: blog?.createdBy?.photoUrl || '',
            width: 800,
            height: 600,
            alt: blog?.createdBy?.name || 'Default Alt Text',
          },
        ],
        siteName: 'Women Hub',
      },
      twitter: {
        title: blog?.title || 'Default Title',
        description: blog?.description || 'Default Description',
        images: blog?.coverPhotoUrl || '',
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
