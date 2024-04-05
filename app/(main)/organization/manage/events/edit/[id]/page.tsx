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
import Link from "next/link";
export default function EditEvent({ params }: { params: { id: string } }) {
  const eventId = params?.id;
  const [contentType, setContentType] = useState<any>("");
  const [imageUrl, setImageUrl] = useState<any>("");
  const startDateRef = useRef<HTMLInputElement>(null);
  const endDateRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    location: "",
    link: "",
    description: "",
    startDate: "",
    endDate: "",
  });
  // console.log(eventId);
  const {
    data: event,
    isPending,
    refetch,
  } = useGET({
    url: `/events/${eventId}`,
    queryKey: ["GET_EVENT_DETAILS_EDIT_PAGER", eventId],
    withAuth: true,
    enabled: true,
  });

  const { mutate, isPending: updatingEvent } = usePATCH(
    `/events/${eventId}${imageUrl ? "/image" : ""}`,
    true,
    undefined,
    contentType
  );
  const { mutate: publishEvent, isPending: publishingEvent } = usePOST(
    `events/${eventId}/publish`
  );
  useEffect(() => {
    setFormData({
      name: event?.name,
      type: event?.type,
      location: event?.location,
      link: event?.link,
      description: event?.description,
      startDate: event?.startDate,
      endDate: event?.endDate,
    });
  }, [event]);
  const handleOnChange = (event: any) => {
    const { name, value } = event?.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const updateEvent = (event: any) => {
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
  const handlePublishEvent = (event: any) => {
    publishEvent(
      {},
      {
        onSuccess: () => {},
        onError: () => {},
      }
    );
  };
  const handleChooseFile = () => {
    inputRef.current?.click();
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
  const handleUpdateLogo = (event: any) => {
    event.preventDefault();
    setImageUrl("image");
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
            <div className="flex items-center gap-5 pt-10">
              <div className="flex flex-col w-[28%] max-md:w-full max-md:ml-0">
                <div className="bg-white flex flex-col  items-center aspect-square w-full rounded-[105px] ">
                  <form
                    action=""
                    onSubmit={handleUpdateLogo}
                    encType="multipart/form-data"
                  >
                    <div className="group flex-col overflow-hidden relative flex aspect-square lg:w-[212px] w-[80px] justify-center items-center rounded-full border-2 p-2">
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
                          event?.image ||
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
              <h2 className="lg:text-3xl text-xl">{event?.name}</h2>
            </div>
            <form action="" onSubmit={updateEvent}>
              <div className="flex flex-col gap-5  px-[100px] mt-10 font-quickSand">
                <div className="flex items-center gap-5">
                  <label className="font-sora flex-[0.4]" htmlFor="">
                    Date of event
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
                    Event Type
                  </label>
                  <select
                    onChange={handleOnChange}
                    value={formData?.type}
                    name="type"
                    id=""
                    className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                  >
                    <option value={formData?.type}>{formData?.type}</option>
                    <option value="ONLINE">ONLINE</option>
                    <option value="PHYSICAL">PHYSICAL</option>
                  </select>
                </div>
                {formData?.type == "ONLINE" ? (
                  <div className="flex items-center gap-5">
                    <label className="font-sora flex-[0.5]" htmlFor="">
                      Event Link
                    </label>
                    <input
                      type="text"
                      onChange={handleOnChange}
                      value={formData?.link}
                      name="link"
                      className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                      placeholder="htttps://www.facebook.com/wrf"
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-5">
                    <label className="font-sora flex-[0.5]" htmlFor="">
                      Location
                    </label>
                    <input
                      type="text"
                      onChange={handleOnChange}
                      value={formData?.location}
                      name="location"
                      className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                      placeholder="Location"
                    />
                  </div>
                )}
                <div className="flex items-center gap-5">
                  <label className="font-sora flex-[0.5]" htmlFor="">
                    Event Title
                  </label>
                  <input
                    type="text"
                    onChange={handleOnChange}
                    value={formData?.name}
                    name="name"
                    className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full"
                    placeholder="contact@womenresearchersfoundation.org"
                  />
                </div>

                <div className="flex gap-5">
                  <label className="font-sora flex-[0.5]" htmlFor="">
                    Event Description
                  </label>
                  <textarea
                    name="description"
                    onChange={handleOnChange}
                    value={formData?.description}
                    className="font-quickSand flex-1 border border-gray-500 rounded-md w-full px-9 py-3 h-[180px] focus:outline-none"
                  ></textarea>
                </div>

                {event?.status == "DRAFTS" ? (
                  <div className="flex justify-center gap-5">
                    <button
                      type="button"
                      onClick={handlePublishEvent}
                      className="bg-btnWarning text-[17px] text-white-100 px-5 py-2 rounded-md"
                    >
                      Publish
                    </button>
                    <Link
                      href={`/events/${eventId}`}
                      className="border text-[17px] border-btnWarning px-5 py-2 rounded-md"
                    >
                      View
                    </Link>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <button className="bg-btnWarning text-[17px] text-white-100 px-5 py-2 rounded-md">
                      Update
                    </button>
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
