classDiagram
class PrincipleToken {
	- MIN_DECIMALS
	- MAX_DECIMALS
	- RAE_NOT_STORED
	- RAE_STORED
	- ON_FLASH_LOAN
	-[[address]] registry
	-[[address]] rewardsProxy
	-[[uint8]] ibtDecimals
	-[[uint8]] underlyingDecimals
	-[[address]] ibt
	-[[address]] underlying_
	-[[address]] yt
	-[[uint256]] ibtUnit
	-[[uint256]] ptRate
	-[[uint256]] ibtRate
	-[[uint256]] unclaimedFeesInIBT
	-[[uint256]] totalFeesInIBT
	-[[uint256]] expiry
	-[[uint256]] duration
	-[[uint256]] ratesAtExpiryStored
	-[[mapping address=>uint256 ]] ibtRateOfUser
	-[[mapping address=>uint256 ]] ptRateOfUser
	-[[mapping address=>uint256 ]] yieldOfUserInIBT
	+initialize()
	+pause()
	+unPause()
	+deposit(assets, receiver)
	+deposit(assets, ptReceiver, ytReceiver)
	+deposit(assets, ptReceiver, ytReceiver, minShares)
	+depositIBT(ibts, receiver)
	+depositIBT(ibts, ptReceiver, ytReceiver)
	+depositIBT(ibts, ptReceiver, ytReceiver, minShares)
	+redeem()
	+redeem()
	+redeemForIBT()
	+redeemForIBT()
	+withdraw()
	+withdraw()
	+withdrawIBT()
	+withdrawIBT()
	+claimFees()
	+updateYield()
	+claimYield()
	+claimYieldInIBT()
	+beforeYtTransfer()
	+claimRewards()
	+flashLoan()
	+storeRatesAtExpiry()
	+setRewardsProxy()
	+🔍previewDeposit()
	+🔍previewDepositIBT()
	+🔍maxDeposit()
	+🔍previewWithdraw()
	+🔍previewWithdrawIBT()
	+🔍maxWithdraw()
	+🔍maxWithdrawIBT()
	+🔍previewRedeem()
	+🔍previewRedeemForIBT()
	+🔍maxRedeem()
	+🔍convertToPrincipal()
	+🔍convertToUnderlying()
	+🔍totalAssets()
	+🔍decimals()
	+🔍paused()
	+🔍maturity()
	+🔍getDuration()
	+🔍underlying()
	+🔍getIBT()
	+🔍getYT()
	+🔍getIBTRate()
	+🔍getPTRate()
	+🔍getIBTUnit()
	+🔍getUnclaimedFeesInIBT()
	+🔍getTotalFeesInIBT()
	+🔍getCurrentYieldOfUserInIBT()
	+🔍maxFlashLoan()
	+🔍flashFee()
	+🔍getTokenizationFee()
	#_update()
	#🔍_convertSharesToIBTs()
	#🔍_convertIBTsToShares()
	#🔍_convertIBTsToSharesPreview()
	#_updateFees()
	#_deployYT()
	#_depositIBT()
	#_beforeRedeem()
	#_beforeWithdraw()
	#_burnSharesForWithdraw()
	#_claimYield()
	#🔍_maxBurnable()
	#_updatePTandIBTRates()
	#🔍_getCurrentPTandIBTRates()
	#🔍_getPTandIBTRates()
}