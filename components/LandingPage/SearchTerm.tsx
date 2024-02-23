'use client'
import React from "react";

type Props = {
  searchTerms: string[];
  handleSearch: (term: string, event: React.MouseEvent<HTMLButtonElement>) => void;
};

function SearchTerm({ searchTerms, handleSearch }: Props) {
  return (
    <div className="hidden lg:flex w-full items-start justify-start space-x-4 font-quickSand">
      <span className="text-primaryWhite text-sm md:text-base md:whitespace-nowrap">
        Search for:{" "}
      </span>
      <span className="flex flex-wrap items-center justify-start gap-1 md:gap-2">
        {searchTerms.map((term) => (
          <button
            className="w-fit p-1 px-2 bg-secondaryOffWhite/80 text-xs md:text-sm rounded hover:bg-btnWarning hover:text-primaryWhite transition-colors"
            key={term}
            onClick={(e) => handleSearch(term, e)}
          >
            {term}
          </button>
        ))}
      </span>
    </div>
  );
}

export default SearchTerm;
