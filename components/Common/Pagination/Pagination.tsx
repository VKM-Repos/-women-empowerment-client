import { useCallback, useState } from "react";
import Icon from "../Icons/Icon";

interface ButtonProps {
  content: React.ReactNode;
  onClick: () => void;
  active: boolean;
  disabled: boolean;
  className?: string;
}

function Button({ content, onClick, active, disabled, className }: ButtonProps) {
  return (
    <button
      className={`flex flex-col cursor-pointer border ${className} border-gray-500 items-center justify-center w-9 h-9 shadow-[0_4px_10px_rgba(0,0,0,0.03)] text-sm font-normal transition-colors rounded-lg
        ${active ? " bg-btnWarning text-white-100" : " text-btnWarning"}
        ${!disabled
          ? "  hover:bg-btnWarning hover:text-primaryWhite"
          : "text-btnWarning/50 bg-primaryWhite cursor-not-allowed"}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

// interface PaginationNavProps {
//   gotoPage: (pageIndex: number) => void;
//   canPreviousPage: boolean;
//   canNextPage: boolean;
//   pageCount: number;
//   pageIndex: number;
// }

// export default function Pagination({ gotoPage, canPreviousPage, canNextPage, pageCount, pageIndex }: PaginationNavProps) {
//   const renderPageLinks = useCallback(() => {
//     if (pageCount === 0) return null;
//     const visiblePageButtonCount = 5; // make a logic to calculate the total pages being returned from the backend (assuming 20 items per page and total of 50 pages). also remember this should be linked
//     let numberOfButtons = pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;
//     const pageIndices = [pageIndex];
//     numberOfButtons--;
//     [...Array(numberOfButtons)].forEach((_item, itemIndex) => {
//       const pageNumberBefore = pageIndices[0] - 1;
//       const pageNumberAfter = pageIndices[pageIndices.length - 1] + 1;
//       if (
//         pageNumberBefore >= 0 &&
//         (itemIndex < numberOfButtons / 2 || pageNumberAfter > pageCount - 1)
//       ) {
//         pageIndices.unshift(pageNumberBefore);
//       } else {
//         pageIndices.push(pageNumberAfter);
//       }
//     });
//     return pageIndices.map((pageIndexToMap) => (
//       <li key={pageIndexToMap}>
//         <Button
//           content={pageIndexToMap + 1}
//           onClick={() => gotoPage(pageIndexToMap)}
//           active={pageIndex === pageIndexToMap}
//           disabled={false}
//         />
//       </li>
//     ));
//   }, [pageCount, pageIndex]);

//   return (
//     <ul className="w-full flex items-center justify-between gap-2 font-sora font-semibold text-gray-200">
//       <li className="flex items-center justify-center gap-2">
//         <Button
//           content={<Icon name='arrow-left-01' />}
//           onClick={() => gotoPage(0)}
//           disabled={!canPreviousPage}
//           active={false}
//           className="border-none"
//         />
//         <p className="text-sm">Previous</p>
//       </li>
//       <li className="flex gap-5">
//         {renderPageLinks()}
//       </li>
//       <li className="flex items-center justify-center gap-2">
//         <p className="text-sm">Next</p>
//         <Button
//           content={<Icon name='arrow-right-01' />}
//           onClick={() => gotoPage(pageCount - 1)}
//           disabled={!canNextPage}
//           active={false}
//           className="border-none"
//         />
//       </li>
//     </ul>
//   );
// }



interface PaginationNavProps {
  fetchMore: (page: number) => void; // Modify fetchMore function to accept page as an argument
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number | any;
  pageIndex: number;
  isFetchingNextPage: boolean;
}

export default function Pagination({
  fetchMore,
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
  isFetchingNextPage,
}: PaginationNavProps) {
  const renderPageLinks = () => {
    if (pageCount === 0) return null;
    const visiblePageButtonCount = 5;
    let numberOfButtons = pageCount < visiblePageButtonCount ? pageCount : visiblePageButtonCount;

    const startIndex = Math.max(0, pageIndex - Math.floor(numberOfButtons / 2));

    const pageIndices = Array.from({ length: numberOfButtons }, (_, index) => startIndex + index);

    return pageIndices.map((pageIndexToMap) => (
      <span key={pageIndexToMap}>
        <Button
          content={pageIndexToMap + 1}
          onClick={() => fetchMore(pageIndexToMap + 1)}
          active={pageIndex === pageIndexToMap}
          disabled={isFetchingNextPage}
        />
      </span>
    ));
  };

  return (
    <ul className="w-full flex items-center justify-between gap-2 font-sora font-semibold text-gray-200">
      <li className="flex items-center justify-center gap-2">
        <Button
          content={<Icon name='arrow-left-01' />}
          onClick={() => fetchMore(pageIndex - 1)}
          disabled={!canPreviousPage || isFetchingNextPage}
          active={false}
          className="border-none"
        />
        <p className="text-sm">Previous</p>
      </li>
      <li className="flex gap-5">
        {renderPageLinks()}
      </li>
      <li className="flex items-center justify-center gap-2">
        <p className="text-sm">Next</p>
        <Button
          content={<Icon name='arrow-right-01' />}
          onClick={() => fetchMore(pageIndex + 1)}
          disabled={!canNextPage || isFetchingNextPage}
          active={false}
          className="border-none"
        />
      </li>
    </ul>
  );
}