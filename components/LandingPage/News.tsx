import React from 'react'
interface NewsProps {
    news: any[]
}
export const News: React.FC<NewsProps> = ({ news = [] }) => {
    return (
        <>
            <div
                className="text-orange-500 text-3xl font-bold items-stretch self-stretch justify-center mt-11 px-5 py-2.5 border-b-neutral-200 border-b border-solid max-md:mt-10">
                NEWS CENTER
            </div>
            {
                news.map(item => (
                    <div key={item.id} className="items-stretch self-stretch flex flex-col px-5 py-2.5">
                        <div className="flex justify-between gap-4 items-start">
                            <div className="text-emerald-950 text-xl underline grow shrink basis-auto">
                                {item.heading}
                            </div>
                            <img loading="lazy"
                                srcSet={item.image}
                                className="aspect-square object-contain object-center w-[65px] overflow-hidden self-stretch shrink-0 max-w-full" />
                        </div>
                        <div className="text-zinc-600 text-xs mt-3">{item.length}</div>
                    </div>
                ))
            }
            <button
                className="text-orange-500 text-base justify-center items-stretch border shadow-sm self-center  max-w-full mt-10 p-5 rounded-lg border-solid border-orange-500 max-md:mt-10">
                MORE FROM NEWS CENTER
            </button>
        </>
    )
}
