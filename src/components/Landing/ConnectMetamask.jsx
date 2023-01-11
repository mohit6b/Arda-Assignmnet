import React, {useEffect} from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '@mui/material/Button';
import Web3 from 'web3';
import { loginMetaMask , setMetaMaskBalance} from '../../actions/metamask'
//import ApproveToken from "./ApproveToken";
const ConnectMetaMask= ({loginMetaMask, setMetaMaskBalance, isMetaMaskConnected, metaMaskAddress, metaMaskBalance})=>{
    // useEffect(() => {
    //     async function fetchCurrentBalance() {
    //         if(metaMaskAddress){
    //             await setMetaMaskBalance(metaMaskAddress)
    //         }
    //     }
    //     fetchCurrentBalance()
    // }, [metaMaskAddress, setMetaMaskBalance,metaMaskBalance])
    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        }
        if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            return window.alert("Please install MetaMask!");
        }
        // setWeb3(window.web3);
        // const accounts = await web3.eth.getAccounts();
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        console.log('Accounts are ', accounts)
        loginMetaMask(accounts[0])
        //setMetaMaskBalance(accounts[0])
    };
    const connectToMetaMask = async () => {
        await loadWeb3()
    }
  return (
      <>
       {isMetaMaskConnected? <><h1>Metamask connected: Address {metaMaskAddress}</h1><br/></>: 
       <><Button variant="contained" onClick={connectToMetaMask}>Connect To Metamask</Button></>}
      </>
  );
}
ConnectMetaMask.propTypes = {
    isMetaMaskConnected: PropTypes.bool,
    loginMetaMask: PropTypes.func,
}

const mapStateToProps = (state) => ({
    isMetaMaskConnected: state.metamask.isMetaMaskConnected,
    metaMaskAddress: state.metamask.metaMaskAddress,
    metaMaskBalance: state.metamask.metaMaskBalance
})

const mapDispatchToProps = {
    loginMetaMask,
    setMetaMaskBalance
}
export default connect(mapStateToProps, mapDispatchToProps)(ConnectMetaMask)