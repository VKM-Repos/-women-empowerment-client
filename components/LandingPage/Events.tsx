import React from 'react'
interface EventProps {
    events: any[],
    organizations: any[]
}
export const Events: React.FC<EventProps> = ({ events = [], organizations = [] }) => {

    return (
        <>
            <div
                className="text-orange-500 text-3xl font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid">
                EVENTS
            </div>
            {events.map(event => (
                <div key={event.id} className="justify-between items-center self-stretch flex gap-5 mt-11 px-4 py-3 max-md:mt-10">
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
            ))}
            <div
                className="text-orange-500 text-base justify-center items-stretch border self-center w-[207px] max-w-full mt-6 p-5 rounded-lg border-solid border-orange-500">
                SEE MORE EVENTS
            </div>
        </>
    )
}
