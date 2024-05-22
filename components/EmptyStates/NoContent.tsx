'use client'
import React from 'react'
import Button from '../Common/Button/Button';

type Props = {
    message: string;
    buttonText: string;
    buttonLink: () => void;
    withButton?: boolean;
}

function NoContent({message, buttonText, buttonLink, withButton}: Props) {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-8 py-6'>
        <p className='text-base font-normal font-sora text-gray-300'>{message}</p>
        {withButton && (
          <span className='w-fit mx-auto'>
            <Button 
                label={buttonText}
                variant='primary'
                size='medium'
                fullWidth={false}
                state='active'
                onClick={buttonLink}
            />
        </span>
        )}
    </div>
  )
}

export default NoContent