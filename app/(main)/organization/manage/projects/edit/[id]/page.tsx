"use client";
import React, { useEffect, useRef, useState } from "react";

import orgProfile from "@/public/images/org_profile.svg";
import Image from "next/image";
import orgProfile2 from "@/public/images/org_profile_2.svg";
import { useGET } from "@/lib/hooks/useGET.hook";
import { TransitionParent } from "@/lib/utils/transition";
import LoadingThinkingWomen from "@/components/Common/Loaders/LoadingThinkingWomen";
import { usePATCH } from "@/lib/hooks/usePATCH.hook";
import { usePOST } from "@/lib/hooks/usePOST.hook";
import { useAppContext } from "@/lib/context/app-context";
import Link from "next/link";

const menu = [
  {
    title: 'remove',
    blank: false,
    isButton: true,
    onClick: () => {alert('removed')}
  },
  {
    title: 'change image',
    blank: false,
    isButton: true,
    onClick: () => {alert('changed')}
  },
];


export default function EditProject({ params }: { params: { id: string } }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { categories } = useAppContext();
  const projectId = params?.id;
  const [contentType, setContentType] = useState<any>("");
  const [updateMethod, setUpdateMethod] = useState<any>("");
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [imageToUpdate, setImageToUpdate] = useState<any>("");
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    link: "",
    description: "",
    status: "",
    startDate: "",
    endDate: "",
    categoryId: "",
  });
  const {
    data: project,
    isPending,
    refetch,
  } = useGET({
    url: `/projects/${projectId}`,
    queryKey: ["GET_PROJECT_DETAILS_EDIT_PAGER", projectId],
    withAuth: true,
    enabled: true,
  });
  //   const {
  //     data: categories,
  //     isLoading,
  //     isError,
  //   } = useGET({
  //     url: "/categories",
  //     queryKey: ["CATEGORIES_ON_PROJECT_EDITPAGE", projectId],
  //     withAuth: false,
  //     enabled: true,
  //   });
  const { mutate, isPending: updatingEvent } = usePATCH(
    `/projects/${projectId}`,
    true,
    undefined,
    contentType,
    updateMethod
  );
  const { mutate: publishEvent, isPending: publishingEvent } = usePOST(
    `projects/${projectId}/publish`
  );
  useEffect(() => {
    setFormData({
      title: project?.title,
      location: project?.location,
      link: project?.link,
      description: project?.description,
      status: project?.status,
      startDate: project?.startDate,
      endDate: project?.endDate,
      categoryId: project?.category?.id,
    });
  }, [project]);
  const handleOnChange = (event: any) => {
    const { name, value } = event?.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const updateProject = (event: any) => {
    setUpdateMethod("PATCH");
    setContentType("application/json");
    event.preventDefault();
    mutate(formData, {
      onSuccess: () => {
        refetch();
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  const handlePublishProject = (event: any) => {
    publishEvent(
      {},
      {
        onSuccess: () => {},
        onError: () => {},
      }
    );

    console.log("Clicked publish event");
  };
  console.log(formData);
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];

    if (imageFile) {
      // Update the logo in the store with the URL
      const imageUrl = URL.createObjectURL(imageFile);
      setImagePreview(imageUrl);
      setSelectedFile(imageFile);
    }
  };
  const handleChooseFile = () => {
    inputRef.current?.click();
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

  return (
    <TransitionParent>
      {isPending || updatingEvent || publishingEvent ? (
        <LoadingThinkingWomen />
      ) : (
        <div className="flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0">
          <span className="relative bg-white flex grow flex-col w-full pb-7 rounded-2xl border border-gray-500 max-md:max-w-full max-md:mt-5">
            <span className="w-full flex flex-col px-2 pt-10  max-md:max-w-full">
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
                              project?.image ||
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
                  <div className="flex flex-col w-full max-md:w-full text-primary">
                    <div className="text-primary text-2xl font-sora font-bold my-auto max-md:max-w-full ">
                      <span className="">{project?.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <form action="" onSubmit={updateProject}>
              <div className="flex flex-col gap-5  px-[100px] mt-[50px] font-quickSand">
                <div className="flex items-center gap-5">
                  <label className="font-sora flex-[0.5]" htmlFor="">
                    Time Range
                  </label>
                  <div className="flex gap-2 flex-1">
                    <input
                      type="datetime-local"
                      onChange={handleOnChange}
                      value={formData?.startDate}
                      name="startDate"
                      className="font-quickSand text-sm border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-[185px]"
                      placeholder="start date"
                    />

                    <input
                      type="datetime-local"
                      onChange={handleOnChange}
                      value={formData?.endDate}
                      name="endDate"
                      className="font-quickSand text-sm border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-[185px]"
                      placeholder="End date"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <label className="font-sora flex-[0.5]" htmlFor="">
                    Project Status
                  </label>
                  <select
                    onChange={handleOnChange}
                    value={formData?.status}
                    name="status"
                    id=""
                    className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                  >
                    <option value={formData?.status}>{formData?.status}</option>
                    <option value="UPCOMING">Upcoming</option>
                    <option value="ONGOING">Ongoing</option>
                    <option value="COMPLETED">Completed</option>
                  </select>
                </div>
                <div className="flex items-center gap-5">
                  <label className="font-sora flex-[0.5]" htmlFor="">
                    Project Category
                  </label>
                  <select
                    onChange={handleOnChange}
                    value={formData?.categoryId}
                    name="categoryId"
                    id=""
                    className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                  >
                    <option value={project?.category?.id}>
                      {project?.category?.name}
                    </option>
                    {categories?.map((category: any) => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="flex items-center gap-5">
                  <label className="font-sora flex-[0.5]" htmlFor="">
                    Project Location
                  </label>
                  <input
                    type="text"
                    onChange={handleOnChange}
                    value={formData?.location}
                    name="location"
                    className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                    placeholder="contact@womenresearchersfoundation.org"
                  />
                </div>

                <div className="flex items-center gap-5">
                  <label className="font-sora flex-[0.5]" htmlFor="">
                    Project Title
                  </label>
                  <input
                    type="text"
                    onChange={handleOnChange}
                    value={formData?.title}
                    name="title"
                    className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                    placeholder="contact@womenresearchersfoundation.org"
                  />
                </div>

                <div className="flex items-center gap-5">
                  <label className="font-sora flex-[0.5]" htmlFor="">
                    Project Link
                  </label>
                  <input
                    type="text"
                    onChange={handleOnChange}
                    value={formData?.link}
                    name="link"
                    className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                    placeholder="contact@womenresearchersfoundation.org"
                  />
                </div>

                <div className="flex gap-5">
                  <label className="font-sora flex-[0.5]" htmlFor="">
                    Project Description
                  </label>
                  <textarea
                    name="description"
                    onChange={handleOnChange}
                    value={formData?.description}
                    className="font-quickSand flex-1 border border-gray-500 rounded-md w-full px-9 py-3 h-[180px] focus:outline-none"
                  ></textarea>
                </div>

                {!project?.published ? (
                  <div className="flex justify-center gap-5">
                    <button
                      type="button"
                      onClick={handlePublishProject}
                      className="bg-btnWarning text-white-100 px-3 py-1 rounded-md"
                    >
                      Publish
                    </button>
                    <Link
                      href={`/projects/${projectId}`}
                      className="border border-btnWarning px-3 py-1 rounded-md"
                    >
                      View
                    </Link>
                  </div>
                ) : (
                  <div className="flex justify-center gap-5">
                    <button className="bg-btnWarning text-white-100 px-3 py-1 rounded-md">
                      Update
                    </button>
                    <Link
                      href={`/projects/${projectId}`}
                      className="border border-btnWarning px-3 py-1 rounded-md"
                    >
                      View
                    </Link>
                  </div>
                )}
              </div>
            </form>
          </span>
        </div>
      )}
    </TransitionParent>
  );
}
