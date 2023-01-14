import React from 'react'
import { Input } from '../Input'
const Card = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[400px] h-[600px] rounded-[50px] bg-black'>
        <form className='flex flex-col gap-y-10 text-black'>
            <Input type='text'/>
            <Input type='text'/>
            <Input type='text'/>
        </form>
        <button className='mt-20 w-[60%] h-12 text-black bg-white'>SEND</button>
    </div>
  )
}

export{Card}