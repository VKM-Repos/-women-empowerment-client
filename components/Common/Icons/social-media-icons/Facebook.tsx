import React from "react";

type Props = {
  size?: string;
  color?: "#515151" | "#106840";
};

const Facebook = ({ size = "24", color = "#106840" }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.1571 20.3648H25.8793L26.4637 16.5605H22.1563V14.4813C22.1563 12.901 22.6696 11.4996 24.1389 11.4996H26.5V8.17974C26.0852 8.12338 25.2078 8 23.55 8C20.0882 8 18.0587 9.8393 18.0587 14.0297V16.5605H14.5V20.3648H18.0587V30.821C18.7634 30.9276 19.4773 31 20.2101 31C20.8724 31 21.5189 30.9391 22.1571 30.8522V20.3648Z"
        fill={color}
      />
    </svg>
  );
};

export default Facebook;
