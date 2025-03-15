deploy: Escrow.ts  Factory.ts  Fund.ts  OnchainidFactory.ts  Wrapper.ts
verify: Escrow.ts  Fund.ts  Wrapper.ts
setWrapper.ts


<b>tests</b>
tokenization.ts
    Tokenization Contract Testing 
    Registries
        ClaimTopicRegsitry
        IdentityRegistry
        TrustedIssuerRegistry
        IdentityRegistryStorage
    Modules
        MaxBalanceModule
        SupplyModule
        HoldTimeModule
        CountryAllowModule
    Roles
        AgentRole
    Factory
        Idfactory
          createIdentity
          createTokenIdentity
        IdFactory
            linkWallet
            unlinkWallet
            isSaltTaken
            getWallets
            getToken
    ProxyAuthority
        TREXImplementationAuthority
        Version Management
        Getters and Utility Functions
        Factory Management
        IAFactory
    Token
        Token.sol
    Constructor
    updateImplementation
    FactoryProxy Contract
        Ownership Functions
        Maintenance Functions
        Upgradeability Functions
        Edge Cases
    escrowControllerProxy Contract
        Ownership Functions
        Maintenance Functions
        Upgradeability Functions
        Edge Cases
    Proxy V1 Contract
        Ownership Functions
        Maintenance Functions
        Upgradeability Functions  
        Edge Cases
    Wrapper Proxy Contract
        Ownership Functions
        Maintenance Functions
        Upgradeability Functions  
        Edge Cases
    Only Upgradable Roles
    Reference Contract Functionality
    Version Fetching and Management

ClaimIssuerRegistry.ts
    ClaimIssuer Registry Contract Testing
        Deployment
        Claim Revocation
        Claim Validation
        RevokeClaim Functionality

Fund.ts
    Fund Contract Testing
        Initialization
        Modifiers
        Off-Chain Price Management
        Investment Limits
        Projected Yield
        Dividend Distribution

Identity.ts
    Identity Contract Testing
        Constructor & Initialization
        Key Management
        Execution Management
        Claim Management
        Key Query Functions

verifier.ts
    Verifier Contract Testing
        Claim Topics Management
            addClaimTopic
            removeClaimTopic
        Trusted Issuers Management
            addTrustedIssuer
            removeTrustedIssuer
            updateIssuerClaimTopics
        Verification
            verify
        View Functions


ClaimTopicRegistry.ts
CountryAllowModule.ts
CountryRestrictModule.ts
deployToken.ts
equityConfig.ts
Erc20Upgradable.ts
escrow.ts
helpers.ts
HoldTimeModule.ts
IdentityRegistry.ts
IdentityRegistryStorage.ts
MaxBalanceModule.ts
ModularCompliance.ts
SupplyLimitModule.ts
test.ts
TrustedIssuerRegistry.ts
verc20.ts
wrapper.ts