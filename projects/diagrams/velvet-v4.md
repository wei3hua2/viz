classDiagram
PortfolioFactory --> AccessController
PortfolioFactory --> Portfolio
PortfolioFactory --> AssetManagementConfig
PortfolioFactory --> TokenExclusionManager
PortfolioFactory --> Rebalancing
PortfolioFactory --> ProtocolConfig
PortfolioFactory --> FeeModule
PortfolioFactory --> BorrowManager
class TokenExclusionManager{
    +init()
	+snapshot()
	+_currentSnapshotId()
	+claimRemovedTokens()
	+setUserRecord()
	+setTokenAndSupplyRecord()
	+claimTokenAtId()
	+getDataAtId()
	+userRecord()
	+deployTokenRemovalVault()
	+removedToken()
}
class BorrowManager{
    init()
    repayBorrow()
    repayVault()
}
class Rebalancing{
    init()
	updateWeights()
	updateTokens()
	removePortfolioToken(token)
	allowToken(token)
	removeNonPortfolioToken(token)
	🔍tokensBorrowed()
}
class Portfolio{
    +vault()
	+feeModule()
	+protocolConfig()
	+tokenExclusionManager()
	+accessController()
	+paused()
	+assetManagementConfig()
	+totalSupply()
	+balanceOf()
	+transfer()
	+allowance()
	+approve()
	+transferFrom()
	+init()
	+initToken()
	+mintShares()
	+pullFromVault()
	+multiTokenDeposit()
	+multiTokenDepositFor()
	+multiTokenWithdrawal()
	+multiTokenWithdrawalFor()
	+getLastRebalance()
	+getLastPaused()
	+getTokens()
	+updateTokenList()
	+userLastDepositTime()
	+_checkCoolDownPeriod()
	+getTokenBalancesOf()
	+getVaultValueInUSD()
	+_calculateMintAmount()
	+vaultInteraction()
}
class PortfolioFactory{
    basePortfolioAddress
    baseTokenExclusionManagerAddress
    baseRebalancingAddress
    baseAssetManagementConfigAddress
    feeModuleImplementationAddress
    baseVelvetGnosisSafeModuleAddress
    baseTokenRemovalVaultAddress
    basePositionManager
    baseBorrowManager
    protocolConfig
    portfolioCreationPause
    gnosisSingleton
    gnosisFallbackLibrary
    gnosisMultisendLibrary
    gnosisSafeProxyFactory
    nftManagerAddress
    swapRouterV3Address
    portfolioId
    whitelistedPortfolioAddress
    PortfolioInfolList

    initialize(initData)
    setPositionManagerAddresses(_nftManager,_swapRouterV3)
    createPortfolioNonCustodial(initData)
    createPortfolioCustodial(initData,_owners,_threshold)
    getPortfolioList(portfoliofundId)
    upgradeTokenExclusionManager(_proxy,_newImpl)
    upgradeBorrowManager(_proxy,_newImpl)
    upgradePortfolio(_proxy,_newImpl)
    upgradeAssetManagerConfig(_proxy,_newImpl)
    upgradeFeeModule(_proxy,_newImpl)
    upgradeRebalance(_proxy,_newImpl)
    upgradePositionManager(_proxy,_newImpl)
    setPortfolioCreationState(_state)
    setTokenRemovalVaultModule(_newImpl)
    updateGnosisAddresses(_newGnosisSingleton,_newGnosisFallbackLibrary,_newGnosisMultisendLibrary,_newGnosisSafeProxyFactory)
    transferSuperAdminOwnership(_accessController,_account)
}
class AccessController{
    setupRole(role, account)
	setUpRoles()
	transferSuperAdminOwnership(oldAccount, newAccount)
	hasRole(role, account)
}