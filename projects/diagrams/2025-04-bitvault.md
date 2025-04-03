classDiagram
CollateralRegistry --> TroveManager
StabilityPool --> TroveManager
StabilityPool --> AddressesRegistry
LiquityBase <|-- StabilityPool
LiquityBase <|-- BorrowerOperations
BorrowerOperations --> TroveManager
BorrowerOperations --> AddressesRegistry
LiquityBase <|-- TroveManager
class LiquityBase {
    +[[IAddressesRegistry]]addressesRegistry
	+[[IActivePool]] activePool
	#[[IDefaultPool]] defaultPool
	#[[IPriceFeed]] priceFeed
	+[[IWhitelist]] whitelist

	+**__constructor__**()
	+🔍getEntireBranchColl()
	+🔍getEntireBranchDebt()
	+setWhitelist()
}
class AddressesRegistry {
    +[[IERC20Metadata]] collToken
	+[[IBorrowerOperations]] borrowerOperations
	+[[ITroveManager]] troveManager
	+[[ITroveNFT]] troveNFT
	+[[IMetadataNFT]] metadataNFT
	+[[IStabilityPool]] stabilityPool
	+[[IPriceFeed]] priceFeed
	+[[IActivePool]] activePool
	+[[IDefaultPool]] defaultPool
	+[[address]] gasPoolAddress
	+[[ICollSurplusPool]] collSurplusPool
	+[[ISortedTroves]] sortedTroves
	+[[IInterestRouter]] interestRouter
	+[[IHintHelpers]] hintHelpers
	+[[IMultiTroveGetter]] multiTroveGetter
	+[[ICollateralRegistry]] collateralRegistry
	+[[IBoldToken]] boldToken
	+[[IWETH]] WETH
	+[[IWhitelist]] whitelist
	#[[bool]] systemContractsInitialized
	+[[uint256]] CCR
	+[[uint256]] SCR
	+[[uint256]] MCR
	+[[uint256]] BCR
	+[[uint256]] LIQUIDATION_PENALTY_SP
	+[[uint256]] LIQUIDATION_PENALTY_REDISTRIBUTION
	+[[CRProposal]] proposedCR
	+[[LiquidationValuesProposal]] proposedLiquidationValues

	+**__constructor__**()
	+setAddresses()
	+setWhitelist()
	+proposeNewCollateralValues()
	+acceptNewCollateralValues()
	+proposeNewLiquidationValues()
	+acceptNewLiquidationValues()
}
class CollateralRegistry {
    +[[IBoldToken]] boldToken
	+[[uint256]] totalCollaterals
	#[[IERC20Metadata]] collateralTokens
	#[[ITroveManager]] troveManagers
	+[[uint256]] baseRate
	+[[uint256]] lastFeeOperationTime

	+**__constructor__**()
	+addNewCollaterals()
	+removeCollateral()
	+redeemCollateral()
	+🔍getRedemptionRate()
	+🔍getRedemptionRateWithDecay()
	+🔍getRedemptionRateForRedeemedAmount()
	+🔍getRedemptionFeeWithDecay()
	+🔍getEffectiveRedemptionFeeInBold()
	+🔍getToken()
	+🔍getTroveManager()
}
class TroveManager {
	+[[ITroveNFT]] troveNFT
	+[[IBorrowerOperations]] borrowerOperations
	+[[IStabilityPool]] stabilityPool
	#[[address]] gasPoolAddress
	#[[ICollSurplusPool]] collSurplusPool
	#[[IBoldToken]] boldToken
	+[[ISortedTroves]] sortedTroves
	#[[ICollateralRegistry]] collateralRegistry
	#[[IWETH]] WETH
	+[[uint256]] CCR
	+[[uint256]] MCR
	+[[uint256]] SCR
	+[[uint256]] LIQUIDATION_PENALTY_SP
	+[[uint256]] LIQUIDATION_PENALTY_REDISTRIBUTION
	+[[mapping uint256=>Trove ]] Troves
	#[[mapping address=>Batch ]] batches
	#[[uint256]] totalStakes
	#[[uint256]] totalStakesSnapshot
	#[[uint256]] totalCollateralSnapshot
	#[[uint256]] L_coll
	#[[uint256]] L_boldDebt
	+[[mapping uint256=>RewardSnapshot ]] rewardSnapshots
	#[[uint256]] TroveIds
	+[[address]] batchIds
	+[[uint256]] lastZombieTroveId
	#[[uint256]] lastCollError_Redistribution
	#[[uint256]] lastBoldDebtError_Redistribution
	+[[uint256]] shutdownTime

	+**__constructor__**()
	+🔍getTroveIdsCount()
	+🔍getTroveFromTroveIdsArray()
	+updateCRs()
	+updateLiquidationValues()
	+batchLiquidateTroves()
	+redeemCollateral()
	+urgentRedemption()
	+shutdown()
	+🔍getCurrentICR()
	+🔍getLatestTroveData()
	+🔍getTroveAnnualInterestRate()
	+🔍getLatestBatchData()
	+🔍getTroveStatus()
	+🔍isWhitelisted()
	+getUnbackedPortionPriceAndRedeemability()
	+onOpenTrove()
	+onOpenTroveAndJoinBatch()
	+setTroveStatusToActive()
	+onAdjustTroveInterestRate()
	+onAdjustTrove()
	+onCloseTrove()
	+onAdjustTroveInsideBatch()
	+onApplyTroveInterest()
	+onRegisterBatchManager()
	+onLowerBatchManagerAnnualFee()
	+onSetBatchManagerAnnualInterestRate()
	+onSetInterestBatchManager()
	+onRemoveFromBatch()
}
class StabilityPool {
	+[[string]] NAME
	+[[IERC20]] collToken
	+[[ITroveManager]] troveManager
	+[[IBoldToken]] boldToken
	#[[uint256]] collBalance
	#[[uint256]] totalBoldDeposits
	#[[uint256]] yieldGainsOwed
	#[[uint256]] yieldGainsPending
	+[[mapping address=>Deposit ]] deposits
	+[[mapping address=>Snapshots ]] depositSnapshots
	+[[mapping address=>uint256 ]] stashedColl
	+[[uint256]] P
	+[[uint256]] P_PRECISION
	+[[uint256]] SCALE_FACTOR
	+[[uint256]] MAX_SCALE_FACTOR_EXPONENT
	+[[uint256]] SCALE_SPAN
	+[[uint256]] currentScale
	+[[mapping uint256=>uint256 ]] scaleToS
	+[[mapping uint256=>uint256 ]] scaleToB

	+**__constructor__**()
	+🔍getCollBalance()
	+🔍getTotalBoldDeposits()
	+🔍getYieldGainsOwed()
	+🔍getYieldGainsPending()
	+provideToSP()
	+withdrawFromSP()
	+claimAllCollGains()
	+triggerBoldRewards()
	+offset()
	+🔍getDepositorCollGain()
	+🔍getDepositorYieldGain()
	+🔍getDepositorYieldGainWithPending()
	+🔍getCompoundedBoldDeposit()
}
class BorrowerOperations {
	#[[IERC20]] collToken
	#[[ITroveManager]] troveManager
	#[[address]] gasPoolAddress
	#[[ICollSurplusPool]] collSurplusPool
	#[[IBoldToken]] boldToken
	#[[ISortedTroves]] sortedTroves
	#[[IWETH]] WETH
	+[[uint256]] CCR
	+[[uint256]] MCR
	+[[uint256]] BCR
	+[[uint256]] SCR
	+[[bool]] hasBeenShutDown
	-[[mapping uint256=>InterestIndividualDelegate ]] interestIndividualDelegateOf
	+[[mapping uint256=>address ]] interestBatchManagerOf
	-[[mapping address=>InterestBatchManager ]] interestBatchManagers

	+updateCRs()
	+openTrove()
	+openTroveAndJoinInterestBatchManager()
	+addColl()
	+withdrawColl()
	+withdrawBold()
	+repayBold()
	+adjustTrove()
	+adjustZombieTrove()
	+adjustTroveInterestRate()
	+closeTrove()
	+applyPendingDebt()
	+🔍getInterestIndividualDelegateOf()
	+setInterestIndividualDelegate()
	+removeInterestIndividualDelegate()
	+🔍getInterestBatchManager()
	+registerBatchManager()
	+lowerBatchManagementFee()
	+setBatchManagerAnnualInterestRate()
	+setInterestBatchManager()
	+removeFromBatch()
	+switchBatchManager()
	+onLiquidateTrove()
	+claimCollateral()
	+shutdown()
	+shutdownFromOracleFailure()
	+🔍checkBatchManagerExists()
}