'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import toast from 'react-hot-toast';
import { useDebouncedCallback } from 'use-debounce';
import Icon from '../Common/Icons/Icon';

type Props = {
  placeholder: string;
};

function SearchForm({ placeholder }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    console.log(`Searching... ${term}`);

    if (searchQuery.length >= 3) {
      const params = new URLSearchParams(searchParams.toString());
      if (searchQuery) {
        params.set('query', searchQuery);
        params.set('page', '0');
      } else {
        params.delete('query');
        params.delete('page');
      }
      replace(`/results?${params.toString()}`);
    } else {
      toast.error('Please enter at least 3 characters for the search.');
    }
  }, 500);

  console.log(pathname);

  return (
    <div className="font-quickSand flex w-full items-center justify-center">
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={e => {
          setSearchQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        className="border-primaryWhite bg-primaryWhite text-gray-100 focus:outline-btnWarning w-[95%] rounded-l border p-2 py-2 text-sm md:py-4 md:text-base"
      />
      <button
        onClick={() => handleSearch(searchQuery)}
        className="bg-btnWarning rounded-br-md rounded-tr-md p-3 md:p-5"
      >
        <Icon name="img_search" className="" />
      </button>
    </div>
  );
}

export default SearchForm;
