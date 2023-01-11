const TokenAddressSpace=({tokenAddressSpace})=>{
    return (
        <>
            <label>Token Address space</label>
            <ul>
                {tokenAddressSpace.map(address=>{
                    return (<li>{address}</li>)
                })}
            </ul>
        </>
    )
}
export default TokenAddressSpace