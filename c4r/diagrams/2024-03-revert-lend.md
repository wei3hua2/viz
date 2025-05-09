classDiagram
class V3Vault {
    deposit(assets, receiver)
    mint(shares, receiver)
    repay()
    borrow() 
    liquidate()
}
class V3Oracle {
    getValue(tokenId, token)
    getPositionBreakdown(tokenId)
}
V3Vault --> V3Oracle