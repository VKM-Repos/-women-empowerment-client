import React from 'react'

export type Props = Partial<{
    organization: { name: String, description: String, image: String }
}>
export const CommunityCard: React.FC<Props> = ({ organization = {} }) => {
    return (
        <div
            className="border bg-white self-stretch p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                    <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                        <div className="text-green-800 text-base font-bold max-md:max-w-full">
                            {organization.name}
                        </div>
                        <div className="text-black text-opacity-60 text-sm leading-5 mt-5 max-md:max-w-full">
                            {organization.description}
                        </div>
                        <div
                            className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                            <div className="items-stretch flex justify-between gap-3">
                                <div className="items-stretch flex justify-between gap-1.5">
                                    <img loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f67cfee-e3eb-4fdd-b652-1358acdb1a5e?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                                    <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                        3.5K
                                    </div>
                                </div>
                                <img loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3b8b990-cbfb-404d-b4ac-400f46957ca8?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                            </div>
                            <div className="items-stretch flex justify-between gap-1.5 px-px">
                                <img loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c0ac05a-4f93-460c-be92-4615a52fcea7?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full" />
                                <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                    visit website
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                    <img loading="lazy"
                        src={`${organization.image}`}
                        className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10" />
                </div>
            </div>
        </div>
    )
}
