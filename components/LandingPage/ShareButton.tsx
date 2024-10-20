import React from "react";

type Props = {};

function ShareButton({}: Props) {
  return (
      <svg
        className="w-6 aspect-square"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.35962 6L12.3596 2L16.3596 6"
          stroke="#787878"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.3596 10H18.3596C18.6248 10 18.8792 10.1054 19.0667 10.2929C19.2543 10.4804 19.3596 10.7348 19.3596 11V20C19.3596 20.2652 19.2543 20.5196 19.0667 20.7071C18.8792 20.8946 18.6248 21 18.3596 21H6.35962C6.0944 21 5.84005 20.8946 5.65251 20.7071C5.46498 20.5196 5.35962 20.2652 5.35962 20V11C5.35962 10.7348 5.46498 10.4804 5.65251 10.2929C5.84005 10.1054 6.0944 10 6.35962 10H8.35962"
          stroke="#787878"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.3596 2V15"
          stroke="#787878"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
  );
}

export default ShareButton;
