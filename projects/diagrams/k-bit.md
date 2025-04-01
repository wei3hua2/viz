classDiagram
PerpDex --> Fee
PerpDex --> LP
PerpDex --> BisonAISubmissionProxy
PerpDex --> IBisonAIRouter
PerpDex --> IPyth
PerpDex *-- PerpDexBotLib
PerpDex *-- PerpDexPricesLib
PerpDex *-- PerpDexAuthLib
PerpDex *-- PerpDexLib
class IPyth{
	getUpdateFee()
	getPriceNoOlderThan()
	updatePriceFeeds()
	parsePriceFeedUpdates()
}
class PerpDexAuthLib{
	+🔍checkUser()
	+🔍getOpenLimitOrderMsg()
	+🔍getCloseLimitOrderMsg()
	+🔍getOpenPositionMsg()
	+🔍getClosePositionMsg()
	+🔍getSetTpslMsg()
	+🔍getChangeMarginMsg()
	+_setAdmins()
}
class PerpDexBotLib{
	+openPositionForLimitOrder()
	+_executeLimitOrder()
	#decreaseSizeAndCleanUpOnLiquidate()
	+_liquidatePosition()
	+_tpslClosePosition()
}
class PerpDexPricesLib{
	+submitAndGetLatestPrice()
	+submitAndGetBisonAIRoundId()
	+🔍getPythPrice()
	#🔍getBisonAIFeedName()
	#🔍getPythFeedHashOrder()
	#🔍checkPythPriceFeedOrder()
	#🔍checkPriceDataOrder()
	+getPreviousPriceAndTime()
	+safeTransferFromAndCheckBalance()
	+safeTransferAndCheckBalance()
}
class PerpDexLib{
	+🔍checkExecutionForLimitOrder()
	+🔍calculatePnlAndCloseFee()
	+checkAndLiquidatePosition()
	+🔍calculateOpenFee()
	#🔍getFundingFeeScalingFactor()
	+🔍calculateFundingFee()
	+_addInitialTokenTotalSizes()
	+_changeMaxTokenTotalSizes()
	+updateTraderOpenPositionId()
	#clearTraderOpenPositionId()
	+🔍findPositionToMerge()
	+cleanUpPosition()
	+cleanUpLimitOrder()
	+checkPositionSizeAndIncrease()
	+decreaseTotalPositionSize()
	+mergePosition()
	#🔍createLimitOrder()
	+createNewPosition()
	#payAndRecordFee()
	#giveAndRecordProfit()
	#takeAndRecordLoss()
	+_closePosition()
	+_setTpslPrice()
	+_changeMargin()
	+updateFundingFeeState()
	+_openPosition()
	+_openLimitOrder()
	+_closeLimitOrder()
}
class PerpDexBotLib{
	openPositionForLimitOrder()
	_executeLimitOrder()
	decreaseSizeAndCleanUpOnLiquidate()
	_liquidatePosition()
	_tpslClosePosition()
}
class BisonAISubmissionProxy{
    submitStrict()
    submitSingleWithoutSupersedValidation()
    submitWithoutSupersedValidation()
    lastSubmissionTimes()
}
class PerpDex{
	d_usdt
	d_lp
	d_feeContract
	bisonAIRouter
	bisonAISubmissionProxy
	pyth
	admin
	d_liquidationAdmins
	d_limitOrderAdmins
	positions
	traderPositionIds
	openPositionIds
	d_requestedOpenPositionIds
	limitOrderIds
	nextPositionId
	traderNonce
	tokenTotalSizes
	d_singleOpenAdmins
	d_closeAdmins
	d_multiOpenAdmin
	traderOpenPositionIds
	d_tpslAdmins
	fundingFeeTokenStates
	fundingFeeGlobalState
	adminsByRole
	externalContracts

	isAdmin()
	checkZeroAddress()
	_authorizeUpgrade()
	initialize()
	addInitialTokenTotalSizes()
	changeMaxTokenTotalSizes()
	setAdmin()
	setAdmins()
	setOracles()
	setupAddr()
	pause()
	unpause()
	getPosition()
	getOpenPositionIds()
	getLimitOrderIds()
	getPositionIdsForTrader()
	getTraderOpenPositionIds()
	checkUserSignedData()
	openLimitOrder()
	closeLimitOrder()
	executeLimitOrders()
	openPosition()
	rollbackPosition()
	tpslClosePositions()
	closePosition()
	liquidatePositions()
	setTpslPrice()
	submitAndGetBisonAIRoundId()
	changeMargin()
	claimProtocolFundingFee()
	depositFundingFeeGlobalStateBalance()
	updateFundingFeeStates()
}
class Fee{
	perpDex
	usdt
	referral
	feeBalanceAsReferrer
	feeBalanceAsReferee
	claimedFeeBalanceAsReferrer
	claimedFeeBalanceAsReferee
	protocolFeePercent
	referrerFeePercent
	protocolFeeBalance
	refereeCount
	admin
	protocolFeeCollector
	traderNonce

	initialize()
	pause()
	unpause()
	setPerpDexAddr()
	setUsdtAddr()
	setAdmin()
	setProtocolFeeCollector()
	getTotalFeePercent()
	getMarginFeePercent()
	getFeeDenominator()
	payFee()
	registerReferrer()
	claimProtocolFee()
	claimFee()
	setFeePercent()
	getReferralInfo()
}
class LP{
    usdt
	perpDex

	initialize()
	giveProfit()
}
style BisonAISubmissionProxy fill:#fdd,stroke:#eee
style IPyth fill:#fdd,stroke:#eee
style IBisonAIRouter fill:#fdd,stroke:#eee
