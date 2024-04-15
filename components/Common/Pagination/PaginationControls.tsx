'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { FC } from 'react';
import Icon from '../Icons/Icon';

interface PaginationControlsProps {
  totalPages: number;
  currentPage: number;
}

const PaginationControls: FC<PaginationControlsProps> = ({ totalPages, currentPage }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const setPage = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  const pagesArray = Array.from({ length: totalPages }, (_, index) => index + 1);


  return (
    <ul className='w-[90%] mx-auto text-xs md:text-sm flex items-center justify-between gap-2 font-quickSand font-semibold text-gray-200'>
      <li className="flex items-center justify-center gap-2">
        <button
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 0}
          className={`
            flex flex-col border border-gray-500 items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
            ${currentPage === 0 ? "text-btnWarning/50 bg-primaryWhite cursor-not-allowed" : "hover:bg-btnWarning hover:text-primaryWhite"}
          `}
        >
          <Icon name='arrow-left-01' />
        </button>
        Previous
      </li>


      <li className='flex items-center justify-center gap-2'>
        <p className='lg:hidden block'>
          {currentPage + 1} of {totalPages}
        </p>
        {pagesArray.map(pageNumber => (
          <button
            key={pageNumber}
            onClick={() => setPage(pageNumber - 1)}
            className={`
              lg:flex flex-col hidden cursor-pointer border border-gray-500 items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
              ${currentPage + 1 === pageNumber ? "bg-btnWarning text-primaryWhite" : "text-btnWarning"}
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
            flex flex-col  border border-gray-500 items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
            ${currentPage >= totalPages - 1 ? "text-btnWarning/50 bg-primaryWhite cursor-not-allowed" : "hover:bg-btnWarning hover:text-primaryWhite"}
          `}
        >
          <Icon name='arrow-right-01' />
        </button>
      </li>
    </ul>
  );
};

export default PaginationControls;
