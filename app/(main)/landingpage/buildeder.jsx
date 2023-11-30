import * as React from "react";

function MyComponent(props) {
    return (
        <div className="bg-white flex flex-col">
            <div className="justify-between items-stretch bg-white self-stretch z-[1] flex w-full gap-5 px-20 py-3 border-b-neutral-200 border-b border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5bdb0131-f9f0-475e-a86f-231255faaa1c?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bdb0131-f9f0-475e-a86f-231255faaa1c?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bdb0131-f9f0-475e-a86f-231255faaa1c?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bdb0131-f9f0-475e-a86f-231255faaa1c?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bdb0131-f9f0-475e-a86f-231255faaa1c?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bdb0131-f9f0-475e-a86f-231255faaa1c?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bdb0131-f9f0-475e-a86f-231255faaa1c?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5bdb0131-f9f0-475e-a86f-231255faaa1c?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="items-stretch self-center flex gap-2.5 my-auto max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                    <div className="text-black text-opacity-80 text-base aspect-[1.75] justify-center px-3 py-3.5 rounded-sm items-start">
                        About
                    </div>
                    <div className="text-black text-opacity-80 text-base grow justify-center px-3 py-3.5 items-start">
                        Category
                    </div>
                    <div className="text-black text-opacity-80 text-base aspect-[1.85] justify-center px-3 py-3.5 items-start">
                        Events
                    </div>
                    <div className="items-stretch flex grow basis-[0%] flex-col justify-center">
                        <div className="items-stretch flex justify-between gap-1 pt-2.5 pb-1 px-3.5">
                            <div className="text-black text-opacity-80 text-base grow justify-center items-stretch py-1.5">
                                Community
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbbef76e-46b2-4fad-8867-9cd6accf2d37?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full self-start"
                            />
                        </div>
                    </div>
                </div>
                <div className="items-center self-center flex justify-between gap-5 my-auto pl-2.5 py-0.5">
                    <div className="items-stretch flex gap-4 my-auto">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3522ac54-73ca-476d-b574-0a3cf49bcc3d?apiKey=12cdcbacd64a44978db653c66e993585&"
                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        />
                        <div className="text-black text-base mt-1 self-start">Log in</div>
                    </div>
                    <div className="text-white text-base justify-center items-center rounded bg-orange-500 self-stretch grow px-5 py-2.5">
                        Sign up{" "}
                    </div>
                </div>
            </div>
            <div className="self-stretch flex mt-0 w-full justify-between gap-0 pr-16 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="bg-orange-500 flex pb-0 flex-col pt-12 px-5 rounded-[50%] items-end">
                    <div className="bg-yellow-400 z-[1] flex shrink-0 h-32 flex-col rounded-[50%]" />
                </div>
                <div className="bg-green-800 mt-16 pt-1.5 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:pl-5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[48%] max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                                <div className="justify-between flex gap-3 py-0.5 items-start max-md:max-w-full max-md:flex-wrap">
                                    <div className="text-white text-5xl font-semibold grow shrink basis-auto mt-2 max-md:text-4xl">
                                        Together we are
                                    </div>
                                    <div className="text-emerald-400 text-5xl italic font-bold items-stretch self-stretch justify-center max-md:text-4xl">
                                        Able
                                    </div>
                                </div>
                                <div className="text-white text-base mt-6 max-md:max-w-full">
                                    Discover and learn about women organizations with only one
                                    click.
                                </div>
                                <div className="text-stone-500 text-base bg-white justify-center mt-6 px-5 py-5 rounded-lg items-start max-md:max-w-full max-md:pl-1.5">
                                    search for organization
                                </div>
                                <div className="items-start flex gap-5 mt-6 pr-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                                    <div className="text-white text-opacity-70 text-base font-bold self-center my-auto">
                                        Search for:
                                    </div>
                                    <div className="text-black text-sm justify-center items-stretch rounded bg-white bg-opacity-80 aspect-[1.6470588235294117] px-3.5 py-2 self-start">
                                        Tech
                                    </div>
                                    <div className="text-black text-sm justify-center items-stretch rounded bg-white bg-opacity-80 grow px-4 py-2 self-start">
                                        Gender Equity
                                    </div>
                                    <div className="text-black text-sm justify-center items-stretch rounded bg-white bg-opacity-80 self-stretch grow px-4 py-2.5">
                                        Sensitization
                                    </div>
                                    <div className="text-black text-sm justify-center items-stretch rounded bg-white bg-opacity-80 self-stretch grow px-4 py-2.5">
                                        Feminism
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[52%] ml-5 max-md:w-full max-md:ml-0">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb5c8323-d4d7-4838-a673-f3ffdd88eecd?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-[1.31] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-1.5"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="self-center w-full max-w-[1292px] mt-20 max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0">
                        <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-5">
                            <div className="text-orange-500 text-3xl font-bold items-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid max-md:max-w-full">
                                TOP ORGANIZATIONS
                            </div>
                            <div className="items-center flex flex-col mt-9 px-6 max-md:max-w-full max-md:px-5">
                                <div className="border bg-white self-stretch p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                                            <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                                                <div className="text-green-800 text-base font-bold max-md:max-w-full">
                                                    Women in Tech
                                                </div>
                                                <div className="text-black text-opacity-60 text-sm leading-5 mt-5 max-md:max-w-full">
                                                    Women in Technology in Nigeria(WITIN) is a Leading
                                                    Community of Women in Tech. A registered non-profit
                                                    organization and association, dedicated to the
                                                    advancement of women and girls.
                                                </div>
                                                <div className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                                                    <div className="items-stretch flex justify-between gap-3">
                                                        <div className="items-stretch flex justify-between gap-1.5">
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f67cfee-e3eb-4fdd-b652-1358acdb1a5e?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                            />
                                                            <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                                                3.5K
                                                            </div>
                                                        </div>
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3b8b990-cbfb-404d-b4ac-400f46957ca8?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                        />
                                                    </div>
                                                    <div className="items-stretch flex justify-between gap-1.5 px-px">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c0ac05a-4f93-460c-be92-4615a52fcea7?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                        />
                                                        <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                                            visit website
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9fe7745d-156a-4294-acb9-0595384303ea?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                                            <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                                                <div className="text-green-800 text-base font-bold max-md:max-w-full">
                                                    National Council of Women Societies
                                                </div>
                                                <div className="text-black text-opacity-60 text-sm leading-5 mt-5 max-md:max-w-full">
                                                    National Council of Women's Societies (NCWS) is a
                                                    Nigerian non-governmental and non-partisan women's
                                                    organization composed of a network of independent
                                                    women organizations in Nigeria binding...
                                                </div>
                                                <div className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                                                    <div className="items-stretch flex justify-between gap-3">
                                                        <div className="items-stretch flex justify-between gap-1.5">
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ece6e04e-6c97-4a9d-84ff-7e18923e61cd?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                            />
                                                            <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                                                3.5K
                                                            </div>
                                                        </div>
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34fbb3dd-6f72-4ec1-8e4f-1062eab182cb?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                        />
                                                    </div>
                                                    <div className="items-stretch flex justify-between gap-1.5 px-px">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdc1e2b1-1297-4a83-8305-c6825c2a45c6?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                        />
                                                        <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                                            visit website
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/55302476-3554-490f-95cc-cbc3026442bb?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                                            <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                                                <div className="text-green-800 text-base font-bold max-md:max-w-full">
                                                    Women Trafficking and Child Labour Eradication
                                                    Foundation
                                                </div>
                                                <div className="text-black text-opacity-60 text-sm leading-5 mt-5 max-md:max-w-full">
                                                    Women Trafficking and Child Labor Eradication
                                                    Foundation is an anti-human trafficking organization
                                                    in Africa that attempts to stop human trafficking and
                                                    child labor in Nigeria. It is committed to building
                                                    an...
                                                </div>
                                                <div className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                                                    <div className="items-stretch flex justify-between gap-3">
                                                        <div className="items-stretch flex justify-between gap-1.5">
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/10e492cc-1ac2-403b-972f-e14ace50d1e6?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                            />
                                                            <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                                                3.5K
                                                            </div>
                                                        </div>
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75333a36-ecb6-4bc8-b26f-c37a3fa34ffa?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                        />
                                                    </div>
                                                    <div className="items-stretch flex justify-between gap-1.5 px-px">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/74ad52b6-1f93-45e5-9552-65471fb1b710?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                        />
                                                        <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                                            visit website
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/affd4066-710e-4aa9-b074-50f7efd60217?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                                            <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                                                <div className="text-green-800 text-base font-bold max-md:max-w-full">
                                                    United Nations Women
                                                </div>
                                                <div className="text-black text-opacity-60 text-sm leading-5 mt-5 max-md:max-w-full">
                                                    The United Nations Entity for Gender Equality and the
                                                    Empowerment of Women, also known as UN Women, is a
                                                    United Nations entity working for gender equality and
                                                    the empowerment of women.
                                                </div>
                                                <div className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                                                    <div className="items-stretch flex justify-between gap-3">
                                                        <div className="items-stretch flex justify-between gap-1.5">
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0382f940-172d-441d-8826-ad27fa8ba761?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                            />
                                                            <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                                                3.5K
                                                            </div>
                                                        </div>
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6bd6bc4-08ce-49ee-90e0-56fb70689886?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                        />
                                                    </div>
                                                    <div className="items-stretch flex justify-between gap-1.5 px-px">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f736da97-ff08-4bb2-8ced-889bb67f1af1?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                        />
                                                        <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                                            visit website
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f7d1c2d9-8e1f-4e8c-8cc5-61213db78829?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                                            <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                                                <div className="text-green-800 text-base font-bold max-md:max-w-full">
                                                    Girls Who Code
                                                </div>
                                                <div className="text-black text-opacity-60 text-sm leading-5 mt-5 max-md:max-w-full">
                                                    Girls Who Code is an international nonprofit
                                                    organization that aims to support and increase the
                                                    number of women in computer science. The organization
                                                    works toward closing the gender employment difference
                                                    in computing.
                                                </div>
                                                <div className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                                                    <div className="items-stretch flex justify-between gap-3">
                                                        <div className="items-stretch flex justify-between gap-1.5">
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f22d3751-0ba4-4ce9-9d7e-c908e8cb9404?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                            />
                                                            <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                                                3.5K
                                                            </div>
                                                        </div>
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/538a8742-bfa3-4a58-875f-11056d75c4ee?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                        />
                                                    </div>
                                                    <div className="items-stretch flex justify-between gap-1.5 px-px">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/10fbb4ee-ae0c-496b-b82c-d5ccc1bad02b?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                        />
                                                        <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                                            visit website
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d1c8c05-0e6f-478e-88c1-6c0970c00ffb?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="border bg-white self-stretch mt-4 p-8 rounded-3xl border-solid border-black border-opacity-10 max-md:max-w-full max-md:px-5">
                                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                        <div className="flex flex-col items-stretch w-[82%] max-md:w-full max-md:ml-0">
                                            <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                                                <div className="text-green-800 text-base font-bold max-md:max-w-full">
                                                    Girls Who Code
                                                </div>
                                                <div className="text-black text-opacity-60 text-sm leading-5 mt-5 max-md:max-w-full">
                                                    Girls Who Code is an international nonprofit
                                                    organization that aims to support and increase the
                                                    number of women in computer science. The organization
                                                    works toward closing the gender employment difference
                                                    in computing.
                                                </div>
                                                <div className="justify-between items-stretch border-t-neutral-200 border-b-neutral-200 flex w-full gap-5 mt-5 p-2.5 border-t border-solid border-b max-md:max-w-full max-md:flex-wrap">
                                                    <div className="items-stretch flex justify-between gap-3">
                                                        <div className="items-stretch flex justify-between gap-1.5">
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe4b2a94-20a8-4ef7-a2ef-40cd3edca270?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                            />
                                                            <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                                                3.5K
                                                            </div>
                                                        </div>
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/96de1a8d-a41a-4486-8937-09fc594588bc?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                        />
                                                    </div>
                                                    <div className="items-stretch flex justify-between gap-1.5 px-px">
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a49a627c-98e5-4043-bd66-a1bbee794865?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                                                        />
                                                        <div className="text-neutral-500 text-center text-sm self-center my-auto">
                                                            visit website
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-stretch w-[18%] ml-5 max-md:w-full max-md:ml-0">
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/973902e0-dec5-4b6c-9558-4dfc6a74ac0c?apiKey=12cdcbacd64a44978db653c66e993585&"
                                                className="aspect-square object-contain object-center w-[132px] justify-center items-center overflow-hidden shrink-0 max-w-full my-auto max-md:mt-10"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-orange-500 text-base justify-center items-stretch border self-center w-[249px] max-w-full mt-8 p-5 rounded-lg border-solid border-orange-500">
                                    SEE ALL ORGANIZATIONS
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="items-start flex flex-col max-md:mt-5">
                            <div className="text-orange-500 text-3xl font-bold items-stretch self-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid">
                                EVENTS
                            </div>
                            <div className="justify-between items-center self-stretch flex gap-5 mt-11 px-4 py-3 max-md:mt-10">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/87f3426c-ae17-4152-a06f-fe242dcdd68d?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-emerald-950 text-base">
                                        Internet and safety with girls in ICT{" "}
                                    </div>
                                    <div className="text-neutral-400 text-sm font-semibold mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-semibold mt-1">
                                        23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="justify-between items-center self-stretch flex gap-5 mt-5 px-4 py-3">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/49cd6d31-9202-4b30-9d4c-82fe3b723dbf?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-emerald-950 text-base">
                                        Internet and safety with girls in ICT{" "}
                                    </div>
                                    <div className="text-neutral-400 text-sm font-semibold mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-semibold mt-1">
                                        23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="justify-between items-center self-stretch flex gap-5 mt-5 px-4 py-3">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6ecdebb-628d-496d-920d-e0d7c73dd692?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-emerald-950 text-base">
                                        Internet and safety with girls in ICT{" "}
                                    </div>
                                    <div className="text-neutral-400 text-sm font-semibold mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-semibold mt-1">
                                        23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="justify-between items-center self-stretch flex gap-5 mt-5 px-4 py-3">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0c03cb3-ec5f-40ed-905e-da5d21a53f4e?apiKey=12cdcbacd64a44978db653c66e993585&"
                                    className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full my-auto rounded-[50%]"
                                />
                                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                                    <div className="text-emerald-950 text-base">
                                        Internet and safety with girls in ICT{" "}
                                    </div>
                                    <div className="text-neutral-400 text-sm font-semibold mt-1">
                                        Women in Tech
                                    </div>
                                    <div className="text-sky-800 text-xs font-semibold mt-1">
                                        23rd November 2022. 12:00 pm (online)
                                    </div>
                                </div>
                            </div>
                            <div className="text-orange-500 text-base justify-center items-stretch border self-center w-[207px] max-w-full mt-6 p-5 rounded-lg border-solid border-orange-500">
                                SEE MORE EVENTS
                            </div>
                            <div className="text-orange-500 text-3xl font-bold items-stretch self-stretch justify-center mt-11 px-5 py-2.5 border-b-neutral-200 border-b border-solid max-md:mt-10">
                                NEWS CENTER
                            </div>
                            <div className="items-stretch self-stretch flex flex-col px-5 py-2.5">
                                <div className="flex justify-between gap-4 items-start">
                                    <div className="text-emerald-950 text-xl underline grow shrink basis-auto">
                                        Important Safety Concerns For Women In Gyms
                                    </div>
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4310333e-3d8b-4e56-9d4c-a0201915f472?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-square object-contain object-center w-[65px] overflow-hidden self-stretch shrink-0 max-w-full"
                                    />
                                </div>
                                <div className="text-zinc-600 text-xs mt-3">5 mins read</div>
                                <div className="flex justify-between gap-4 mt-5 items-start">
                                    <div className="text-emerald-950 text-xl underline grow shrink basis-auto">
                                        Push forward: 10 ways to end violence against women
                                    </div>
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/92ed1a2a-13b3-4708-b7a8-1b6db8202033?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-square object-contain object-center w-[65px] overflow-hidden self-stretch shrink-0 max-w-full"
                                    />
                                </div>
                                <div className="text-zinc-600 text-xs mt-3">3 mins read</div>
                                <div className="items-stretch flex justify-between gap-4 mt-5">
                                    <div className="text-emerald-950 text-xl underline grow shrink basis-auto">
                                        Fun Fact: Women-Founded Startups Generate More Money Than
                                        Male-Founded Startups
                                    </div>
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/acfefcb2-7e50-4b3b-88e0-f7a2524ecfc3?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-square object-contain object-center w-[65px] overflow-hidden shrink-0 max-w-full self-start"
                                    />
                                </div>
                                <div className="text-zinc-600 text-xs mt-3">2 mins read</div>
                                <div className="items-stretch flex justify-between gap-4 mt-5">
                                    <div className="text-emerald-950 text-xl underline grow shrink basis-auto">
                                        Our Reproductive Rights Will Not Be Decided By A Single Vote
                                    </div>
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b64c1d31-bad7-4bec-af0c-93c5943f5c3e?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-square object-contain object-center w-[65px] overflow-hidden shrink-0 max-w-full self-start"
                                    />
                                </div>
                                <div className="text-zinc-600 text-xs mt-3">7 mins read</div>
                            </div>
                            <div className="text-orange-500 text-base justify-center items-stretch border shadow-sm self-center w-[251px] max-w-full mt-10 p-5 rounded-lg border-solid border-orange-500 max-md:mt-10">
                                MORE FROM NEWS CENTER
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-orange-100 self-stretch z-[1] flex w-full flex-col mt-20 pt-12 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
                <div className="text-green-800 text-5xl font-semibold max-w-[600px] self-center mt-9 max-md:max-w-full max-md:text-4xl">
                    Community Discussions
                </div>
                <div className="text-black text-opacity-90 text-center text-base leading-6 self-center max-w-[736px] mt-3 max-md:max-w-full">
                    A platform that seeks to help Women thrive in their own environment ,
                    <br /> a free space to share with people who can relate, a community
                    for all who want and ask for help.
                </div>
                <div className="shadow-sm self-stretch mt-11 max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
                            <div className="justify-center items-stretch bg-white flex grow flex-col w-full pt-6 pb-12 px-6 rounded-3xl max-md:mt-5 max-md:px-5">
                                <div className="justify-center items-stretch bg-slate-200 flex flex-col p-2.5">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/525b2f46-be25-4721-b43c-5cb642182b00?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-square object-contain object-center w-full overflow-hidden max-md:mr-0.5"
                                    />
                                </div>
                                <div className="text-green-800 text-2xl font-semibold leading-5 mt-5">
                                    Sensitization
                                </div>
                                <div className="text-zinc-600 text-sm leading-7 tracking-tight mt-2.5 mb-4">
                                    Women in power speaks louder that riots for our rights
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                            <div className="justify-center items-stretch bg-white flex grow flex-col w-full pt-6 pb-11 px-6 rounded-3xl max-md:mt-5 max-md:px-5">
                                <div className="justify-center items-stretch bg-slate-200 flex flex-col px-2.5 py-2.5">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/afedf1c5-8a5d-487a-8a46-f5cde8be68a5?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-[1.01] object-contain object-center w-full overflow-hidden max-md:mr-0.5"
                                    />
                                </div>
                                <div className="text-green-800 text-2xl font-semibold leading-5 mt-5">
                                    Health
                                </div>
                                <div className="text-zinc-600 text-sm leading-7 tracking-tight mt-2.5">
                                    Tips women will surely need to maintain the upper hand in
                                    discussions.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                            <div className="justify-center items-stretch bg-white flex grow flex-col w-full pt-6 pb-11 px-6 rounded-3xl max-md:mt-5 max-md:px-5">
                                <div className="justify-center items-stretch bg-slate-200 flex flex-col px-2.5 py-2.5">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fdbae476-32ff-4e3d-8589-a1630a88b08e?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-[1.01] object-contain object-center w-full overflow-hidden max-md:mr-0.5"
                                    />
                                </div>
                                <div className="text-green-800 text-2xl font-semibold leading-5 mt-5">
                                    Girl Power
                                </div>
                                <div className="text-zinc-600 text-sm leading-7 tracking-tight mt-2.5">
                                    Creating a safe environment for ladies to share their pain and
                                    not feel condemned
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
                            <div className="justify-center items-stretch bg-white flex grow flex-col w-full pt-6 pb-11 px-6 rounded-3xl max-md:mt-5 max-md:px-5">
                                <div className="justify-center items-stretch bg-slate-200 flex flex-col px-2.5 py-2.5">
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e5961b25-f66c-4c2e-9680-e706dc3ea692?apiKey=12cdcbacd64a44978db653c66e993585&"
                                        className="aspect-[1.01] object-contain object-center w-full overflow-hidden max-md:mr-0.5"
                                    />
                                </div>
                                <div className="text-green-800 text-2xl font-semibold leading-5 mt-5">
                                    Growth
                                </div>
                                <div className="text-zinc-600 text-sm leading-7 tracking-tight mt-2.5">
                                    Empowering women is all about helping women grow in their
                                    field and become better humans
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-white text-base font-medium justify-center items-center bg-green-800 self-center w-44 max-w-full mt-11 px-5 py-4 rounded-xl max-md:mt-10">
                    Join Discussion
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e70e95b5-f3ea-4e2b-8291-36e328487451?apiKey=12cdcbacd64a44978db653c66e993585&"
                    className="aspect-[0.98] object-contain object-center w-[82px] fill-green-800 opacity-[0.17] overflow-hidden max-w-full ml-12 mt-11 self-start max-md:ml-2.5 max-md:mt-10"
                />
            </div>
            <div className="justify-center items-center bg-purple-50 self-stretch flex mt-0 w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
                <div className="text-green-800 text-5xl font-semibold max-w-[379px] self-center mt-16 max-md:text-4xl max-md:mt-10">
                    How this works
                </div>
                <div className="text-black text-opacity-90 text-center text-base leading-6 self-center max-w-[736px] mt-3 max-md:max-w-full">
                    This platform serves as a comprehensive resource, bringing together
                    all the organizations dedicated to supporting women in Nigeria.
                </div>
                <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                            <div className="justify-between self-stretch bg-pink-300 grow w-full px-10 py-11 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                                        <div className="justify-center items-stretch self-stretch flex flex-col my-auto max-md:mt-10">
                                            <div className="text-neutral-950 text-2xl font-semibold">
                                                Add organization
                                            </div>
                                            <div className="text-black text-opacity-90 text-sm mt-4">
                                                You have an organization towards empowering women? join
                                                the platform
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0dec30b-9670-4956-8f75-9f6a66e82975?apiKey=12cdcbacd64a44978db653c66e993585&"
                                            className="aspect-[1.07] object-contain object-center w-full overflow-hidden max-md:mt-10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                            <div className="self-stretch bg-orange-200 grow w-full px-10 py-9 rounded-3xl max-md:max-w-full max-md:mt-10 max-md:px-5">
                                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                                    <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
                                        <div className="justify-center items-stretch self-stretch flex flex-col my-auto max-md:mt-10">
                                            <div className="text-neutral-950 text-2xl font-semibold">
                                                Share
                                            </div>
                                            <div className="text-black text-opacity-90 text-sm mt-4">
                                                Help others become aware of evnets discussions and women
                                                organiation .. share
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87880df5-931f-4c38-8e44-87c89d38f7d6?apiKey=12cdcbacd64a44978db653c66e993585&"
                                            className="aspect-square object-contain object-center w-full fill-indigo-50 overflow-hidden max-md:mt-10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-between self-center bg-green-200 w-[631px] max-w-full mt-10 mb-10 px-10 py-8 rounded-3xl max-md:mb-10 max-md:px-5">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[54%] max-md:w-full max-md:ml-0">
                            <div className="justify-center items-stretch self-stretch flex flex-col my-auto max-md:mt-10">
                                <div className="text-neutral-950 text-2xl font-semibold">
                                    Engage
                                </div>
                                <div className="text-black text-opacity-90 text-sm mt-4">
                                    Discuss your opinions, attend events all on this platforms
                                    community
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[46%] ml-5 max-md:w-full max-md:ml-0">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6ccb8180-b425-4312-b0b0-b20155b693cf?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-full overflow-hidden max-md:mt-8"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white self-stretch flex w-full flex-col pb-11 max-md:max-w-full">
                <div className="bg-purple-50 self-stretch flex min-h-[214px] w-full flex-col rounded-[50%] max-md:max-w-full" />
                <div className="self-center z-[1] flex mt-0 w-full max-w-[1204px] justify-between gap-5 items-end max-md:max-w-full max-md:flex-wrap">
                    <div className="flex grow basis-[0%] flex-col mt-48 items-start max-md:max-w-full max-md:mt-10">
                        <div className="flex justify-between gap-5 items-start max-md:justify-center">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0ad7552f-b731-41d7-ac55-8c092bc970b0?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ad7552f-b731-41d7-ac55-8c092bc970b0?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ad7552f-b731-41d7-ac55-8c092bc970b0?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ad7552f-b731-41d7-ac55-8c092bc970b0?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ad7552f-b731-41d7-ac55-8c092bc970b0?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ad7552f-b731-41d7-ac55-8c092bc970b0?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ad7552f-b731-41d7-ac55-8c092bc970b0?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0ad7552f-b731-41d7-ac55-8c092bc970b0?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-[54px] overflow-hidden self-stretch shrink-0 max-w-full"
                            />
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6f53fb5a-a1f1-46e5-8caf-576177d6c0f7?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f53fb5a-a1f1-46e5-8caf-576177d6c0f7?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f53fb5a-a1f1-46e5-8caf-576177d6c0f7?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f53fb5a-a1f1-46e5-8caf-576177d6c0f7?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f53fb5a-a1f1-46e5-8caf-576177d6c0f7?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f53fb5a-a1f1-46e5-8caf-576177d6c0f7?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f53fb5a-a1f1-46e5-8caf-576177d6c0f7?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6f53fb5a-a1f1-46e5-8caf-576177d6c0f7?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-[0.98] object-contain object-center w-[53px] overflow-hidden self-stretch shrink-0 max-w-full"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/11af9b5f-50e0-46c4-91d1-6c93e220f545?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-[0.69] object-contain object-center w-[35px] fill-[url(<path-to-image>),lightgray_50%_/_contain_no-repeat] overflow-hidden shrink-0 max-w-full"
                            />
                        </div>
                        <div className="text-green-800 text-4xl font-semibold self-stretch mt-5 max-md:max-w-full">
                            Be a part of our community
                        </div>
                        <div className="self-stretch text-emerald-950 text-sm mt-5 max-md:max-w-full">
                            Our Community Membership offers professional individuals and
                            corporations an opportunity to connect and support each other.
                        </div>
                        <div className="text-white text-center text-base font-medium justify-center items-center rounded bg-orange-500 w-[145px] max-w-full mt-7 px-5 py-3.5">
                            Get started
                        </div>
                    </div>
                    <div className="self-stretch flex grow basis-[0%] flex-col items-stretch">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a8351e75-1124-4466-9da0-4b62c8ffbbeb?apiKey=12cdcbacd64a44978db653c66e993585&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8351e75-1124-4466-9da0-4b62c8ffbbeb?apiKey=12cdcbacd64a44978db653c66e993585&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8351e75-1124-4466-9da0-4b62c8ffbbeb?apiKey=12cdcbacd64a44978db653c66e993585&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8351e75-1124-4466-9da0-4b62c8ffbbeb?apiKey=12cdcbacd64a44978db653c66e993585&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8351e75-1124-4466-9da0-4b62c8ffbbeb?apiKey=12cdcbacd64a44978db653c66e993585&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8351e75-1124-4466-9da0-4b62c8ffbbeb?apiKey=12cdcbacd64a44978db653c66e993585&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8351e75-1124-4466-9da0-4b62c8ffbbeb?apiKey=12cdcbacd64a44978db653c66e993585&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8351e75-1124-4466-9da0-4b62c8ffbbeb?apiKey=12cdcbacd64a44978db653c66e993585&"
                            className="aspect-square object-contain object-center w-full overflow-hidden"
                        />
                        <div className="text-black text-base max-w-[280px] mr-3.5 mt-24 self-end max-md:mr-2.5 max-md:mt-10">
                            share this page to create awarenttess{" "}
                        </div>
                        <div className="items-stretch self-center flex w-[152px] max-w-full gap-4 ml-3.5 mt-4 max-md:justify-center">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5209adf4-495e-4c3f-9bae-b1da60a0619c?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb3fc44-9ede-40e6-b10a-61a4e868416d?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                            />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddb5ec5f-a31a-4ccc-ae5a-c0b47bcbc50e?apiKey=12cdcbacd64a44978db653c66e993585&"
                                className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-black bg-opacity-10 self-stretch min-h-[1px] w-full mt-4 max-md:max-w-full" />
                <div className="text-emerald-950 text-sm max-w-[391px] ml-16 mt-7 self-start max-md:ml-2.5">
                    © Copyright 2022. Viable Helpers Development Organization
                </div>
            </div>
        </div>
    );
}


