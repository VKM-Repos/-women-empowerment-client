import React from 'react'

type Props = {
    className?: string
}

export const BtnIncrease = (props: Props) => {
  return (
        <svg {...props} width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0975 8H0.902501C0.566719 8 0.379227 7.62536 0.587173 7.3696L6.18467 0.510879C6.34489 0.314555 6.6534 0.314555 6.81533 0.510879L12.4128 7.3696C12.6208 7.62536 12.4333 8 12.0975 8Z" fill="white"/>
        </svg>
  )
}

