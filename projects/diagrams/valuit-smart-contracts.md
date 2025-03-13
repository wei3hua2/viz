classDiagram
class EscrowController{
    init()
    rescueAnyERC20Tokens()
    deposit()
    settlement()
    cancelOrder()
    rejectOrder()
    redemptionAndBurn()
    batchSettlement()
    batchRedemptionAndBurn()
    setStableCoin()
    setMasterFactory()
    setFundFactory()
    setNAV()
    setValuation()
    batchMintTokens()
    batchBurnTokens()
    batchFreezePartialTokens()
    batchUnFreezePartialTokens()
    batchForceTransferTokens()
    batchSetAddressFrozen()
    batchRegisterIdentity()
    batchShareDividend()
    callUpdateIdentity()
    callUpdateCountry()
    callDeleteIdentity()
    getStableCoin()
    getStableCoinName()
}
ERC1967Proxy <|-- ModuleProxy
AbstractModuleUpgradeable <|-- CountryRestrictModule
AbstractModuleUpgradeable <|-- CountryAllowModule
AbstractModuleUpgradeable <|-- HoldTimeModule
AbstractModuleUpgradeable <|-- SupplyLimitModule
AbstractModuleUpgradeable <|-- HoldTimeModule
AbstractModuleUpgradeable <|-- MaxBalanceModule
class ModularCompliance{
    init()
    bindToken()
    unbindToken()
    addModule()
    removeModule()
    transferred()
    created()
    destroyed()
    callModuleFunction()
    setWrapper()
    getWrapper()
    isWrapperSet()
    isModuleBound()
    getModules()
    getTokenBound()
    canTransfer()
}
class TREXFactory{
    _implementationAuthority
	_idFactory
	tokenDeployed
	deployedByMe
	wrapper
	deployTREXSuite()
	recoverContractOwnership()
	getImplementationAuthority()
	getIdFactory()
	getToken()
	tokenDeployedByMe()
	setImplementationAuthority()
	setIdFactory()
	setWrapper()
}
class FundFactory{
    init()
	setImpl()
	setMasterFactory()
	setFee()
	setAdminWallet()
	createFund()
	createEquityConfig()
	getEscrowFee()
	getWrapFee()
	getDividendFee()
	getRedemptionFee()
	getAdminWallet()
	getFund()
	getAssetType()
	getMasterFactory()
	getTokenTotalSupply()
}
class Fund{
    getNAV()
	getToken()
	getDividendStatus()
	getOffChainPrice()
	getOffChainPriceStatus()
	setNAV()
	setAssetPriceOffChain()
	setOffChainPrice()
	shareDividend()
	setMinInvestment()
	setMaxInvestment()
	setProjectedYield()
}
class VERC20{
    mint(address to, uint256 amount)
    burn(address from, uint256 amount)
}
class AgentRole{
	_agents
	_tAs
    addAgent()
	removeAgent()
	isAgent()
	addTA()
	removeTA()
	isTA()
}
ClaimIssuer <|-- Identity
class ClaimIssuer {
	[[mapping bytes=>bool ]] revokedClaims
	revokeClaimBySignature()
	revokeClaim()
	isClaimValid()
	isClaimRevoked()
	getRecoveredAddress()

}
IdFactory <|-- AgentRole
class IdFactory{
	_tokenFactories
	_implementationAuthority
	_saltTaken
	_userIdentity
	_wallets
	_tokenIdentity
	_tokenAddress
    addTokenFactory()
	removeTokenFactory()
	createIdentity()
	createIdentityWithManagementKeys()
	createTokenIdentity()
	linkWallet()
	unlinkWallet()
	getIdentity()
	isSaltTaken()
	getWallets()
	getToken()
	isTokenFactory()
}
class IdentityProxy{
    implementationAuthority()
}
class Verifier {
	[[uint256]] requiredClaimTopics
	[[IClaimIssuer]] trustedIssuers
	[[mapping address=>null ]] trustedIssuerClaimTopics
	[[mapping uint256=>null ]] claimTopicsToTrustedIssuers
	addClaimTopic()
	removeClaimTopic()
	addTrustedIssuer()
	removeTrustedIssuer()
	updateIssuerClaimTopics()
	getTrustedIssuers()
	getTrustedIssuersForClaimTopic()
	isTrustedIssuer()
	getTrustedIssuerClaimTopics()
	hasClaimTopic()
	isClaimTopicRequired()
	verify()
}
class TrustedIssuersRegistry {
	+init()
	+addTrustedIssuer()
	+removeTrustedIssuer()
	+updateIssuerClaimTopics()
	+getTrustedIssuers()
	+getTrustedIssuersForClaimTopic()
	+isTrustedIssuer()
	+getTrustedIssuerClaimTopics()
	+hasClaimTopic()

}
class IdentityRegistryStorage {
	+init()
	+addIdentityToStorage()
	+modifyStoredIdentity()
	+modifyStoredInvestorCountry()
	+removeIdentityFromStorage()
	+bindIdentityRegistry()
	+unbindIdentityRegistry()
	+linkedIdentityRegistries()
	+storedIdentity()
	+storedInvestorCountry()

}
class IdentityRegistry {
	+init()
	+batchRegisterIdentity()
	+updateIdentity()
	+updateCountry()
	+deleteIdentity()
	+setIdentityRegistryStorage()
	+setClaimTopicsRegistry()
	+setTrustedIssuersRegistry()
	+isVerified()
	+investorCountry()
	+issuersRegistry()
	+topicsRegistry()
	+identityStorage()
	+contains()
	+registerIdentity()
	+identity()

}
class ClaimTopicsRegistry {
	+init()
	+addClaimTopic()
	+removeClaimTopic()
	+🔍getClaimTopics()
}
AbstractProxy <|-- ClaimTopicsRegistryProxy
AbstractProxy <|-- IdentityRegistryProxy
AbstractProxy <|-- IdentityRegistryStorageProxy
AbstractProxy <|-- ModularComplianceProxy
AbstractProxy <|-- TokenProxy
AbstractProxy <|-- TrustedIssuersRegistryProxy
class TREXImplementationAuthority {
	[[Version]] _currentVersion
	[[mapping bytes32=>TREXContracts ]] _contracts
	[[bool]] _reference
	[[address]] _trexFactory
	[[address]] _iaFactory
	setTREXFactory()
	setIAFactory()
	addAndUseTREXVersion()
	fetchVersion()
	changeImplementationAuthority()
	getCurrentVersion()
	getContracts()
	getTREXFactory()
	getTokenImplementation()
	getCTRImplementation()
	getIRImplementation()
	getIRSImplementation()
	getTIRImplementation()
	getMCImplementation()
	addTREXVersion()
	useTREXVersion()
	isReferenceContract()
	getReferenceContract()
}
class IAFactory {
	-[[address]] _trexFactory
	-[[mapping address=>bool ]] _deployedByFactory
	+deployIA()
	+deployedByFactory()

}