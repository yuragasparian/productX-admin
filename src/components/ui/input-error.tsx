import React, { HTMLAttributes, ReactNode } from 'react'

type Props = {
    children:any
}

const ImputError = ({children}: Props) => {
  return (
    <span className='text-red p7 -mt-1 text-left ml-6'>
        {children}
    </span>
  )
}

export default ImputError