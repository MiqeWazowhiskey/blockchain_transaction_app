import React from 'react'
import Header from '../Header'

const Layout = ({children}) => {
  return (
    <div className='flex bg-repeat min-h-screen flex-col bg-gradient-to-r from-[#082846] to-[#ac36c4]  text-[#FFFFFF]'>
        <div className='fixed z-40 w-full h-fit'>
        <Header/> 
        </div>
        <div className='pt-20 z-30 h-full'>
            {children}
        </div>
    </div>
  )
}

export default Layout