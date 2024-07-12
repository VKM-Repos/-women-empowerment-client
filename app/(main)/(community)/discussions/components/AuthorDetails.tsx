import React from 'react';

interface AuthorDetailsProps {
  photoUrl: string;
  name: string;
}

const AuthorDetails: React.FC<AuthorDetailsProps> = ({ photoUrl, name }) => {
  return (
    <div className="flex items-center gap-4">
      <span className="aspect-square w-[2.5rem] border-2 border-btnWarning overflow-hidden rounded-full md:w-[3.5rem]">
        <img src={photoUrl} alt={name} className="rounded-full" />
      </span>
      <h5 className="text-gray-200 font-sora text-base font-semibold">
        {name || 'Anonymous'}
      </h5>
    </div>
  );
};

export default AuthorDetails;
