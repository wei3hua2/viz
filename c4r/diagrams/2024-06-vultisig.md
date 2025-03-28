classDiagram
ILOManager --|> ILOPool
ILOPool --> ILOVest
ILOPool--> ILOWhitelist
LiquidityManagement <|-- ILOPool
class ILOPool{
    saleInfo
    _launchSucceeded
    _refundTriggered
    _positions
    _vestingConfigs
    _nextId
    totalRaised
    initialize(params)
    positions(tokenId)
    buy(raiseAmount,recipient)
    claim(tokenId)
    launch()
    claimRefund(tokenId)
    claimProjectRefund(projectAdmin)
    totalSold()
    vestingStatus(tokenId)
}
class ILOManager{
    UNIV3_FACTORY
    WETH9
    DEFAULT_DEADLINE_OFFSET
    PLATFORM_FEE
    PERFORMANCE_FEE
    FEE_TAKER
    ILO_POOL_IMPLEMENTATION
    _cachedProject
    _initializedILOPools
    initialize()
	initProject()
	🔍project()
	initILOPool()
	setPlatformFee()
	setPerformanceFee()
	setFeeTaker()
	setILOPoolImplementation()
	transferAdminProject()
	setDefaultDeadlineOffset()
	setRefundDeadlineForProject()
	launch()
	claimRefund()
}
class LiquidityManagement{
    addLiquidity(params)
}
class ILOWhitelist{
    setOpenToAll()
    isOpenToAll()
    isWhitelisted()
    batchWhitelist()
    batchRemoveWhitelist()
}