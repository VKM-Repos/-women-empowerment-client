"use client";
import React, { useEffect, useRef, useState } from "react";
import org_cover_image from "@/public/images/org_cover_image.png";
import Image from "next/image";
import { TransitionParent } from "@/lib/utils/transition";
import { useGET } from "@/lib/hooks/useGET.hook";
import { useAppContext } from "@/lib/context/app-context";
import orgProfile from "@/public/images/org_profile.svg";
import { usePATCH } from "@/lib/hooks/usePATCH.hook";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function OrganizationDetails({
  params,
}: {
  params: { id: string };
}) {
  // notFound();

  const { user } = useAppContext();
  const inputRef = useRef<HTMLInputElement>(null);
  const inputCoverRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [selectedCoverImage, setSelectedCoverImage] = useState<File | string>(
    ""
  );
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(
    null
  );
  const [contentType, setContentType] = useState<any>("");
  const [imageToUpdate, setImageToUpdate] = useState<any>("");

  const {
    data: organization,
    isPending,
    refetch,
  } = useGET({
    url: `organizations/${user?.organizationId}`,
    queryKey: ["GET_ORGANIZATION_DETAILS", "DASHBOARD", user?.organizationId],
    withAuth: true,
    enabled: true,
  });
  const { mutate, isPending: updateOrgPending } = usePATCH(
    `organizations/${user?.organizationId}/${
      imageToUpdate ? imageToUpdate : ""
    }`,
    true,
    undefined,
    contentType
  );

  const [formData, setFormData] = useState({
    name: "",
    website: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    email: "",
    street: "",
    phoneNumber: "",
    description: "",
  });

  useEffect(() => {
    setFormData({
      name: organization?.name,
      website: organization?.website,
      facebook: organization?.facebook,
      twitter: organization?.twitter,
      linkedin: organization?.linkedin,
      email: organization?.email,
      street: organization?.street,
      phoneNumber: organization?.phoneNumber,
      description: organization?.description,
    });
  }, [organization]);

  const hanleOnChange = (event: any) => {
    const { name, value } = event?.target;

    setFormData((previouseFormData) => {
      return {
        ...previouseFormData,
        [name]: value,
      };
    });
  };
  const handleUpdateOrg = (event: any) => {
    event.preventDefault();
    setContentType("application/json");
    mutate(formData, {
      onSuccess: () => {
        console.log("Success");
        refetch();
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  const handleChooseFile = () => {
    inputRef.current?.click();
  };
  const handleChooseCoverImage = () => {
    inputCoverRef.current?.click();
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

  const handleCoverImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const imageFile = e.target.files?.[0];
    if (imageFile) {
      // Update the logo in the store with the URL
      const imageUrl = URL.createObjectURL(imageFile);
      setCoverImagePreview(imageUrl);
      setSelectedCoverImage(imageFile);
    }
  };

  const handleUpdateLogo = (event: any) => {
    event.preventDefault();
    setImageToUpdate("logo");
    setContentType("multipart/form-data");
    let formData = new FormData();
    formData.append("logo", selectedFile);
    console.log(selectedFile);

    mutate(formData, {
      onSuccess: () => {
        console.log("logo updated");
        refetch();
        setSelectedFile("");
        setImagePreview(null);
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  const handleUpdateCoverImage = (event: any) => {
    event.preventDefault();
    setImageToUpdate("cover-image");
    setContentType("multipart/form-data");
    let formData = new FormData();
    formData.append("coverImage", selectedCoverImage);

    mutate(formData, {
      onSuccess: () => {
        setCoverImagePreview("");
        setSelectedCoverImage("");
        refetch();
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  console.log(organization);

  return (
    <TransitionParent>
      <section>
        {updateOrgPending || isPending ? (
          <LoadingThinkingWomen />
        ) : (
          <>
            <div className="lg:flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0 hidden">
              <span className="relative bg-white flex grow flex-col w-full pb-7 rounded-2xl border border-gray-500 max-md:max-w-full max-md:mt-5">
                <img
                  src={
                    coverImagePreview ||
                    organization?.coverImage ||
                    "https://placehold.co/400x400?text=Women\n Hub"
                  }
                  loading="lazy"
                  alt="cover image"
                  className="absolute rounded-tl-2xl rounded-tr-2xl aspect-auto object-cover brightness-50 h-[250px] max-h-[250px] min-h-[250px] w-full bg-blend-darken"
                />
                <form action="" onSubmit={handleUpdateCoverImage}>
                  <div className="z-10 flex justify-end items-center pt-10">
                    <div
                      className={`z-10 flex flex-col gap-3 justify-center items-center ${
                        selectedCoverImage ? "-mt-3" : ""
                      } mr-7`}
                    >
                      <input
                        ref={inputCoverRef}
                        type="file"
                        onChange={handleCoverImageChange}
                        name="image"
                        className="hidden"
                        accept="image/*"
                      />
                      <svg
                        className="cursor-pointer"
                        onClick={handleChooseCoverImage}
                        width="48"
                        height="48"
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

                      {selectedCoverImage && (
                        <button className="bg-gray-200 px-2 py-1 rounded-md text-white-100 text-xs">
                          update
                        </button>
                      )}
                    </div>
                  </div>
                </form>
                <span className="w-full flex flex-col px-2  max-md:max-w-full">
                  <div className="z-[1] ">
                    <div className="gap-10 flex items-center px-10">
                      <div className="flex flex-col w-[28%] max-md:w-full max-md:ml-0">
                        <div className="bg-white flex flex-col  items-center aspect-square w-full rounded-[105px] ">
                          <form
                            action=""
                            onSubmit={handleUpdateLogo}
                            encType="multipart/form-data"
                          >
                            <div className="group flex-col overflow-hidden relative flex aspect-square w-[212px] justify-center items-center rounded-full border-2 p-2">
                              <input
                                ref={inputRef}
                                type="file"
                                onChange={handleImageChange}
                                name="image"
                                className="hidden"
                                accept="image/*"
                              />
                              <img
                                loading="lazy"
                                srcSet={
                                  imagePreview ||
                                  organization?.logo ||
                                  "https://placehold.co/400x400?text=Women\n Hub"
                                }
                                className="absolute h-full w-full object-cover object-center inset-0 group-hover:-z-10"
                              />
                              <img
                                onClick={handleChooseFile}
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d801c02f8092496b1acf27f38e7cfe019c05eff9870b0e957c1b7ca6ad1566?"
                                className="w-10 h-10 cursor-pointer object-contain object-center justify-center items-center overflow-hidden max-w-full my-8 hidden group-hover:block"
                              />
                              {selectedFile && (
                                <button className="bg-gray-100 text-white-100 text-xs px-2 py-1 rounded-md">
                                  Update
                                </button>
                              )}
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="flex flex-col w-full max-md:w-full text-white-100">
                        <div className="text-white-100 text-2xl font-sora font-bold my-auto max-md:max-w-full ">
                          <span className="">{organization?.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
                <form onSubmit={handleUpdateOrg}>
                  <div className="flex flex-col gap-5  px-[100px] font-quickSand mt-2">
                    <div className="flex items-center gap-5">
                      <label className="font-sora flex-[0.3]" htmlFor="">
                        Org. Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        onChange={hanleOnChange}
                        value={formData?.name}
                        className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                        placeholder="Women researchers foundation"
                      />
                    </div>
                    <div className="flex items-center gap-5">
                      <label className="font-sora flex-[0.3]" htmlFor="">
                        Website
                      </label>
                      <input
                        type="text"
                        name="website"
                        onChange={hanleOnChange}
                        value={formData?.website}
                        className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                        placeholder="htttps://womenresearchersfoundation.com"
                      />
                    </div>
                    <div className="flex items-center gap-5">
                      <label className="font-sora flex-[0.3]" htmlFor="">
                        Facebook
                      </label>
                      <input
                        type="text"
                        name="facebook"
                        onChange={hanleOnChange}
                        value={formData?.facebook}
                        className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                        placeholder="htttps://www.facebook.com/wrf"
                      />
                    </div>
                    <div className="flex items-center gap-5">
                      <label className="font-sora flex-[0.3]" htmlFor="">
                        Twitter
                      </label>
                      <input
                        type="text"
                        name="twitter"
                        onChange={hanleOnChange}
                        value={formData?.twitter}
                        className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                        placeholder="htttps://www.twitter.com/wrf"
                      />
                    </div>
                    <div className="flex items-center gap-5">
                      <label className="font-sora flex-[0.3]" htmlFor="">
                        LinkedIn
                      </label>
                      <input
                        type="text"
                        name="linkedin"
                        onChange={hanleOnChange}
                        value={formData?.linkedin}
                        className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                        placeholder="htttps://www.linkedIn.com/wrf"
                      />
                    </div>
                    <div className="flex items-center gap-5">
                      <label className="font-sora flex-[0.3]" htmlFor="">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        onChange={hanleOnChange}
                        value={formData?.email}
                        className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                        placeholder="contact@womenresearchersfoundation.org"
                      />
                    </div>
                    <div className="flex items-center gap-5">
                      <label className="font-sora flex-[0.3]" htmlFor="">
                        Location
                      </label>
                      <input
                        type="text"
                        name="street"
                        onChange={hanleOnChange}
                        value={formData?.street}
                        className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                        placeholder="5th avenue, malcom X street, gwarinpa."
                      />
                    </div>
                    <div className="flex items-center gap-5">
                      <label className="font-sora flex-[0.3]" htmlFor="">
                        Contact
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        onChange={hanleOnChange}
                        value={formData?.phoneNumber}
                        className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                        placeholder="09045456578"
                      />
                    </div>

                    <div className="flex gap-5">
                      <label className="font-sora flex-[0.3]">
                        Description
                      </label>
                      <textarea
                        name="description"
                        onChange={hanleOnChange}
                        value={formData?.description}
                        className="font-quickSand flex-1 border border-gray-500 rounded-md w-full px-9 py-3 h-[180px] focus:outline-none"
                      >
                        {formData?.description}
                      </textarea>
                    </div>
                    <div className="flex justify-center gap-5">
                      <button className="text-white-100 font-light font-sora rounded bg-btnWarning mt-6 px-4 py-2">
                        Update
                      </button>
                      <Link
                        href={`/organization/${organization?.id}`}
                        className="border border-btnWarning font-light font-sora rounded text-btnWarning mt-6 px-4 py-2"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </form>
              </span>
            </div>

            <div className="w-screen lg:hidden mt-10 -ml-[100px]">
              <div>
                <h2 className="w-[300px] text-2xl">
                  View this page on laptop if you want manage your organization
                </h2>
              </div>
            </div>
          </>
        )}
      </section>
    </TransitionParent>
  );
}
