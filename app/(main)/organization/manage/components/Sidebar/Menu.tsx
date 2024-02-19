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
    <Link href={link} className={`text-black flex items-center gap-5 text-opacity-70 text-base font-medium tracking-normal whitespace-nowrap cursor-pointer hover:bg-slate-200 ${isLinkActive ? 'bg-slate-200' : ''} w-full px-5 py-2 rounded-md transition-all duration-300 ease-in-out transform-gpu`}>
        <span>{icon}</span>
        <span>{title}</span>
    </Link>
  )
}
