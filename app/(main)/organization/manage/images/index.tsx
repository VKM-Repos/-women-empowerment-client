"use client";
import React, { useEffect, useRef, useState } from "react";
import { useGET } from "@/lib/hooks/useGET.hook";
import { useAppContext } from "@/lib/context/app-context";
import { TransitionParent } from "@/lib/utils/transition";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";
import { usePOST } from "@/lib/hooks/usePOST.hook";

import Icon from "@/components/Common/Icons/Icon";

export default function Images() {
  const { user } = useAppContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const inputUpdateImageRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | string>("");
  const [selectedUpdateImage, setSelectedUpdateImage] = useState<File | string>(
    ""
  );
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [updateImagePreview, setUpdateImagePreview] = useState<
    string | null | undefined
  >(null);
  const [contentType, setContentType] = useState<any>("");
  const [imageToUpdate, setImageToUpdate] = useState<number>();
  const organizationId = user?.organizationId;
  const {
    data: organization,
    isPending,
    refetch,
  } = useGET({
    url: `organizations/${organizationId}`,
    queryKey: ["GET_USER_DETAILS", organizationId],
    withAuth: true,
    enabled: true,
  });

  const { mutate, isPending: updatingImages } = usePOST(
    `organizations/${organizationId}/images`,
    true,
    contentType
  );
  const handleChooseFile = () => {
    inputRef.current?.click();
  };
  const handleChooseUpdateImage = (index: number) => {
    setImageToUpdate(index);
    inputUpdateImageRef.current?.click();
  };
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];

    if (imageFile) {
      // Update the logo in the store with the URL
      const imageUrl = URL.createObjectURL(imageFile);
      setImagePreview(imageUrl);
      setSelectedFile(imageFile);
    }
  };

  const handleUpdateSingleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const imageFile = e.target.files?.[0];

    if (imageFile) {
      // Update the logo in the store with the URL
      const imageUrl = URL.createObjectURL(imageFile);
      setUpdateImagePreview(imageUrl);
      setSelectedUpdateImage(imageFile);
    }
  };
  const handleUpdateImages = (event: any) => {
    event.preventDefault();
    setContentType("multipart/form-data");
    let formData = new FormData();
    formData.append("image", selectedFile);

    mutate(formData, {
      onSuccess: () => {
        console.log("Image updated");
        refetch();
        setSelectedFile("");
        setImagePreview(null);
      },
      onError: (error) => {},
    });
  };

  const handleUpdateSingleImage = (event: any) => {
    event.preventDefault();
    console.log(updateImagePreview);
  };

  const handleRemoveFile = () => {
    setImagePreview(null);
    setSelectedFile("");
  };
  return (
    <TransitionParent>
      {isPending || updatingImages ? (
        <LoadingThinkingWomen />
      ) : (
        <section>
          <div>
            <div className="flex flex-col items-center w-[100%]  gap-3">
              <h2 className="font-sora font-semibold text-[20px]">
                {" "}
                Share Your Empowerment Journey
              </h2>
              <p className="font-quickSand text-[13px] text-center">
                Embark on a visual storytelling journey by sharing up to four
                impactful images that represent your personal empowerment story.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-7 justify-around mt-[50px]">
              {organization?.images?.map((image: any, index: number) => {
                if (index < 4) {
                  return (
                    <div
                      key={image?.id}
                      className="group flex-col overflow-hidden relative flex aspect-square w-[212px] justify-center items-center p-2 border border-gray-500"
                    >
                      {/* <img
                        src={updateImagePreview}
                        className="absolute h-full w-full object-cover object-center inset-0 group-hover:-z-50 "
                      /> */}
                      {imageToUpdate == index ? (
                        <img
                          src={
                            updateImagePreview ||
                            "https://placehold.co/400x400?text=Women\n Hub"
                          }
                          loading="lazy"
                          alt="Image preview"
                          className="absolute h-full w-full object-cover object-center inset-0 group-hover:-z-50 "
                        />
                      ) : (
                        <img
                          src={"https://placehold.co/400x400?text=Women\n Hub"}
                          loading="lazy"
                          alt="Image preview"
                          className="absolute h-full w-full object-cover object-center inset-0 group-hover:-z-50 "
                        />
                      )}
                      <svg
                        onClick={() => handleChooseUpdateImage(index)}
                        className="group-hover:z-10 cursor-pointer"
                        width="38"
                        height="38"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="48" height="48" rx="8" fill="#1F1F1F" />
                        <path
                          d="M14.6667 33.3327H16.5333L28.0333 21.8327L26.1667 19.966L14.6667 31.466V33.3327ZM33.7333 19.8993L28.0667 14.2993L29.9333 12.4327C30.4444 11.9216 31.0724 11.666 31.8173 11.666C32.5613 11.666 33.1889 11.9216 33.7 12.4327L35.5667 14.2993C36.0778 14.8105 36.3444 15.4273 36.3667 16.15C36.3889 16.8718 36.1444 17.4882 35.6333 17.9993L33.7333 19.8993ZM13.3333 35.9993C12.9556 35.9993 12.6391 35.8713 12.384 35.6153C12.128 35.3602 12 35.0438 12 34.666V30.8993C12 30.7216 12.0333 30.5496 12.1 30.3833C12.1667 30.2162 12.2667 30.066 12.4 29.9327L26.1333 16.1993L31.8 21.866L18.0667 35.5993C17.9333 35.7327 17.7836 35.8327 17.6173 35.8993C17.4502 35.966 17.2778 35.9993 17.1 35.9993H13.3333ZM27.1 20.8993L26.1667 19.966L28.0333 21.8327L27.1 20.8993Z"
                          fill="white"
                        />
                      </svg>
                      <form action="" onSubmit={handleUpdateSingleImage}>
                        <input
                          ref={inputUpdateImageRef}
                          type="file"
                          onChange={handleUpdateSingleImageChange}
                          name="image"
                          className="hidden"
                          accept="image/*"
                        />

                        {selectedUpdateImage && imageToUpdate === index && (
                          <button className="bg-gray-100 text-white-100 text-xs px-2 py-1 rounded-md group-hover:z-50">
                            Update
                          </button>
                        )}
                      </form>
                    </div>
                  );
                }
              })}
              {organization?.images.length < 4 && (
                <div className="">
                  {imagePreview ? (
                    <div className="group flex-col overflow-hidden relative flex aspect-square w-[232px] justify-center items-center p-2">
                      <img
                        loading="lazy"
                        srcSet={
                          imagePreview ||
                          "https://placehold.co/400x400?text=Women\n Hub"
                        }
                        className="absolute h-full w-full object-cover object-center inset-0 group-hover:-z-10"
                      />
                      <button
                        type="button"
                        className="absolute inset-0 flex items-center justify-center hover:opacity-100 opacity-0 text-xs bg-primaryBlack/70 text-primaryWhite transition-opacity duration-150 delay-150"
                        onClick={() => handleRemoveFile()}
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.75586 8.05762L18.6455 18.9472M7.75586 18.9472L18.6455 8.05762"
                            stroke="black"
                            strokeWidth="1.58394"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <svg
                      className="cursor-pointer -mt-5"
                      width="225"
                      height="278"
                      viewBox="0 0 306 278"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={handleChooseFile}
                    >
                      <path
                        d="M0.580376 13.929C0.580376 6.55677 6.55677 0.580376 13.929 0.580376H291.929C299.301 0.580376 305.278 6.55677 305.278 13.929V264.071C305.278 271.443 299.301 277.42 291.929 277.42H13.929C6.55675 277.42 0.580376 271.443 0.580376 264.071V13.929Z"
                        stroke="#65655E"
                        strokeOpacity="0.2"
                        strokeWidth="1.16075"
                      />
                      <rect
                        x="70.2249"
                        y="56.2972"
                        width="165.407"
                        height="165.407"
                        rx="82.7035"
                        stroke="#FF7400"
                        strokeWidth="1.16075"
                      />
                      <path
                        d="M180.497 120.139V125.943H171.791V134.649H165.988V125.943H157.282V120.139H165.988V111.434H171.791V120.139H180.497ZM155.831 140.452C156.986 140.452 158.093 139.993 158.91 139.176C159.726 138.359 160.184 137.251 160.184 136.097C160.183 134.942 159.724 133.834 158.908 133.018C158.091 132.202 156.983 131.743 155.828 131.744C155.256 131.744 154.69 131.857 154.162 132.076C153.634 132.295 153.154 132.616 152.75 133.02C152.345 133.425 152.025 133.905 151.806 134.433C151.588 134.962 151.475 135.528 151.475 136.1C151.476 136.671 151.588 137.238 151.807 137.766C152.026 138.294 152.347 138.774 152.752 139.178C153.156 139.582 153.636 139.903 154.165 140.121C154.693 140.34 155.259 140.453 155.831 140.452ZM165.988 149.837L164.499 148.183C163.955 147.577 163.289 147.092 162.545 146.76C161.801 146.429 160.996 146.257 160.181 146.257C159.366 146.257 158.561 146.429 157.817 146.76C157.073 147.092 156.407 147.577 155.863 148.183L153.959 150.304L139.871 134.649L131.165 144.321V125.943H151.478V120.139H131.165C129.626 120.139 128.15 120.751 127.061 121.839C125.973 122.928 125.361 124.404 125.361 125.943V160.766C125.361 162.305 125.973 163.781 127.061 164.869C128.15 165.958 129.626 166.569 131.165 166.569H165.988C167.527 166.569 169.003 165.958 170.092 164.869C171.18 163.781 171.791 162.305 171.791 160.766V140.452H165.988V149.837Z"
                        fill="#FF7400"
                      />
                    </svg>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center mt-14">
            <form action="" onSubmit={handleUpdateImages}>
              <input
                ref={inputRef}
                type="file"
                onChange={handleImageChange}
                name="image"
                className="hidden"
                accept="image/*"
              />
              <button
                disabled={!selectedFile && !imagePreview}
                className={`px-5 py-2 rounded-md ${
                  !selectedFile ? "bg-gray-500" : "bg-btnWarning"
                } text-white-100 font-light`}
              >
                Update
              </button>
            </form>
          </div>
        </section>
      )}
    </TransitionParent>
  );
}
