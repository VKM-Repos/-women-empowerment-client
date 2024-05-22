'use client'
import { Organization } from '@/lib/types/organization.types'
import React from 'react'
import CoverImage from './CoverImage'
import ProfileImage from './ProfileImage'
import ProfileInfo from './ProfileInfo'

type Props = {
    organization: Organization
}

const OrganizationProfile = ({organization}: Props) => {
  return (
    <section className='border rounded-[1rem] w-full overflow-hidden'>
        <CoverImage organization={organization} />
        <div className="relative z-30 -mt-[5rem] lg:-mt-[8rem]">
          <ProfileImage 
            withTitle={true}
            title={organization.name}
            logo={organization.logo}
            alt={organization.name}
            />
        </div>
        <ProfileInfo organization={organization} />
    </section>
  )
}

export default OrganizationProfile