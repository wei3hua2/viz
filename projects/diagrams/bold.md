classDiagram
ActivePool --> DefaultPool
ActivePool --> InterestRouter
ActivePool --> AddressesRegistry
ActivePool --> BoldToken
TroveNFT --> MetadataNFT
TroveNFT --> TroveManager
TroveNFT --> AddressesRegistry
TroveManager --> StabilityPool
TroveManager --> CollSurplusPool
TroveManager --> SortedTroves
TroveManager --> TroveNFT
TroveManager --> CollateralRegistry
GasPool --> TroveManager
CollSurplusPool --> AddressesRegistry
CollateralRegistry --> BoldToken
CollateralRegistry --> TroveManager
StabilityPool --> AddressesRegistry
StabilityPool --> TroveManager
StabilityPool --> BoldToken
BorrowerOperations --> AddressesRegistry
BorrowerOperations --> TroveManager
BorrowerOperations --> BoldToken
BorrowerOperations --> CollSurplusPool
BorrowerOperations --> SortedTroves
class TroveManager{
    +🔍shutdownTime()
	+🔍troveNFT()
	+🔍stabilityPool()
	+🔍sortedTroves()
	+🔍borrowerOperations()
	+🔍Troves()
	+🔍rewardSnapshots()
	+🔍getTroveIdsCount()
	+🔍getTroveFromTroveIdsArray()
	+🔍getCurrentICR()
	+🔍lastZombieTroveId()
	+batchLiquidateTroves()
	+redeemCollateral()
	+shutdown()
	+urgentRedemption()
	+getUnbackedPortionPriceAndRedeemability()
	+🔍getLatestTroveData()
	+🔍getTroveAnnualInterestRate()
	+🔍getTroveStatus()
	+🔍getLatestBatchData()
	+onOpenTrove()
	+onOpenTroveAndJoinBatch()
	+setTroveStatusToActive()
	+onAdjustTroveInterestRate()
	+onAdjustTrove()
	+onAdjustTroveInsideBatch()
	+onApplyTroveInterest()
	+onCloseTrove()
	+onRegisterBatchManager()
	+onLowerBatchManagerAnnualFee()
	+onSetBatchManagerAnnualInterestRate()
	+onSetInterestBatchManager()
	+onRemoveFromBatch()
}
