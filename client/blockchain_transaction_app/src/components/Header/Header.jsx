import React from 'react'

const Header = () => {
  return (
    <div className=' p-5 font-bold backdrop-blur-sm'>
        <ul className='flex justify-around'>
            <li>
                <a href='./'>Anasayfa</a>
            </li>
            <li>
                <a href='./'>Projeler</a>  
            </li>    
            <li className='rounded-[50px] bg-blue-300 p-2'>
                <a href='./'>Login</a>
            </li>
            
        </ul>
    </div>
  )
}

export default Header