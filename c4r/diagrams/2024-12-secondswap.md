classDiagram
SecondSwap_WhitelistDeployer --|> SecondSwap_Whitelist : deploy
SecondSwap_VestingManager --> SecondSwap_StepVesting
SecondSwap_VestingManager --> SecondSwap_Vesting
SecondSwap_VestingDeployer --> SecondSwap_StepVesting
SecondSwap_VestingDeployer --> SecondSwap_VestingManager
SecondSwap_StepVesting --> SecondSwap_Vesting
SecondSwap_MarketplaceSetting --> SecondSwap_VestingManager
SecondSwap_Marketplace --> SecondSwap_MarketplaceSetting
SecondSwap_Marketplace --> SecondSwap_Whitelist
SecondSwap_Marketplace --> SecondSwap_VestingManager
SecondSwap_Marketplace --> SecondSwap_WhitelistDeployer
class SecondSwap_Whitelist{
    maxWhitelist
    totalWhitelist
    lotOwner
    userSettings
    constructor(_maxWhitelist,_lotOwner)
    whitelistAddress()
    validateAddress(_userAddress)
    setMaxWhitelist(_maxWhitelist)
}
class SecondSwap_VestingManager{ 
    vestingSettings
    allocations
    marketplace
    s2Admin
    vestingDeployer
    BASE
    initialize(_s2admin)
    listVesting(seller,plan,amount)
    unlistVesting(seller,plan,amount)
    completePurchase(buyer,vesting,amount)
    setSellable(vesting,sellable)
    setMaxSellPercent(vesting,maxSellPercent)
    setMarketplace(_marketplace),setAdmin(_admin)
    setBuyerFee(_vesting,_fee)
    setSellerFee(_vesting,_fee)
    setVestingDeployer(_vestingDeployer)
    getVestingFees(_vestingPlan)
    getVestingTokenAddress(_vestingPlan)
}
class SecondSwap_VestingDeployer{ 
    manager
    _tokenOwner
    s2Admin
}
class SecondSwap_StepVesting{ 
    token
    startTime
    endTime
    numOfSteps
    stepDuration
    _vestings
    vestingDeployer
    manager
    tokenIssuer
    transferVesting()
}
class SecondSwap_MarketplaceSetting{ 
    buyerFee
    sellerFee
    penaltyFee
    minListingDuration
    referralFee
    isMarketplaceFreeze
    feeCollector
    s2Admin
    whitelistDeployer
    vestingManager
    referralFeeCollector
    usdt
}
class SecondSwap_Marketplace{ 
    marketplaceSetting
    listings
    nextListingId
    isTokenSupport
    BASE
}
