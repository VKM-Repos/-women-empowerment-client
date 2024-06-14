import React from 'react';

type Props = {
  size?: string;
};

const LinkedIn = ({ size = '24' }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 25.9305V32.8251H30.9641V26.3509C30.9641 24.7534 30.3756 23.6603 28.9462 23.6603C27.8531 23.6603 27.1805 24.417 26.9283 25.0897C26.8442 25.3419 26.7601 25.6783 26.7601 26.0987V32.8251H22.7242C22.7242 32.8251 22.8083 21.8946 22.7242 20.8016H26.7601V22.4832C27.2646 21.6424 28.2735 20.4652 30.3756 20.4652C32.9821 20.4652 35 22.2309 35 25.9305ZM18.5202 15C17.1749 15 16.25 15.9249 16.25 17.102C16.25 18.2791 17.0908 19.204 18.4361 19.204C19.8655 19.204 20.7063 18.2791 20.7063 17.102C20.7904 15.8408 19.9495 15 18.5202 15ZM16.5022 32.8251H20.5381V20.8016H16.5022V32.8251Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default LinkedIn;