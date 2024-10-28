'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { FC } from 'react';
import Icon from '../Icons/Icon';

interface PaginationControlsProps {
  totalPages: number;
  currentPage: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  totalPages,
  currentPage,
}) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const setPage = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const pagesArray = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <ul className="font-quickSand text-gray-200 mx-auto flex w-[90%] items-center justify-between gap-2 text-xs font-semibold md:text-sm">
      <li className="flex items-center justify-center gap-2">
        <button
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 0}
          className={`
            border-gray-500 font-normal flex h-9 w-9 flex-col items-center justify-center rounded-lg border text-sm shadow-[0_4px_10px_rgba(0,0,0,0.03)] transition-colors
            ${currentPage === 0 ? 'text-btnWarning/50 bg-primaryWhite cursor-not-allowed' : 'hover:bg-btnWarning hover:text-primaryWhite'}
          `}
        >
          <Icon name="arrow-left-01" />
        </button>
        Previous
      </li>

      <li className="flex items-center justify-center gap-2">
        <p className="block lg:hidden">
          {currentPage + 1} of {totalPages}
        </p>
        {pagesArray.map(pageNumber => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber - 1)}
            className={`
              border-gray-500 font-normal hidden h-9 w-9 cursor-pointer flex-col items-center justify-center rounded-lg border text-sm shadow-[0_4px_10px_rgba(0,0,0,0.03)] transition-colors lg:flex
              ${currentPage + 1 === pageNumber ? 'bg-btnWarning text-primaryWhite' : 'text-btnWarning'}
              hover:bg-btnWarning hover:text-primaryWhite
            `}
          >
            {pageNumber}
          </button>
        ))}
      </li>

      <li className="flex items-center justify-center gap-2">
        Next
        <button
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage >= totalPages - 1}
          className={`
            border-gray-500 font-normal  flex h-9 w-9 flex-col items-center justify-center rounded-lg border text-sm shadow-[0_4px_10px_rgba(0,0,0,0.03)] transition-colors
            ${currentPage >= totalPages - 1 ? 'text-btnWarning/50 bg-primaryWhite cursor-not-allowed' : 'hover:bg-btnWarning hover:text-primaryWhite'}
          `}
        >
          <Icon name="arrow-right-01" />
        </button>
      </li>
    </ul>
  );
};

export default PaginationControls;
