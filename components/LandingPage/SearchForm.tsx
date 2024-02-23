"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Icon from '../Common/Icons/Icon';

type Props = {
  placeholder: string;
};

function SearchForm({ placeholder }: Props) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    router.push(`/results?query=${searchQuery}`);
  };

  return (
    <div className="w-full mx-auto flex justify-center items-center font-quickSand">
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-[95%] py-2 md:py-4 border border-primaryWhite bg-primaryWhite rounded-l text-sm md:text-base text-gray-100 focus:outline-btnWarning p-2"
      />
      <button onClick={handleSearch} className="bg-btnWarning p-2 md:p-4 rounded-br-md rounded-tr-md">
        <Icon name="img_search" className="" />
      </button>
    </div>
  );
}

export default SearchForm;
