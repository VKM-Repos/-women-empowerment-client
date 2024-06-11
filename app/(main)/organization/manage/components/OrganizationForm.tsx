'use client';
import React, { useEffect, useState } from 'react';

type Props = {
  organization: any;
  onUpdateOrganization: (formData: any) => void;
};

const OrganizationForm = ({ organization, onUpdateOrganization }: Props) => {
  const [formData, setFormData] = useState<any>({
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
      name: organization?.name || "",
      website: organization?.website || "",
      facebook: organization?.facebook || "",
      twitter: organization?.twitter || "",
      linkedin: organization?.linkedin || "",
      email: organization?.email || "",
      street: organization?.street || "",
      phoneNumber: organization?.phoneNumber || "",
      description: organization?.description || "",
    });
  }, [organization]);

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }));
  };

  const handleUpdateOrg = (event: any) => {
    event.preventDefault();
    onUpdateOrganization(formData);
  };

  return (
    <form onSubmit={handleUpdateOrg}>
      <div className="flex flex-col gap-5 font-quickSand mt-2 lg:px-8">
        {['name', 'website', 'facebook', 'twitter', 'linkedin', 'email', 'street', 'phoneNumber'].map((field: any) => (
          <div key={field} className="flex flex-col lg:flex-row gap-0 lg:gap-5">
            <label className="font-sora flex-[0.3]" htmlFor={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type="text"
              name={field}
              onChange={handleOnChange}
              value={formData[field] || ""}
              className="font-quickSand flex-1 border border-gray-500 px-2 md:px-6 py-3 focus:outline-none rounded-md w-full"
            />
          </div>
        ))}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-5">
          <label className="font-sora flex-[0.3]" htmlFor='description'>
              Bio
            </label>
          <textarea
            name="description"
            onChange={handleOnChange}
            value={formData.description || ""}
            className="font-quickSand flex-1 border border-gray-500 rounded-md w-full px-2 md:px-6 py-3 min-h-[10rem] focus:outline-none"
          />
        </div>
        <div className="flex justify-center gap-5">
          <button className="text-white-100 font-light font-sora rounded bg-btnWarning mt-6 px-4 py-2">
            Update 
          </button>
        </div>
      </div>
    </form>
  );
};

export default OrganizationForm;
