import React,{useContext} from 'react'
import { Card } from '../Card/Card'
import {AiOutlineDown} from 'react-icons/ai'
import { TransactionContext } from '../../context/TransactionContext'
import { motion } from "framer-motion"
import useFetch from '../../hooks'
const PrevTransactions = () => {
    
    function handleScroll() {
        window.scroll({
          top: document.body.offsetHeight,
          left: 0, 
          behavior: 'smooth',
        });
      }
    const {currentAccount, transactions} = useContext(TransactionContext)
  return (
    <>
   {currentAccount ? 
   <div className='w-full flex flex-col items-center justify-around p-5 mt-20'>
        <h2 className='flex items-center flex-col text-5xl font-bold text-center pb-20'>
            <button className='border-4 rounded-full border-white  text-purple-300 hover:animate-bounce'
            onClick={handleScroll}
            >
                <AiOutlineDown/>
            </button>
            <p>Latest Transactions</p>
        </h2>
        <div className="flex flex-wrap gap-x-20 items-center mt-10 ">
          {[...transactions].reverse().map((transaction, i) => {
            return(
              <motion.a key={i} whileHover={{scale: 1.1}} href='https://portfolio.metamask.io' target="_blank" rel="noreferrer">

                <Card className='w-fit h-fit p-8 justify-center mb-10 bg-[#ac36c4] bg-opacity-20 items-center'>
                            <div className='flex text-black font-bold flex-col'>
                                <div className='mb-5'>
                                    <a>
                                    {transaction.addressFrom &&<p>From: {transaction.addressFrom.substring(0,5)}...{transaction.addressFrom.substring(30)}</p>}
                                    </a>
                                    <a>
                                    {transaction.addressTo &&<p>To:{transaction.addressTo.substring(0,5)}...{transaction.addressTo.substring(30)}</p>}
                                    </a>
                                    <p>Amount: {transaction.amount} ETH</p>
                                    {transaction.message &&<p>Message: {transaction.message}</p>}
                                </div>
                                <img
                                    src={useFetch({keyword: transaction.keyword})|| 'https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284'}
                                    className="w-full h-32 rounded-md shadow-lg object-cover"
                                />
                                <div className="bg-black text-center m-2 rounded-full">
                                    <p className="text-[#e4a3f1] font-bold">{transaction.timestamp}</p>
                                </div>
                            </div>
                </Card>
              </motion.a>
            )
          })}
        </div>

    </div>
    : <h4 className='text-5xl text-center mt-24'>
      Please Connect With Your Wallet to See Latest Transactions
      </h4>}
    </>
  )
}

export default PrevTransactions