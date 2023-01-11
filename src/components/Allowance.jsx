import { Button } from "@mui/material"
import { setAllowancesToZero } from "../actions/metamask"
import { connect } from "react-redux";

const AllowedUserComponent=({tokenAddressSpace, allowanceMap, metamaskAddress, spenderAddress, setAllowancesToZero})=>{
    const allowanceHandler=async (tokenAddress)=>{
        await setAllowancesToZero(metamaskAddress,tokenAddress ,spenderAddress)
    }
    return(
        <>
            {tokenAddressSpace.map(address=>{
                return (<>
                    <p key={address}>Allowance for token {address} is {allowanceMap[`${address}`]}  <Button color="error" onClick={()=>allowanceHandler(address)}> Set Allowance To Zero</Button></p>
                </>)
            })}
        </>
    )
}
const mapStateToProps = (state) => ({
   
})

const mapDispatchToProps = {
    setAllowancesToZero
}
export default connect(mapStateToProps, mapDispatchToProps)(AllowedUserComponent)
