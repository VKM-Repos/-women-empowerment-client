import Image from 'next/image'
import React from 'react'

import orgProfile from '@/public/images/org_profile.svg'


export default function Images() {
  return (
    <section>
        <div >
            <div className='flex flex-col items-center w-[100%] mt-7 gap-3'>
                <h2 className='font-sora font-semibold text-[20px]'> Share Your Empowerment Journey</h2>
                <p className='font-quickSand text-[13px] text-center'>
                Embark on a visual storytelling journey by sharing up to four impactful images that represent your personal empowerment story.
                </p>
            </div>
            <div>
                <Image src={orgProfile} width={100} height={100} alt='' />
            </div>
        </div>
    </section>
  )
}
