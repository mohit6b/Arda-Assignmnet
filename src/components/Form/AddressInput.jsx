import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { connect } from "react-redux";
import { getAllowances } from "../../actions/metamask";
import TokenAddressSpace from "../Landing/TokenAddressSpace";
import AllowedUserComponent from '../Allowance'
const tokenAddressSpace=[
    // '0xC5a7c173b055B762D9FB798FAb14FB4cD7095355',
    // '0x3D6d10CB4dd548D02578cD2E342F17c386840689'
    '0x0461696c43132c020d59e84ede76f174f504e784'
]
const AddressInputForm=({getAllowances, allowances, metaMaskAddress})=>{
    const [spenderAddressValue, setSpenderAddress] = React.useState("");

    const onChangeHandler = event => {
        setSpenderAddress(event.target.value);
    };
    const onGetAllowancesHandler=async(event)=>{
        console.log('I Am Called')
        event.preventDefault()
        await getAllowances(tokenAddressSpace, spenderAddressValue.toLowerCase(), metaMaskAddress.toLowerCase())
    }
    return (<>
        <TokenAddressSpace tokenAddressSpace={tokenAddressSpace}></TokenAddressSpace>
        <TextField id="outlined-basic" label="Enter Spender Addess" variant="outlined" onChange={onChangeHandler} value={spenderAddressValue} />
        <Button variant="contained" onClick={onGetAllowancesHandler}>Get Allowances</Button>
        {allowances? <>
            <AllowedUserComponent tokenAddressSpace={tokenAddressSpace} allowanceMap={allowances} metamaskAddress={metaMaskAddress} spenderAddress={spenderAddressValue} ></AllowedUserComponent>
        </>: <></>} 
    </>)
}

const mapStateToProps = (state) => ({
    allowances: state.metamask.allowances,
    metaMaskAddress: state.metamask.metaMaskAddress
})

const mapDispatchToProps = {
    getAllowances
}
export default connect(mapStateToProps, mapDispatchToProps)(AddressInputForm)