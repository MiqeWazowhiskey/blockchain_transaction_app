import React from 'react'
import Header from '../Header'

const Layout = ({children}) => {
  return (
    <div className='flex h-full lg:h-screen flex-col bg-[#082846]  text-[#FFFFFF] bg-fixed'>
        <div className='fixed z-40 w-full h-fit'>
        <Header/> 
        </div>
        <div className='pt-20 z-30'>
            {children}
        </div>
    </div>
  )
}

export default Layout