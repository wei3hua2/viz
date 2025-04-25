classDiagram
AegisMinting --> AegisRewards : depositRewards
AegisMinting --> AegisConfig
AegisMinting --> AegisOracle
class AegisMinting {
    +mint(order, signature)
    +requestRedeem(order, signature)
	+approveRedeemRequest(requestId,amt)
	+rejectRedeemRequest(requestId)
	+withdrawRedeemRequest(requestId)
}
class AegisOracle {
    yusdUSDPrice()
}
class AegisRewards {
    claimRewards(ids, amounts, signature)
    depositRewards(requestId, amount)
}
class AegisConfig {
    operators
    whitelist
}