import {  SET_METAMASK_ADDRESS, NO_ACTION, SET_METAMASK_BALANCE, SET_ALLOWANCES} from "./types";
import Web3 from "web3";
import ERC20TokenABI from '../ERC20TokenABI.json'
//Login Metamask
export const loginMetaMask=(address)=>(dispatch)=>{
    try{
        dispatch({
            type: SET_METAMASK_ADDRESS,
            payload: address
        })
    }catch(err){
		console.log(err)
        dispatch({ type: NO_ACTION });
    }
}

//Set Metamask Balance
export const setMetaMaskBalance=(metaMaskAddress)=>async(dispatch)=>{
	try{
		if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        }
        if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
			dispatch({
				type: NO_ACTION
			});
        }
        // setWeb3(window.web3);
        //const web3 = window.web3;
        // const contract = new web3.eth.Contract(token, "0x09a7277b72ec7feb6ceedb52932f279fd762fa3a");
        // const token_count = await contract.methods.balanceOf(metaMaskAddress).call();
		// // const token_count=await web3.eth.getBalance(metaMaskAddress)
		// console.log('Token is', token_count)
        // dispatch({
        //     type: SET_METAMASK_BALANCE,
        //     payload: token_count?.slice(0, -18)
        // })
        dispatch({
            type: NO_ACTION
        });
    }catch(err){
		console.log(err)
        dispatch({ type: NO_ACTION });
    }
}

//Get Allowances
export const getAllowances=(token_addresses, spenderAdrres, ownerAddress)=>async(dispatch)=>{
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    }
    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        dispatch({
            type: NO_ACTION
        });
    }
    const web3 = window.web3;
    const response={}
    for (const address of token_addresses) {
        const contract = new web3.eth.Contract(ERC20TokenABI, address);
        console.log('Owner is', ownerAddress)
        console.log('Spender is', spenderAdrres)
        const allowance = await contract.methods.allowance(ownerAddress, spenderAdrres).call();
        console.log('Allowance is', allowance)
        response[`${address}`]=allowance
    }
    console.log('Response is', response)  
    dispatch({
        type: SET_ALLOWANCES,
        payload:response
    })
}

export const setAllowancesToZero=(metamaskAddress, tokenAddress, spenderAddress)=>async(dispatch)=>{
    console.log('I am Called')
    console.log(metamaskAddress)
    console.log(tokenAddress)
    console.log(spenderAddress)
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
    }
    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        dispatch({
            type: NO_ACTION
        });
    }
    const web3 = window.web3;
    const tokenContract = new web3.eth.Contract(ERC20TokenABI, tokenAddress);
    await tokenContract.methods.approve(spenderAddress, 0).send({from: metamaskAddress})
}