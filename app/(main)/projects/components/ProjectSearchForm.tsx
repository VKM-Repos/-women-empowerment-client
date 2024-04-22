
'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import toast from 'react-hot-toast';
import { useDebouncedCallback } from 'use-debounce';
import Icon from '@/components/Common/Icons/Icon';


type Props = {
  placeholder: string;
};

function ProjectSearchForm({ placeholder }: Props) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);

    if (searchQuery.length >= 3) {
      const params = new URLSearchParams(searchParams);
      if (searchQuery) {
        params.set('title', searchQuery);
        params.set('page', '0');

      } else {
        params.delete('title');
        params.delete('page');
      }
      replace(`/projects?${params.toString()}`);
    } else {
      toast.error('Please enter at least 3 characters for the search.');
    }
  }, 500);

  console.log(pathname);


  return (
    <div className="w-full flex justify-center items-center font-quickSand">
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        className="w-[95%] py-2 md:py-4 border border-primaryWhite bg-primaryWhite rounded-l text-sm md:text-base text-gray-100 focus:outline-btnWarning p-2"
      />
      <button onClick={() => handleSearch(searchQuery)} className="bg-btnWarning p-2 md:p-4 rounded-br-md rounded-tr-md">
        <Icon name="img_search" className="" />
      </button>
    </div>
  );
}

export default ProjectSearchForm;

