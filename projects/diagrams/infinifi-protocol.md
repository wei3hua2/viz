classDiagram
Farm <|-- MintController
Farm <|-- RedeemController
RedemptionPool <|-- RedeemController
class Farm {
    +🔍assetToken()
	+🔍assets()
	+🔍maxDeposit()
    +🔍liquidity()
    +deposit()
	+withdraw(amount, to)
}
class FarmRegistry {
    assets
    farms
}
class YieldSharing {
    +unaccruedYield()
    +accrue()
}
YieldSharing --> Accounting
YieldSharing --> ReceiptToken
YieldSharing --> StakedToken
class InfiniFiGatewayV1 {
    addresses
    +init()
	+setAddress()
	+🔍getAddress()
	+mint(to, amt)
	+mintAndStake(to, amt)
	+mintAndLock(to, amt, unwindingEpochs)
	+unstakeAndLock(to, amt, unwindingEpochs)
	+createPosition(amt, unwindingEpochs, recipient)
	+startUnwinding(shares, unwindingEpochs)
	+increaseUnwindingEpochs(oldUnwindingEpochs, newUnwindingEpochs)
	+cancelUnwinding()
	+withdraw()
	+redeem()
	+claimRedemption()
	+vote()
	+multiVote()
	#🔍_revertIfThereAreUnaccruedLosses()
}
InfiniFiGatewayV1 ..> MintController : mint
InfiniFiGatewayV1 ..> StakedToken : deposit
InfiniFiGatewayV1 ..> StakedToken : redeem
InfiniFiGatewayV1 ..> LockingController : createPosition
InfiniFiGatewayV1 ..> LockingController : startUnwinding
InfiniFiGatewayV1 ..> LockingController : increaseUnwindingEpochs
InfiniFiGatewayV1 ..> LockingController : withdraw
InfiniFiGatewayV1 ..> AllocationVoting : vote
InfiniFiGatewayV1 ..> YieldSharing : unaccruedYield
InfiniFiGatewayV1 ..> RedeemController : claimRedemption
class LockingController {
	buckets
}