import { TransitionElement } from '@/lib/utils/transition';
import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import BlogPageClient from './blog-page-client';
import LoadingThinkingWomen from '@/components/Common/Loaders/LoadingThinkingWomen';

interface ResultsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Blog = async ({ searchParams }: ResultsPageProps) => {
  const page = Number(searchParams['page']) || 0;
  const per_page = Number(searchParams['per_page']) || 9;

  const getAllPosts = async (): Promise<any> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}blogs?page=${page}&size=${per_page}`,
        {
          cache: 'no-store',
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data: any = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  };

  const getInitialRecentPosts = async (): Promise<any[]> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}blogs?page=0&size=3`,
        {
          cache: 'no-store',
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch recent posts');
      }

      const data = await response.json();
      return data.content || [];
    } catch (error) {
      console.error('Error fetching recent posts:', error);
      return [];
    }
  };

  const [data, initialRecentPosts] = await Promise.all([
    getAllPosts(),
    getInitialRecentPosts(),
  ]);

  if (!data) {
    return null;
  }

  return (
    <TransitionElement>
      <Suspense fallback={<LoadingThinkingWomen />}>
        <BlogPageClient
          data={data}
          perPage={per_page}
          initialRecentPosts={initialRecentPosts}
        />
      </Suspense>
    </TransitionElement>
  );
};

export default Blog;

export const metadata: Metadata = {
  title: 'Blog',
  description: 'List of Blogs',
};
