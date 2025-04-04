TroveManager --> StabilityPool
	offset()
	getTotalBoldDeposits()

TroveManager --> CollateralRegistry
	redeemCollateral() => _requireCallerIsCollateralRegistry()

TroveManager --> BorrowerOperations
	onLiquidateTrove
	_requireCallerIsBorrowerOperations




