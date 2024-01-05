import React from "react";

type Props = {
  className?: string;
};

export const BtnDecrease = (props: Props) => {
  return (
    <svg
      {...props}
      className="w-[0.75rem] aspect-square"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.9025 0L12.0975 0C12.4333 0 12.6208 0.374636 12.4128 0.630397L6.81533 7.48912C6.65511 7.68544 6.3466 7.68544 6.18467 7.48912L0.587173 0.630397C0.379227 0.374636 0.566718 0 0.9025 0Z"
        fill="white"
      />
    </svg>
  );
};
