classDiagram
LamboFactory --|> LamboToken : deploy
LamboFactory --> VirtualToken : takeLoan
LamboVEthRouter --> LamboFactory : createLaunchPad
LamboFactory ..> IPool : mint
LamboFactory ..> IPoolFactory : createPair
IPoolFactory ..> IPool : create
LamboVEthRouter --> VirtualToken
LamboRebalanceOnUniwap --> VirtualToken : cashInOut
class VirtualToken{
    lastLoanBlock
    loanedAmountThisBlock
    underlyingToken
    MAX_LOAN_PER_BLOCK
    _debt
    whiteList
    validFactories
    isValidFactory(_factory)
    updateFactory(_factory,isValid)
    addToWhiteList(user)
    removeFromWhiteList(user)
    cashIn(amount)
    cashOut(amount)
    takeLoan(to,amount)
    repayLoan(to,amount)
    getLoanDebt(user)
}
class LamboFactory{
    lamboTokenImplementation
    whiteList
    addVTokenWhiteList(virtualLiquidityToken)
    removeVTokenWhiteList(virtualLiquidityToken)
    createLaunchPad(name, tickname, virtualLiquidityAmount, virtualLiquidityToken)
}
class LamboVEthRouter{
    NATIVE_TOKEN
    feeDenominator
    feeRate
    vETH
    updateFeeRate(newFeeRate)
    createLaunchPadAndInitialBuy(lamboFactory, name, tickname, virtualLiquidityAmount, buyAmount)
    getBuyQuote(targetToken, amountIn)
    getSellQuote(targetToken, amountIn)
    buyQuote(quoteToken, amountXIn, minReturn)
    sellQuote(quoteToken, amountYIn, minReturn)
}
class LamboToken {
    _balances
    _allowances
    _totalSupply
    __name
    __symbol
    initialize(_name,_symbol)
    name()
    symbol()
    decimals()
    totalSupply()
    balanceOf(account)
    transfer(to,value)
    allowance(owner,spender)
    approve(spender,value)
    transferFrom(from,to,value)
}
class LamboRebalanceOnUniwap{
    _BUY_MASK
    _SELL_MASK
    weth
    morphoVault
    quoter
    OKXRouter
    OKXTokenApprove
    veth
    uniswapPool
    fee
    initialize(_multiSign,_vETH,_uniswap,_fee)
    extractProfit(to,token)
    rebalance(directionMask,amountIn,amountOut)
    onMorphoFlashLoan(assets,data)
    previewRebalance()
}