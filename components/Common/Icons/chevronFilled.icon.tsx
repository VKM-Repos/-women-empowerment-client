import React from 'react'

type Props = {
    className?: string
}

export const ChevronFilledIcon = (props: Props) => {
  return (
        <svg {...props} width="15" height="8" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 8.5L0.5 0.5H16.5L8.5 8.5Z" fill="currentColor"/>
        </svg>
  )
}