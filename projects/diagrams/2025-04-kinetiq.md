classDiagram
KHYPE --> PauseRegistry
ValidatorManager --> PauseRegistry
OracleManager --> PauseRegistry
StakingManager --> PauseRegistry
StakingManager --> ValidatorManager : totals
OracleManager --> IOracleAdapter
class PauseRegistry {
    authorizedContracts
}
class StakingManager {
    authorizedManagers
    kHYPEToHYPE(amt)
    HYPEToKHYPE(amt)
}
class IOracleAdapter {
    getPerformance(validator)
}
IOracleAdapter <|-- OracleAdapter
OracleAdapter --> DefaultOracle
class DefaultOracle {
    validatorMetrics
}