import React from 'react'

interface NewsProps {
    item: {
        id: number;
        heading: string;
        image: string;
        length: string
    }
}
export default function NewsCard({ item }: NewsProps) {
    return (
        <div key={item.id} className="items-stretch self-stretch flex flex-col px-5 py-2.5">
            <div className="flex justify-between gap-4 items-start">
                <div className="font-sora font-normal text-emerald-950 text-[20px] underline grow shrink basis-auto">
                    {item.heading}
                </div>
                <img loading="lazy"
                    srcSet={item.image}
                    className="aspect-square object-contain object-center w-[65px] overflow-hidden self-stretch shrink-0 max-w-full" />
            </div>
            <div className="font-quickSand text-zinc-600 text-xs mt-3">{item.length}</div>
        </div>
    )
}
