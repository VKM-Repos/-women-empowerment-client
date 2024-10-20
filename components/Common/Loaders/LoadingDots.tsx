import React from 'react';

const LoadingDots: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center">
     <div className='flex space-x-1 justify-center items-center'>
        <div className='h-[0.6rem] aspect-square bg-btnWarning rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-[0.6rem] aspect-square bg-btnWarning rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-[0.6rem] aspect-square bg-btnWarning rounded-full animate-bounce'></div>
    </div>
    </div>
  );
};

export default LoadingDots;
