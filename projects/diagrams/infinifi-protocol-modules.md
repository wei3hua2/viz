stateDiagram-v2
	 InfiniFiGatewayV1--> MintController
      InfiniFiGatewayV1--> RedeemController
      InfiniFiGatewayV1--> AllocationVoting
      InfiniFiGatewayV1--> LockingController
      InfiniFiGatewayV1--> YieldSharing

      MintController --> Accounting
      RedeemController --> Accounting
      LockingController --> UnwindingModule
      AllocationVoting --> LockingController
      AllocationVoting --> FarmRegistry
      Accounting --> FarmRegistry
      Accounting --> FixedPriceOracle
      YieldSharing --> LockingController
      YieldSharing --> Accounting
      UnwindingModule --> LockingController