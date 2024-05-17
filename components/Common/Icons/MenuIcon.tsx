import React from 'react';

type Props = {
  size?: string;
};

const MenuIcon = ({ size = '24' }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      className=""
      viewBox="0 0 35 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 7.96732H28.6667"
        stroke="currentColor"
        strokeWidth="2.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 15.9673H28.6667"
        stroke="currentColor"
        strokeWidth="2.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 23.9673H28.6667"
        stroke="currentColor"
        strokeWidth="2.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
