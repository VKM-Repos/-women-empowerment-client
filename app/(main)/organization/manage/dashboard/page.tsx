
'use client'
import React, { useEffect, useState } from 'react'
import orgProfile2 from '@/public/images/org_profile_2.svg'
import Image from 'next/image'
import { TransitionParent } from '@/lib/utils/transition'
import { useGET } from '@/lib/hooks/useGET.hook'
import { useAppContext } from '@/lib/context/app-context'
import orgProfile from '@/public/images/org_profile.svg'

export default function OrganizationDetails() {
    const {user} = useAppContext()

      const {data:organization, isPending} = useGET({url: `organizations/${user?.organizationId}`, queryKey:['GET_ORGANIZATION_DETAILS', 'DASHBOARD'], withAuth: true, enabled: true})

    console.log(organization);
    
    const [formData, setFormData] = useState({
        name: "",
        website: "",
        facebook: "",
        email: "",
        street: "",
        phoneNumber: "",
        description: ""
    })

    useEffect(()=>{
        setFormData({
            name: organization?.name,
            website: organization?.website,
            facebook: organization?.facebook,
            email: organization?.email,
            street: organization?.street,
            phoneNumber: organization?.phoneNumber,
            description: organization?.description
        })
    }, [organization])
    return (
        <TransitionParent>
                    <section >
            <div className="flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0">
                <span className="relative bg-white flex grow flex-col w-full pb-7 rounded-2xl border border-gray-500 max-md:max-w-full max-md:mt-5">
                    <Image src={orgProfile2} layout='responsive' alt='bg' width={1000} height={1000} className='absolute inset-0' />
                    <div className='z-10 flex justify-end pt-10'>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d801c02f8092496b1acf27f38e7cfe019c05eff9870b0e957c1b7ca6ad1566?"
                            className="aspect-square object-contain object-center w-12 justify-center items-center overflow-hidden max-w-full mr-12 max-md:mr-2.5 cursor-pointer z-10 "
                        />
                    </div>
                    <span className="w-full flex flex-col px-2  max-md:max-w-full">

                        <div className="z-[1] ">
                            <div className="gap-10 flex items-center px-10">
                                <div className="flex flex-col w-[28%] max-md:w-full max-md:ml-0">
                                    <div className="bg-white flex flex-col  items-center aspect-square w-full rounded-[105px] ">
                                        <div className="group flex-col overflow-hidden relative flex aspect-square w-[212px] justify-center items-center rounded-[50%]">
                                            <img
                                                loading="lazy"
                                                srcSet={orgProfile.src}
                                                className="absolute h-full w-full object-cover object-center inset-0 group-hover:-z-10"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d801c02f8092496b1acf27f38e7cfe019c05eff9870b0e957c1b7ca6ad1566?"
                                                className="w-10 h-10 cursor-pointer object-contain object-center justify-center items-center overflow-hidden max-w-full my-8 hidden group-hover:block"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full max-md:w-full text-white-100">
                                    <div className="text-white-100 text-2xl font-sora font-bold my-auto max-md:max-w-full ">
                                       {organization?.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                    <form action="">
                        <div className='flex flex-col gap-5  px-[100px] font-quickSand'>
                            <div className='flex items-center gap-5'>
                                <label className='font-sora flex-[0.3]' htmlFor="">Org. Name</label>
                                <input type='text' name='name' value={formData?.name} className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full" placeholder='Women researchers foundation' />
                            </div>
                            <div className='flex items-center gap-5'>
                                <label className='font-sora flex-[0.3]' htmlFor="">Website</label>
                                <input type='text' name='website' value={formData?.website} className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full" placeholder='htttps://womenresearchersfoundation.com' />
                            </div>
                            <div className='flex items-center gap-5'>
                                <label className='font-sora flex-[0.3]' htmlFor="">Facebook</label>
                                <input type='text' name='facebook' value={formData?.facebook} className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full" placeholder='htttps://www.facebook.com/wrf' />
                            </div>
                            <div className='flex items-center gap-5'>
                                <label className='font-sora flex-[0.3]' htmlFor="">Email</label>
                                <input type='text' name='email' value={formData?.email} className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full" placeholder='contact@womenresearchersfoundation.org' />
                            </div>
                            <div className='flex items-center gap-5'>
                                <label className='font-sora flex-[0.3]' htmlFor="">Location</label>
                                <input type='text' name='street' value={formData?.street} className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full" placeholder='5th avenue, malcom X street, gwarinpa.' />
                            </div>
                            <div className='flex items-center gap-5'>
                                <label className='font-sora flex-[0.3]' htmlFor="">Contact</label>
                                <input type='text' name='phoneNumber' value={formData?.phoneNumber} className="font-quickSand flex-1 border border-gray-500 px-10 py-3 focus:outline-none rounded-md w-full" placeholder='09045456578' />
                            </div>

                            <div className='flex gap-5'>
                                <div className="text-black flex-[0.3]">Bio</div>
                                <textarea name='description' value={formData?.description} className="font-quickSand flex-1 border border-gray-500 rounded-md w-full px-9 py-3 h-[180px] focus:outline-none">
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
        </section>
        </TransitionParent>
    )
}
