import React from 'react'
import { OrganizationCard } from './OrganizationCard';
interface OrganizationProps {
    organizations: any[]
}
export const Organization: React.FC<OrganizationProps> = ({ organizations = [] }) => {

    return (
        <div className="flex flex-col items-stretch w-[68%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-5">
                <div
                    className="text-orange-500 text-3xl font-bold items-stretch justify-center px-5 py-2.5 border-b-neutral-200 border-b border-solid max-md:max-w-full">
                    TOP ORGANIZATIONS
                </div>
                <div className="items-center flex flex-col gap-5 mt-9 px-6 max-md:max-w-full max-md:px-5">
                    {
                        organizations?.map(org => (
                            <OrganizationCard organization={org} key={org.id} />
                        ))
                    }
                    <button
                        className="text-orange-500 text-base justify-center items-stretch border self-center w-[255px] max-w-full mt-8 p-5 rounded-lg border-solid border-orange-500 mb-10">
                        SEE ALL ORGANIZATIONS
                    </button>
                </div>
            </div>
        </div>
    )
}
