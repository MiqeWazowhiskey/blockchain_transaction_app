import React,{useContext} from 'react'
import { Card } from '../Card/Card'
import {AiOutlineDown} from 'react-icons/ai'
import { TransactionContext } from '../../context/TransactionContext'
import { motion } from "framer-motion"
const PrevTransactions = () => {
    function handleScroll() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
      }
    const {currentAccount} = useContext(TransactionContext)
  return (
    <>
   {currentAccount ? 
   <div className='w-full flex flex-col items-center justify-around p-5'>
        <h2 className='flex items-center flex-col text-5xl font-bold text-center pb-20'>
            <button className='border-4 rounded-full border-white  text-purple-300 hover:animate-bounce'
            onClick={handleScroll}
            >
                <AiOutlineDown/>
            </button>
            <p>Latest Transactions</p>
        </h2>
        <motion.a whileHover={{scale: 1.1}} href='https://'>
            <Card className='shadow-none h-[400px] w-[300px]' style={{boxShadow:'12px 12px white'}}>
                asd
            </Card>
        </motion.a>
    </div>: <h4 className='text-5xl text-center pt-12'>Please Connect With Your Wallet to See Your Latest Transactions</h4>}
    </>
  )
}

export default PrevTransactions