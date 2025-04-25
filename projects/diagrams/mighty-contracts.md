classDiagram
LendingPool --> ExtraInterestBearingToken
class LendingPool {
    reserve
    credits
    debtPositions
    borrowingWhiteList

    +🔍utilizationRateOfReserve(reserveId)
	+🔍borrowingRateOfReserve(reserveId)
	+🔍exchangeRateOfReserve(reserveId)
	+🔍totalLiquidityOfReserve(reserveId)
	+🔍totalBorrowsOfReserve(reserveId)
	+🔍getReserveIdOfDebt(reserveId)
	+💰deposit(reserveId, amt, onBehalfOf, referralCode)
	+💰redeem(reserveId, amt, to, receiveNativeETH)
	+newDebtPosition(reserveId)
	+🔍getCurrentDebt(debtId)
	+borrow(onBehalfOf, debtId, amt)
	+repay(onBehalfOf, debtId, amt)
	+🔍getUnderlyingTokenAddress()
	+🔍getETokenAddress(reserveId)
	+🔍getStakingAddress(reserveId)
}
class ExtraInterestBearingToken {
    mint(user, amt)
}