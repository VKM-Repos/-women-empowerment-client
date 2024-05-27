import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type MenuProps = {
    link: string,
    title: string,
    icon: React.ReactNode
}
export const  Menu: React.FC<MenuProps> = ({link, title, icon}) =>{
    const pathname = usePathname()
   const isLinkActive = pathname.startsWith(link)
  return (
    <Link href={link} className={`text-gray-200 flex items-center gap-3 font-quickSand text-base font-semibold tracking-normal whitespace-nowrap cursor-pointer hover:bg-gray-200/5 ${isLinkActive ? 'bg-gray-200/20 text-gray-200' : ''} w-full p-4 rounded-[1rem] transition-all duration-300 ease-in-out transform-gpu`}>
        <span>{icon}</span>
        <span>{title}</span>
    </Link>
  )
}
