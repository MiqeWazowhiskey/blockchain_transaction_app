import React,{useEffect,useState} from 'react'
import {ethers}from 'ethers'
import { contractABI, contractAdress } from '../utils/constants'
export const TransactionContext = React.createContext();
const {ethereum}= window

const getEthContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer= provider.getSigner();
    const transactionContract = new ethers.Contract(contractAdress,contractABI,signer)

}

export const TransactionProvider = ({children}) => {
    const [currentAccount,setCurrentAccount]=useState()
    const checkIfWalletConnected =  async()=>{
        try{
            if(!ethereum){return alert("Please install metamask")}
            const accounts = await ethereum.request({ method: 'eth_accounts'})
            if(accounts.length){
                setCurrentAccount(accounts[0])
                //getTransactions
            }
            else{
                console.log('No Account')
            }
        }catch(error){
            throw new Error('No ethereum object')

        }
        
    }
    useEffect(()=>{
        checkIfWalletConnected()
    },[]) 
    
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
    
    return(
        <TransactionContext.Provider value = {{connectWallet: connectWallet, currentAccount : currentAccount}}>
            {children}
        </TransactionContext.Provider>
    )
}