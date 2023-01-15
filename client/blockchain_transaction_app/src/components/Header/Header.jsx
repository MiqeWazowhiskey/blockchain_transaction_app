import React from 'react'
import {SiHiveBlockchain} from 'react-icons/si'
import { NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <div className='bg-purple-300 bg-opacity-10 p-5 font-bold backdrop-blur-sm'>
        <ul className='flex justify-around'>
            
            <li>
                <NavLink to='/'>
                    <span><SiHiveBlockchain size={32}/></span>
                </NavLink>
            </li>            
        </ul>
    </div>
  )
}

export default Header