import React from 'react'
interface EventProps {
    event: {
        image: string;
        title: string;
        date: string;
    }
}
export const Events: React.FC<EventProps> = ({ event = {} }) => {

    return (
        <div className="justify-between items-center self-stretch flex gap-3 px-4 py-1 ">
            <img loading="lazy"
                srcSet={event.image}
                className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]" />
            <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                <div className="text-emerald-950 text-base">
                    {event.title}
                </div>
                <div className="text-neutral-400 text-sm font-semibold mt-1">
                    Women in Tech
                </div>
                <div className="text-sky-800 text-xs font-semibold mt-1">
                    {event.date}
                </div>
            </div>
        </div>
    )
}
