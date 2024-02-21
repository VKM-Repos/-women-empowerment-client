import Image from 'next/image'
import React from 'react'

import imageSample from '@/public/images/image_sample_in_images.svg'



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
            <div className='grid grid-cols-3 gap-7 justify-around mt-[50px]'>
                <Image src={imageSample} className='aspect-auto' alt='' />
                <Image src={imageSample} className='aspect-auto' alt='' />
                <Image src={imageSample} className='aspect-auto' alt='' />
            </div>
            <div>
              <svg className='cursor-pointer' width="225" height="278" viewBox="0 0 306 278" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.580376 13.929C0.580376 6.55677 6.55677 0.580376 13.929 0.580376H291.929C299.301 0.580376 305.278 6.55677 305.278 13.929V264.071C305.278 271.443 299.301 277.42 291.929 277.42H13.929C6.55675 277.42 0.580376 271.443 0.580376 264.071V13.929Z" stroke="#65655E" stroke-opacity="0.2" stroke-width="1.16075"/>
                <rect x="70.2249" y="56.2972" width="165.407" height="165.407" rx="82.7035" stroke="#FF7400" stroke-width="1.16075"/>
                <path d="M180.497 120.139V125.943H171.791V134.649H165.988V125.943H157.282V120.139H165.988V111.434H171.791V120.139H180.497ZM155.831 140.452C156.986 140.452 158.093 139.993 158.91 139.176C159.726 138.359 160.184 137.251 160.184 136.097C160.183 134.942 159.724 133.834 158.908 133.018C158.091 132.202 156.983 131.743 155.828 131.744C155.256 131.744 154.69 131.857 154.162 132.076C153.634 132.295 153.154 132.616 152.75 133.02C152.345 133.425 152.025 133.905 151.806 134.433C151.588 134.962 151.475 135.528 151.475 136.1C151.476 136.671 151.588 137.238 151.807 137.766C152.026 138.294 152.347 138.774 152.752 139.178C153.156 139.582 153.636 139.903 154.165 140.121C154.693 140.34 155.259 140.453 155.831 140.452ZM165.988 149.837L164.499 148.183C163.955 147.577 163.289 147.092 162.545 146.76C161.801 146.429 160.996 146.257 160.181 146.257C159.366 146.257 158.561 146.429 157.817 146.76C157.073 147.092 156.407 147.577 155.863 148.183L153.959 150.304L139.871 134.649L131.165 144.321V125.943H151.478V120.139H131.165C129.626 120.139 128.15 120.751 127.061 121.839C125.973 122.928 125.361 124.404 125.361 125.943V160.766C125.361 162.305 125.973 163.781 127.061 164.869C128.15 165.958 129.626 166.569 131.165 166.569H165.988C167.527 166.569 169.003 165.958 170.092 164.869C171.18 163.781 171.791 162.305 171.791 160.766V140.452H165.988V149.837Z" fill="#FF7400"/>
              </svg>
            </div>
        </div>
        <div className='flex justify-center'>
          <button className='px-5 py-2 rounded-md bg-btnWarning text-white-100 font-light'>Update</button>
        </div>
    </section>
  )
}
