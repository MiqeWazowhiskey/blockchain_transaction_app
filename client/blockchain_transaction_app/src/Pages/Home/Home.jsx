import React,{ useContext } from 'react'
import { Layout } from '../../components'
import { Card } from '../../components/Card/Card'
import {FaEthereum} from 'react-icons/fa'
import { TransactionContext } from '../../context/TransactionContext'
const Home = () => {
  const {currentAccount, connectWallet, handleChange, sendTransaction, data, isLoading} = useContext(TransactionContext)
  
  return (
    <>
    <Layout>
    <div className='flex flex-col lg:flex-row justify-around items-center pt-10'>
      <div className='flex flex-col items-center gap-y-10 p-10 w-fit jutify-center '> 
          <div>
            Take your place on crypto. Connect your wallet...
          </div>
        {currentAccount ?<p>Welcome</p>: <button onClick={connectWallet} className='w-fit rounded-[50px] p-4 bg-slate-300'>Connect Wallet</button>}
        <div className='w-[320px] h-[190px] flex-col justify-between bg-gradient-to-r from-purple-300 to-pink-900 rounded-md flex items-start p-5' style={{boxShadow:'8px 8px white'}}>
          <span className='border-2 rounded-full p-2'><FaEthereum size={32}/></span>
          <div className='flex-col'>
            <p className='text-white text-opacity-60'>0xasd...ashdhasdhf</p>
            <h4 className=' text-gray-900  font-bold'>ETHEREUM</h4>
          </div>
        </div>
      </div>
      <div className='justify-end m-8 mr-10'>
       <Card/>
      </div>
    </div>
    </Layout>
    </>
  )
}

export default Home