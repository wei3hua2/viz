classDiagram
TokenFactory --> PropertyToken
TokenFactory --> HestyAccessControl
TokenFactory --> ReferralSystem
TokenFactory --> HestyAssetIssuance : createPropertyToken
PropertyInfo *-- TokenFactory 
HestyAssetIssuance --|> PropertyToken : create
HestyRouter --> TokenFactory
HestyRouter --> HestyAccessControl
class TokenFactory{
  propertyCounter
  minInvAmount
  maxNumberOfReferrals
  maxAmountOfRefRev
  platformFeeBasisPoints
  refFeeBasisPoints
  treasury
  initialized
  property
  platformFee
  ownersPlatformFee
  propertyOwnerShare
  refFee
  ownersFeeBasisPoints
  deadProperty
  tokensWhitelist
  userInvested
  rightForTokens
  initialize(referralSystemCtr_, ctrHestyIssuance_)
  createProperty(amount, listingTokenFee, tokenPrice, threshold, paymentToken, revenueToken, name, symbol, admin)
  buyTokens(onBehalfOf, id, amount, ref)
  distributeRevenue(id, amount)
  getInvestmentTokens(user, id)
  claimInvestmentReturns(user, id)
  recoverFundsInvested(user, id)
  isRefClaimable(id)
  getPropertyInfo(id)
  adminBuyTokens(id, buyer, amount)
  completeRaise(id)
  approveProperty(id, raiseDeadline)
  cancelProperty(id)
  setPlatformFee(newFee)
  setOwnersFee(id, newFee)
  setRefFee(newFee)
  setNewPropertyOwnerReceiverAddress(id, newAddress)
  extendRaiseForProperty(id, newDeadline)
  setMinInvAmount(newMinInv)
  setMaxNumberOfReferrals(newMax)
  setMaxAmountOfRefRev(newMax)
  setTreasury(newTreasury)
  setReferralContract(newReferralContract)
  setIssuanceContract(newIssuanceCtr)
  addWhitelistedToken(newToken)
  removeWhitelistedToken(oldToken)
}
class PropertyInfo{
  price
  amountToSell
  threshold
  raised
  raiseDeadline
  isCompleted
  approved
  extended
  owner
  ownerExchAddr
  paymentToken
  asset
  revenueToken
}
class PropertyToken{
  rewardAsset
  dividendPerToken
  xDividendPerToken
  ctrHestyControl
  distributionRewards(amount)
  claimDividensExternal(user)
  transfer(to, amount)
  transferFrom(from, to, amount)
  pause()
  unpause()
}
class HestyAccessControl{
  initialSponsorAmount
  kycCompleted
  blackList
  firstApproval
  onlyAdmin(manager)
  onlyFundsManager(manager)
  blacklistUser(user)
  unBlacklistUser(user)
  approveUserKYC(user)
  approveKYCOnly(user)
  revertUserKYC(user)
  pause()
  unpause()
  setSponsorAmount(newAmount)
  paused()
  owner()
  confirmAccessControlAdmin(router)
}
class HestyRouter{
  tokenFactory;
  hestyAccessControl
  pendingHestyAccessControl
  adminDistribution(propertyId, amount)
  offChainBuyTokens(propertyId, onBehalfOf, amount)
  proposeNewAccessControl(newControl)
  confirmAccessControlChange()
  setNewTokenFactory(newFactory)
}
class ReferralSystem{
  ctrHestyControl
  rewardToken
  tokenFactory
  rewards
  totalRewards
  globalRewards
  rewardsByProperty
  numberOfRef
  referredBy
  approvedCtrs
  addRewards(onBehalfOf, user, projectId, amount)
  addGlobalRewards(onBehalfOf, amount)
  claimPropertyRewards(user, projectId)
  claimGlobalRewards(user)
  getReferrerDetails(user)
  addApprovedCtrs(newReferralRouter)
  removeApprovedCtrs(oldReferralRouter)
  setRewardToken(newToken)
  setHestyAccessControlCtr(newControl)
  setNewTokenFactory(newFactory)
}
class HestyAssetIssuance{
    createPropertyToken(amount, revenueToken, name, symbol, admin, owner)
}
