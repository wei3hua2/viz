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
