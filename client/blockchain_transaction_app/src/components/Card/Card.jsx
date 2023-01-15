import React,{useContext} from 'react'
import { Input } from '../Input'
import { TransactionContext } from '../../context/TransactionContext'
const Card = () => {
  const {ethereum}= window

  const { handleChange, sendTransaction, data, isLoading} = useContext(TransactionContext)
  const handleSubmit = async(e) => {
    const { addressTo, amount, keyword, message} = data;
    e.preventDefault()
    const accounts = await ethereum.request({ method: 'eth_accounts'})
    if(!accounts.length){alert('Please install metamask and connect your wallet')}
    if (!addressTo || !amount || !keyword || !message) return;
    
    sendTransaction();
  }
  return (
    <div className='flex flex-col justify-center items-center w-[400px] h-[600px] rounded-[50px] bg-[#031420] shadow-md shadow-purple-300'>
        <form className='flex flex-col gap-y-10 '>
            <Input placeholder='Address To...' type='text' name='addressTo' handleChange={handleChange}/>
            <Input placeholder='Amount(eth)...' type='number' name='amount' handleChange={handleChange}/>
            <Input placeholder='Keyword Gif...' type='text' name='keyword' handleChange={handleChange}/>
            <Input placeholder='Message...' type='text' name='message' handleChange={handleChange}/>

        </form>
        {isLoading
              ? <p>Loading, please wait...</p>
              : (
        <button onClick={handleSubmit} type="button" className='mt-20 w-[60%] h-12 text-purple-300 bg-inherit border-2 border-purple-300 bg-opacity-50 rounded-full'>SEND</button>)}
    </div>
  )
}

export{Card}