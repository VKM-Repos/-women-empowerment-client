import Icon from '@/components/Common/Icons/Icon';
import ImageWithFallback from '@/components/Common/ImageWithFallBack';
import FallBack from '@/public/images/blog-fallback.png';
import Link from 'next/link';
import React from 'react';

type Props = {
  data: any;
};

const PostCardHorizontal = ({ data }: Props) => {
  return (
    <Link
      href={`/blog/${data.id}`}
      className="group grid grid-cols-2 items-start justify-start gap-3"
    >
      <span className="col-span-1 aspect-video w-full overflow-hidden rounded-md">
        <ImageWithFallback
          src={
            data?.coverImageUrl
              ? data?.coverImageUrl
              : 'https://placehold.co/500x500?text=Women\n Hub'
          }
          fallbackSrc={FallBack.src}
          aspectRatio={{ width: 3, height: 2 }}
          alt={data?.title}
          className=""
        />
      </span>
      <div className="col-span-1 flex flex-col gap-1 p-2">
        <span className="text-primary flex gap-4 text-sm font-semibold md:text-lg">
          <p>{data?.author ?? ''}</p> &bull; <p>{data?.datePublished ?? ''}</p>
        </span>
        <span className="flex w-full items-center justify-between">
          <h4 className="text-gray-200 text-base font-semibold group-hover:underline">
            {data?.title ?? ''}
          </h4>
          <span className="opacity-0 group-hover:opacity-100">
            <svg
              width="30"
              height="30"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M26.3572 9.33077C26.9362 9.90983 26.9362 10.8487 26.3572 11.4277L10.0469 27.738C9.4678 28.3171 8.52897 28.3171 7.94991 27.738C7.37086 27.159 7.37086 26.2201 7.94991 25.6411L24.2603 9.33077C24.8393 8.75172 25.7782 8.75172 26.3572 9.33077Z"
                fill="#65655E"
              />
              <path
                d="M25.6714 7.84379C26.0876 7.96524 26.6531 8.17818 27.0818 8.60685C27.5104 9.03553 27.7235 9.60108 27.8449 10.0173C27.9791 10.4774 28.0678 10.9979 28.1289 11.5214C28.2517 12.5723 28.2821 13.8058 28.2732 14.9527C28.2641 16.1085 28.2143 17.2184 28.1673 18.0364C28.1437 18.4462 28.1206 18.785 28.1034 19.0223C28.0948 19.1397 28.0797 19.3319 28.0745 19.398L28.0743 19.3998C28.0055 20.2159 27.2882 20.8225 26.4722 20.7537C25.6562 20.6849 25.0505 19.9677 25.1192 19.1517C25.1238 19.093 25.1376 18.9195 25.1457 18.8073C25.162 18.5826 25.184 18.259 25.2067 17.8659C25.252 17.0781 25.2992 16.0203 25.3077 14.9294C25.3163 13.8297 25.2853 12.7372 25.1834 11.8653C25.1322 11.4274 25.0296 10.9682 24.9598 10.7289C24.7205 10.659 24.2613 10.5564 23.8234 10.5053C22.9514 10.4035 21.8589 10.3723 20.7591 10.3809C19.6683 10.3895 18.6106 10.4366 17.8227 10.4819C17.4296 10.5046 17.1059 10.5266 16.8814 10.5429C16.7692 10.5511 16.5963 10.5647 16.5376 10.5693C15.7216 10.638 15.0038 10.0324 14.935 9.21641C14.8662 8.40039 15.4719 7.68312 16.288 7.61433L16.2913 7.61407C16.3589 7.60874 16.5497 7.59369 16.6664 7.58521C16.9037 7.56797 17.2425 7.54491 17.6523 7.52132C18.4702 7.47426 19.5801 7.42457 20.736 7.41553C21.8829 7.40654 23.1164 7.43706 24.1673 7.55975C24.6908 7.62087 25.2113 7.7095 25.6714 7.84379Z"
                fill="#65655E"
              />
            </svg>
          </span>
        </span>
        <p className="text-gray-300 text-base">{data.description ?? ''}</p>
        <div className="text-gray-300 flex items-center gap-4">
          <span className="flex items-center gap-1">
            <svg
              className="aspect-square w-5 cursor-pointer"
              viewBox="0 0 25 24"
              fill={'none'}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7504 21.1975L10.7496 21.1969C7.60326 18.3438 5.03218 16.0116 3.24167 13.8225C1.45691 11.6405 0.5 9.66166 0.5 7.52391C0.5 4.04866 3.22366 1.325 6.69891 1.325C8.66681 1.325 10.5634 2.24354 11.7992 3.69476L12.1798 4.14179L12.5605 3.69476C13.7963 2.24354 15.6929 1.325 17.6608 1.325C21.136 1.325 23.8597 4.04866 23.8597 7.52391C23.8597 9.66166 22.9028 11.6405 21.1179 13.8242C19.3314 16.0099 16.7679 18.3394 13.6312 21.1898L13.6107 21.2084L13.6096 21.2094L12.1811 22.5L10.7504 21.1975Z"
                stroke="currentColor"
                strokeOpacity="0.4"
              />
            </svg>{' '}
            {data?.numberOfLikes ?? '0'}
          </span>
          <span className="flex items-center gap-1">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.30859 6.58594L12.3086 2.58594L16.3086 6.58594"
                stroke="#787878"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.3086 10.5859H18.3086C18.5738 10.5859 18.8282 10.6913 19.0157 10.8788C19.2032 11.0664 19.3086 11.3207 19.3086 11.5859V20.5859C19.3086 20.8512 19.2032 21.1055 19.0157 21.293C18.8282 21.4806 18.5738 21.5859 18.3086 21.5859H6.30859C6.04338 21.5859 5.78902 21.4806 5.60149 21.293C5.41395 21.1055 5.30859 20.8512 5.30859 20.5859V11.5859C5.30859 11.3207 5.41395 11.0664 5.60149 10.8788C5.78902 10.6913 6.04338 10.5859 6.30859 10.5859H8.30859"
                stroke="#787878"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.3086 2.58594V15.5859"
                stroke="#787878"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {data?.numberOfComments ?? '0'}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostCardHorizontal;
