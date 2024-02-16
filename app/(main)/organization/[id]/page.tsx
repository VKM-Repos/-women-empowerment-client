
'use client'
import React, { useState } from 'react'
import organizationHeader from '@/public/images/organization_header.svg'
import orgProfile from '@/public/images/org_profile.svg'
import orgProfile2 from '@/public/images/org_profile_2.svg'
import womenInTechProfile from '@/public/images/wtn.svg'
import Image from 'next/image'
import { Menu } from '../components/Menu'
import Tab from '../components/Tab'
import { TransitionParent } from '@/lib/utils/transition'
import Link from 'next/link'
interface EventTab {
    name: string;
  }
const tabs: EventTab[] = [
    {
      name: 'Images',
    },
    {
      name: 'Events',
    },
  ];
export default function OrganizationDetails() {
    const [showMenu, setShowMenu] = useState(false)
    const handleSHowMenu = ()=>{
        setShowMenu(prevState => !prevState)
    }

      const [selectedEventType, setSelectedEventType] = useState<EventTab>(tabs[0]);
      
    const ownerMenu = [
        {
            title: 'Manage Organization',
            link: '/organization/manage', 
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.421 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.65433 21.1083 7.11667 20.725 7.5L19.3 8.925ZM4 21C3.71667 21 3.47933 20.904 3.288 20.712C3.096 20.5207 3 20.2833 3 20V17.175C3 17.0417 3.025 16.9127 3.075 16.788C3.125 16.6627 3.2 16.55 3.3 16.45L13.6 6.15L17.85 10.4L7.55 20.7C7.45 20.8 7.33767 20.875 7.213 20.925C7.08767 20.975 6.95833 21 6.825 21H4ZM14.325 9.675L13.625 8.975L15.025 10.375L14.325 9.675Z" fill="#65655E"/>
            </svg>
            
        },
        {
            title: 'Visit Site',
            link: '/', 
            icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.2 0C5.29044 0 3.45909 0.758569 2.10883 2.10883C0.758569 3.45909 0 5.29044 0 7.2C0 9.10956 0.758569 10.9409 2.10883 12.2912C3.45909 13.6414 5.29044 14.4 7.2 14.4C9.10956 14.4 10.9409 13.6414 12.2912 12.2912C13.6414 10.9409 14.4 9.10956 14.4 7.2C14.4 5.29044 13.6414 3.45909 12.2912 2.10883C10.9409 0.758569 9.10956 0 7.2 0V0ZM0.888 7.744H2.896C2.928 8.472 3.0296 9.1952 3.2 9.904H1.472C1.14976 9.2247 0.951967 8.49312 0.888 7.744ZM7.744 3.424V0.952C8.51495 1.24498 9.14844 1.8157 9.52 2.552C9.684 2.8296 9.8288 3.1184 9.952 3.416L7.744 3.424ZM10.32 4.504C10.5056 5.2104 10.616 5.9344 10.648 6.664H7.744V4.504H10.32ZM6.656 0.952V3.424H4.448C4.57141 3.12616 4.71577 2.83743 4.88 2.56C5.24997 1.82068 5.88367 1.24693 6.656 0.952ZM6.656 4.504V6.664H3.76C3.792 5.9344 3.9024 5.2104 4.088 4.504H6.656ZM2.896 6.656H0.888C0.951967 5.90688 1.14976 5.1753 1.472 4.496H3.2C3.02927 5.20452 2.92747 5.92788 2.896 6.656ZM3.76 7.744H6.656V9.904H4.088C3.90243 9.19766 3.79248 8.47359 3.76 7.744ZM6.664 10.944V13.416C5.89305 13.123 5.25956 12.5523 4.888 11.816C4.72377 11.5386 4.57941 11.2498 4.456 10.952L6.664 10.944ZM7.744 13.416V10.984H9.952C9.82859 11.2818 9.68423 11.5706 9.52 11.848C9.14844 12.5843 8.51495 13.155 7.744 13.448V13.416ZM7.744 9.864V7.704H10.64C10.6075 8.43359 10.4976 9.15766 10.312 9.864H7.744ZM11.512 7.704H13.52C13.456 8.45312 13.2582 9.1847 12.936 9.864H11.2C11.368 9.168 11.4696 8.4584 11.504 7.744L11.512 7.704ZM11.512 6.624C11.4754 5.90905 11.3709 5.19919 11.2 4.504H12.928C13.2504 5.184 13.448 5.9152 13.512 6.664L11.512 6.624ZM12.312 3.424H10.88C10.6209 2.69624 10.2453 2.01538 9.768 1.408C10.7635 1.85486 11.6282 2.54884 12.28 3.424H12.312ZM4.632 1.408C4.15466 2.01538 3.7791 2.69624 3.52 3.424H2.12C2.77178 2.54884 3.63649 1.85486 4.632 1.408ZM2.112 11.008H3.52C3.7791 11.7358 4.15466 12.4166 4.632 13.024C3.63374 12.5704 2.76876 11.868 2.12 10.984L2.112 11.008ZM9.76 13.024C10.2373 12.4166 10.6129 11.7358 10.872 11.008H12.28C11.6242 11.8714 10.7599 12.5541 9.768 12.992L9.76 13.024Z" fill="#65655E"/>
            </svg>
        },
        {
            title: 'Share',
            link: '///',
            icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 10.72C11.4933 10.72 11.04 10.92 10.6933 11.2334L5.94 8.46671C5.97333 8.31337 6 8.16004 6 8.00004C6 7.84004 5.97333 7.68671 5.94 7.53337L10.64 4.79337C11 5.12671 11.4733 5.33337 12 5.33337C13.1067 5.33337 14 4.44004 14 3.33337C14 2.22671 13.1067 1.33337 12 1.33337C10.8933 1.33337 10 2.22671 10 3.33337C10 3.49337 10.0267 3.64671 10.06 3.80004L5.36 6.54004C5 6.20671 4.52667 6.00004 4 6.00004C2.89333 6.00004 2 6.89337 2 8.00004C2 9.10671 2.89333 10 4 10C4.52667 10 5 9.79337 5.36 9.46004L10.1067 12.2334C10.0733 12.3734 10.0533 12.52 10.0533 12.6667C10.0533 13.74 10.9267 14.6134 12 14.6134C13.0733 14.6134 13.9467 13.74 13.9467 12.6667C13.9467 11.5934 13.0733 10.72 12 10.72Z" fill="#65655E"/>
            </svg>
            
        }
]
console.log(selectedEventType);

    return (
        <TransitionParent>
            <section className="bg-white flex flex-col items-stretch mb-[300px]">
            <div className="w-full mt-9 px-14 max-md:max-w-full max-md:px-5">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[66%] max-md:w-full max-md:ml-0">
                        <div className="items-start flex grow flex-col  max-md:max-w-full max-md:mt-8">
                            <div className="flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0">
                                <span className="relative bg-white flex grow flex-col w-full pb-7 rounded-2xl border border-stone-800 border-solid border-opacity-10 max-md:max-w-full max-md:mt-5">
                                    <Image src={orgProfile2} layout='responsive' alt='bg' width={1000} height={1000} className='absolute inset-0' />
                                    <div className='z-10 flex justify-end pt-10 px-8'>
                                        <svg onClick={handleSHowMenu} className=' cursor-pointer' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.334 16C13.334 16.7073 13.6149 17.3855 14.115 17.8856C14.6151 18.3857 15.2934 18.6667 16.0007 18.6667C16.7079 18.6667 17.3862 18.3857 17.8863 17.8856C18.3864 17.3855 18.6673 16.7073 18.6673 16C18.6673 15.2928 18.3864 14.6145 17.8863 14.1144C17.3862 13.6143 16.7079 13.3333 16.0007 13.3333C15.2934 13.3333 14.6151 13.6143 14.115 14.1144C13.6149 14.6145 13.334 15.2928 13.334 16ZM13.334 8.00001C13.334 8.70725 13.6149 9.38553 14.115 9.88563C14.6151 10.3857 15.2934 10.6667 16.0007 10.6667C16.7079 10.6667 17.3862 10.3857 17.8863 9.88563C18.3864 9.38553 18.6673 8.70725 18.6673 8.00001C18.6673 7.29277 18.3864 6.61449 17.8863 6.11439C17.3862 5.61429 16.7079 5.33334 16.0007 5.33334C15.2934 5.33334 14.6151 5.61429 14.115 6.11439C13.6149 6.61449 13.334 7.29277 13.334 8.00001ZM13.334 24C13.334 24.7073 13.6149 25.3855 14.115 25.8856C14.6151 26.3857 15.2934 26.6667 16.0007 26.6667C16.7079 26.6667 17.3862 26.3857 17.8863 25.8856C18.3864 25.3855 18.6673 24.7073 18.6673 24C18.6673 23.2928 18.3864 22.6145 17.8863 22.1144C17.3862 21.6143 16.7079 21.3333 16.0007 21.3333C15.2934 21.3333 14.6151 21.6143 14.115 22.1144C13.6149 22.6145 13.334 23.2928 13.334 24Z" fill="white" />
                                        </svg>
                                        <Menu menuItems={ownerMenu} showMenu={showMenu} />
                                    </div>
                                    <span className="w-full h-[20rem] self-stretch flex flex-col pt-9 px-2  items-end max-md:max-w-full">

                                        <div className="self-stretch z-[1]  max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
                                            <div className="gap-5 flex mt-[30px] max-md:flex-col max-md:items-stretch max-md:gap-0">
                                                <div className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
                                                    <div className="bg-white flex flex-col justify-center items-center aspect-square w-full rounded-[105px] max-md:mt-7">
                                                        <div className="flex-col shadow-sm overflow-hidden relative flex aspect-square w-[212px] justify-center items-center px-16 py-12 rounded-[50%] max-md:px-5">
                                                            <Image
                                                                loading="lazy"
                                                                alt='Profile_picture'
                                                                src={womenInTechProfile}
                                                                className="absolute h-full w-full object-cover object-center inset-0 hover:-z-10"
                                                            />
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/19d801c02f8092496b1acf27f38e7cfe019c05eff9870b0e957c1b7ca6ad1566?"
                                                                className="w-10 h-10 object-contain object-center justify-center items-center overflow-hidden max-w-full my-8"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-stretch w-[72%] ml-5 max-md:w-full max-md:ml-0 text-white-100">
                                                    <div className="text-white lg:text-3xl font-sora font-bold tracking-wide my-auto max-md:max-w-full max-md:mt-10">
                                                    Women in Tech
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                    <div className=" bg-white self-stretch flex flex-col py-10 -mt-[90px] items-end max-md:max-w-full">
                                        <div className="items-start flex justify-between gap-5 mr-16 max-md:justify-center max-md:mr-2.5">
                                            <div className="text-black font-quickSand text-opacity-60 text-center text-base tracking-normal self-center my-auto">
                                                Follow us:
                                            </div>
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/abce849794dda183fd45fa5521042c17bc79420d3659f4eb5e28dc5eda375573?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c96d60d7fa6857b2f5a19eed2c499199a72e0c354b908409249d5aedff7bc773?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b8ba7a75a4769ac3c7bd1c9fa32e3c4284005ef2934d6ae315caff2253fa819?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                className="aspect-square object-contain object-center w-6 fill-sky-600 overflow-hidden self-stretch shrink-0 max-w-full"
                                            />
                                        </div>
                                        <div className="self-stretch flex flex-col mt-7 px-12 items-start max-md:max-w-full max-md:px-5">
                                            <div className="text-primary font-sora text-2xl tracking-wide whitespace-nowrap">
                                                About
                                                <div className="w-[4rem] h-1 rounded bg-btnWarning mt-1" />
                                            </div>
                                            <div className="text-black font-quickSand text-opacity-80 text-base tracking-normal self-stretch mt-5 max-md:max-w-full">
                                                Women in Tech is the world’s leading organization for
                                                Inclusion, Diversity & Equity in STEAM. Our community counts
                                                over 200.000 members across the world with chapters in all 6
                                                continents. With our Head Office in Paris, we are a Global
                                                Movement with chapters in 6 continents, counting over
                                                200.000 members.
                                                <br />
                                                <br />
                                                Our community is represented by persons of all abilities –
                                                regardless of gender, race, ethnicity, class, age or sexual
                                                orientation.
                                            </div>
                                            <div className="font-quickSand self-stretch flex w-[80%] items-stretch justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                                                <div className="flex  justify-between gap-5  max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                                                    <div className="items-center flex grow basis-[0%] flex-col">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe855fcb572283e4eadd53dce8006539c57e6a12eafb2e323cc4a06312ab4e10?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                                                        />
                                                        <div className="text-black text-opacity-60 text-center text-sm tracking-normal self-stretch mt-4">
                                                            Road 17, 1st avenue gwarinpa, <br />
                                                            FCT, Abuja.
                                                        </div>
                                                    </div>
                                                    <div className="bg-neutral-200 self-center w-px shrink-0 h-[31px] my-auto" />
                                                    {/*  */}
                                                </div>

                                                <div className="flex items-center justify-between gap-5 pr-6 self-start max-md:pr-5">
                                                    <div className="items-center self-stretch flex flex-col">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c5797671bbfcf56da0e2d3a278b42ea250363c208432483a2e75edf7f0edb96?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                                                        />
                                                        <div className="text-black text-opacity-60 text-sm tracking-normal self-stretch whitespace-nowrap mt-4">
                                                            contact@womenintech.org
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-between gap-5 pr-6 self-start max-md:pr-5">
                                                    <div className="bg-neutral-200 w-px shrink-0 h-[31px] my-auto" />
                                                    <div className="items-center self-stretch flex flex-col">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c626735b6b0c9477b5b357937dd2772719655ba3defd6ec7dbae27affe114e1?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden max-w-full"
                                                        />
                                                        <div className="text-black text-opacity-60 text-sm tracking-normal self-stretch whitespace-nowrap mt-4">
                                                            +234 90 732 732
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>


                            <div className="items-stretch flex gap-2.5 mt-10 self-start font-sora">
                                {/* <button className="text-white-100 text-2xl tracking-wide whitespace-nowrap items-stretch bg-[#65B891] grow justify-center px-8 py-4 rounded-tl-lg rounded-tr-lg max-md:px-5">
                                    Images
                                </button>
                                <button className="text-green-400 text-2xl tracking-wide whitespace-nowrap items-stretch border border-[color:var(--sc2,#65B891)] bg-white grow justify-center px-8 py-4 rounded-tl-lg rounded-tr-lg border-solid max-md:px-5">
                                    Events
                                </button> */}
                               
                                {
                                    tabs.map(tab=> (
                                        <Tab
                                        key={tab.name}
                                        name={tab.name}
                                        selectedEventType={selectedEventType === tab}
                                        setSelectedEventType={()=>setSelectedEventType(tab)}
                                         />
                                    ))
                                }
                            </div>

                          
                            <div className="font-sora self-stretch border border-gray-400 rounded-tl-0 rounded-tr-lg rounded-bl-lg rounded-br-lg  bg-white flex flex-col p-8 border-solid items-start max-md:max-w-full max-md:px-5">
                               {selectedEventType.name === 'Images' && (
                               <>
                               <div className="text-primary text-2xl whitespace-nowrap">
                                    Latest images
                                    <div className="w-[4rem] h-1 rounded bg-btnWarning mt-1" />
                                </div>
                                <div className="items-stretch self-stretch overflow-x-auto flex justify-between gap-5 mt-12 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d6abe2b776471e75924a638c6db41732563874cb3a0ae5267e3110922a0f0?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-[1.2] object-contain object-center w-full items-center overflow-hidden grow basis-[0%]"
                                    />
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/dd1650329bae83b903deedd6cfc5c684220ecaac3bad32afefcd28e612d3cca8?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-[1.2] object-contain object-center w-full items-center overflow-hidden grow basis-[0%]"
                                    />
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/299f38c4a2c7458ee4ceffe0a283eb7d4da4fd71346b34275ecf3f050f1197a4?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-[1.2] object-contain object-center w-full items-center overflow-hidden z-[1] grow basis-[0%]"
                                    />
                                </div>
                               </>)}

                                {selectedEventType.name === 'Events' && 
                                   <>
                                    <div className="text-primary text-2xl whitespace-nowrap">
                                        All Events
                                        <div className="w-[4rem] h-1 rounded bg-btnWarning mt-1" />
                                    </div>
                                    <div className="items-stretch flex gap-5 mt-12 pl-4 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                                        <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6ce70dccaa6121eea546f28a5514d384ba8cf6cb3d8fb9c7df7bb22acd7c1ef1?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ce70dccaa6121eea546f28a5514d384ba8cf6cb3d8fb9c7df7bb22acd7c1ef1?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ce70dccaa6121eea546f28a5514d384ba8cf6cb3d8fb9c7df7bb22acd7c1ef1?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ce70dccaa6121eea546f28a5514d384ba8cf6cb3d8fb9c7df7bb22acd7c1ef1?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ce70dccaa6121eea546f28a5514d384ba8cf6cb3d8fb9c7df7bb22acd7c1ef1?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ce70dccaa6121eea546f28a5514d384ba8cf6cb3d8fb9c7df7bb22acd7c1ef1?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ce70dccaa6121eea546f28a5514d384ba8cf6cb3d8fb9c7df7bb22acd7c1ef1?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ce70dccaa6121eea546f28a5514d384ba8cf6cb3d8fb9c7df7bb22acd7c1ef1?apiKey=6f715470170a4d3ead43ea6ac10b358c&"
                                        className="aspect-[1.01] object-contain object-center w-[79px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                                        />
                                        <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                                        <div className="text-black text-opacity-40 text-base">
                                            <span className="font-bold text-black font-sora">
                                            Startup Investors Forum 2022
                                            </span>
                                            <br />
                                            <span className=" text-sm text-black font-quickSand">
                                            Wed, Dec 14 - Fri, Dec 16
                                            </span>
                                        </div>
                                        <div className="items-center flex gap-5 mt-2.5">
                                            <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d3a9afc1fc98cf64805dafe4f8527c80e981a6e4c7067e35396a0ed25ea4541?apiKey=6f715470170a4d3ead43ea6ac10b358c&"
                                            className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <div className="text-orange-500 text-sm my-auto font-quickSand">
                                            online By drpc{" "}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="justify-center items-stretch flex gap-5 mt-2.5 pl-4 pr-16 max-md:pr-5">
                                        <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&"
                                        className="aspect-[1.01] object-contain object-center w-[79px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                                        />
                                        <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                                        <div className="text-black text-opacity-40 text-base">
                                            <span className="font-bold text-black font-sora">
                                            Women agenda in Politics
                                            </span>
                                            <br />
                                            <span className=" text-sm text-black font-quickSand">
                                            Tue, Jan 17 - Thurs, Dec 19
                                            </span>
                                        </div>
                                        <div className="items-center flex gap-5 mt-2.5">
                                            <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d3a9afc1fc98cf64805dafe4f8527c80e981a6e4c7067e35396a0ed25ea4541?apiKey=6f715470170a4d3ead43ea6ac10b358c&"
                                            className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <div className="text-orange-500 text-sm my-auto font-quickSand">
                                            online By drpc{" "}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="justify-center items-stretch flex gap-5 mt-2.5 pl-4">
                                        <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c3d6033dffb84c88e6e9fd1efed459c1ce6b35ea8e3e50253e7613bbe0a73f4d?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d6033dffb84c88e6e9fd1efed459c1ce6b35ea8e3e50253e7613bbe0a73f4d?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d6033dffb84c88e6e9fd1efed459c1ce6b35ea8e3e50253e7613bbe0a73f4d?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d6033dffb84c88e6e9fd1efed459c1ce6b35ea8e3e50253e7613bbe0a73f4d?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d6033dffb84c88e6e9fd1efed459c1ce6b35ea8e3e50253e7613bbe0a73f4d?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d6033dffb84c88e6e9fd1efed459c1ce6b35ea8e3e50253e7613bbe0a73f4d?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d6033dffb84c88e6e9fd1efed459c1ce6b35ea8e3e50253e7613bbe0a73f4d?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d6033dffb84c88e6e9fd1efed459c1ce6b35ea8e3e50253e7613bbe0a73f4d?apiKey=6f715470170a4d3ead43ea6ac10b358c&"
                                        className="aspect-[1.01] object-contain object-center w-[79px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                                        />
                                        <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                                        <div className="text-black text-opacity-40 text-base">
                                            <span className="font-bold text-black font-sora">
                                            Gender Equality in ICT Sector 2023
                                            </span>
                                            <br />
                                            <span className=" text-sm text-black font-quickSand">
                                            Tue, Jan 17 - Thurs, Dec 19
                                            </span>
                                        </div>
                                        <div className="items-center flex gap-5 mt-2.5">
                                            <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d3a9afc1fc98cf64805dafe4f8527c80e981a6e4c7067e35396a0ed25ea4541?apiKey=6f715470170a4d3ead43ea6ac10b358c&"
                                            className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <div className="text-orange-500 text-sm my-auto font-quickSand">
                                            online By drpc{" "}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="justify-center items-stretch flex gap-5 mt-2.5 pl-4 pr-16 max-md:pr-5">
                                        <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/33b3e4354d9c65708441223b64d8677a8f3fab5a913a913c50128a7705ca14d6?apiKey=6f715470170a4d3ead43ea6ac10b358c&"
                                        className="aspect-[1.01] object-contain object-center w-[79px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                                        />
                                        <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                                        <div className="text-black text-opacity-40 text-base">
                                            <span className="font-bold text-black font-sora">
                                            Women agenda in Politics
                                            </span>
                                            <br />
                                            <span className=" text-sm text-black font-quickSand">
                                            Tue, Jan 17 - Thurs, Dec 19
                                            </span>
                                        </div>
                                        <div className="items-center flex gap-5 mt-2.5">
                                            <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d3a9afc1fc98cf64805dafe4f8527c80e981a6e4c7067e35396a0ed25ea4541?apiKey=6f715470170a4d3ead43ea6ac10b358c&"
                                            className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                                            />
                                            <div className="text-orange-500 text-sm my-auto font-quickSand">
                                            online By drpc{" "}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                   </>
                                }
                                
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-stretch border bg-white flex flex-col w-full px-5 py-8 rounded-2xl border-gray-500  max-md:max-w-full max-md:mt-8">
                            <div className="font-sora text-primary text-2xl tracking-wide">
                                Upcoming Events
                                <div className="w-[4rem] h-1 rounded bg-btnWarning mt-1" />
                            </div>
                            <div className="items-center flex justify-between gap-5 mt-7 pl-3 pr-8 py-2 max-md:pr-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-black text-opacity-80 text-base">
                                        <span className="text-black text-opacity-90 font-sora font-semibold">
                                            Internet and safety with girls in ICT
                                        </span>
                                        <span className="text-black text-opacity-80"> </span>
                                    </div>
                                    <div className="text-black text-opacity-40 text-sm whitespace-nowrap font-quickSand mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-medium whitespace-nowrap font-quickSand mt-1">
                                        WED 23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="items-center flex justify-between gap-5 mt-4 pl-3 pr-8 py-2 max-md:pr-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-black text-opacity-80 text-base">
                                        <span className="text-black text-opacity-90 font-sora font-semibold">
                                            Internet and safety with girls in ICT
                                        </span>
                                        <span className="text-black text-opacity-80"> </span>
                                    </div>
                                    <div className="text-black text-opacity-40 text-sm whitespace-nowrap font-quickSand mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-medium whitespace-nowrap font-quickSand mt-1">
                                        WED 23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="items-center flex justify-between gap-5 mt-4 pl-3 pr-8 py-2 max-md:pr-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-black text-opacity-80 text-base">
                                        <span className="text-black text-opacity-90 font-sora font-semibold">
                                            Internet and safety with girls in ICT
                                        </span>
                                        <span className="text-black text-opacity-80"> </span>
                                    </div>
                                    <div className="text-black text-opacity-40 text-sm whitespace-nowrap font-quickSand mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-bold whitespace-nowrap font-quickSand mt-1">
                                        WED 23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="items-center flex justify-between gap-5 mt-4 pl-3 pr-8 py-2 max-md:pr-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-black text-opacity-80 text-base">
                                        <span className="text-black text-opacity-90 font-sora font-semibold">
                                            Internet and safety with girls in ICT
                                        </span>
                                        <span className="text-black text-opacity-80"> </span>
                                    </div>
                                    <div className="text-black text-opacity-40 text-sm whitespace-nowrap font-quickSand mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-medium whitespace-nowrap font-quickSand mt-1">
                                        WED 23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="items-center flex justify-between gap-5 mt-4 pl-3 pr-8 py-2 max-md:pr-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-black text-opacity-80 text-base">
                                        <span className="text-black text-opacity-90 font-sora font-semibold">
                                            Internet and safety with girls in ICT
                                        </span>
                                        <span className="text-black text-opacity-80"> </span>
                                    </div>
                                    <div className="text-black text-opacity-40 text-sm whitespace-nowrap font-quickSand mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-medium whitespace-nowrap font-quickSand mt-1">
                                        WED 23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="items-center flex justify-between gap-5 mt-4 pl-3 pr-8 py-2 max-md:pr-5">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/91652ae4e51ac79c84d903b145cd7c633d25b489c366606fa246cbf482d19b0b?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-black text-opacity-80 text-base">
                                        <span className="text-black text-opacity-90 font-sora font-semibold">
                                            Internet and safety with girls in ICT
                                        </span>
                                        <span className="text-black text-opacity-80"> </span>
                                    </div>
                                    <div className="text-black text-opacity-40 text-sm whitespace-nowrap font-quickSand mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-medium whitespace-nowrap font-quickSand mt-1">
                                        WED 23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="items-center border-[color:var(--txt-h1,#65B891)] bg-white flex flex-col mt-10 px-10 py-6 rounded-2xl border-2 border-solid max-md:px-5">
                                <div className="text-primary text-2xl whitespace-nowrap">
                                    -IMPORTANT-
                                </div>
                                <div className="text-sm font-sora self-stretch mt-6">
                                    <span className="text-black text-opacity-60">
                                        Volunteers needed for upcoming inform the street 2022 agenda{" "}
                                    </span>
                                    <Link
                                        href="https://women-in-tech.org/"
                                        className="text-orange-500 underline"
                                        target="_blank"
                                    >
                                        Join us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </TransitionParent>
    )
}
