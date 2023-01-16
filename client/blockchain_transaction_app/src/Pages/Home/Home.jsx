import React,{ useContext } from 'react'
import { Layout } from '../../components'
import { Card } from '../../components/Card/Card'
import {FaEthereum} from 'react-icons/fa'
import { Input } from '../../components/Input'
import { TransactionContext } from '../../context/TransactionContext'
import PrevTransactions from '../../components/PrevTransactions/PrevTransactions'
const Home = () => {
  const {currentAccount, connectWallet, handleChange, sendTransaction, data, isLoading} = useContext(TransactionContext)
  const {ethereum}= window

  const handleSubmit = async(e) => {
    const { addressTo, amount, keyword, message} = data;
    e.preventDefault()
    const accounts = await ethereum.request({ method: 'eth_accounts'})
    if(!accounts.length){alert('Please install metamask and connect your wallet')}
    if (!addressTo || !amount || !keyword || !message) {
      alert('Please connect your wallet and type all the informations for transaction')
      return;}
    
    sendTransaction();
  }
  
  return (
    <>
    <Layout>
    <div className='flex flex-col lg:flex-row justify-around items-center pt-10'>
      <div className='flex flex-col items-center gap-y-10 p-10 w-fit jutify-center '> 
          <div>
            Take your place on crypto. Connect your wallet...
          </div>
        {currentAccount ?
            <p>Welcome</p>
          
          : <button onClick={connectWallet} className='w-fit rounded-[50px] p-4 bg-slate-300 text-black hover:bg-slate-500' style={{boxShadow:'4px 4px purple'}}>Connect Wallet</button>}
        <div className='w-[320px] h-[190px] flex-col  justify-between bg-gradient-to-l from-purple-300 to-pink-900 rounded-md flex items-start p-5' style={{boxShadow:'8px 8px white'}}>
          <span className='border-2 rounded-full p-2'><FaEthereum size={32}/></span>
          <div className='flex-col'>
            <p className='text-white text-opacity-60'>{currentAccount.substring(0,5)}...{currentAccount.substring(32)}</p>
            <h4 className=' text-gray-900  font-bold'>ETHEREUM</h4>
          </div>
        </div>
      </div>
      <div className='justify-end ml-10 mr-10'>
       <Card>
          <form className='flex flex-col gap-y-10'>
              <Input placeholder="Address To..." name="addressTo" type="text" handleChange={handleChange} />
              <Input placeholder='Amount(eth)...' type='number' name='amount' handleChange={handleChange}/>
              <Input placeholder='Keyword Gif...' type='text' name='keyword' handleChange={handleChange}/>
              <Input placeholder='Message...' type='text' name='message' handleChange={handleChange}/>

          </form>
          {isLoading
                ? <p className='mt-8'>Loading, please wait...</p>
                : (
          <button onClick={handleSubmit} type="button" className='mt-20 w-[60%] h-12 text-purple-300 bg-inherit border-2 border-purple-300 bg-opacity-50 rounded-full'>SEND</button>)}
       </Card>
      </div>
    </div>
    <PrevTransactions/>

    </Layout>
    </>
  )
}

export default Home