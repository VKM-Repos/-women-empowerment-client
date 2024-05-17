'use client'
import Image from 'next/image';
import React from 'react';

type IconProps = {
  name: string;
  size?: number;
  filled?: boolean;
  className?: string;
};

const loadSvg = (name: string) => {

  try {
    return require(`../../../public/images/${name}.svg`).default;
  } catch (error) {
    console.error(`Icon "${name}" not found.`);
    return null;
  }
};

const Icon: React.FC<IconProps> = ({ name, size = 20, filled = true, className }) => {
  const svgUrl = loadSvg(name);

  if (!svgUrl) {
    return null;
  }

  const fillColor = filled ? 'currentColor' : 'none';
  const strokeColor = filled ? 'none' : 'currentColor';

  return (
    <Image
      src={svgUrl}
      width={size}
      height={size}
      style={{ fill: fillColor, stroke: strokeColor }}
      className={className}
      alt="Icon"
    />
  );
};

export default Icon;
