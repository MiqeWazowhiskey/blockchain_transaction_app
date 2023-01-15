const Card = ({children,className,style}) => {
  
  return (
    <div className={`flex flex-col justify-center items-center w-[400px] h-[600px] rounded-[50px] bg-[#031420] shadow-md shadow-purple-300 ${className} `} style={style}>
      {children}
    </div>
  )
}

export{Card}