import React from 'react'

const Input = ({ placeholder, type, value, handleChange,name=''}) => {
  return (
    <input
    placeholder={placeholder}
    type={type}
    size={42}
    name={name}
    className="my-2 w-full rounded-sm p-2 focus:bg-white focus:bg-opacity-20  bg-white bg-opacity-20 outline-none text-slate-300 border-none text-sm"
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
  />
  )
}

export default Input