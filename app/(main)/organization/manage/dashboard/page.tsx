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

export default function OrganizationDetails() {
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
  const {
    data: organization,
    isPending,
    refetch,
  } = useGET({
    url: `organizations/${user?.organizationId}`,
    queryKey: ["GET_ORGANIZATION_DETAILS", "DASHBOARD"],
    withAuth: true,
    enabled: true,
  });
  const { mutate, isPending: updateOrgPending } = usePATCH(
    `organizations/${user?.organizationId}/${selectedFile ? "logo" : ""}`,
    true,
    undefined,
    contentType
  );

  const [formData, setFormData] = useState({
    name: "",
    website: "",
    facebook: "",
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
    setContentType("multipart/form-data");
    let formData = new FormData();
    formData.append("logo", selectedFile);
    console.log(selectedFile);

    mutate(formData, {
      onSuccess: () => {
        console.log("logo updated");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };
  const handleUpdateCoverImage = (event: any) => {
    event.preventDefault();
    setContentType("multipart/form-data");
    let formData = new FormData();
    formData.append("logo", selectedFile);

    mutate(formData, {
      onSuccess: () => {},
      onError: (error) => {
        console.log(error);
      },
    });
  };
  return (
    <TransitionParent>
      <section>
        {updateOrgPending || isPending ? (
          <LoadingThinkingWomen />
        ) : (
          <div className="flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0">
            <span className="relative bg-white flex grow flex-col w-full pb-7 rounded-2xl border border-gray-500 max-md:max-w-full max-md:mt-5">
              <img
                src={
                  coverImagePreview ||
                  "https://placehold.co/400x400?text=Women\n Hub"
                }
                loading="lazy"
                alt="bg"
                className="absolute rounded-tl-2xl rounded-tr-2xl aspect-auto object-cover brightness-50 h-[250px] max-h-[250px] min-h-[250px] w-full bg-blend-darken"
              />
              <form action="">
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
                    <img
                      onClick={handleChooseCoverImage}
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d801c02f8092496b1acf27f38e7cfe019c05eff9870b0e957c1b7ca6ad1566?"
                      className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden max-w-full  max-md:mr-2.5 cursor-pointer z-10 "
                    />
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
                    <div className="text-black flex-[0.3]">Bio</div>
                    <textarea
                      name="description"
                      onChange={hanleOnChange}
                      value={formData?.description}
                      className="font-quickSand flex-1 border border-gray-500 rounded-md w-full px-9 py-3 h-[180px] focus:outline-none"
                    >
                      {formData?.description}
                    </textarea>
                  </div>
                  <button className="text-white-100 text-center text-base font-medium font-sora whitespace-nowrap justify-center items-stretch rounded bg-green-800 self-center mt-6 px-8 py-3.5 max-md:px-5">
                    Update
                  </button>
                </div>
              </form>
            </span>
          </div>
        )}
      </section>
    </TransitionParent>
  );
}
