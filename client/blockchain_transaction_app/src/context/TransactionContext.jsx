import React,{useEffect,useState} from 'react'
import {ethers}from 'ethers'
import { contractABI, contractAdress } from '../utils/constants'
export const TransactionContext = React.createContext();
const {ethereum}= window

const getEthContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer= provider.getSigner();
    const transactionContract = new ethers.Contract(contractAdress,contractABI,signer)
    return transactionContract;
}

export const TransactionProvider = ({children}) => {
    const[isLoading,setIsLoading]= useState(false)
    const [currentAccount,setCurrentAccount]=useState('')
    const [data,setData] = useState({addressTo: "", amount: "", keyword: "", message:""})
    const [transactionCount,setTransCount] = useState(localStorage.getItem('transactionCount'))
    const [transactions, setTransactions] = useState([]);

    const handleChange= (e,name)=>{
        setData((prevState) => ({ ...prevState, [name]: e.target.value }));
    }
    const checkIfWalletConnected =  async()=>{
        try{
            //if metamask installed
            if(!ethereum){return alert("Please install metamask")}
            const accounts = await ethereum.request({ method: 'eth_accounts'})
            if(accounts.length){
                setCurrentAccount(accounts[0])
                getTransactions()
            }
            else{
                throw new Error('Please connect wallet')
            }
        }catch(error){
            throw new Error('No ethereum object')

        }
        
    }
    const getTransactions = async() => {
        try{
            const accounts = await ethereum.request({ method: 'eth_accounts'})
            const transactionContract = getEthContract(); 
            if(!ethereum){return alert("Please install metamask")}
            const availableTransactions = await transactionContract.getTransactions()//on transation sol
            const structTransactions = availableTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.time.toNumber() * 1000).toLocaleString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10 ** 18)
              }));
              setTransactions(structTransactions);
        }catch(error){
                console.log(error)
        }
    }
    useEffect(()=>{
        
        checkIfWalletConnected()
        checkIfTransactionExist()
        
        
    },[]) 
    const logOut = ()=> {
        setCurrentAccount('')
    }
    const connectWallet = async()=> {
        try{
            if(!ethereum){return alert("Please install metamask")}
            
            const accounts =  await ethereum.request({method:'eth_requestAccounts'})
            setCurrentAccount(accounts[0])
        }
        catch(error){
            throw new Error('No ethereum object')
        }
    }
    const checkIfTransactionExist = async() => {
        try{
            const accounts =  await ethereum.request({method:'eth_requestAccounts'})
            const transactionContract = getEthContract(); 
            const transactionCount = await transactionContract.getTransactionCount()
            window.localStorage.setItem('transactionCount', transactionCount)
        }
        catch(error){
            throw new Error('No ethereum object')

        }
    }
    const sendTransaction = async() => {
        try{
            if(!ethereum){return alert("Please install metamask")}
            const { addressTo, amount, keyword, message} = data;
            const transactionContract = getEthContract(); 
            const convertedAmount = ethers.utils.parseEther(amount)//to gwei
            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208', //20000 gwei
                    value: convertedAmount._hex,
                }] 
            })
            const transactionHash = await transactionContract.addToChain(addressTo,convertedAmount,message,keyword)//addtoblockchain on transacitons.sol
            setIsLoading(true)
            alert(`Loading  ${transactionHash.hash}`)
            await transactionHash.wait()
            setIsLoading(false)
            alert(`Success  ${transactionHash.hash}`)

            
            const transactionCount = await transactionContract.getTransactionCount()
            setTransCount(transactionCount.toNumber())
        }
        catch(error){
            alert('Something went wrong')
        }
    }
    return(
        <TransactionContext.Provider value = {{connectWallet,currentAccount, data,transactions, setData, handleChange, sendTransaction,isLoading,logOut }}>
            {children}
        </TransactionContext.Provider>
    )
}