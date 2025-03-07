classDiagram
Vault --> Strategy
Vault --> ServiceRegistry
Vault <-- BalancerFlashLender
class IOracle{
    getPrecision()
    getLatestPrice()
    getSafeLatestPrice(uint256 maxAge)
}
IOracle <|-- CbETHToETHOracle
IOracle <|-- WstETHToETHOracleETH
IOracle <|-- WstETHToETHOracle
IOracle <|-- PythOracle
IOracle <|-- ETHOracle
IStrategy <|-- StrategyLeverage