"use client";
import Image from "next/image";

type Props = {
  data: any;
};

const GuideCard = ({ data }: Props) => {
  return (
    <div className=" w-[399px] h-[342.66px] mr-4 px-[11.63px]">
      <div className="w-[366.59px]  hover:w-[400px] hover:h-[188.43px] transition-all duration-300">
        <Image
          src={data.coverImageUrl}
          alt={data.title}
          className="aspect-auto object-cover"
        />
      </div>
      <h1 className="text-[24px] text-primary font-normal font-sora mt-6 mb-4">
        {data.title}
      </h1>

      <p className="text-sm/[16px] text-txtColor leading-4 font-light font-quicksand mt-4 mb-4">
        {data.description}
      </p>
      <p className="text-sm/[16px] text-btnWarning leading-4 font-normal font-sora mt-4 mb-4">
        {data.info}
      </p>
    </div>
  );
};

export default GuideCard;
