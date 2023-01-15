import React,{useContext} from 'react'
import {SiHiveBlockchain} from 'react-icons/si'
import { NavLink} from 'react-router-dom'
import { TransactionContext } from '../../context/TransactionContext'
const Header = () => {
  const{currentAccount, logOut}= useContext(TransactionContext)
  return (
    <div className='bg-purple-300 bg-opacity-10 p-5 font-bold backdrop-blur-sm'>
        <ul className='flex justify-center items-center'>
            
            <li>
                <NavLink to='/'>
                    <span><SiHiveBlockchain size={32}/></span>
                </NavLink>
            </li>
            {currentAccount && 
            <li>
              <button onClick={logOut} className='absolute right-0 top-0 m-3 rounded-[50px] border-2 p-3'>
                Logout
              </button>
            </li> }         
        </ul>
    </div>
  )
}

export default Header