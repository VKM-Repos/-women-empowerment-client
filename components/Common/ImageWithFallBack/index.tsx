'use client'
import { AspectRatio } from "@/components/UI/AspectRatio";
import Image from "next/image";

interface ImageWithFallbackProps {
  src: string;
  fallbackSrc: string;
  aspectRatio: {
    width: number;
    height: number;
  };
  alt: string;
  className?: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  aspectRatio,
  alt,
  className,
}) => {
  const aspectRatioValue = aspectRatio.width / aspectRatio.height
  return (
    <AspectRatio ratio={aspectRatioValue}>
      <div className="w-full h-0">
        <Image
          src={src}
          onError={(e) => {
            const img = document.getElementById(alt) as HTMLImageElement;
            img.src = fallbackSrc;
          }}
          fill
          objectFit="cover"
          unoptimized
          alt={alt}
          id={alt}
          className={className}
        />
      </div>
    </AspectRatio>
  );
};

export default ImageWithFallback;