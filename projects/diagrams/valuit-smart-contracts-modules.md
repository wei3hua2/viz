classDiagram
namespace fund {
    class Fund {
		getNAV()
		getToken()
		getOffChainPrice()
		getOffChainPriceStatus()
	}
    class EquitConfig
}
namespace factory {
	class FundFactory
	class TREXFactory {
		deployTREXSuite()
	}
	class FactoryProxy
}
namespace escrow {
	class EscrowControllerProxy
	class EscrowController {
		deposit()
		settlement()
		cancelOrder()
		rejectOrder()
	}
}
namespace roles {
	class AgentRole {
		agents
		tas
	}
}
namespace registry {
	class ClaimTopicsRegistry
	class IdentityRegistry
	class TrustedIssuersRegistry
	class IdentityRegistryStorage
}
namespace compliance {
	class ModularCompliance {
		modules
		tokenBound
	}
}
namespace Proxy {
	class TrustedIssuersRegistryProxy
	class TokenProxy
	class ProxyV1
	class ModularComplianceProxy
	class IdentityRegistryStorageProxy
	class IdentityRegistryProxy
	class ClaimTopicsRegistryProxy
}
namespace onchainID {
	class Verifier
	class ClaimIssuer {
		revokeClaim(id, identity)
	}
	class Identity {
		IERC734
		IERC735
	}
	class IdFactory {
		createIdentity(_wallet, _salt)
	}
}