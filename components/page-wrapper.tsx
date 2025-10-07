import React from 'react'

type Props = {
  children: React.ReactNode
}

const PageWrapper = ({ children }: Props) => {
  return (
    <div className='p-4'>{children}</div>
  )
}

export default PageWrapper
