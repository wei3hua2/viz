Contract IERC20
Contract vars: []
Inheritance:: []
 
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                              | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| totalSupply()                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| balanceOf(address)                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| transfer(address,uint256)             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| allowance(address,address)            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| approve(address,uint256)              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| transferFrom(address,address,uint256) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IAToken
Contract vars: []
Inheritance:: ['IInitializableAToken', 'IScaledBalanceToken', 'IERC20']
 
+---------------------------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                                                                              | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+---------------------------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| initialize(IPool,address,address,IAaveIncentivesController,uint8,string,string,bytes) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| scaledBalanceOf(address)                                                              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getScaledUserBalanceAndSupply(address)                                                |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| scaledTotalSupply()                                                                   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPreviousIndex(address)                                                             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| totalSupply()                                                                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| balanceOf(address)                                                                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| transfer(address,uint256)                                                             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| allowance(address,address)                                                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| approve(address,uint256)                                                              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| transferFrom(address,address,uint256)                                                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| mint(address,address,uint256,uint256)                                                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| burn(address,address,uint256,uint256)                                                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| mintToTreasury(uint256,uint256)                                                       |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| transferOnLiquidation(address,address,uint256)                                        |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| transferUnderlyingTo(address,uint256)                                                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| handleRepayment(address,address,uint256)                                              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| permit(address,address,uint256,uint256,uint8,bytes32,bytes32)                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| UNDERLYING_ASSET_ADDRESS()                                                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| RESERVE_TREASURY_ADDRESS()                                                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| DOMAIN_SEPARATOR()                                                                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| nonces(address)                                                                       |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| rescueTokens(address,address,uint256)                                                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+---------------------------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IAaveIncentivesController
Contract vars: []
Inheritance:: []
 
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                              | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| handleAction(address,uint256,uint256) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IInitializableAToken
Contract vars: []
Inheritance:: []
 
+---------------------------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                                                                              | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+---------------------------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| initialize(IPool,address,address,IAaveIncentivesController,uint8,string,string,bytes) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+---------------------------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IPool
Contract vars: []
Inheritance:: []
 
+--------------------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                                                                       | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+--------------------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| mintUnbacked(address,uint256,address,uint16)                                   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| backUnbacked(address,uint256,uint256)                                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| supply(address,uint256,address,uint16)                                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| supplyWithPermit(address,uint256,address,uint16,uint256,uint8,bytes32,bytes32) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| withdraw(address,uint256,address)                                              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| borrow(address,uint256,uint256,uint16,address)                                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| repay(address,uint256,uint256,address)                                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| repayWithPermit(address,uint256,uint256,address,uint256,uint8,bytes32,bytes32) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| repayWithATokens(address,uint256,uint256)                                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| swapBorrowRateMode(address,uint256)                                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| rebalanceStableBorrowRate(address,address)                                     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setUserUseReserveAsCollateral(address,bool)                                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| liquidationCall(address,address,address,uint256,bool)                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| flashLoan(address,address[],uint256[],uint256[],address,bytes,uint16)          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| flashLoanSimple(address,address,uint256,bytes,uint16)                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getUserAccountData(address)                                                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| initReserve(address,address,address,address,address)                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| dropReserve(address)                                                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setReserveInterestRateStrategyAddress(address,address)                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setConfiguration(address,DataTypes.ReserveConfigurationMap)                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getConfiguration(address)                                                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getUserConfiguration(address)                                                  |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getReserveNormalizedIncome(address)                                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getReserveNormalizedVariableDebt(address)                                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getReserveData(address)                                                        |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| finalizeTransfer(address,address,address,uint256,uint256,uint256)              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getReservesList()                                                              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getReserveAddressById(uint16)                                                  |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| ADDRESSES_PROVIDER()                                                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| updateBridgeProtocolFee(uint256)                                               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| updateFlashloanPremiums(uint128,uint128)                                       |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| configureEModeCategory(uint8,DataTypes.EModeCategory)                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getEModeCategoryData(uint8)                                                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setUserEMode(uint8)                                                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getUserEMode(address)                                                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| resetIsolationModeTotalDebt(address)                                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| MAX_STABLE_RATE_BORROW_SIZE_PERCENT()                                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| FLASHLOAN_PREMIUM_TOTAL()                                                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| BRIDGE_PROTOCOL_FEE()                                                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| FLASHLOAN_PREMIUM_TO_PROTOCOL()                                                |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| MAX_NUMBER_RESERVES()                                                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| mintToTreasury(address[])                                                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| rescueTokens(address,address,uint256)                                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| deposit(address,uint256,address,uint16)                                        |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+--------------------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IPoolAddressesProvider
Contract vars: []
Inheritance:: []
 
+------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                           | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| getMarketId()                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setMarketId(string)                |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getAddress(bytes32)                |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setAddressAsProxy(bytes32,address) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setAddress(bytes32,address)        |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPool()                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setPoolImpl(address)               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPoolConfigurator()              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setPoolConfiguratorImpl(address)   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPriceOracle()                   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setPriceOracle(address)            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getACLManager()                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setACLManager(address)             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getACLAdmin()                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setACLAdmin(address)               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPriceOracleSentinel()           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setPriceOracleSentinel(address)    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPoolDataProvider()              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setPoolDataProvider(address)       |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IScaledBalanceToken
Contract vars: []
Inheritance:: []
 
+----------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                               | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| scaledBalanceOf(address)               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getScaledUserBalanceAndSupply(address) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| scaledTotalSupply()                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPreviousIndex(address)              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+----------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract WadRayMath
Contract vars: ['WAD', 'HALF_WAD', 'RAY', 'HALF_RAY', 'WAD_RAY_RATIO']
Inheritance:: []
 
+---------------------------------------+------------+-----------+---------------------+--------------------------+-----------------------------+----------------+-----------------------+
| Function                              | Visibility | Modifiers |                Read |                    Write |              Internal Calls | External Calls | Cyclomatic Complexity |
+---------------------------------------+------------+-----------+---------------------+--------------------------+-----------------------------+----------------+-----------------------+
| wadMul(uint256,uint256)               |   internal |        [] | ['HALF_WAD', 'WAD'] |                       [] | ['revert(uint256,uint256)'] |             [] |                     2 |
| wadDiv(uint256,uint256)               |   internal |        [] |             ['WAD'] |                       [] | ['revert(uint256,uint256)'] |             [] |                     2 |
| rayMul(uint256,uint256)               |   internal |        [] | ['HALF_RAY', 'RAY'] |                       [] | ['revert(uint256,uint256)'] |             [] |                     2 |
| rayDiv(uint256,uint256)               |   internal |        [] |             ['RAY'] |                       [] | ['revert(uint256,uint256)'] |             [] |                     2 |
| rayToWad(uint256)                     |   internal |        [] |   ['WAD_RAY_RATIO'] |                       [] |                          [] |             [] |                     2 |
| wadToRay(uint256)                     |   internal |        [] |   ['WAD_RAY_RATIO'] |                       [] | ['revert(uint256,uint256)'] |             [] |                     2 |
| slitherConstructorConstantVariables() |   internal |        [] |                  [] | ['HALF_RAY', 'HALF_WAD'] |                          [] |             [] |                     1 |
|                                       |            |           |                     |           ['RAY', 'WAD'] |                             |                |                       |
|                                       |            |           |                     |        ['WAD_RAY_RATIO'] |                             |                |                       |
+---------------------------------------+------------+-----------+---------------------+--------------------------+-----------------------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract DataTypes
Contract vars: []
Inheritance:: []
 
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract AggregatorV3Interface
Contract vars: []
Inheritance:: []
 
+----------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function             | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| decimals()           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| description()        |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| version()            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getRoundData(uint80) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| latestRoundData()    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+----------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IAccessControl
Contract vars: []
Inheritance:: []
 
+-------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                      | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| hasRole(bytes32,address)      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getRoleAdmin(bytes32)         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| grantRole(bytes32,address)    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| revokeRole(bytes32,address)   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| renounceRole(bytes32,address) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+-------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Ownable
Contract vars: ['_owner']
Inheritance:: ['Context']
 
+-----------------------------+------------+---------------+----------------+------------+---------------------------------------------------------------+----------------+-----------------------+
| Function                    | Visibility |     Modifiers |           Read |      Write |                                                Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------------+------------+---------------+----------------+------------+---------------------------------------------------------------+----------------+-----------------------+
| _msgSender()                |   internal |            [] | ['msg.sender'] |         [] |                                                            [] |             [] |                     1 |
| _msgData()                  |   internal |            [] |   ['msg.data'] |         [] |                                                            [] |             [] |                     1 |
| _contextSuffixLength()      |   internal |            [] |             [] |         [] |                                                            [] |             [] |                     1 |
| constructor(address)        |   internal |            [] |             [] |         [] | ['_transferOwnership', 'revert OwnableInvalidOwner(address)'] |             [] |                     2 |
| owner()                     |     public |            [] |     ['_owner'] |         [] |                                                            [] |             [] |                     1 |
| _checkOwner()               |   internal |            [] |             [] |         [] |                                       ['_msgSender', 'owner'] |             [] |                     2 |
|                             |            |               |                |            |                ['revert OwnableUnauthorizedAccount(address)'] |                |                       |
| renounceOwnership()         |     public | ['onlyOwner'] |             [] |         [] |                           ['_transferOwnership', 'onlyOwner'] |             [] |                     1 |
| transferOwnership(address)  |     public | ['onlyOwner'] |             [] |         [] |                           ['_transferOwnership', 'onlyOwner'] |             [] |                     2 |
|                             |            |               |                |            |                       ['revert OwnableInvalidOwner(address)'] |                |                       |
| _transferOwnership(address) |   internal |            [] |     ['_owner'] | ['_owner'] |                                                            [] |             [] |                     1 |
+-----------------------------+------------+---------------+----------------+------------+---------------------------------------------------------------+----------------+-----------------------+

+-------------+------------+------+-------+-----------------+----------------+-----------------------+
| Modifiers   | Visibility | Read | Write |  Internal Calls | External Calls | Cyclomatic Complexity |
+-------------+------------+------+-------+-----------------+----------------+-----------------------+
| onlyOwner() |   internal |   [] |    [] | ['_checkOwner'] |             [] |                     1 |
+-------------+------------+------+-------+-----------------+----------------+-----------------------+

INFO:Printers:
Contract IERC1822Proxiable
Contract vars: []
Inheritance:: []
 
+-----------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function        | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| proxiableUUID() |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+-----------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IERC20Errors
Contract vars: []
Inheritance:: []
 
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IERC721Errors
Contract vars: []
Inheritance:: []
 
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IERC1155Errors
Contract vars: []
Inheritance:: []
 
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract ERC1967Proxy
Contract vars: []
Inheritance:: ['Proxy']
 
+----------------------------+------------+-----------+------+-------+----------------------------------------------------------------------------+---------------------------------------------------------+-----------------------+
| Function                   | Visibility | Modifiers | Read | Write |                                                             Internal Calls |                                          External Calls | Cyclomatic Complexity |
+----------------------------+------------+-----------+------+-------+----------------------------------------------------------------------------+---------------------------------------------------------+-----------------------+
| _delegate(address)         |   internal |        [] |   [] |    [] |                ['calldatacopy(uint256,uint256,uint256)', 'calldatasize()'] |                                                      [] |                     2 |
|                            |            |           |      |       | ['delegatecall(uint256,uint256,uint256,uint256,uint256,uint256)', 'gas()'] |                                                         |                       |
|                            |            |           |      |       |     ['return(uint256,uint256)', 'returndatacopy(uint256,uint256,uint256)'] |                                                         |                       |
|                            |            |           |      |       |                            ['returndatasize()', 'revert(uint256,uint256)'] |                                                         |                       |
| _implementation()          |   internal |        [] |   [] |    [] |                                                                         [] |                                                      [] |                     2 |
| _fallback()                |   internal |        [] |   [] |    [] |                                           ['_delegate', '_implementation'] |                                                      [] |                     1 |
| fallback()                 |   external |        [] |   [] |    [] |                                                              ['_fallback'] |                                                      [] |                     1 |
| constructor(address,bytes) |     public |        [] |   [] |    [] |                                                                         [] | ['ERC1967Utils.upgradeToAndCall(implementation,_data)'] |                     1 |
| _implementation()          |   internal |        [] |   [] |    [] |                                                                         [] |                    ['ERC1967Utils.getImplementation()'] |                     1 |
+----------------------------+------------+-----------+------+-------+----------------------------------------------------------------------------+---------------------------------------------------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract ERC1967Utils
Contract vars: ['IMPLEMENTATION_SLOT', 'ADMIN_SLOT', 'BEACON_SLOT']
Inheritance:: []
 
+---------------------------+--------+--------+-----------------+---------------------+----------------------------------------------+-------------------------------------------------------------------------------+----------------+
| Function                  | Visibi | Modifi |            Read |               Write |                               Internal Calls |                                                                External Calls | Cyclomatic Com |
+---------------------------+--------+--------+-----------------+---------------------+----------------------------------------------+-------------------------------------------------------------------------------+----------------+
| getImplementation()       | intern |     [] | ['IMPLEMENTATIO |                  [] |                                           [] |                           ['StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT)'] |              1 |
|                           |     al |        |        N_SLOT'] |                     |                                              |                                                                               |                |
| _setImplementation(addres | privat |     [] | ['IMPLEMENTATIO |                  [] |                    ['code(address)', 'revert |                           ['StorageSlot.getAddressSlot(IMPLEMENTATION_SLOT)'] |              2 |
| s)                        |      e |        |        N_SLOT'] |                     |      ERC1967InvalidImplementation(address)'] |                                                                               |                |
| upgradeToAndCall(address, | intern |     [] |              [] |                  [] |   ['_checkNonPayable', '_setImplementation'] |                      ['Address.functionDelegateCall(newImplementation,data)'] |              2 |
| bytes)                    |     al |        |                 |                     |                                              |                                                                               |                |
| getAdmin()                | intern |     [] |  ['ADMIN_SLOT'] |                  [] |                                           [] |                                    ['StorageSlot.getAddressSlot(ADMIN_SLOT)'] |              1 |
|                           |     al |        |                 |                     |                                              |                                                                               |                |
| _setAdmin(address)        | privat |     [] |  ['ADMIN_SLOT'] |                  [] |      ['revert ERC1967InvalidAdmin(address)'] |                                    ['StorageSlot.getAddressSlot(ADMIN_SLOT)'] |              2 |
|                           |      e |        |                 |                     |                                              |                                                                               |                |
| changeAdmin(address)      | intern |     [] |              [] |                  [] |                    ['_setAdmin', 'getAdmin'] |                                                                            [] |              1 |
|                           |     al |        |                 |                     |                                              |                                                                               |                |
| getBeacon()               | intern |     [] | ['BEACON_SLOT'] |                  [] |                                           [] |                                   ['StorageSlot.getAddressSlot(BEACON_SLOT)'] |              1 |
|                           |     al |        |                 |                     |                                              |                                                                               |                |
| _setBeacon(address)       | privat |     [] | ['BEACON_SLOT'] |                  [] |                    ['code(address)', 'revert |                                       ['IBeacon(newBeacon).implementation()', |              3 |
|                           |      e |        |                 |                     |              ERC1967InvalidBeacon(address)'] |                                    'StorageSlot.getAddressSlot(BEACON_SLOT)'] |                |
|                           |        |        |                 |                     |                                     ['revert |                                                                               |                |
|                           |        |        |                 |                     |      ERC1967InvalidImplementation(address)'] |                                                                               |                |
| upgradeBeaconToAndCall(ad | intern |     [] |              [] |                  [] |           ['_checkNonPayable', '_setBeacon'] |    ['Address.functionDelegateCall(IBeacon(newBeacon).implementation(),data)', |              2 |
| dress,bytes)              |     al |        |                 |                     |                                              |                                        'IBeacon(newBeacon).implementation()'] |                |
| _checkNonPayable()        | privat |     [] |   ['msg.value'] |                  [] |               ['revert ERC1967NonPayable()'] |                                                                            [] |              2 |
|                           |      e |        |                 |                     |                                              |                                                                               |                |
| slitherConstructorConstan | intern |     [] |              [] |      ['ADMIN_SLOT', |                                           [] |                                                                            [] |              1 |
| tVariables()              |     al |        |                 |      'BEACON_SLOT'] |                                              |                                                                               |                |
|                           |        |        |                 | ['IMPLEMENTATION_SL |                                              |                                                                               |                |
|                           |        |        |                 |                OT'] |                                              |                                                                               |                |
+---------------------------+--------+--------+-----------------+---------------------+----------------------------------------------+-------------------------------------------------------------------------------+----------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Proxy
Contract vars: []
Inheritance:: []
 
+--------------------+------------+-----------+------+-------+----------------------------------------------------------------------------+----------------+-----------------------+
| Function           | Visibility | Modifiers | Read | Write |                                                             Internal Calls | External Calls | Cyclomatic Complexity |
+--------------------+------------+-----------+------+-------+----------------------------------------------------------------------------+----------------+-----------------------+
| _delegate(address) |   internal |        [] |   [] |    [] |                ['calldatacopy(uint256,uint256,uint256)', 'calldatasize()'] |             [] |                     2 |
|                    |            |           |      |       | ['delegatecall(uint256,uint256,uint256,uint256,uint256,uint256)', 'gas()'] |                |                       |
|                    |            |           |      |       |     ['return(uint256,uint256)', 'returndatacopy(uint256,uint256,uint256)'] |                |                       |
|                    |            |           |      |       |                            ['returndatasize()', 'revert(uint256,uint256)'] |                |                       |
| _implementation()  |   internal |        [] |   [] |    [] |                                                                         [] |             [] |                     2 |
| _fallback()        |   internal |        [] |   [] |    [] |                                           ['_delegate', '_implementation'] |             [] |                     1 |
| fallback()         |   external |        [] |   [] |    [] |                                                              ['_fallback'] |             [] |                     1 |
+--------------------+------------+-----------+------+-------+----------------------------------------------------------------------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IBeacon
Contract vars: []
Inheritance:: []
 
+------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function         | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| implementation() |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract ERC20
Contract vars: ['_balances', '_allowances', '_totalSupply', '_name', '_symbol']
Inheritance:: ['IERC20Errors', 'IERC20Metadata', 'IERC20', 'Context']
 
+--------------------------------------+-----------+----------+----------------------------+----------------------------+-------------------------------------------------------------------------+--------------+---------------------+
| Function                             | Visibilit | Modifier |                       Read |                      Write |                                                          Internal Calls | External Cal | Cyclomatic Complexi |
+--------------------------------------+-----------+----------+----------------------------+----------------------------+-------------------------------------------------------------------------+--------------+---------------------+
| name()                               |  external |       [] |                         [] |                         [] |                                                                      [] |           [] |                   2 |
| symbol()                             |  external |       [] |                         [] |                         [] |                                                                      [] |           [] |                   2 |
| decimals()                           |  external |       [] |                         [] |                         [] |                                                                      [] |           [] |                   2 |
| totalSupply()                        |  external |       [] |                         [] |                         [] |                                                                      [] |           [] |                   2 |
| balanceOf(address)                   |  external |       [] |                         [] |                         [] |                                                                      [] |           [] |                   2 |
| transfer(address,uint256)            |  external |       [] |                         [] |                         [] |                                                                      [] |           [] |                   2 |
| allowance(address,address)           |  external |       [] |                         [] |                         [] |                                                                      [] |           [] |                   2 |
| approve(address,uint256)             |  external |       [] |                         [] |                         [] |                                                                      [] |           [] |                   2 |
| transferFrom(address,address,uint256 |  external |       [] |                         [] |                         [] |                                                                      [] |           [] |                   2 |
| )                                    |           |          |                            |                            |                                                                         |              |                     |
| _msgSender()                         |  internal |       [] |             ['msg.sender'] |                         [] |                                                                      [] |           [] |                   1 |
| _msgData()                           |  internal |       [] |               ['msg.data'] |                         [] |                                                                      [] |           [] |                   1 |
| _contextSuffixLength()               |  internal |       [] |                         [] |                         [] |                                                                      [] |           [] |                   1 |
| constructor(string,string)           |  internal |       [] |                         [] |       ['_name', '_symbol'] |                                                                      [] |           [] |                   1 |
| name()                               |    public |       [] |                  ['_name'] |                         [] |                                                                      [] |           [] |                   1 |
| symbol()                             |    public |       [] |                ['_symbol'] |                         [] |                                                                      [] |           [] |                   1 |
| decimals()                           |    public |       [] |                         [] |                         [] |                                                                      [] |           [] |                   1 |
| totalSupply()                        |    public |       [] |           ['_totalSupply'] |                         [] |                                                                      [] |           [] |                   1 |
| balanceOf(address)                   |    public |       [] |              ['_balances'] |                         [] |                                                                      [] |           [] |                   1 |
| transfer(address,uint256)            |    public |       [] |                         [] |                         [] |                                             ['_msgSender', '_transfer'] |           [] |                   1 |
| allowance(address,address)           |    public |       [] |            ['_allowances'] |                         [] |                                                                      [] |           [] |                   1 |
| approve(address,uint256)             |    public |       [] |                         [] |                         [] |                                              ['_approve', '_msgSender'] |           [] |                   1 |
| transferFrom(address,address,uint256 |    public |       [] |                         [] |                         [] |                                       ['_msgSender', '_spendAllowance'] |           [] |                   1 |
| )                                    |           |          |                            |                            |                                                           ['_transfer'] |              |                     |
| _transfer(address,address,uint256)   |  internal |       [] |                         [] |                         [] |                     ['_update', 'revert ERC20InvalidReceiver(address)'] |           [] |                   3 |
|                                      |           |          |                            |                            |                                  ['revert ERC20InvalidSender(address)'] |              |                     |
| _update(address,address,uint256)     |  internal |       [] |              ['_balances', |              ['_balances', |            ['revert ERC20InsufficientBalance(address,uint256,uint256)'] |           [] |                   4 |
|                                      |           |          |            '_totalSupply'] |            '_totalSupply'] |                                                                         |              |                     |
| _mint(address,uint256)               |  internal |       [] |                         [] |                         [] |                     ['_update', 'revert ERC20InvalidReceiver(address)'] |           [] |                   2 |
| _burn(address,uint256)               |  internal |       [] |                         [] |                         [] |                       ['_update', 'revert ERC20InvalidSender(address)'] |           [] |                   2 |
| _approve(address,address,uint256)    |  internal |       [] |                         [] |                         [] |                                                            ['_approve'] |           [] |                   1 |
| _approve(address,address,uint256,boo |  internal |       [] |                         [] |            ['_allowances'] |                        ['revert ERC20InvalidApprover(address)', 'revert |           [] |                   4 |
| l)                                   |           |          |                            |                            |                                          ERC20InvalidSpender(address)'] |              |                     |
| _spendAllowance(address,address,uint |  internal |       [] |                         [] |                         [] |                                               ['_approve', 'allowance'] |           [] |                   3 |
| 256)                                 |           |          |                            |                            |          ['revert ERC20InsufficientAllowance(address,uint256,uint256)'] |              |                     |
+--------------------------------------+-----------+----------+----------------------------+----------------------------+-------------------------------------------------------------------------+--------------+---------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IERC20
Contract vars: []
Inheritance:: []
 
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                              | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| totalSupply()                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| balanceOf(address)                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| transfer(address,uint256)             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| allowance(address,address)            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| approve(address,uint256)              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| transferFrom(address,address,uint256) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IERC20Metadata
Contract vars: []
Inheritance:: ['IERC20']
 
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                              | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| totalSupply()                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| balanceOf(address)                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| transfer(address,uint256)             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| allowance(address,address)            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| approve(address,uint256)              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| transferFrom(address,address,uint256) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| name()                                |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| symbol()                              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| decimals()                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IERC20Permit
Contract vars: []
Inheritance:: []
 
+---------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                                                      | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+---------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| permit(address,address,uint256,uint256,uint8,bytes32,bytes32) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| nonces(address)                                               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| DOMAIN_SEPARATOR()                                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+---------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract SafeERC20
Contract vars: []
Inheritance:: []
 
+--------------------------------------+---------+--------+--------+-----+-----------------------------------------------------------------+------------------------------------------------------------------------+-----------------+
| Function                             | Visibil | Modifi |   Read | Wri |                                                  Internal Calls |                                                         External Calls | Cyclomatic Comp |
+--------------------------------------+---------+--------+--------+-----+-----------------------------------------------------------------+------------------------------------------------------------------------+-----------------+
| safeTransfer(IERC20,address,uint256) | interna |     [] |     [] |  [] |                     ['_callOptionalReturn', 'abi.encodeCall()'] |                          ['abi.encodeCall(token.transfer,(to,value))'] |               1 |
|                                      |       l |        |        |     |                                                                 |                                                                        |                 |
| safeTransferFrom(IERC20,address,addr | interna |     [] |     [] |  [] |                     ['_callOptionalReturn', 'abi.encodeCall()'] |                 ['abi.encodeCall(token.transferFrom,(from,to,value))'] |               1 |
| ess,uint256)                         |       l |        |        |     |                                                                 |                                                                        |                 |
| safeIncreaseAllowance(IERC20,address | interna |     [] | ['this |  [] |                                                ['forceApprove'] |                             ['token.allowance(address(this),spender)'] |               1 |
| ,uint256)                            |       l |        |     '] |     |                                                                 |                                                                        |                 |
| safeDecreaseAllowance(IERC20,address | interna |     [] | ['this |  [] |                                        ['forceApprove', 'revert |                             ['token.allowance(address(this),spender)'] |               2 |
| ,uint256)                            |       l |        |     '] |     |     SafeERC20FailedDecreaseAllowance(address,uint256,uint256)'] |                                                                        |                 |
| forceApprove(IERC20,address,uint256) | interna |     [] |     [] |  [] |              ['_callOptionalReturn', '_callOptionalReturnBool'] |                          ['abi.encodeCall(token.approve,(spender,0))', |               2 |
|                                      |       l |        |        |     |                                            ['abi.encodeCall()'] |                       'abi.encodeCall(token.approve,(spender,value))'] |                 |
| _callOptionalReturn(IERC20,bytes)    | private |     [] |     [] |  [] |    ['abi.decode()', 'revert SafeERC20FailedOperation(address)'] | ['abi.decode(returndata,(bool))', 'address(token).functionCall(data)'] |               2 |
| _callOptionalReturnBool(IERC20,bytes | private |     [] |     [] |  [] |                               ['abi.decode()', 'code(address)'] |         ['abi.decode(returndata,(bool))', 'address(token).call(data)'] |               1 |
| )                                    |         |        |        |     |                                                                 |                                                                        |                 |
+--------------------------------------+---------+--------+--------+-----+-----------------------------------------------------------------+------------------------------------------------------------------------+-----------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Address
Contract vars: []
Inheritance:: []
 
+------------------------------------------------+------------+-----------+----------+-------+--------------------------------------------------------------------+-------------------------------------+-----------------------+
| Function                                       | Visibility | Modifiers |     Read | Write |                                                     Internal Calls |                      External Calls | Cyclomatic Complexity |
+------------------------------------------------+------------+-----------+----------+-------+--------------------------------------------------------------------+-------------------------------------+-----------------------+
| sendValue(address,uint256)                     |   internal |        [] | ['this'] |    [] | ['balance(address)', 'revert AddressInsufficientBalance(address)'] | ['recipient.call{value: amount}()'] |                     3 |
|                                                |            |           |          |       |                                       ['revert FailedInnerCall()'] |                                     |                       |
| functionCall(address,bytes)                    |   internal |        [] |       [] |    [] |                                          ['functionCallWithValue'] |                                  [] |                     1 |
| functionCallWithValue(address,bytes,uint256)   |   internal |        [] | ['this'] |    [] | ['balance(address)', 'revert AddressInsufficientBalance(address)'] | ['target.call{value: value}(data)'] |                     2 |
|                                                |            |           |          |       |                                     ['verifyCallResultFromTarget'] |                                     |                       |
| functionStaticCall(address,bytes)              |   internal |        [] |       [] |    [] |                                     ['verifyCallResultFromTarget'] |         ['target.staticcall(data)'] |                     1 |
| functionDelegateCall(address,bytes)            |   internal |        [] |       [] |    [] |                                     ['verifyCallResultFromTarget'] |       ['target.delegatecall(data)'] |                     1 |
| verifyCallResultFromTarget(address,bool,bytes) |   internal |        [] |       [] |    [] |                                       ['_revert', 'code(address)'] |                                  [] |                     2 |
|                                                |            |           |          |       |                               ['revert AddressEmptyCode(address)'] |                                     |                       |
| verifyCallResult(bool,bytes)                   |   internal |        [] |       [] |    [] |                                                        ['_revert'] |                                  [] |                     1 |
| _revert(bytes)                                 |    private |        [] |       [] |    [] |                     ['mload(uint256)', 'revert FailedInnerCall()'] |                                  [] |                     2 |
|                                                |            |           |          |       |                                        ['revert(uint256,uint256)'] |                                     |                       |
+------------------------------------------------+------------+-----------+----------+-------+--------------------------------------------------------------------+-------------------------------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Context
Contract vars: []
Inheritance:: []
 
+------------------------+------------+-----------+----------------+-------+----------------+----------------+-----------------------+
| Function               | Visibility | Modifiers |           Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+------------------------+------------+-----------+----------------+-------+----------------+----------------+-----------------------+
| _msgSender()           |   internal |        [] | ['msg.sender'] |    [] |             [] |             [] |                     1 |
| _msgData()             |   internal |        [] |   ['msg.data'] |    [] |             [] |             [] |                     1 |
| _contextSuffixLength() |   internal |        [] |             [] |    [] |             [] |             [] |                     1 |
+------------------------+------------+-----------+----------------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract StorageSlot
Contract vars: []
Inheritance:: []
 
+-------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| getAddressSlot(bytes32) |   internal |        [] |   [] |    [] |             [] |             [] |                     1 |
| getBooleanSlot(bytes32) |   internal |        [] |   [] |    [] |             [] |             [] |                     1 |
| getBytes32Slot(bytes32) |   internal |        [] |   [] |    [] |             [] |             [] |                     1 |
| getUint256Slot(bytes32) |   internal |        [] |   [] |    [] |             [] |             [] |                     1 |
| getStringSlot(bytes32)  |   internal |        [] |   [] |    [] |             [] |             [] |                     1 |
| getStringSlot(string)   |   internal |        [] |   [] |    [] |             [] |             [] |                     1 |
| getBytesSlot(bytes32)   |   internal |        [] |   [] |    [] |             [] |             [] |                     1 |
| getBytesSlot(bytes)     |   internal |        [] |   [] |    [] |             [] |             [] |                     1 |
+-------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Strings
Contract vars: ['HEX_DIGITS', 'ADDRESS_LENGTH']
Inheritance:: []
 
+--------------------------------+----------+---------+----------------+---------------------------+-----------------------------------------------+---------------------------------------------------------------+-------------------+
| Function                       | Visibili | Modifie |           Read |                     Write |                                Internal Calls |                                                External Calls | Cyclomatic Comple |
+--------------------------------+----------+---------+----------------+---------------------------+-----------------------------------------------+---------------------------------------------------------------+-------------------+
| toString(uint256)              | internal |      [] | ['HEX_DIGITS'] |                        [] |                     ['byte(uint256,uint256)', |                   ['Math.log10(value)', 'new string(length)'] |                 3 |
|                                |          |         |                |                           |                   'mstore8(uint256,uint256)'] |                                                               |                   |
| toStringSigned(int256)         | internal |      [] |             [] |                        [] |               ['string.concat()', 'toString'] |                                     ['SignedMath.abs(value)', |                 1 |
|                                |          |         |                |                           |                                               |            'string.concat(,toString(SignedMath.abs(value)))'] |                   |
|                                |          |         |                |                           |                                               |          ['string.concat(-,toString(SignedMath.abs(value)))'] |                   |
| toHexString(uint256)           | internal |      [] |             [] |                        [] |                               ['toHexString'] |                                        ['Math.log256(value)'] |                 1 |
| toHexString(uint256,uint256)   | internal |      [] | ['HEX_DIGITS'] |                        [] | ['revert StringsInsufficientHexLength(uint256 |                                 ['new bytes(2 * length + 2)'] |                 3 |
|                                |          |         |                |                           |                                   ,uint256)'] |                                                               |                   |
| toHexString(address)           | internal |      [] | ['ADDRESS_LENG |                        [] |                               ['toHexString'] |                                                            [] |                 1 |
|                                |          |         |           TH'] |                           |                                               |                                                               |                   |
| equal(string,string)           | internal |      [] |             [] |                        [] |                          ['keccak256(bytes)'] |                                                            [] |                 1 |
| slitherConstructorConstantVari | internal |      [] |             [] |        ['ADDRESS_LENGTH', |                                            [] |                                                            [] |                 1 |
| ables()                        |          |         |                |             'HEX_DIGITS'] |                                               |                                                               |                   |
+--------------------------------+----------+---------+----------------+---------------------------+-----------------------------------------------+---------------------------------------------------------------+-------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IERC165
Contract vars: []
Inheritance:: []
 
+---------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                  | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+---------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| supportsInterface(bytes4) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+---------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Math
Contract vars: []
Inheritance:: []
 
+-----------------------------------------------+------------+-----------+------+-------+----------------------------------------------------------------------+----------------+-----------------------+
| Function                                      | Visibility | Modifiers | Read | Write |                                                       Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------------------------------+------------+-----------+------+-------+----------------------------------------------------------------------+----------------+-----------------------+
| tryAdd(uint256,uint256)                       |   internal |        [] |   [] |    [] |                                                                   [] |             [] |                     1 |
| trySub(uint256,uint256)                       |   internal |        [] |   [] |    [] |                                                                   [] |             [] |                     1 |
| tryMul(uint256,uint256)                       |   internal |        [] |   [] |    [] |                                                                   [] |             [] |                     1 |
| tryDiv(uint256,uint256)                       |   internal |        [] |   [] |    [] |                                                                   [] |             [] |                     1 |
| tryMod(uint256,uint256)                       |   internal |        [] |   [] |    [] |                                                                   [] |             [] |                     1 |
| max(uint256,uint256)                          |   internal |        [] |   [] |    [] |                                                                   [] |             [] |                     1 |
| min(uint256,uint256)                          |   internal |        [] |   [] |    [] |                                                                   [] |             [] |                     1 |
| average(uint256,uint256)                      |   internal |        [] |   [] |    [] |                                                                   [] |             [] |                     1 |
| ceilDiv(uint256,uint256)                      |   internal |        [] |   [] |    [] |                                                                   [] |             [] |                     1 |
| mulDiv(uint256,uint256,uint256)               |   internal |        [] |   [] |    [] | ['mulmod(uint256,uint256,uint256)', 'revert MathOverflowedMulDiv()'] |             [] |                     1 |
| mulDiv(uint256,uint256,uint256,Math.Rounding) |   internal |        [] |   [] |    [] |                        ['mulDiv', 'mulmod(uint256,uint256,uint256)'] |             [] |                     2 |
|                                               |            |           |      |       |                                                 ['unsignedRoundsUp'] |                |                       |
| sqrt(uint256)                                 |   internal |        [] |   [] |    [] |                                                      ['log2', 'min'] |             [] |                     1 |
| sqrt(uint256,Math.Rounding)                   |   internal |        [] |   [] |    [] |                                         ['sqrt', 'unsignedRoundsUp'] |             [] |                     1 |
| log2(uint256)                                 |   internal |        [] |   [] |    [] |                                                                   [] |             [] |                     9 |
| log2(uint256,Math.Rounding)                   |   internal |        [] |   [] |    [] |                                         ['log2', 'unsignedRoundsUp'] |             [] |                     1 |
| log10(uint256)                                |   internal |        [] |   [] |    [] |                                                                   [] |             [] |                     8 |
| log10(uint256,Math.Rounding)                  |   internal |        [] |   [] |    [] |                                        ['log10', 'unsignedRoundsUp'] |             [] |                     1 |
| log256(uint256)                               |   internal |        [] |   [] |    [] |                                                                   [] |             [] |                     6 |
| log256(uint256,Math.Rounding)                 |   internal |        [] |   [] |    [] |                                       ['log256', 'unsignedRoundsUp'] |             [] |                     1 |
| unsignedRoundsUp(Math.Rounding)               |   internal |        [] |   [] |    [] |                                                                   [] |             [] |                     1 |
+-----------------------------------------------+------------+-----------+------+-------+----------------------------------------------------------------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract SafeCast
Contract vars: []
Inheritance:: []
 
+--------------------+------------+-----------+------+-------+----------------------------------------------------------+----------------+-----------------------+
| Function           | Visibility | Modifiers | Read | Write |                                           Internal Calls | External Calls | Cyclomatic Complexity |
+--------------------+------------+-----------+------+-------+----------------------------------------------------------+----------------+-----------------------+
| toUint248(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint240(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint232(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint224(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint216(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint208(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint200(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint192(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint184(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint176(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint168(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint160(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint152(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint144(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint136(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint128(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint120(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint112(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint104(uint256) |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint96(uint256)  |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint88(uint256)  |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint80(uint256)  |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint72(uint256)  |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint64(uint256)  |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint56(uint256)  |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint48(uint256)  |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint40(uint256)  |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint32(uint256)  |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint24(uint256)  |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint16(uint256)  |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint8(uint256)   |   internal |        [] |   [] |    [] | ['revert SafeCastOverflowedUintDowncast(uint8,uint256)'] |             [] |                     2 |
| toUint256(int256)  |   internal |        [] |   [] |    [] |           ['revert SafeCastOverflowedIntToUint(int256)'] |             [] |                     2 |
| toInt248(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt240(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt232(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt224(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt216(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt208(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt200(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt192(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt184(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt176(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt168(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt160(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt152(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt144(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt136(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt128(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt120(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt112(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt104(int256)   |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt96(int256)    |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt88(int256)    |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt80(int256)    |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt72(int256)    |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt64(int256)    |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt56(int256)    |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt48(int256)    |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt40(int256)    |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt32(int256)    |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt24(int256)    |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt16(int256)    |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt8(int256)     |   internal |        [] |   [] |    [] |   ['revert SafeCastOverflowedIntDowncast(uint8,int256)'] |             [] |                     2 |
| toInt256(uint256)  |   internal |        [] |   [] |    [] |          ['revert SafeCastOverflowedUintToInt(uint256)'] |             [] |                     2 |
+--------------------+------------+-----------+------+-------+----------------------------------------------------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract SignedMath
Contract vars: []
Inheritance:: []
 
+------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function               | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| max(int256,int256)     |   internal |        [] |   [] |    [] |             [] |             [] |                     1 |
| min(int256,int256)     |   internal |        [] |   [] |    [] |             [] |             [] |                     1 |
| average(int256,int256) |   internal |        [] |   [] |    [] |             [] |             [] |                     1 |
| abs(int256)            |   internal |        [] |   [] |    [] |             [] |             [] |                     1 |
+------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract EnumerableSet
Contract vars: []
Inheritance:: []
 
+--------------------------------------------+------------+-----------+------+-------+----------------+-----------------------------+-----------------------+
| Function                                   | Visibility | Modifiers | Read | Write | Internal Calls |              External Calls | Cyclomatic Complexity |
+--------------------------------------------+------------+-----------+------+-------+----------------+-----------------------------+-----------------------+
| _add(EnumerableSet.Set,bytes32)            |    private |        [] |   [] |    [] |  ['_contains'] | ['set._values.push(value)'] |                     1 |
| _remove(EnumerableSet.Set,bytes32)         |    private |        [] |   [] |    [] |             [] |       ['set._values.pop()'] |                     2 |
| _contains(EnumerableSet.Set,bytes32)       |    private |        [] |   [] |    [] |             [] |                          [] |                     1 |
| _length(EnumerableSet.Set)                 |    private |        [] |   [] |    [] |             [] |                          [] |                     1 |
| _at(EnumerableSet.Set,uint256)             |    private |        [] |   [] |    [] |             [] |                          [] |                     1 |
| _values(EnumerableSet.Set)                 |    private |        [] |   [] |    [] |             [] |                          [] |                     1 |
| add(EnumerableSet.Bytes32Set,bytes32)      |   internal |        [] |   [] |    [] |       ['_add'] |                          [] |                     1 |
| remove(EnumerableSet.Bytes32Set,bytes32)   |   internal |        [] |   [] |    [] |    ['_remove'] |                          [] |                     1 |
| contains(EnumerableSet.Bytes32Set,bytes32) |   internal |        [] |   [] |    [] |  ['_contains'] |                          [] |                     1 |
| length(EnumerableSet.Bytes32Set)           |   internal |        [] |   [] |    [] |    ['_length'] |                          [] |                     1 |
| at(EnumerableSet.Bytes32Set,uint256)       |   internal |        [] |   [] |    [] |        ['_at'] |                          [] |                     1 |
| values(EnumerableSet.Bytes32Set)           |   internal |        [] |   [] |    [] |    ['_values'] |                          [] |                     1 |
| add(EnumerableSet.AddressSet,address)      |   internal |        [] |   [] |    [] |       ['_add'] |                          [] |                     1 |
| remove(EnumerableSet.AddressSet,address)   |   internal |        [] |   [] |    [] |    ['_remove'] |                          [] |                     1 |
| contains(EnumerableSet.AddressSet,address) |   internal |        [] |   [] |    [] |  ['_contains'] |                          [] |                     1 |
| length(EnumerableSet.AddressSet)           |   internal |        [] |   [] |    [] |    ['_length'] |                          [] |                     1 |
| at(EnumerableSet.AddressSet,uint256)       |   internal |        [] |   [] |    [] |        ['_at'] |                          [] |                     1 |
| values(EnumerableSet.AddressSet)           |   internal |        [] |   [] |    [] |    ['_values'] |                          [] |                     1 |
| add(EnumerableSet.UintSet,uint256)         |   internal |        [] |   [] |    [] |       ['_add'] |                          [] |                     1 |
| remove(EnumerableSet.UintSet,uint256)      |   internal |        [] |   [] |    [] |    ['_remove'] |                          [] |                     1 |
| contains(EnumerableSet.UintSet,uint256)    |   internal |        [] |   [] |    [] |  ['_contains'] |                          [] |                     1 |
| length(EnumerableSet.UintSet)              |   internal |        [] |   [] |    [] |    ['_length'] |                          [] |                     1 |
| at(EnumerableSet.UintSet,uint256)          |   internal |        [] |   [] |    [] |        ['_at'] |                          [] |                     1 |
| values(EnumerableSet.UintSet)              |   internal |        [] |   [] |    [] |    ['_values'] |                          [] |                     1 |
+--------------------------------------------+------------+-----------+------+-------+----------------+-----------------------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract AccessControlUpgradeable
Contract vars: ['DEFAULT_ADMIN_ROLE', 'AccessControlStorageLocation']
Inheritance:: ['ERC165Upgradeable', 'IERC165', 'IAccessControl', 'ContextUpgradeable', 'Initializable']
 
+-------------------------------+---------+------------------------+---------------------------+--------------------------------------------+---------------------------------------------------------+-------------+------------------+
| Function                      | Visibil |              Modifiers |                      Read |                                      Write |                                          Internal Calls | External Ca | Cyclomatic Compl |
+-------------------------------+---------+------------------------+---------------------------+--------------------------------------------+---------------------------------------------------------+-------------+------------------+
| __ERC165_init()               | interna |   ['onlyInitializing'] |                        [] |                                         [] |                                    ['onlyInitializing'] |          [] |                1 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| __ERC165_init_unchained()     | interna |   ['onlyInitializing'] |                        [] |                                         [] |                                    ['onlyInitializing'] |          [] |                1 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| supportsInterface(bytes4)     |  public |                     [] |                        [] |                                         [] |                                              ['type()'] |          [] |                1 |
| supportsInterface(bytes4)     | externa |                     [] |                        [] |                                         [] |                                                      [] |          [] |                2 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| _checkInitializing()          | interna |                     [] |                        [] |                                         [] |         ['_isInitializing', 'revert NotInitializing()'] |          [] |                2 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| _disableInitializers()        | interna |                     [] |                        [] |                                         [] |                    ['_getInitializableStorage', 'revert |          [] |                3 |
|                               |       l |                        |                           |                                            |                               InvalidInitialization()'] |             |                  |
| _getInitializedVersion()      | interna |                     [] |                        [] |                                         [] |                            ['_getInitializableStorage'] |          [] |                1 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| _isInitializing()             | interna |                     [] |                        [] |                                         [] |                            ['_getInitializableStorage'] |          [] |                1 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| _getInitializableStorage()    | private |                     [] | ['INITIALIZABLE_STORAGE'] |                                         [] |                                                      [] |          [] |                1 |
| hasRole(bytes32,address)      | externa |                     [] |                        [] |                                         [] |                                                      [] |          [] |                2 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| getRoleAdmin(bytes32)         | externa |                     [] |                        [] |                                         [] |                                                      [] |          [] |                2 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| grantRole(bytes32,address)    | externa |                     [] |                        [] |                                         [] |                                                      [] |          [] |                2 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| revokeRole(bytes32,address)   | externa |                     [] |                        [] |                                         [] |                                                      [] |          [] |                2 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| renounceRole(bytes32,address) | externa |                     [] |                        [] |                                         [] |                                                      [] |          [] |                2 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| __Context_init()              | interna |   ['onlyInitializing'] |                        [] |                                         [] |                                    ['onlyInitializing'] |          [] |                1 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| __Context_init_unchained()    | interna |   ['onlyInitializing'] |                        [] |                                         [] |                                    ['onlyInitializing'] |          [] |                1 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| _msgSender()                  | interna |                     [] |            ['msg.sender'] |                                         [] |                                                      [] |          [] |                1 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| _msgData()                    | interna |                     [] |              ['msg.data'] |                                         [] |                                                      [] |          [] |                1 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| _contextSuffixLength()        | interna |                     [] |                        [] |                                         [] |                                                      [] |          [] |                1 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| _getAccessControlStorage()    | private |                     [] | ['AccessControlStorageLoc |                                         [] |                                                      [] |          [] |                1 |
|                               |         |                        |                   ation'] |                                            |                                                         |             |                  |
| __AccessControl_init()        | interna |   ['onlyInitializing'] |                        [] |                                         [] |                                    ['onlyInitializing'] |          [] |                1 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| __AccessControl_init_unchaine | interna |   ['onlyInitializing'] |                        [] |                                         [] |                                    ['onlyInitializing'] |          [] |                1 |
| d()                           |       l |                        |                           |                                            |                                                         |             |                  |
| supportsInterface(bytes4)     |  public |                     [] |                        [] |                                         [] |                         ['supportsInterface', 'type()'] |          [] |                1 |
| hasRole(bytes32,address)      |  public |                     [] |                        [] |                                         [] |                            ['_getAccessControlStorage'] |          [] |                1 |
| _checkRole(bytes32)           | interna |                     [] |                        [] |                                         [] |                            ['_checkRole', '_msgSender'] |          [] |                1 |
|                               |       l |                        |                           |                                            |                                                         |             |                  |
| _checkRole(bytes32,address)   | interna |                     [] |                        [] |                                         [] |                                     ['hasRole', 'revert |          [] |                2 |
|                               |       l |                        |                           |                                            |     AccessControlUnauthorizedAccount(address,bytes32)'] |             |                  |
| getRoleAdmin(bytes32)         |  public |                     [] |                        [] |                                         [] |                            ['_getAccessControlStorage'] |          [] |                1 |
| grantRole(bytes32,address)    |  public |       ['getRoleAdmin', |                        [] |                                         [] |                          ['_grantRole', 'getRoleAdmin'] |          [] |                1 |
|                               |         |            'onlyRole'] |                           |                                            |                                            ['onlyRole'] |             |                  |
| revokeRole(bytes32,address)   |  public |       ['getRoleAdmin', |                        [] |                                         [] |                         ['_revokeRole', 'getRoleAdmin'] |          [] |                1 |
|                               |         |            'onlyRole'] |                           |                                            |                                            ['onlyRole'] |             |                  |
| renounceRole(bytes32,address) |  public |                     [] |                        [] |                                         [] |                           ['_msgSender', '_revokeRole'] |          [] |                2 |
|                               |         |                        |                           |                                            |               ['revert AccessControlBadConfirmation()'] |             |                  |
| _setRoleAdmin(bytes32,bytes32 | interna |                     [] |                        [] |                                         [] |            ['_getAccessControlStorage', 'getRoleAdmin'] |          [] |                1 |
| )                             |       l |                        |                           |                                            |                                                         |             |                  |
| _grantRole(bytes32,address)   | interna |                     [] |                        [] |                                         [] |              ['_getAccessControlStorage', '_msgSender'] |          [] |                1 |
|                               |       l |                        |                           |                                            |                                             ['hasRole'] |             |                  |
| _revokeRole(bytes32,address)  | interna |                     [] |                        [] |                                         [] |              ['_getAccessControlStorage', '_msgSender'] |          [] |                1 |
|                               |       l |                        |                           |                                            |                                             ['hasRole'] |             |                  |
| slitherConstructorConstantVar | interna |                     [] |                        [] |           ['AccessControlStorageLocation', |                                                      [] |          [] |                1 |
| iables()                      |       l |                        |                           |                      'DEFAULT_ADMIN_ROLE'] |                                                         |             |                  |
+-------------------------------+---------+------------------------+---------------------------+--------------------------------------------+---------------------------------------------------------+-------------+------------------+

+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| Modifiers             | Visibility |     Read | Write |                                                 Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| initializer()         |   internal | ['this'] |    [] |                  ['_getInitializableStorage', 'code(address)'] |             [] |                     4 |
|                       |            |          |       |                             ['revert InvalidInitialization()'] |                |                       |
| reinitializer(uint64) |   internal |       [] |    [] | ['_getInitializableStorage', 'revert InvalidInitialization()'] |             [] |                     2 |
| onlyInitializing()    |   internal |       [] |    [] |                                         ['_checkInitializing'] |             [] |                     1 |
| onlyRole(bytes32)     |   internal |       [] |    [] |                                                 ['_checkRole'] |             [] |                     1 |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+

INFO:Printers:
Contract Ownable2StepUpgradeable
Contract vars: ['Ownable2StepStorageLocation']
Inheritance:: ['OwnableUpgradeable', 'ContextUpgradeable', 'Initializable']
 
+------------------------------------+-----------+--------------------+------------------------------+------------------------------+-----------------------------------------------------------+---------------+---------------------+
| Function                           | Visibilit |          Modifiers |                         Read |                        Write |                                            Internal Calls | External Call | Cyclomatic Complexi |
+------------------------------------+-----------+--------------------+------------------------------+------------------------------+-----------------------------------------------------------+---------------+---------------------+
| _getOwnableStorage()               |   private |                 [] |   ['OwnableStorageLocation'] |                           [] |                                                        [] |            [] |                   1 |
| __Ownable_init(address)            |  internal | ['onlyInitializing |                           [] |                           [] |          ['__Ownable_init_unchained', 'onlyInitializing'] |            [] |                   1 |
|                                    |           |                 '] |                              |                              |                                                           |               |                     |
| __Ownable_init_unchained(address)  |  internal | ['onlyInitializing |                           [] |                           [] |                ['_transferOwnership', 'onlyInitializing'] |            [] |                   2 |
|                                    |           |                 '] |                              |                              |                   ['revert OwnableInvalidOwner(address)'] |               |                     |
| owner()                            |    public |                 [] |                           [] |                           [] |                                    ['_getOwnableStorage'] |            [] |                   1 |
| _checkOwner()                      |  internal |                 [] |                           [] |                           [] |                                   ['_msgSender', 'owner'] |            [] |                   2 |
|                                    |           |                    |                              |                              |            ['revert OwnableUnauthorizedAccount(address)'] |               |                     |
| renounceOwnership()                |    public |      ['onlyOwner'] |                           [] |                           [] |                       ['_transferOwnership', 'onlyOwner'] |            [] |                   1 |
| transferOwnership(address)         |    public |      ['onlyOwner'] |                           [] |                           [] |                       ['_transferOwnership', 'onlyOwner'] |            [] |                   2 |
|                                    |           |                    |                              |                              |                   ['revert OwnableInvalidOwner(address)'] |               |                     |
| _transferOwnership(address)        |  internal |                 [] |                           [] |                           [] |                                    ['_getOwnableStorage'] |            [] |                   1 |
| __Context_init()                   |  internal | ['onlyInitializing |                           [] |                           [] |                                      ['onlyInitializing'] |            [] |                   1 |
|                                    |           |                 '] |                              |                              |                                                           |               |                     |
| __Context_init_unchained()         |  internal | ['onlyInitializing |                           [] |                           [] |                                      ['onlyInitializing'] |            [] |                   1 |
|                                    |           |                 '] |                              |                              |                                                           |               |                     |
| _msgSender()                       |  internal |                 [] |               ['msg.sender'] |                           [] |                                                        [] |            [] |                   1 |
| _msgData()                         |  internal |                 [] |                 ['msg.data'] |                           [] |                                                        [] |            [] |                   1 |
| _contextSuffixLength()             |  internal |                 [] |                           [] |                           [] |                                                        [] |            [] |                   1 |
| _checkInitializing()               |  internal |                 [] |                           [] |                           [] |           ['_isInitializing', 'revert NotInitializing()'] |            [] |                   2 |
| _disableInitializers()             |  internal |                 [] |                           [] |                           [] |                      ['_getInitializableStorage', 'revert |            [] |                   3 |
|                                    |           |                    |                              |                              |                                 InvalidInitialization()'] |               |                     |
| _getInitializedVersion()           |  internal |                 [] |                           [] |                           [] |                              ['_getInitializableStorage'] |            [] |                   1 |
| _isInitializing()                  |  internal |                 [] |                           [] |                           [] |                              ['_getInitializableStorage'] |            [] |                   1 |
| _getInitializableStorage()         |   private |                 [] |    ['INITIALIZABLE_STORAGE'] |                           [] |                                                        [] |            [] |                   1 |
| _getOwnable2StepStorage()          |   private |                 [] | ['Ownable2StepStorageLocatio |                           [] |                                                        [] |            [] |                   1 |
|                                    |           |                    |                          n'] |                              |                                                           |               |                     |
| __Ownable2Step_init()              |  internal | ['onlyInitializing |                           [] |                           [] |                                      ['onlyInitializing'] |            [] |                   1 |
|                                    |           |                 '] |                              |                              |                                                           |               |                     |
| __Ownable2Step_init_unchained()    |  internal | ['onlyInitializing |                           [] |                           [] |                                      ['onlyInitializing'] |            [] |                   1 |
|                                    |           |                 '] |                              |                              |                                                           |               |                     |
| pendingOwner()                     |    public |                 [] |                           [] |                           [] |                               ['_getOwnable2StepStorage'] |            [] |                   1 |
| transferOwnership(address)         |    public |      ['onlyOwner'] |                           [] |                           [] |                  ['_getOwnable2StepStorage', 'onlyOwner'] |            [] |                   1 |
|                                    |           |                    |                              |                              |                                                 ['owner'] |               |                     |
| _transferOwnership(address)        |  internal |                 [] |                           [] |                           [] |         ['_getOwnable2StepStorage', '_transferOwnership'] |            [] |                   1 |
| acceptOwnership()                  |    public |                 [] |                           [] |                           [] |                      ['_msgSender', '_transferOwnership'] |            [] |                   2 |
|                                    |           |                    |                              |                              |                                  ['pendingOwner', 'revert |               |                     |
|                                    |           |                    |                              |                              |                     OwnableUnauthorizedAccount(address)'] |               |                     |
| slitherConstructorConstantVariable |  internal |                 [] |                           [] | ['Ownable2StepStorageLocatio |                                                        [] |            [] |                   1 |
| s()                                |           |                    |                              |                          n'] |                                                           |               |                     |
+------------------------------------+-----------+--------------------+------------------------------+------------------------------+-----------------------------------------------------------+---------------+---------------------+

+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| Modifiers             | Visibility |     Read | Write |                                                 Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| onlyOwner()           |   internal |       [] |    [] |                                                ['_checkOwner'] |             [] |                     1 |
| initializer()         |   internal | ['this'] |    [] |                  ['_getInitializableStorage', 'code(address)'] |             [] |                     4 |
|                       |            |          |       |                             ['revert InvalidInitialization()'] |                |                       |
| reinitializer(uint64) |   internal |       [] |    [] | ['_getInitializableStorage', 'revert InvalidInitialization()'] |             [] |                     2 |
| onlyInitializing()    |   internal |       [] |    [] |                                         ['_checkInitializing'] |             [] |                     1 |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+

INFO:Printers:
Contract OwnableUpgradeable
Contract vars: ['OwnableStorageLocation']
Inheritance:: ['ContextUpgradeable', 'Initializable']
 
+-------------------------------------+-----------+---------------------+---------------------------+---------------------------+--------------------------------------------------------------+---------------+----------------------+
| Function                            | Visibilit |           Modifiers |                      Read |                     Write |                                               Internal Calls | External Call | Cyclomatic Complexit |
+-------------------------------------+-----------+---------------------+---------------------------+---------------------------+--------------------------------------------------------------+---------------+----------------------+
| __Context_init()                    |  internal | ['onlyInitializing' |                        [] |                        [] |                                         ['onlyInitializing'] |            [] |                    1 |
|                                     |           |                   ] |                           |                           |                                                              |               |                      |
| __Context_init_unchained()          |  internal | ['onlyInitializing' |                        [] |                        [] |                                         ['onlyInitializing'] |            [] |                    1 |
|                                     |           |                   ] |                           |                           |                                                              |               |                      |
| _msgSender()                        |  internal |                  [] |            ['msg.sender'] |                        [] |                                                           [] |            [] |                    1 |
| _msgData()                          |  internal |                  [] |              ['msg.data'] |                        [] |                                                           [] |            [] |                    1 |
| _contextSuffixLength()              |  internal |                  [] |                        [] |                        [] |                                                           [] |            [] |                    1 |
| _checkInitializing()                |  internal |                  [] |                        [] |                        [] |              ['_isInitializing', 'revert NotInitializing()'] |            [] |                    2 |
| _disableInitializers()              |  internal |                  [] |                        [] |                        [] |                         ['_getInitializableStorage', 'revert |            [] |                    3 |
|                                     |           |                     |                           |                           |                                    InvalidInitialization()'] |               |                      |
| _getInitializedVersion()            |  internal |                  [] |                        [] |                        [] |                                 ['_getInitializableStorage'] |            [] |                    1 |
| _isInitializing()                   |  internal |                  [] |                        [] |                        [] |                                 ['_getInitializableStorage'] |            [] |                    1 |
| _getInitializableStorage()          |   private |                  [] | ['INITIALIZABLE_STORAGE'] |                        [] |                                                           [] |            [] |                    1 |
| _getOwnableStorage()                |   private |                  [] | ['OwnableStorageLocation' |                        [] |                                                           [] |            [] |                    1 |
|                                     |           |                     |                         ] |                           |                                                              |               |                      |
| __Ownable_init(address)             |  internal | ['onlyInitializing' |                        [] |                        [] |             ['__Ownable_init_unchained', 'onlyInitializing'] |            [] |                    1 |
|                                     |           |                   ] |                           |                           |                                                              |               |                      |
| __Ownable_init_unchained(address)   |  internal | ['onlyInitializing' |                        [] |                        [] |                   ['_transferOwnership', 'onlyInitializing'] |            [] |                    2 |
|                                     |           |                   ] |                           |                           |                      ['revert OwnableInvalidOwner(address)'] |               |                      |
| owner()                             |    public |                  [] |                        [] |                        [] |                                       ['_getOwnableStorage'] |            [] |                    1 |
| _checkOwner()                       |  internal |                  [] |                        [] |                        [] |                                      ['_msgSender', 'owner'] |            [] |                    2 |
|                                     |           |                     |                           |                           |               ['revert OwnableUnauthorizedAccount(address)'] |               |                      |
| renounceOwnership()                 |    public |       ['onlyOwner'] |                        [] |                        [] |                          ['_transferOwnership', 'onlyOwner'] |            [] |                    1 |
| transferOwnership(address)          |    public |       ['onlyOwner'] |                        [] |                        [] |                          ['_transferOwnership', 'onlyOwner'] |            [] |                    2 |
|                                     |           |                     |                           |                           |                      ['revert OwnableInvalidOwner(address)'] |               |                      |
| _transferOwnership(address)         |  internal |                  [] |                        [] |                        [] |                                       ['_getOwnableStorage'] |            [] |                    1 |
| slitherConstructorConstantVariables |  internal |                  [] |                        [] | ['OwnableStorageLocation' |                                                           [] |            [] |                    1 |
| ()                                  |           |                     |                           |                         ] |                                                              |               |                      |
+-------------------------------------+-----------+---------------------+---------------------------+---------------------------+--------------------------------------------------------------+---------------+----------------------+

+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| Modifiers             | Visibility |     Read | Write |                                                 Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| initializer()         |   internal | ['this'] |    [] |                  ['_getInitializableStorage', 'code(address)'] |             [] |                     4 |
|                       |            |          |       |                             ['revert InvalidInitialization()'] |                |                       |
| reinitializer(uint64) |   internal |       [] |    [] | ['_getInitializableStorage', 'revert InvalidInitialization()'] |             [] |                     2 |
| onlyInitializing()    |   internal |       [] |    [] |                                         ['_checkInitializing'] |             [] |                     1 |
| onlyOwner()           |   internal |       [] |    [] |                                                ['_checkOwner'] |             [] |                     1 |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+

INFO:Printers:
Contract Initializable
Contract vars: ['INITIALIZABLE_STORAGE']
Inheritance:: []
 
+---------------------------------------+------------+-----------+---------------------------+---------------------------+----------------------------------------------------------------+----------------+-----------------------+
| Function                              | Visibility | Modifiers |                      Read |                     Write |                                                 Internal Calls | External Calls | Cyclomatic Complexity |
+---------------------------------------+------------+-----------+---------------------------+---------------------------+----------------------------------------------------------------+----------------+-----------------------+
| _checkInitializing()                  |   internal |        [] |                        [] |                        [] |                ['_isInitializing', 'revert NotInitializing()'] |             [] |                     2 |
| _disableInitializers()                |   internal |        [] |                        [] |                        [] | ['_getInitializableStorage', 'revert InvalidInitialization()'] |             [] |                     3 |
| _getInitializedVersion()              |   internal |        [] |                        [] |                        [] |                                   ['_getInitializableStorage'] |             [] |                     1 |
| _isInitializing()                     |   internal |        [] |                        [] |                        [] |                                   ['_getInitializableStorage'] |             [] |                     1 |
| _getInitializableStorage()            |    private |        [] | ['INITIALIZABLE_STORAGE'] |                        [] |                                                             [] |             [] |                     1 |
| slitherConstructorConstantVariables() |   internal |        [] |                        [] | ['INITIALIZABLE_STORAGE'] |                                                             [] |             [] |                     1 |
+---------------------------------------+------------+-----------+---------------------------+---------------------------+----------------------------------------------------------------+----------------+-----------------------+

+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| Modifiers             | Visibility |     Read | Write |                                                 Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| initializer()         |   internal | ['this'] |    [] |                  ['_getInitializableStorage', 'code(address)'] |             [] |                     4 |
|                       |            |          |       |                             ['revert InvalidInitialization()'] |                |                       |
| reinitializer(uint64) |   internal |       [] |    [] | ['_getInitializableStorage', 'revert InvalidInitialization()'] |             [] |                     2 |
| onlyInitializing()    |   internal |       [] |    [] |                                         ['_checkInitializing'] |             [] |                     1 |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+

INFO:Printers:
Contract UUPSUpgradeable
Contract vars: ['__self', 'UPGRADE_INTERFACE_VERSION']
Inheritance:: ['IERC1822Proxiable', 'Initializable']
 
+-----------------------+-------+-------------+----------------+-------------------+----------------------------------------------------------+-------------------------------------------------------------------------+--------------+
| Function              | Visib |   Modifiers |           Read |             Write |                                           Internal Calls |                                                          External Calls | Cyclomatic C |
+-----------------------+-------+-------------+----------------+-------------------+----------------------------------------------------------+-------------------------------------------------------------------------+--------------+
| proxiableUUID()       | exter |          [] |             [] |                [] |                                                       [] |                                                                      [] |            2 |
|                       |   nal |             |                |                   |                                                          |                                                                         |              |
| _checkInitializing()  | inter |          [] |             [] |                [] |          ['_isInitializing', 'revert NotInitializing()'] |                                                                      [] |            2 |
|                       |   nal |             |                |                   |                                                          |                                                                         |              |
| _disableInitializers( | inter |          [] |             [] |                [] |                     ['_getInitializableStorage', 'revert |                                                                      [] |            3 |
| )                     |   nal |             |                |                   |                                InvalidInitialization()'] |                                                                         |              |
| _getInitializedVersio | inter |          [] |             [] |                [] |                             ['_getInitializableStorage'] |                                                                      [] |            1 |
| n()                   |   nal |             |                |                   |                                                          |                                                                         |              |
| _isInitializing()     | inter |          [] |             [] |                [] |                             ['_getInitializableStorage'] |                                                                      [] |            1 |
|                       |   nal |             |                |                   |                                                          |                                                                         |              |
| _getInitializableStor | priva |          [] | ['INITIALIZABL |                [] |                                                       [] |                                                                      [] |            1 |
| age()                 |    te |             |    E_STORAGE'] |                   |                                                          |                                                                         |              |
| __UUPSUpgradeable_ini | inter | ['onlyIniti |             [] |                [] |                                     ['onlyInitializing'] |                                                                      [] |            1 |
| t()                   |   nal |   alizing'] |                |                   |                                                          |                                                                         |              |
| __UUPSUpgradeable_ini | inter | ['onlyIniti |             [] |                [] |                                     ['onlyInitializing'] |                                                                      [] |            1 |
| t_unchained()         |   nal |   alizing'] |                |                   |                                                          |                                                                         |              |
| proxiableUUID()       | exter | ['notDelega |             [] |                [] |                                         ['notDelegated'] |                                                                      [] |            1 |
|                       |   nal |       ted'] |                |                   |                                                          |                                                                         |              |
| upgradeToAndCall(addr | publi | ['onlyProxy |             [] |                [] |           ['_authorizeUpgrade', '_upgradeToAndCallUUPS'] |                                                                      [] |            1 |
| ess,bytes)            |     c |          '] |                |                   |                                            ['onlyProxy'] |                                                                         |              |
| _checkProxy()         | inter |          [] |     ['__self', |                [] |                 ['revert UUPSUnauthorizedCallContext()'] |                                    ['ERC1967Utils.getImplementation()'] |            2 |
|                       |   nal |             |        'this'] |                   |                                                          |                                                                         |              |
| _checkNotDelegated()  | inter |          [] |     ['__self', |                [] |                 ['revert UUPSUnauthorizedCallContext()'] |                                                                      [] |            2 |
|                       |   nal |             |        'this'] |                   |                                                          |                                                                         |              |
| _authorizeUpgrade(add | inter |          [] |             [] |                [] |                                                       [] |                                                                      [] |            2 |
| ress)                 |   nal |             |                |                   |                                                          |                                                                         |              |
| _upgradeToAndCallUUPS | priva |          [] |             [] |                [] | ['revert ERC1967InvalidImplementation(address)', 'revert |        ['ERC1967Utils.ERC1967InvalidImplementation(newImplementation)', |            2 |
| (address,bytes)       |    te |             |                |                   |                  UUPSUnsupportedProxiableUUID(bytes32)'] |                'ERC1967Utils.upgradeToAndCall(newImplementation,data)'] |              |
|                       |       |             |                |                   |                                                          |                ['IERC1822Proxiable(newImplementation).proxiableUUID()'] |              |
| slitherConstructorVar | inter |          [] |       ['this'] |        ['__self'] |                                                       [] |                                                                      [] |            1 |
| iables()              |   nal |             |                |                   |                                                          |                                                                         |              |
| slitherConstructorCon | inter |          [] |             [] | ['UPGRADE_INTERFA |                                                       [] |                                                                      [] |            1 |
| stantVariables()      |   nal |             |                |      CE_VERSION'] |                                                          |                                                                         |              |
+-----------------------+-------+-------------+----------------+-------------------+----------------------------------------------------------+-------------------------------------------------------------------------+--------------+

+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| Modifiers             | Visibility |     Read | Write |                                                 Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| initializer()         |   internal | ['this'] |    [] |                  ['_getInitializableStorage', 'code(address)'] |             [] |                     4 |
|                       |            |          |       |                             ['revert InvalidInitialization()'] |                |                       |
| reinitializer(uint64) |   internal |       [] |    [] | ['_getInitializableStorage', 'revert InvalidInitialization()'] |             [] |                     2 |
| onlyInitializing()    |   internal |       [] |    [] |                                         ['_checkInitializing'] |             [] |                     1 |
| onlyProxy()           |   internal |       [] |    [] |                                                ['_checkProxy'] |             [] |                     1 |
| notDelegated()        |   internal |       [] |    [] |                                         ['_checkNotDelegated'] |             [] |                     1 |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+

INFO:Printers:
Contract ContextUpgradeable
Contract vars: []
Inheritance:: ['Initializable']
 
+----------------------------+------------+----------------------+---------------------------+-------+----------------------------------------------------------------+----------------+-----------------------+
| Function                   | Visibility |            Modifiers |                      Read | Write |                                                 Internal Calls | External Calls | Cyclomatic Complexity |
+----------------------------+------------+----------------------+---------------------------+-------+----------------------------------------------------------------+----------------+-----------------------+
| _checkInitializing()       |   internal |                   [] |                        [] |    [] |                ['_isInitializing', 'revert NotInitializing()'] |             [] |                     2 |
| _disableInitializers()     |   internal |                   [] |                        [] |    [] | ['_getInitializableStorage', 'revert InvalidInitialization()'] |             [] |                     3 |
| _getInitializedVersion()   |   internal |                   [] |                        [] |    [] |                                   ['_getInitializableStorage'] |             [] |                     1 |
| _isInitializing()          |   internal |                   [] |                        [] |    [] |                                   ['_getInitializableStorage'] |             [] |                     1 |
| _getInitializableStorage() |    private |                   [] | ['INITIALIZABLE_STORAGE'] |    [] |                                                             [] |             [] |                     1 |
| __Context_init()           |   internal | ['onlyInitializing'] |                        [] |    [] |                                           ['onlyInitializing'] |             [] |                     1 |
| __Context_init_unchained() |   internal | ['onlyInitializing'] |                        [] |    [] |                                           ['onlyInitializing'] |             [] |                     1 |
| _msgSender()               |   internal |                   [] |            ['msg.sender'] |    [] |                                                             [] |             [] |                     1 |
| _msgData()                 |   internal |                   [] |              ['msg.data'] |    [] |                                                             [] |             [] |                     1 |
| _contextSuffixLength()     |   internal |                   [] |                        [] |    [] |                                                             [] |             [] |                     1 |
+----------------------------+------------+----------------------+---------------------------+-------+----------------------------------------------------------------+----------------+-----------------------+

+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| Modifiers             | Visibility |     Read | Write |                                                 Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| initializer()         |   internal | ['this'] |    [] |                  ['_getInitializableStorage', 'code(address)'] |             [] |                     4 |
|                       |            |          |       |                             ['revert InvalidInitialization()'] |                |                       |
| reinitializer(uint64) |   internal |       [] |    [] | ['_getInitializableStorage', 'revert InvalidInitialization()'] |             [] |                     2 |
| onlyInitializing()    |   internal |       [] |    [] |                                         ['_checkInitializing'] |             [] |                     1 |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+

INFO:Printers:
Contract MulticallUpgradeable
Contract vars: []
Inheritance:: ['ContextUpgradeable', 'Initializable']
 
+----------------------+---------+----------------+---------------------+-----+------------------------------------------------+------------------------------------------------------------------------------------+-----------------+
| Function             | Visibil |      Modifiers |                Read | Wri |                                 Internal Calls |                                                                     External Calls | Cyclomatic Comp |
+----------------------+---------+----------------+---------------------+-----+------------------------------------------------+------------------------------------------------------------------------------------+-----------------+
| __Context_init()     | interna | ['onlyInitiali |                  [] |  [] |                           ['onlyInitializing'] |                                                                                 [] |               1 |
|                      |       l |         zing'] |                     |     |                                                |                                                                                    |                 |
| __Context_init_uncha | interna | ['onlyInitiali |                  [] |  [] |                           ['onlyInitializing'] |                                                                                 [] |               1 |
| ined()               |       l |         zing'] |                     |     |                                                |                                                                                    |                 |
| _msgSender()         | interna |             [] |      ['msg.sender'] |  [] |                                             [] |                                                                                 [] |               1 |
|                      |       l |                |                     |     |                                                |                                                                                    |                 |
| _msgData()           | interna |             [] |        ['msg.data'] |  [] |                                             [] |                                                                                 [] |               1 |
|                      |       l |                |                     |     |                                                |                                                                                    |                 |
| _contextSuffixLength | interna |             [] |                  [] |  [] |                                             [] |                                                                                 [] |               1 |
| ()                   |       l |                |                     |     |                                                |                                                                                    |                 |
| _checkInitializing() | interna |             [] |                  [] |  [] |                    ['_isInitializing', 'revert |                                                                                 [] |               2 |
|                      |       l |                |                     |     |                            NotInitializing()'] |                                                                                    |                 |
| _disableInitializers | interna |             [] |                  [] |  [] |           ['_getInitializableStorage', 'revert |                                                                                 [] |               3 |
| ()                   |       l |                |                     |     |                      InvalidInitialization()'] |                                                                                    |                 |
| _getInitializedVersi | interna |             [] |                  [] |  [] |                   ['_getInitializableStorage'] |                                                                                 [] |               1 |
| on()                 |       l |                |                     |     |                                                |                                                                                    |                 |
| _isInitializing()    | interna |             [] |                  [] |  [] |                   ['_getInitializableStorage'] |                                                                                 [] |               1 |
|                      |       l |                |                     |     |                                                |                                                                                    |                 |
| _getInitializableSto | private |             [] | ['INITIALIZABLE_STO |  [] |                                             [] |                                                                                 [] |               1 |
| rage()               |         |                |              RAGE'] |     |                                                |                                                                                    |                 |
| __Multicall_init()   | interna | ['onlyInitiali |                  [] |  [] |                           ['onlyInitializing'] |                                                                                 [] |               1 |
|                      |       l |         zing'] |                     |     |                                                |                                                                                    |                 |
| __Multicall_init_unc | interna | ['onlyInitiali |                  [] |  [] |                           ['onlyInitializing'] |                                                                                 [] |               1 |
| hained()             |       l |         zing'] |                     |     |                                                |                                                                                    |                 |
| multicall(bytes[])   | externa |             [] |        ['msg.data', |  [] |               ['_msgSender', 'bytes.concat()'] |      ['Address.functionDelegateCall(address(this),bytes.concat(data[i],context))', |               2 |
|                      |       l |                |       'msg.sender'] |     |                                                |                                                   'bytes.concat(data[i],context)'] |                 |
|                      |         |                |            ['this'] |     |                                                |                                       ['new bytes(0)', 'new bytes[](data.length)'] |                 |
+----------------------+---------+----------------+---------------------+-----+------------------------------------------------+------------------------------------------------------------------------------------+-----------------+

+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| Modifiers             | Visibility |     Read | Write |                                                 Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| initializer()         |   internal | ['this'] |    [] |                  ['_getInitializableStorage', 'code(address)'] |             [] |                     4 |
|                       |            |          |       |                             ['revert InvalidInitialization()'] |                |                       |
| reinitializer(uint64) |   internal |       [] |    [] | ['_getInitializableStorage', 'revert InvalidInitialization()'] |             [] |                     2 |
| onlyInitializing()    |   internal |       [] |    [] |                                         ['_checkInitializing'] |             [] |                     1 |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+

INFO:Printers:
Contract PausableUpgradeable
Contract vars: ['PausableStorageLocation']
Inheritance:: ['ContextUpgradeable', 'Initializable']
 
+-------------------------------------+-----------+---------------------+----------------------------+----------------------------+-------------------------------------------------------------+---------------+----------------------+
| Function                            | Visibilit |           Modifiers |                       Read |                      Write |                                              Internal Calls | External Call | Cyclomatic Complexit |
+-------------------------------------+-----------+---------------------+----------------------------+----------------------------+-------------------------------------------------------------+---------------+----------------------+
| __Context_init()                    |  internal | ['onlyInitializing' |                         [] |                         [] |                                        ['onlyInitializing'] |            [] |                    1 |
|                                     |           |                   ] |                            |                            |                                                             |               |                      |
| __Context_init_unchained()          |  internal | ['onlyInitializing' |                         [] |                         [] |                                        ['onlyInitializing'] |            [] |                    1 |
|                                     |           |                   ] |                            |                            |                                                             |               |                      |
| _msgSender()                        |  internal |                  [] |             ['msg.sender'] |                         [] |                                                          [] |            [] |                    1 |
| _msgData()                          |  internal |                  [] |               ['msg.data'] |                         [] |                                                          [] |            [] |                    1 |
| _contextSuffixLength()              |  internal |                  [] |                         [] |                         [] |                                                          [] |            [] |                    1 |
| _checkInitializing()                |  internal |                  [] |                         [] |                         [] |             ['_isInitializing', 'revert NotInitializing()'] |            [] |                    2 |
| _disableInitializers()              |  internal |                  [] |                         [] |                         [] |                        ['_getInitializableStorage', 'revert |            [] |                    3 |
|                                     |           |                     |                            |                            |                                   InvalidInitialization()'] |               |                      |
| _getInitializedVersion()            |  internal |                  [] |                         [] |                         [] |                                ['_getInitializableStorage'] |            [] |                    1 |
| _isInitializing()                   |  internal |                  [] |                         [] |                         [] |                                ['_getInitializableStorage'] |            [] |                    1 |
| _getInitializableStorage()          |   private |                  [] |  ['INITIALIZABLE_STORAGE'] |                         [] |                                                          [] |            [] |                    1 |
| _getPausableStorage()               |   private |                  [] | ['PausableStorageLocation' |                         [] |                                                          [] |            [] |                    1 |
|                                     |           |                     |                          ] |                            |                                                             |               |                      |
| __Pausable_init()                   |  internal | ['onlyInitializing' |                         [] |                         [] |           ['__Pausable_init_unchained', 'onlyInitializing'] |            [] |                    1 |
|                                     |           |                   ] |                            |                            |                                                             |               |                      |
| __Pausable_init_unchained()         |  internal | ['onlyInitializing' |                         [] |                         [] |                 ['_getPausableStorage', 'onlyInitializing'] |            [] |                    1 |
|                                     |           |                   ] |                            |                            |                                                             |               |                      |
| paused()                            |    public |                  [] |                         [] |                         [] |                                     ['_getPausableStorage'] |            [] |                    1 |
| _requireNotPaused()                 |  internal |                  [] |                         [] |                         [] |                        ['paused', 'revert EnforcedPause()'] |            [] |                    2 |
| _requirePaused()                    |  internal |                  [] |                         [] |                         [] |                        ['paused', 'revert ExpectedPause()'] |            [] |                    2 |
| _pause()                            |  internal |   ['whenNotPaused'] |                         [] |                         [] |                       ['_getPausableStorage', '_msgSender'] |            [] |                    1 |
|                                     |           |                     |                            |                            |                                           ['whenNotPaused'] |               |                      |
| _unpause()                          |  internal |      ['whenPaused'] |                         [] |                         [] |                       ['_getPausableStorage', '_msgSender'] |            [] |                    1 |
|                                     |           |                     |                            |                            |                                              ['whenPaused'] |               |                      |
| slitherConstructorConstantVariables |  internal |                  [] |                         [] | ['PausableStorageLocation' |                                                          [] |            [] |                    1 |
| ()                                  |           |                     |                            |                          ] |                                                             |               |                      |
+-------------------------------------+-----------+---------------------+----------------------------+----------------------------+-------------------------------------------------------------+---------------+----------------------+

+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| Modifiers             | Visibility |     Read | Write |                                                 Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| initializer()         |   internal | ['this'] |    [] |                  ['_getInitializableStorage', 'code(address)'] |             [] |                     4 |
|                       |            |          |       |                             ['revert InvalidInitialization()'] |                |                       |
| reinitializer(uint64) |   internal |       [] |    [] | ['_getInitializableStorage', 'revert InvalidInitialization()'] |             [] |                     2 |
| onlyInitializing()    |   internal |       [] |    [] |                                         ['_checkInitializing'] |             [] |                     1 |
| whenNotPaused()       |   internal |       [] |    [] |                                          ['_requireNotPaused'] |             [] |                     1 |
| whenPaused()          |   internal |       [] |    [] |                                             ['_requirePaused'] |             [] |                     1 |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+

INFO:Printers:
Contract ERC165Upgradeable
Contract vars: []
Inheritance:: ['IERC165', 'Initializable']
 
+----------------------------+------------+----------------------+---------------------------+-------+----------------------------------------------------------------+----------------+-----------------------+
| Function                   | Visibility |            Modifiers |                      Read | Write |                                                 Internal Calls | External Calls | Cyclomatic Complexity |
+----------------------------+------------+----------------------+---------------------------+-------+----------------------------------------------------------------+----------------+-----------------------+
| supportsInterface(bytes4)  |   external |                   [] |                        [] |    [] |                                                             [] |             [] |                     2 |
| _checkInitializing()       |   internal |                   [] |                        [] |    [] |                ['_isInitializing', 'revert NotInitializing()'] |             [] |                     2 |
| _disableInitializers()     |   internal |                   [] |                        [] |    [] | ['_getInitializableStorage', 'revert InvalidInitialization()'] |             [] |                     3 |
| _getInitializedVersion()   |   internal |                   [] |                        [] |    [] |                                   ['_getInitializableStorage'] |             [] |                     1 |
| _isInitializing()          |   internal |                   [] |                        [] |    [] |                                   ['_getInitializableStorage'] |             [] |                     1 |
| _getInitializableStorage() |    private |                   [] | ['INITIALIZABLE_STORAGE'] |    [] |                                                             [] |             [] |                     1 |
| __ERC165_init()            |   internal | ['onlyInitializing'] |                        [] |    [] |                                           ['onlyInitializing'] |             [] |                     1 |
| __ERC165_init_unchained()  |   internal | ['onlyInitializing'] |                        [] |    [] |                                           ['onlyInitializing'] |             [] |                     1 |
| supportsInterface(bytes4)  |     public |                   [] |                        [] |    [] |                                                     ['type()'] |             [] |                     1 |
+----------------------------+------------+----------------------+---------------------------+-------+----------------------------------------------------------------+----------------+-----------------------+

+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| Modifiers             | Visibility |     Read | Write |                                                 Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| initializer()         |   internal | ['this'] |    [] |                  ['_getInitializableStorage', 'code(address)'] |             [] |                     4 |
|                       |            |          |       |                             ['revert InvalidInitialization()'] |                |                       |
| reinitializer(uint64) |   internal |       [] |    [] | ['_getInitializableStorage', 'revert InvalidInitialization()'] |             [] |                     2 |
| onlyInitializing()    |   internal |       [] |    [] |                                         ['_checkInitializing'] |             [] |                     1 |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+

INFO:Printers:
Contract FixedPointMathLib
Contract vars: ['WAD']
Inheritance:: []
 
+---------------------------------------+------------+-----------+---------+---------+----------------------------------------------------------------+----------------+-----------------------+
| Function                              | Visibility | Modifiers |    Read |   Write |                                                 Internal Calls | External Calls | Cyclomatic Complexity |
+---------------------------------------+------------+-----------+---------+---------+----------------------------------------------------------------+----------------+-----------------------+
| mulWad(uint256,uint256)               |   internal |        [] | ['WAD'] |      [] |         ['mstore(uint256,uint256)', 'revert(uint256,uint256)'] |             [] |                     2 |
| sMulWad(int256,int256)                |   internal |        [] | ['WAD'] |      [] |         ['mstore(uint256,uint256)', 'revert(uint256,uint256)'] |             [] |                     2 |
| rawMulWad(uint256,uint256)            |   internal |        [] | ['WAD'] |      [] |                                                             [] |             [] |                     1 |
| rawSMulWad(int256,int256)             |   internal |        [] | ['WAD'] |      [] |                                                             [] |             [] |                     1 |
| mulWadUp(uint256,uint256)             |   internal |        [] | ['WAD'] |      [] |         ['mstore(uint256,uint256)', 'revert(uint256,uint256)'] |             [] |                     2 |
| rawMulWadUp(uint256,uint256)          |   internal |        [] | ['WAD'] |      [] |                                                             [] |             [] |                     1 |
| divWad(uint256,uint256)               |   internal |        [] | ['WAD'] |      [] |         ['mstore(uint256,uint256)', 'revert(uint256,uint256)'] |             [] |                     2 |
| sDivWad(int256,int256)                |   internal |        [] | ['WAD'] |      [] |         ['mstore(uint256,uint256)', 'revert(uint256,uint256)'] |             [] |                     2 |
| rawDivWad(uint256,uint256)            |   internal |        [] | ['WAD'] |      [] |                                                             [] |             [] |                     1 |
| rawSDivWad(int256,int256)             |   internal |        [] | ['WAD'] |      [] |                                                             [] |             [] |                     1 |
| divWadUp(uint256,uint256)             |   internal |        [] | ['WAD'] |      [] |         ['mstore(uint256,uint256)', 'revert(uint256,uint256)'] |             [] |                     2 |
| rawDivWadUp(uint256,uint256)          |   internal |        [] | ['WAD'] |      [] |                                                             [] |             [] |                     1 |
| powWad(int256,int256)                 |   internal |        [] | ['WAD'] |      [] |                                            ['expWad', 'lnWad'] |             [] |                     1 |
| expWad(int256)                        |   internal |        [] |      [] |      [] |         ['mstore(uint256,uint256)', 'revert(uint256,uint256)'] |             [] |                     2 |
| lnWad(int256)                         |   internal |        [] |      [] |      [] |           ['byte(uint256,uint256)', 'mstore(uint256,uint256)'] |             [] |                     2 |
|                                       |            |           |         |         |                                    ['revert(uint256,uint256)'] |                |                       |
| lambertW0Wad(int256)                  |   internal |        [] | ['WAD'] |      [] |                            ['byte(uint256,uint256)', 'expWad'] |             [] |                    11 |
|                                       |            |           |         |         |                              ['lnWad', 'revert OutOfDomain()'] |                |                       |
| fullMulDiv(uint256,uint256,uint256)   |   internal |        [] |      [] |      [] | ['mstore(uint256,uint256)', 'mulmod(uint256,uint256,uint256)'] |             [] |                     5 |
|                                       |            |           |         |         |                                    ['revert(uint256,uint256)'] |                |                       |
| fullMulDivUp(uint256,uint256,uint256) |   internal |        [] |      [] |      [] |                      ['fullMulDiv', 'mstore(uint256,uint256)'] |             [] |                     3 |
|                                       |            |           |         |         | ['mulmod(uint256,uint256,uint256)', 'revert(uint256,uint256)'] |                |                       |
| mulDiv(uint256,uint256,uint256)       |   internal |        [] |      [] |      [] |         ['mstore(uint256,uint256)', 'revert(uint256,uint256)'] |             [] |                     2 |
| mulDivUp(uint256,uint256,uint256)     |   internal |        [] |      [] |      [] |         ['mstore(uint256,uint256)', 'revert(uint256,uint256)'] |             [] |                     2 |
| divUp(uint256,uint256)                |   internal |        [] |      [] |      [] |         ['mstore(uint256,uint256)', 'revert(uint256,uint256)'] |             [] |                     2 |
| zeroFloorSub(uint256,uint256)         |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| rpow(uint256,uint256,uint256)         |   internal |        [] |      [] |      [] |         ['mstore(uint256,uint256)', 'revert(uint256,uint256)'] |             [] |                     7 |
| sqrt(uint256)                         |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| cbrt(uint256)                         |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| sqrtWad(uint256)                      |   internal |        [] |      [] |      [] |                                                       ['sqrt'] |             [] |                     2 |
| cbrtWad(uint256)                      |   internal |        [] |      [] |      [] |                                                       ['cbrt'] |             [] |                     3 |
| factorial(uint256)                    |   internal |        [] |      [] |      [] |         ['mstore(uint256,uint256)', 'revert(uint256,uint256)'] |             [] |                     3 |
| log2(uint256)                         |   internal |        [] |      [] |      [] |                                      ['byte(uint256,uint256)'] |             [] |                     1 |
| log2Up(uint256)                       |   internal |        [] |      [] |      [] |                                                       ['log2'] |             [] |                     1 |
| log10(uint256)                        |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     5 |
| log10Up(uint256)                      |   internal |        [] |      [] |      [] |                                                      ['log10'] |             [] |                     1 |
| log256(uint256)                       |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| log256Up(uint256)                     |   internal |        [] |      [] |      [] |                                                     ['log256'] |             [] |                     1 |
| sci(uint256)                          |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     9 |
| packSci(uint256)                      |   internal |        [] |      [] |      [] |         ['mstore(uint256,uint256)', 'revert(uint256,uint256)'] |             [] |                     2 |
|                                       |            |           |         |         |                                                        ['sci'] |                |                       |
| unpackSci(uint256)                    |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| avg(uint256,uint256)                  |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| avg(int256,int256)                    |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| abs(int256)                           |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| dist(int256,int256)                   |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| min(uint256,uint256)                  |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| min(int256,int256)                    |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| max(uint256,uint256)                  |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| max(int256,int256)                    |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| clamp(uint256,uint256,uint256)        |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| clamp(int256,int256,int256)           |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| gcd(uint256,uint256)                  |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     2 |
| rawAdd(uint256,uint256)               |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| rawAdd(int256,int256)                 |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| rawSub(uint256,uint256)               |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| rawSub(int256,int256)                 |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| rawMul(uint256,uint256)               |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| rawMul(int256,int256)                 |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| rawDiv(uint256,uint256)               |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| rawSDiv(int256,int256)                |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| rawMod(uint256,uint256)               |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| rawSMod(int256,int256)                |   internal |        [] |      [] |      [] |                                                             [] |             [] |                     1 |
| rawAddMod(uint256,uint256,uint256)    |   internal |        [] |      [] |      [] |                            ['addmod(uint256,uint256,uint256)'] |             [] |                     1 |
| rawMulMod(uint256,uint256,uint256)    |   internal |        [] |      [] |      [] |                            ['mulmod(uint256,uint256,uint256)'] |             [] |                     1 |
| slitherConstructorConstantVariables() |   internal |        [] |      [] | ['WAD'] |                                                             [] |             [] |                     1 |
+---------------------------------------+------------+-----------+---------+---------+----------------------------------------------------------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IUniswapV3Pool
Contract vars: []
Inheritance:: ['IUniswapV3PoolEvents', 'IUniswapV3PoolErrors', 'IUniswapV3PoolOwnerActions', 'IUniswapV3PoolActions', 'IUniswapV3PoolDerivedState', 'IUniswapV3PoolState', 'IUniswapV3PoolImmutables']
 
+----------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                                     | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| setFeeProtocol(uint8,uint8)                  |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| collectProtocol(address,uint128,uint128)     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| initialize(uint160)                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| mint(address,int24,int24,uint128,bytes)      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| collect(address,int24,int24,uint128,uint128) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| burn(int24,int24,uint128)                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| swap(address,bool,int256,uint160,bytes)      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| flash(address,uint256,uint256,bytes)         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| increaseObservationCardinalityNext(uint16)   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| observe(uint32[])                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| snapshotCumulativesInside(int24,int24)       |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| slot0()                                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| feeGrowthGlobal0X128()                       |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| feeGrowthGlobal1X128()                       |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| protocolFees()                               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| liquidity()                                  |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| ticks(int24)                                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| tickBitmap(int16)                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| positions(bytes32)                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| observations(uint256)                        |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| factory()                                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| token0()                                     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| token1()                                     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| fee()                                        |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| tickSpacing()                                |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| maxLiquidityPerTick()                        |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+----------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IUniswapV3PoolActions
Contract vars: []
Inheritance:: []
 
+----------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                                     | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| initialize(uint160)                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| mint(address,int24,int24,uint128,bytes)      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| collect(address,int24,int24,uint128,uint128) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| burn(int24,int24,uint128)                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| swap(address,bool,int256,uint160,bytes)      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| flash(address,uint256,uint256,bytes)         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| increaseObservationCardinalityNext(uint16)   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+----------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IUniswapV3PoolDerivedState
Contract vars: []
Inheritance:: []
 
+----------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                               | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| observe(uint32[])                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| snapshotCumulativesInside(int24,int24) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+----------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IUniswapV3PoolErrors
Contract vars: []
Inheritance:: []
 
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IUniswapV3PoolEvents
Contract vars: []
Inheritance:: []
 
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IUniswapV3PoolImmutables
Contract vars: []
Inheritance:: []
 
+-----------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function              | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| factory()             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| token0()              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| token1()              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| fee()                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| tickSpacing()         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| maxLiquidityPerTick() |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+-----------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IUniswapV3PoolOwnerActions
Contract vars: []
Inheritance:: []
 
+------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                                 | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| setFeeProtocol(uint8,uint8)              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| collectProtocol(address,uint128,uint128) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IUniswapV3PoolState
Contract vars: []
Inheritance:: []
 
+------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function               | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| slot0()                |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| feeGrowthGlobal0X128() |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| feeGrowthGlobal1X128() |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| protocolFees()         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| liquidity()            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| ticks(int24)           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| tickBitmap(int16)      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| positions(bytes32)     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| observations(uint256)  |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract FullMath
Contract vars: []
Inheritance:: []
 
+-------------------------------------------+------------+-----------+------+-------+------------------------------------------------------+----------------+-----------------------+
| Function                                  | Visibility | Modifiers | Read | Write |                                       Internal Calls | External Calls | Cyclomatic Complexity |
+-------------------------------------------+------------+-----------+------+-------+------------------------------------------------------+----------------+-----------------------+
| mulDiv(uint256,uint256,uint256)           |   internal |        [] |   [] |    [] | ['mulmod(uint256,uint256,uint256)', 'require(bool)'] |             [] |                     0 |
| mulDivRoundingUp(uint256,uint256,uint256) |   internal |        [] |   [] |    [] |        ['mulDiv', 'mulmod(uint256,uint256,uint256)'] |             [] |                     2 |
|                                           |            |           |      |       |                                    ['require(bool)'] |                |                       |
+-------------------------------------------+------------+-----------+------+-------+------------------------------------------------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract TickMath
Contract vars: ['MIN_TICK', 'MAX_TICK', 'MIN_SQRT_RATIO', 'MAX_SQRT_RATIO']
Inheritance:: []
 
+---------------------------------------+------------+-----------+--------------------------------------+--------------------------------+--------------------------------------+----------------+-----------------------+
| Function                              | Visibility | Modifiers |                                 Read |                          Write |                       Internal Calls | External Calls | Cyclomatic Complexity |
+---------------------------------------+------------+-----------+--------------------------------------+--------------------------------+--------------------------------------+----------------+-----------------------+
| getSqrtRatioAtTick(int24)             |   internal |        [] |                         ['MAX_TICK'] |                             [] |                       ['revert T()'] |             [] |                    25 |
| getTickAtSqrtRatio(uint160)           |   internal |        [] | ['MAX_SQRT_RATIO', 'MIN_SQRT_RATIO'] |                             [] | ['getSqrtRatioAtTick', 'revert R()'] |             [] |                     5 |
| slitherConstructorConstantVariables() |   internal |        [] |                         ['MIN_TICK'] | ['MAX_SQRT_RATIO', 'MAX_TICK'] |                                   [] |             [] |                     1 |
|                                       |            |           |                                      | ['MIN_SQRT_RATIO', 'MIN_TICK'] |                                      |                |                       |
+---------------------------------------+------------+-----------+--------------------------------------+--------------------------------+--------------------------------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract OracleLibrary
Contract vars: []
Inheritance:: []
 
+-------------------------------------------------+---------+--------+----------------+-----+--------------------+-------------------------------------------------------------------------------------------------+-----------------+
| Function                                        | Visibil | Modifi |           Read | Wri |     Internal Calls |                                                                                  External Calls | Cyclomatic Comp |
+-------------------------------------------------+---------+--------+----------------+-----+--------------------+-------------------------------------------------------------------------------------------------+-----------------+
| consult(address,uint32)                         | interna |     [] |             [] |  [] | ['require(bool,str |                                ['IUniswapV3Pool(pool).observe(secondsAgos)', 'new uint32[](2)'] |               2 |
|                                                 |       l |        |                |     |             ing)'] |                                                                                                 |                 |
| getQuoteAtTick(int24,uint128,address,address)   | interna |     [] |             [] |  [] |                 [] |                        ['FullMath.mulDiv(1 << 128,baseAmount,ratioX128)', 'FullMath.mulDiv(1 << |               4 |
|                                                 |       l |        |                |     |                    |                                                                     192,baseAmount,ratioX192)'] |                 |
|                                                 |         |        |                |     |                    |   ['FullMath.mulDiv(ratioX128,baseAmount,1 << 128)', 'FullMath.mulDiv(ratioX192,baseAmount,1 << |                 |
|                                                 |         |        |                |     |                    |                                                                                          192)'] |                 |
|                                                 |         |        |                |     |                    |     ['FullMath.mulDiv(sqrtRatioX96,sqrtRatioX96,1 << 64)', 'TickMath.getSqrtRatioAtTick(tick)'] |                 |
| getOldestObservationSecondsAgo(address)         | interna |     [] | ['block.timest |  [] | ['require(bool,str |          ['IUniswapV3Pool(pool).observations((observationIndex + 1) % observationCardinality)', |               2 |
|                                                 |       l |        |          amp'] |     |             ing)'] |                                                         'IUniswapV3Pool(pool).observations(0)'] |                 |
|                                                 |         |        |                |     |                    |                                                                ['IUniswapV3Pool(pool).slot0()'] |                 |
| getBlockStartingTickAndLiquidity(address)       | interna |     [] | ['block.timest |  [] | ['require(bool,str |     ['IUniswapV3Pool(pool).liquidity()', 'IUniswapV3Pool(pool).observations(observationIndex)'] |               1 |
|                                                 |       l |        |          amp'] |     |             ing)'] |                ['IUniswapV3Pool(pool).observations(prevIndex)', 'IUniswapV3Pool(pool).slot0()'] |                 |
| getWeightedArithmeticMeanTick(OracleLibrary.Wei | interna |     [] |             [] |  [] |                 [] |                                                                                              [] |               3 |
| ghtedTickData[])                                |       l |        |                |     |                    |                                                                                                 |                 |
| getChainedPrice(address[],int24[])              | interna |     [] |             [] |  [] | ['require(bool,str |                                                                                              [] |               3 |
|                                                 |       l |        |                |     |             ing)'] |                                                                                                 |                 |
+-------------------------------------------------+---------+--------+----------------+-----+--------------------+-------------------------------------------------------------------------------------------------+-----------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract PoolAddress
Contract vars: ['POOL_INIT_CODE_HASH']
Inheritance:: []
 
+-----------------------------+--------+-------+----------------+----------------+--------------------------+--------------------------------------------------------------------------------------------------------+---------------+
| Function                    | Visibi | Modif |           Read |          Write |           Internal Calls |                                                                                         External Calls | Cyclomatic Co |
+-----------------------------+--------+-------+----------------+----------------+--------------------------+--------------------------------------------------------------------------------------------------------+---------------+
| getPoolKey(address,address, | intern |    [] |             [] |             [] |                       [] |                                                                                                     [] |             2 |
| uint24)                     |     al |       |                |                |                          |                                                                                                        |               |
| computeAddress(address,Pool | intern |    [] | ['POOL_INIT_CO |             [] |         ['abi.encode()', | ['abi.encode(key.token0,key.token1,key.fee)', 'abi.encodePacked(0xff,factory,keccak256(bytes)(abi.enco |             1 |
| Address.PoolKey)            |     al |       |      DE_HASH'] |                |    'abi.encodePacked()'] |                                              de(key.token0,key.token1,key.fee)),POOL_INIT_CODE_HASH)'] |               |
|                             |        |       |                |                |     ['keccak256(bytes)', |                                                                                                        |               |
|                             |        |       |                |                |         'require(bool)'] |                                                                                                        |               |
| slitherConstructorConstantV | intern |    [] |             [] | ['POOL_INIT_CO |                       [] |                                                                                                     [] |             1 |
| ariables()                  |     al |       |                |      DE_HASH'] |                          |                                                                                                        |               |
+-----------------------------+--------+-------+----------------+----------------+--------------------------+--------------------------------------------------------------------------------------------------------+---------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract SizeFactory
Contract vars: ['markets', 'priceFeeds', 'borrowATokensV1_5', 'sizeImplementation', 'nonTransferrableScaledTokenV1_5Implementation', 'authorizations', 'authorizationNonces', 'DEFAULT_ADMIN_ROLE', 'UPGRADE_INTERFACE_VERSION']
Inheritance:: ['UUPSUpgradeable', 'IERC1822Proxiable', 'AccessControlUpgradeable', 'ERC165Upgradeable', 'IERC165', 'IAccessControl', 'Ownable2StepUpgradeable', 'OwnableUpgradeable', 'MulticallUpgradeable', 'ContextUpgradeable', 'Initializable', 'SizeFactoryEvents', 'SizeFactoryGetters', 'SizeFactoryStorage', 'ISizeFactory', 'ISizeFactoryV1_7', 'ISizeFactoryGetters']
 
+-------------------------------------------+-----+-------------+----------------------------+---------------------+-------------------------------------+--------------------------------------------------------------------+---------+
| Function                                  | Vis |   Modifiers |                       Read |               Write |                      Internal Calls |                                                     External Calls | Cycloma |
+-------------------------------------------+-----+-------------+----------------------------+---------------------+-------------------------------------+--------------------------------------------------------------------+---------+
| __UUPSUpgradeable_init()                  | int | ['onlyIniti |                         [] |                  [] |                ['onlyInitializing'] |                                                                 [] |       1 |
|                                           | ern |   alizing'] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| __UUPSUpgradeable_init_unchained()        | int | ['onlyIniti |                         [] |                  [] |                ['onlyInitializing'] |                                                                 [] |       1 |
|                                           | ern |   alizing'] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| proxiableUUID()                           | ext | ['notDelega |                         [] |                  [] |                    ['notDelegated'] |                                                                 [] |       1 |
|                                           | ern |       ted'] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| upgradeToAndCall(address,bytes)           | pub | ['onlyProxy |                         [] |                  [] |               ['_authorizeUpgrade', |                                                                 [] |       1 |
|                                           | lic |          '] |                            |                     |            '_upgradeToAndCallUUPS'] |                                                                    |         |
|                                           |     |             |                            |                     |                       ['onlyProxy'] |                                                                    |         |
| _checkProxy()                             | int |          [] |         ['__self', 'this'] |                  [] |                            ['revert |                               ['ERC1967Utils.getImplementation()'] |       2 |
|                                           | ern |             |                            |                     |     UUPSUnauthorizedCallContext()'] |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _checkNotDelegated()                      | int |          [] |         ['__self', 'this'] |                  [] |                            ['revert |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |     UUPSUnauthorizedCallContext()'] |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _authorizeUpgrade(address)                | int |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _upgradeToAndCallUUPS(address,bytes)      | pri |          [] |                         [] |                  [] | ['revert ERC1967InvalidImplementati |   ['ERC1967Utils.ERC1967InvalidImplementation(newImplementation)', |       2 |
|                                           | vat |             |                            |                     | on(address)', 'revert UUPSUnsupport |           'ERC1967Utils.upgradeToAndCall(newImplementation,data)'] |         |
|                                           |   e |             |                            |                     |          edProxiableUUID(bytes32)'] |           ['IERC1822Proxiable(newImplementation).proxiableUUID()'] |         |
| proxiableUUID()                           | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _checkInitializing()                      | int |          [] |                         [] |                  [] |         ['_isInitializing', 'revert |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                 NotInitializing()'] |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _disableInitializers()                    | int |          [] |                         [] |                  [] |        ['_getInitializableStorage', |                                                                 [] |       3 |
|                                           | ern |             |                            |                     |   'revert InvalidInitialization()'] |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _getInitializedVersion()                  | int |          [] |                         [] |                  [] |        ['_getInitializableStorage'] |                                                                 [] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _isInitializing()                         | int |          [] |                         [] |                  [] |        ['_getInitializableStorage'] |                                                                 [] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _getInitializableStorage()                | pri |          [] |  ['INITIALIZABLE_STORAGE'] |                  [] |                                  [] |                                                                 [] |       1 |
|                                           | vat |             |                            |                     |                                     |                                                                    |         |
|                                           |   e |             |                            |                     |                                     |                                                                    |         |
| _getAccessControlStorage()                | pri |          [] | ['AccessControlStorageLoca |                  [] |                                  [] |                                                                 [] |       1 |
|                                           | vat |             |                     tion'] |                     |                                     |                                                                    |         |
|                                           |   e |             |                            |                     |                                     |                                                                    |         |
| __AccessControl_init()                    | int | ['onlyIniti |                         [] |                  [] |                ['onlyInitializing'] |                                                                 [] |       1 |
|                                           | ern |   alizing'] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| __AccessControl_init_unchained()          | int | ['onlyIniti |                         [] |                  [] |                ['onlyInitializing'] |                                                                 [] |       1 |
|                                           | ern |   alizing'] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| supportsInterface(bytes4)                 | pub |          [] |                         [] |                  [] |     ['supportsInterface', 'type()'] |                                                                 [] |       1 |
|                                           | lic |             |                            |                     |                                     |                                                                    |         |
| hasRole(bytes32,address)                  | pub |          [] |                         [] |                  [] |        ['_getAccessControlStorage'] |                                                                 [] |       1 |
|                                           | lic |             |                            |                     |                                     |                                                                    |         |
| _checkRole(bytes32)                       | int |          [] |                         [] |                  [] |        ['_checkRole', '_msgSender'] |                                                                 [] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _checkRole(bytes32,address)               | int |          [] |                         [] |                  [] | ['hasRole', 'revert AccessControlUn |                                                                 [] |       2 |
|                                           | ern |             |                            |                     | authorizedAccount(address,bytes32)' |                                                                    |         |
|                                           |  al |             |                            |                     |                                   ] |                                                                    |         |
| getRoleAdmin(bytes32)                     | pub |          [] |                         [] |                  [] |        ['_getAccessControlStorage'] |                                                                 [] |       1 |
|                                           | lic |             |                            |                     |                                     |                                                                    |         |
| grantRole(bytes32,address)                | pub | ['getRoleAd |                         [] |                  [] |      ['_grantRole', 'getRoleAdmin'] |                                                                 [] |       1 |
|                                           | lic |       min', |                            |                     |                        ['onlyRole'] |                                                                    |         |
|                                           |     | 'onlyRole'] |                            |                     |                                     |                                                                    |         |
| revokeRole(bytes32,address)               | pub | ['getRoleAd |                         [] |                  [] |     ['_revokeRole', 'getRoleAdmin'] |                                                                 [] |       1 |
|                                           | lic |       min', |                            |                     |                        ['onlyRole'] |                                                                    |         |
|                                           |     | 'onlyRole'] |                            |                     |                                     |                                                                    |         |
| renounceRole(bytes32,address)             | pub |          [] |                         [] |                  [] |       ['_msgSender', '_revokeRole'] |                                                                 [] |       2 |
|                                           | lic |             |                            |                     |                            ['revert |                                                                    |         |
|                                           |     |             |                            |                     |    AccessControlBadConfirmation()'] |                                                                    |         |
| _setRoleAdmin(bytes32,bytes32)            | int |          [] |                         [] |                  [] |        ['_getAccessControlStorage', |                                                                 [] |       1 |
|                                           | ern |             |                            |                     |                     'getRoleAdmin'] |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _grantRole(bytes32,address)               | int |          [] |                         [] |                  [] |        ['_getAccessControlStorage', |                                                                 [] |       1 |
|                                           | ern |             |                            |                     |                       '_msgSender'] |                                                                    |         |
|                                           |  al |             |                            |                     |                         ['hasRole'] |                                                                    |         |
| _revokeRole(bytes32,address)              | int |          [] |                         [] |                  [] |        ['_getAccessControlStorage', |                                                                 [] |       1 |
|                                           | ern |             |                            |                     |                       '_msgSender'] |                                                                    |         |
|                                           |  al |             |                            |                     |                         ['hasRole'] |                                                                    |         |
| __ERC165_init()                           | int | ['onlyIniti |                         [] |                  [] |                ['onlyInitializing'] |                                                                 [] |       1 |
|                                           | ern |   alizing'] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| __ERC165_init_unchained()                 | int | ['onlyIniti |                         [] |                  [] |                ['onlyInitializing'] |                                                                 [] |       1 |
|                                           | ern |   alizing'] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| supportsInterface(bytes4)                 | pub |          [] |                         [] |                  [] |                          ['type()'] |                                                                 [] |       1 |
|                                           | lic |             |                            |                     |                                     |                                                                    |         |
| supportsInterface(bytes4)                 | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| hasRole(bytes32,address)                  | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getRoleAdmin(bytes32)                     | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| grantRole(bytes32,address)                | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| revokeRole(bytes32,address)               | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| renounceRole(bytes32,address)             | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| __Context_init()                          | int | ['onlyIniti |                         [] |                  [] |                ['onlyInitializing'] |                                                                 [] |       1 |
|                                           | ern |   alizing'] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| __Context_init_unchained()                | int | ['onlyIniti |                         [] |                  [] |                ['onlyInitializing'] |                                                                 [] |       1 |
|                                           | ern |   alizing'] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _msgSender()                              | int |          [] |             ['msg.sender'] |                  [] |                                  [] |                                                                 [] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _msgData()                                | int |          [] |               ['msg.data'] |                  [] |                                  [] |                                                                 [] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _contextSuffixLength()                    | int |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _getOwnable2StepStorage()                 | pri |          [] | ['Ownable2StepStorageLocat |                  [] |                                  [] |                                                                 [] |       1 |
|                                           | vat |             |                      ion'] |                     |                                     |                                                                    |         |
|                                           |   e |             |                            |                     |                                     |                                                                    |         |
| __Ownable2Step_init()                     | int | ['onlyIniti |                         [] |                  [] |                ['onlyInitializing'] |                                                                 [] |       1 |
|                                           | ern |   alizing'] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| __Ownable2Step_init_unchained()           | int | ['onlyIniti |                         [] |                  [] |                ['onlyInitializing'] |                                                                 [] |       1 |
|                                           | ern |   alizing'] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| pendingOwner()                            | pub |          [] |                         [] |                  [] |         ['_getOwnable2StepStorage'] |                                                                 [] |       1 |
|                                           | lic |             |                            |                     |                                     |                                                                    |         |
| transferOwnership(address)                | pub | ['onlyOwner |                         [] |                  [] |         ['_getOwnable2StepStorage', |                                                                 [] |       1 |
|                                           | lic |          '] |                            |                     |                        'onlyOwner'] |                                                                    |         |
|                                           |     |             |                            |                     |                           ['owner'] |                                                                    |         |
| _transferOwnership(address)               | int |          [] |                         [] |                  [] |         ['_getOwnable2StepStorage', |                                                                 [] |       1 |
|                                           | ern |             |                            |                     |               '_transferOwnership'] |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| acceptOwnership()                         | pub |          [] |                         [] |                  [] |                      ['_msgSender', |                                                                 [] |       2 |
|                                           | lic |             |                            |                     |               '_transferOwnership'] |                                                                    |         |
|                                           |     |             |                            |                     | ['pendingOwner', 'revert OwnableUna |                                                                    |         |
|                                           |     |             |                            |                     |         uthorizedAccount(address)'] |                                                                    |         |
| _getOwnableStorage()                      | pri |          [] | ['OwnableStorageLocation'] |                  [] |                                  [] |                                                                 [] |       1 |
|                                           | vat |             |                            |                     |                                     |                                                                    |         |
|                                           |   e |             |                            |                     |                                     |                                                                    |         |
| __Ownable_init(address)                   | int | ['onlyIniti |                         [] |                  [] |        ['__Ownable_init_unchained', |                                                                 [] |       1 |
|                                           | ern |   alizing'] |                            |                     |                 'onlyInitializing'] |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| __Ownable_init_unchained(address)         | int | ['onlyIniti |                         [] |                  [] |              ['_transferOwnership', |                                                                 [] |       2 |
|                                           | ern |   alizing'] |                            |                     |                 'onlyInitializing'] |                                                                    |         |
|                                           |  al |             |                            |                     |                            ['revert |                                                                    |         |
|                                           |     |             |                            |                     |      OwnableInvalidOwner(address)'] |                                                                    |         |
| owner()                                   | pub |          [] |                         [] |                  [] |              ['_getOwnableStorage'] |                                                                 [] |       1 |
|                                           | lic |             |                            |                     |                                     |                                                                    |         |
| _checkOwner()                             | int |          [] |                         [] |                  [] |             ['_msgSender', 'owner'] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     | ['revert OwnableUnauthorizedAccount |                                                                    |         |
|                                           |  al |             |                            |                     |                         (address)'] |                                                                    |         |
| renounceOwnership()                       | pub | ['onlyOwner |                         [] |                  [] | ['_transferOwnership', 'onlyOwner'] |                                                                 [] |       1 |
|                                           | lic |          '] |                            |                     |                                     |                                                                    |         |
| transferOwnership(address)                | pub | ['onlyOwner |                         [] |                  [] | ['_transferOwnership', 'onlyOwner'] |                                                                 [] |       2 |
|                                           | lic |          '] |                            |                     |                            ['revert |                                                                    |         |
|                                           |     |             |                            |                     |      OwnableInvalidOwner(address)'] |                                                                    |         |
| _transferOwnership(address)               | int |          [] |                         [] |                  [] |              ['_getOwnableStorage'] |                                                                 [] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| __Multicall_init()                        | int | ['onlyIniti |                         [] |                  [] |                ['onlyInitializing'] |                                                                 [] |       1 |
|                                           | ern |   alizing'] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| __Multicall_init_unchained()              | int | ['onlyIniti |                         [] |                  [] |                ['onlyInitializing'] |                                                                 [] |       1 |
|                                           | ern |   alizing'] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| multicall(bytes[])                        | ext |          [] | ['msg.data', 'msg.sender'] |                  [] |    ['_msgSender', 'bytes.concat()'] | ['Address.functionDelegateCall(address(this),bytes.concat(data[i], |       2 |
|                                           | ern |             |                   ['this'] |                     |                                     |                       context))', 'bytes.concat(data[i],context)'] |         |
|                                           |  al |             |                            |                     |                                     |                       ['new bytes(0)', 'new bytes[](data.length)'] |         |
| isPriceFeed(address)                      | ext |          [] |             ['priceFeeds'] |                  [] |                                  [] |                                 ['priceFeeds.contains(candidate)'] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| isBorrowATokenV1_5(address)               | ext |          [] |      ['borrowATokensV1_5'] |                  [] |                                  [] |                          ['borrowATokensV1_5.contains(candidate)'] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getMarket(uint256)                        | ext |          [] |                ['markets'] |                  [] |                                  [] |                                              ['markets.at(index)'] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getPriceFeed(uint256)                     | ext |          [] |             ['priceFeeds'] |                  [] |                                  [] |                                           ['priceFeeds.at(index)'] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getBorrowATokenV1_5(uint256)              | ext |          [] |      ['borrowATokensV1_5'] |                  [] |                                  [] |                                    ['borrowATokensV1_5.at(index)'] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getMarketsCount()                         | ext |          [] |                ['markets'] |                  [] |                                  [] |                                               ['markets.length()'] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getPriceFeedsCount()                      | ext |          [] |             ['priceFeeds'] |                  [] |                                  [] |                                            ['priceFeeds.length()'] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getBorrowATokensV1_5Count()               | ext |          [] |      ['borrowATokensV1_5'] |                  [] |                                  [] |                                     ['borrowATokensV1_5.length()'] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getMarkets()                              | ext |          [] |                ['markets'] |                  [] |                                  [] |                              ['markets.at(i)', 'markets.length()'] |       2 |
|                                           | ern |             |                            |                     |                                     |                                  ['new ISize[](markets.length())'] |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getPriceFeeds()                           | ext |          [] |             ['priceFeeds'] |                  [] |                                  [] |       ['new PriceFeed[](priceFeeds.length())', 'priceFeeds.at(i)'] |       2 |
|                                           | ern |             |                            |                     |                                     |                                            ['priceFeeds.length()'] |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getBorrowATokensV1_5()                    | ext |          [] |      ['borrowATokensV1_5'] |                  [] |                                  [] |          ['borrowATokensV1_5.at(i)', 'borrowATokensV1_5.length()'] |       2 |
|                                           | ern |             |                            |                     |                                     |               ['new IERC20Metadata[](borrowATokensV1_5.length())'] |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getMarketDescriptions()                   | ext |          [] |                ['markets'] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getPriceFeedDescriptions()                | ext |          [] |             ['priceFeeds'] |                  [] |                    ['abi.decode()', |                                      ['abi.decode(data,(string))', |       3 |
|                                           | ern |             |                            |                     |         'abi.encodeWithSelector()'] |   'abi.encodeWithSelector(IPriceFeedV1_5_2.description.selector)'] |         |
|                                           |  al |             |                            |                     |                 ['string.concat()'] | ['address(priceFeed).staticcall(abi.encodeWithSelector(IPriceFeedV |         |
|                                           |     |             |                            |                     |                                     |                                1_5_2.description.selector))', 'new |         |
|                                           |     |             |                            |                     |                                     |                                    string[](priceFeeds.length())'] |         |
|                                           |     |             |                            |                     |                                     |             ['priceFeed.base()', 'priceFeed.base().description()'] |         |
|                                           |     |             |                            |                     |                                     |           ['priceFeed.quote()', 'priceFeed.quote().description()'] |         |
|                                           |     |             |                            |                     |                                     |                        ['priceFeeds.at(i)', 'priceFeeds.length()'] |         |
|                                           |     |             |                            |                     |                                     |     ['string.concat(PriceFeed | ,priceFeed.base().description(), | |         |
|                                           |     |             |                            |                     |                                     |                                ,priceFeed.quote().description())'] |         |
| getBorrowATokenV1_5Descriptions()         | ext |          [] |      ['borrowATokensV1_5'] |                  [] |                                  [] |           ['borrowATokenV1_5.symbol()', 'borrowATokensV1_5.at(i)'] |       2 |
|                                           | ern |             |                            |                     |                                     |                                ['borrowATokensV1_5.length()', 'new |         |
|                                           |  al |             |                            |                     |                                     |                             string[](borrowATokensV1_5.length())'] |         |
| version()                                 | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| isPriceFeed(address)                      | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| isBorrowATokenV1_5(address)               | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getMarket(uint256)                        | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getPriceFeed(uint256)                     | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getBorrowATokenV1_5(uint256)              | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getMarketsCount()                         | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getPriceFeedsCount()                      | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getBorrowATokensV1_5Count()               | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getMarkets()                              | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getPriceFeeds()                           | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getBorrowATokensV1_5()                    | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getMarketDescriptions()                   | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getPriceFeedDescriptions()                | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| getBorrowATokenV1_5Descriptions()         | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| version()                                 | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| setSizeImplementation(address)            | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| setNonTransferrableScaledTokenV1_5Impleme | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
| ntation(address)                          | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| createMarket(InitializeFeeConfigParams,In | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
| itializeRiskConfigParams,InitializeOracle | ern |             |                            |                     |                                     |                                                                    |         |
| Params,InitializeDataParams)              |  al |             |                            |                     |                                     |                                                                    |         |
| createPriceFeed(PriceFeedParams)          | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| createBorrowATokenV1_5(IPool,IERC20Metada | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
| ta)                                       | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| addMarket(ISize)                          | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| addPriceFeed(PriceFeed)                   | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| addBorrowATokenV1_5(IERC20Metadata)       | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| removeMarket(ISize)                       | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| removePriceFeed(PriceFeed)                | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| removeBorrowATokenV1_5(IERC20Metadata)    | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| isMarket(address)                         | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| reinitialize()                            | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| setAuthorization(address,ActionsBitmap)   | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| revokeAllAuthorizations()                 | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| isAuthorized(address,address,Action)      | ext |          [] |                         [] |                  [] |                                  [] |                                                                 [] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| constructor()                             | pub |          [] |                         [] |                  [] |            ['_disableInitializers'] |                                                                 [] |       1 |
|                                           | lic |             |                            |                     |                                     |                                                                    |         |
| initialize(address)                       | ext | ['initializ |     ['DEFAULT_ADMIN_ROLE'] |                  [] |            ['__AccessControl_init', |                                                                 [] |       1 |
|                                           | ern |        er'] |                            |                     |                 '__Multicall_init'] |                                                                    |         |
|                                           |  al |             |                            |                     |             ['__Ownable2Step_init', |                                                                    |         |
|                                           |     |             |                            |                     |                   '__Ownable_init'] |                                                                    |         |
|                                           |     |             |                            |                     |          ['__UUPSUpgradeable_init', |                                                                    |         |
|                                           |     |             |                            |                     |                       '_grantRole'] |                                                                    |         |
|                                           |     |             |                            |                     |                     ['initializer'] |                                                                    |         |
| reinitialize()                            | ext | ['onlyOwner |     ['DEFAULT_ADMIN_ROLE'] |                  [] |                      ['_grantRole', |                                                                 [] |       1 |
|                                           | ern | ', 'reiniti |                            |                     |               '_transferOwnership'] |                                                                    |         |
|                                           |  al |    alizer'] |                            |                     |              ['onlyOwner', 'owner'] |                                                                    |         |
|                                           |     |             |                            |                     |                   ['reinitializer'] |                                                                    |         |
| _authorizeUpgrade(address)                | int | ['onlyRole' |     ['DEFAULT_ADMIN_ROLE'] |                  [] |                        ['onlyRole'] |                                                                 [] |       1 |
|                                           | ern |           ] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| setSizeImplementation(address)            | ext | ['onlyRole' |     ['DEFAULT_ADMIN_ROLE', | ['sizeImplementatio |                ['onlyRole', 'revert |                                          ['Errors.NULL_ADDRESS()'] |       2 |
|                                           | ern |           ] |      'sizeImplementation'] |                 n'] |                    NULL_ADDRESS()'] |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| setNonTransferrableScaledTokenV1_5Impleme | ext | ['onlyRole' | ['DEFAULT_ADMIN_ROLE', 'no | ['nonTransferrableS |                ['onlyRole', 'revert |                                          ['Errors.NULL_ADDRESS()'] |       2 |
| ntation(address)                          | ern |           ] | nTransferrableScaledTokenV | caledTokenV1_5Imple |                    NULL_ADDRESS()'] |                                                                    |         |
|                                           |  al |             |        1_5Implementation'] |         mentation'] |                                     |                                                                    |         |
| createMarket(InitializeFeeConfigParams,In | ext | ['onlyRole' |     ['DEFAULT_ADMIN_ROLE', |                  [] |          ['_addMarket', 'onlyRole'] | ['MarketFactoryLibrary.createMarket(sizeImplementation,owner(),fee |       1 |
| itializeRiskConfigParams,InitializeOracle | ern |           ] |      'sizeImplementation'] |                     |                           ['owner'] |           ConfigParams,riskConfigParams,oracleParams,dataParams)'] |         |
| Params,InitializeDataParams)              |  al |             |                            |                     |                                     |                                                                    |         |
| addMarket(ISize)                          | ext | ['onlyRole' |     ['DEFAULT_ADMIN_ROLE'] |                  [] |          ['_addMarket', 'onlyRole'] |                                                                 [] |       1 |
|                                           | ern |           ] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _addMarket(ISize)                         | int |          [] |                ['markets'] |                  [] |           ['revert NULL_ADDRESS()'] |          ['Errors.NULL_ADDRESS()', 'markets.add(address(market))'] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| removeMarket(ISize)                       | ext | ['onlyRole' |     ['DEFAULT_ADMIN_ROLE', |                  [] |                ['onlyRole', 'revert |       ['Errors.NULL_ADDRESS()', 'markets.remove(address(market))'] |       2 |
|                                           | ern |           ] |                 'markets'] |                     |                    NULL_ADDRESS()'] |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| createPriceFeed(PriceFeedParams)          | ext |          [] |                         [] |                  [] |                   ['_addPriceFeed'] |      ['PriceFeedFactoryLibrary.createPriceFeed(_priceFeedParams)'] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| addPriceFeed(PriceFeed)                   | ext | ['onlyRole' |     ['DEFAULT_ADMIN_ROLE'] |                  [] |       ['_addPriceFeed', 'onlyRole'] |                                                                 [] |       1 |
|                                           | ern |           ] |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _addPriceFeed(PriceFeed)                  | int |          [] |             ['priceFeeds'] |                  [] |           ['revert NULL_ADDRESS()'] |    ['Errors.NULL_ADDRESS()', 'priceFeeds.add(address(priceFeed))'] |       2 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| removePriceFeed(PriceFeed)                | ext | ['onlyRole' |     ['DEFAULT_ADMIN_ROLE', |                  [] |                ['onlyRole', 'revert | ['Errors.NULL_ADDRESS()', 'priceFeeds.remove(address(priceFeed))'] |       2 |
|                                           | ern |           ] |              'priceFeeds'] |                     |                    NULL_ADDRESS()'] |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| createBorrowATokenV1_5(IPool,IERC20Metada | ext |          [] | ['nonTransferrableScaledTo |                  [] |   ['_addBorrowATokenV1_5', 'owner'] | ['NonTransferrableScaledTokenV1_5FactoryLibrary.createNonTransferr |       1 |
| ta)                                       | ern |             |    kenV1_5Implementation'] |                     |                                     | ableScaledTokenV1_5(nonTransferrableScaledTokenV1_5Implementation, |         |
|                                           |  al |             |                            |                     |                                     |                      owner(),variablePool,underlyingBorrowToken)'] |         |
| addBorrowATokenV1_5(IERC20Metadata)       | ext | ['onlyRole' |     ['DEFAULT_ADMIN_ROLE'] |                  [] |            ['_addBorrowATokenV1_5', |                                                                 [] |       1 |
|                                           | ern |           ] |                            |                     |                         'onlyRole'] |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| _addBorrowATokenV1_5(IERC20Metadata)      | int |          [] |      ['borrowATokensV1_5'] |                  [] |           ['revert NULL_ADDRESS()'] |                                          ['Errors.NULL_ADDRESS()', |       2 |
|                                           | ern |             |                            |                     |                                     |                'borrowATokensV1_5.add(address(borrowATokenV1_5))'] |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| removeBorrowATokenV1_5(IERC20Metadata)    | ext | ['onlyRole' |     ['DEFAULT_ADMIN_ROLE', |                  [] |                ['onlyRole', 'revert |                                          ['Errors.NULL_ADDRESS()', |       2 |
|                                           | ern |           ] |       'borrowATokensV1_5'] |                     |                    NULL_ADDRESS()'] |             'borrowATokensV1_5.remove(address(borrowATokenV1_5))'] |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| isMarket(address)                         | ext |          [] |                ['markets'] |                  [] |                                  [] |                                    ['markets.contains(candidate)'] |       1 |
|                                           | ern |             |                            |                     |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| setAuthorization(address,ActionsBitmap)   | ext |          [] |    ['authorizationNonces', |  ['authorizations'] |                            ['revert |                           ['Authorization.isValid(actionsBitmap)', |       3 |
|                                           | ern |             |              'msg.sender'] |                     |   INVALID_ACTIONS_BITMAP(uint256)', |                          'Authorization.toUint256(actionsBitmap)'] |         |
|                                           |  al |             |                            |                     |            'revert NULL_ADDRESS()'] | ['Authorization.toUint256(actionsBitmap)', 'Errors.INVALID_ACTIONS |         |
|                                           |     |             |                            |                     |                                     |                  _BITMAP(Authorization.toUint256(actionsBitmap))'] |         |
|                                           |     |             |                            |                     |                                     |                                          ['Errors.NULL_ADDRESS()'] |         |
| revokeAllAuthorizations()                 | ext |          [] |    ['authorizationNonces', | ['authorizationNonc |                                  [] |                                                                 [] |       1 |
|                                           | ern |             |              'msg.sender'] |                es'] |                                     |                                                                    |         |
|                                           |  al |             |                            |                     |                                     |                                                                    |         |
| isAuthorized(address,address,Action)      | pub |          [] |    ['authorizationNonces', |                  [] |                                  [] | ['Authorization.isActionSet(authorizations[nonce][operator][onBeha |       1 |
|                                           | lic |             |          'authorizations'] |                     |                                     |                                                    lfOf],action)'] |         |
| slitherConstructorConstantVariables()     | int |          [] |                         [] | ['DEFAULT_ADMIN_ROL |                                  [] |                                                                 [] |       1 |
|                                           | ern |             |                            | E', 'UPGRADE_INTERF |                                     |                                                                    |         |
|                                           |  al |             |                            |       ACE_VERSION'] |                                     |                                                                    |         |
+-------------------------------------------+-----+-------------+----------------------------+---------------------+-------------------------------------+--------------------------------------------------------------------+---------+

+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| Modifiers             | Visibility |     Read | Write |                                                 Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+
| onlyProxy()           |   internal |       [] |    [] |                                                ['_checkProxy'] |             [] |                     1 |
| notDelegated()        |   internal |       [] |    [] |                                         ['_checkNotDelegated'] |             [] |                     1 |
| initializer()         |   internal | ['this'] |    [] |                  ['_getInitializableStorage', 'code(address)'] |             [] |                     4 |
|                       |            |          |       |                             ['revert InvalidInitialization()'] |                |                       |
| reinitializer(uint64) |   internal |       [] |    [] | ['_getInitializableStorage', 'revert InvalidInitialization()'] |             [] |                     2 |
| onlyInitializing()    |   internal |       [] |    [] |                                         ['_checkInitializing'] |             [] |                     1 |
| onlyRole(bytes32)     |   internal |       [] |    [] |                                                 ['_checkRole'] |             [] |                     1 |
| onlyOwner()           |   internal |       [] |    [] |                                                ['_checkOwner'] |             [] |                     1 |
+-----------------------+------------+----------+-------+----------------------------------------------------------------+----------------+-----------------------+

INFO:Printers:
Contract SizeFactoryEvents
Contract vars: []
Inheritance:: []
 
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract SizeFactoryGetters
Contract vars: ['markets', 'priceFeeds', 'borrowATokensV1_5', 'sizeImplementation', 'nonTransferrableScaledTokenV1_5Implementation', 'authorizations', 'authorizationNonces']
Inheritance:: ['SizeFactoryStorage', 'ISizeFactoryGetters']
 
+---------------------------+---------+--------+------------------+-----+-----------------------------------+-------------------------------------------------------------------------------------------------------+------------------+
| Function                  | Visibil | Modifi |             Read | Wri |                    Internal Calls |                                                                                        External Calls | Cyclomatic Compl |
+---------------------------+---------+--------+------------------+-----+-----------------------------------+-------------------------------------------------------------------------------------------------------+------------------+
| isPriceFeed(address)      | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| isBorrowATokenV1_5(addres | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
| s)                        |       l |        |                  |     |                                   |                                                                                                       |                  |
| getMarket(uint256)        | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| getPriceFeed(uint256)     | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| getBorrowATokenV1_5(uint2 | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
| 56)                       |       l |        |                  |     |                                   |                                                                                                       |                  |
| getMarketsCount()         | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| getPriceFeedsCount()      | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| getBorrowATokensV1_5Count | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
| ()                        |       l |        |                  |     |                                   |                                                                                                       |                  |
| getMarkets()              | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| getPriceFeeds()           | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| getBorrowATokensV1_5()    | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| getMarketDescriptions()   | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| getPriceFeedDescriptions( | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
| )                         |       l |        |                  |     |                                   |                                                                                                       |                  |
| getBorrowATokenV1_5Descri | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
| ptions()                  |       l |        |                  |     |                                   |                                                                                                       |                  |
| version()                 | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                2 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| isPriceFeed(address)      | externa |     [] |   ['priceFeeds'] |  [] |                                [] |                                                                    ['priceFeeds.contains(candidate)'] |                1 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| isBorrowATokenV1_5(addres | externa |     [] | ['borrowATokensV |  [] |                                [] |                                                             ['borrowATokensV1_5.contains(candidate)'] |                1 |
| s)                        |       l |        |            1_5'] |     |                                   |                                                                                                       |                  |
| getMarket(uint256)        | externa |     [] |      ['markets'] |  [] |                                [] |                                                                                 ['markets.at(index)'] |                1 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| getPriceFeed(uint256)     | externa |     [] |   ['priceFeeds'] |  [] |                                [] |                                                                              ['priceFeeds.at(index)'] |                1 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| getBorrowATokenV1_5(uint2 | externa |     [] | ['borrowATokensV |  [] |                                [] |                                                                       ['borrowATokensV1_5.at(index)'] |                1 |
| 56)                       |       l |        |            1_5'] |     |                                   |                                                                                                       |                  |
| getMarketsCount()         | externa |     [] |      ['markets'] |  [] |                                [] |                                                                                  ['markets.length()'] |                1 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| getPriceFeedsCount()      | externa |     [] |   ['priceFeeds'] |  [] |                                [] |                                                                               ['priceFeeds.length()'] |                1 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| getBorrowATokensV1_5Count | externa |     [] | ['borrowATokensV |  [] |                                [] |                                                                        ['borrowATokensV1_5.length()'] |                1 |
| ()                        |       l |        |            1_5'] |     |                                   |                                                                                                       |                  |
| getMarkets()              | externa |     [] |      ['markets'] |  [] |                                [] |                                                                 ['markets.at(i)', 'markets.length()'] |                2 |
|                           |       l |        |                  |     |                                   |                                                                     ['new ISize[](markets.length())'] |                  |
| getPriceFeeds()           | externa |     [] |   ['priceFeeds'] |  [] |                                [] |                                          ['new PriceFeed[](priceFeeds.length())', 'priceFeeds.at(i)'] |                2 |
|                           |       l |        |                  |     |                                   |                                                                               ['priceFeeds.length()'] |                  |
| getBorrowATokensV1_5()    | externa |     [] | ['borrowATokensV |  [] |                                [] |                                             ['borrowATokensV1_5.at(i)', 'borrowATokensV1_5.length()'] |                2 |
|                           |       l |        |            1_5'] |     |                                   |                                                  ['new IERC20Metadata[](borrowATokensV1_5.length())'] |                  |
| getMarketDescriptions()   | externa |     [] |      ['markets'] |  [] |                                [] |                                                                                                    [] |                2 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
| getPriceFeedDescriptions( | externa |     [] |   ['priceFeeds'] |  [] |                  ['abi.decode()', |        ['abi.decode(data,(string))', 'abi.encodeWithSelector(IPriceFeedV1_5_2.description.selector)'] |                3 |
| )                         |       l |        |                  |     |       'abi.encodeWithSelector()'] | ['address(priceFeed).staticcall(abi.encodeWithSelector(IPriceFeedV1_5_2.description.selector))', 'new |                  |
|                           |         |        |                  |     |               ['string.concat()'] |                                                                       string[](priceFeeds.length())'] |                  |
|                           |         |        |                  |     |                                   |                                                ['priceFeed.base()', 'priceFeed.base().description()'] |                  |
|                           |         |        |                  |     |                                   |                                              ['priceFeed.quote()', 'priceFeed.quote().description()'] |                  |
|                           |         |        |                  |     |                                   |                                                           ['priceFeeds.at(i)', 'priceFeeds.length()'] |                  |
|                           |         |        |                  |     |                                   |    ['string.concat(PriceFeed | ,priceFeed.base().description(), | ,priceFeed.quote().description())'] |                  |
| getBorrowATokenV1_5Descri | externa |     [] | ['borrowATokensV |  [] |                                [] |                                              ['borrowATokenV1_5.symbol()', 'borrowATokensV1_5.at(i)'] |                2 |
| ptions()                  |       l |        |            1_5'] |     |                                   |                            ['borrowATokensV1_5.length()', 'new string[](borrowATokensV1_5.length())'] |                  |
| version()                 | externa |     [] |               [] |  [] |                                [] |                                                                                                    [] |                1 |
|                           |       l |        |                  |     |                                   |                                                                                                       |                  |
+---------------------------+---------+--------+------------------+-----+-----------------------------------+-------------------------------------------------------------------------------------------------------+------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract SizeFactoryStorage
Contract vars: ['markets', 'priceFeeds', 'borrowATokensV1_5', 'sizeImplementation', 'nonTransferrableScaledTokenV1_5Implementation', 'authorizations', 'authorizationNonces']
Inheritance:: []
 
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract ISizeFactory
Contract vars: []
Inheritance:: ['ISizeFactoryV1_7', 'ISizeFactoryGetters']
 
+----------------------------------------------------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                                                                                                       | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------------------------------------------------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| reinitialize()                                                                                                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setAuthorization(address,ActionsBitmap)                                                                        |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| revokeAllAuthorizations()                                                                                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| isAuthorized(address,address,Action)                                                                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| isPriceFeed(address)                                                                                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| isBorrowATokenV1_5(address)                                                                                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getMarket(uint256)                                                                                             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPriceFeed(uint256)                                                                                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getBorrowATokenV1_5(uint256)                                                                                   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getMarketsCount()                                                                                              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPriceFeedsCount()                                                                                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getBorrowATokensV1_5Count()                                                                                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getMarkets()                                                                                                   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPriceFeeds()                                                                                                |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getBorrowATokensV1_5()                                                                                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getMarketDescriptions()                                                                                        |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPriceFeedDescriptions()                                                                                     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getBorrowATokenV1_5Descriptions()                                                                              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| version()                                                                                                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setSizeImplementation(address)                                                                                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setNonTransferrableScaledTokenV1_5Implementation(address)                                                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| createMarket(InitializeFeeConfigParams,InitializeRiskConfigParams,InitializeOracleParams,InitializeDataParams) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| createPriceFeed(PriceFeedParams)                                                                               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| createBorrowATokenV1_5(IPool,IERC20Metadata)                                                                   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| addMarket(ISize)                                                                                               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| addPriceFeed(PriceFeed)                                                                                        |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| addBorrowATokenV1_5(IERC20Metadata)                                                                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| removeMarket(ISize)                                                                                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| removePriceFeed(PriceFeed)                                                                                     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| removeBorrowATokenV1_5(IERC20Metadata)                                                                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| isMarket(address)                                                                                              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+----------------------------------------------------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract ISizeFactoryGetters
Contract vars: []
Inheritance:: []
 
+-----------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                          | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| isPriceFeed(address)              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| isBorrowATokenV1_5(address)       |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getMarket(uint256)                |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPriceFeed(uint256)             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getBorrowATokenV1_5(uint256)      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getMarketsCount()                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPriceFeedsCount()              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getBorrowATokensV1_5Count()       |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getMarkets()                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPriceFeeds()                   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getBorrowATokensV1_5()            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getMarketDescriptions()           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPriceFeedDescriptions()        |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getBorrowATokenV1_5Descriptions() |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| version()                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+-----------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract ISizeFactoryV1_7
Contract vars: []
Inheritance:: []
 
+-----------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                                | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| reinitialize()                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setAuthorization(address,ActionsBitmap) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| revokeAllAuthorizations()               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| isAuthorized(address,address,Action)    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+-----------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Authorization
Contract vars: []
Inheritance:: []
 
+-----------------------------------+------------+-----------+------+-------+-----------------------------------------+-----------------------------------------+-----------------------+
| Function                          | Visibility | Modifiers | Read | Write |                          Internal Calls |                          External Calls | Cyclomatic Complexity |
+-----------------------------------+------------+-----------+------+-------+-----------------------------------------+-----------------------------------------+-----------------------+
| toUint256(ActionsBitmap)          |   internal |        [] |   [] |    [] |                                      [] | ['ActionsBitmap.unwrap(actionsBitmap)'] |                     1 |
| toActionsBitmap(uint256)          |   internal |        [] |   [] |    [] |                                      [] |           ['ActionsBitmap.wrap(value)'] |                     1 |
| nullActionsBitmap()               |   internal |        [] |   [] |    [] |                     ['toActionsBitmap'] |                                      [] |                     1 |
| isValid(ActionsBitmap)            |   internal |        [] |   [] |    [] |                           ['toUint256'] |                                      [] |                     1 |
| isActionSet(ActionsBitmap,Action) |   internal |        [] |   [] |    [] |                           ['toUint256'] |                                      [] |                     1 |
| getActionsBitmap(Action)          |   internal |        [] |   [] |    [] |                     ['toActionsBitmap'] |                                      [] |                     1 |
| getActionsBitmap(Action[])        |   internal |        [] |   [] |    [] | ['getActionsBitmap', 'toActionsBitmap'] |                                      [] |                     2 |
|                                   |            |           |      |       |                           ['toUint256'] |                                         |                       |
+-----------------------------------+------------+-----------+------+-------+-----------------------------------------+-----------------------------------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract MarketFactoryLibrary
Contract vars: []
Inheritance:: []
 
+----------------------------------------------------------------------------------+--------+-------+----+-----+--------------+----------------------------------------------------------------------------------------+---------------+
| Function                                                                         | Visibi | Modif | Re | Wri | Internal Cal |                                                                         External Calls | Cyclomatic Co |
+----------------------------------------------------------------------------------+--------+-------+----+-----+--------------+----------------------------------------------------------------------------------------+---------------+
| createMarket(address,address,InitializeFeeConfigParams,InitializeRiskConfigParam | extern |    [] | [] |  [] | ['abi.encode |                               ['abi.encodeCall(Size.initialize,(owner,f,r,o,d))', 'new |             1 |
| s,InitializeOracleParams,InitializeDataParams)                                   |     al |       |    |     |     Call()'] |         ERC1967Proxy(implementation,abi.encodeCall(Size.initialize,(owner,f,r,o,d)))'] |               |
+----------------------------------------------------------------------------------+--------+-------+----+-----+--------------+----------------------------------------------------------------------------------------+---------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract NonTransferrableScaledTokenV1_5FactoryLibrary
Contract vars: []
Inheritance:: []
 
+----------------------+----+----+----+---+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------+
| Function             | Vi | Mo | Re | W | Internal C |                                                                                                                                                        External Calls | Cyclo |
+----------------------+----+----+----+---+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------+
| createNonTransferrab | ex | [] | [' | [ | ['abi.enco |           ['abi.encodeCall(NonTransferrableScaledTokenV1_5.initialize,(ISizeFactory(address(this)),variablePool,underlyingBorrowToken,owner,string.concat(Size Scaled |     1 |
| leScaledTokenV1_5(ad | te |    | th | ] | deCall()', | ,underlyingBorrowToken.name(), (v1.5)),string.concat(sa,underlyingBorrowToken.symbol()),underlyingBorrowToken.decimals()))', 'new ERC1967Proxy(address(implementation |       |
| dress,address,IPool, | rn |    | is |   | 'string.co |           ),abi.encodeCall(NonTransferrableScaledTokenV1_5.initialize,(ISizeFactory(address(this)),variablePool,underlyingBorrowToken,owner,string.concat(Size Scaled |       |
| IERC20Metadata)      | al |    | '] |   |   ncat()'] |                                         ,underlyingBorrowToken.name(), (v1.5)),string.concat(sa,underlyingBorrowToken.symbol()),underlyingBorrowToken.decimals())))'] |       |
|                      |    |    |    |   |            |                                              ['string.concat(Size Scaled ,underlyingBorrowToken.name(), (v1.5))', 'string.concat(sa,underlyingBorrowToken.symbol())'] |       |
|                      |    |    |    |   |            |                                                                                                  ['underlyingBorrowToken.decimals()', 'underlyingBorrowToken.name()'] |       |
|                      |    |    |    |   |            |                                                                                                                                    ['underlyingBorrowToken.symbol()'] |       |
+----------------------+----+----+----+---+------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------+-------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract PriceFeedFactoryLibrary
Contract vars: []
Inheritance:: []
 
+----------------------------------+------------+-----------+------+-------+----------------+-------------------------------------+-----------------------+
| Function                         | Visibility | Modifiers | Read | Write | Internal Calls |                      External Calls | Cyclomatic Complexity |
+----------------------------------+------------+-----------+------+-------+----------------+-------------------------------------+-----------------------+
| createPriceFeed(PriceFeedParams) |   external |        [] |   [] |    [] |             [] | ['new PriceFeed(_priceFeedParams)'] |                     1 |
+----------------------------------+------------+-----------+------+-------+----------------+-------------------------------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Size
Contract vars: ['state', 'DEFAULT_ADMIN_ROLE', 'UPGRADE_INTERFACE_VERSION']
Inheritance:: ['UUPSUpgradeable', 'IERC1822Proxiable', 'PausableUpgradeable', 'AccessControlUpgradeable', 'ERC165Upgradeable', 'IERC165', 'IAccessControl', 'ContextUpgradeable', 'Initializable', 'SizeView', 'ISize', 'ISizeV1_7', 'IMulticall', 'ISizeAdmin', 'ISizeView', 'ISizeViewV1_7', 'SizeStorage']
 
+------------------------------------------------+------+---------------------+---------------+----------------------+----------------------------------------+--------------------------------------------------------------+----------+
| Function                                       | Visi |           Modifiers |          Read |                Write |                         Internal Calls |                                               External Calls | Cyclomat |
+------------------------------------------------+------+---------------------+---------------+----------------------+----------------------------------------+--------------------------------------------------------------+----------+
| __UUPSUpgradeable_init()                       | inte | ['onlyInitializing' |            [] |                   [] |                   ['onlyInitializing'] |                                                           [] |        1 |
|                                                | rnal |                   ] |               |                      |                                        |                                                              |          |
| __UUPSUpgradeable_init_unchained()             | inte | ['onlyInitializing' |            [] |                   [] |                   ['onlyInitializing'] |                                                           [] |        1 |
|                                                | rnal |                   ] |               |                      |                                        |                                                              |          |
| proxiableUUID()                                | exte |    ['notDelegated'] |            [] |                   [] |                       ['notDelegated'] |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| upgradeToAndCall(address,bytes)                | publ |       ['onlyProxy'] |            [] |                   [] |                  ['_authorizeUpgrade', |                                                           [] |        1 |
|                                                |   ic |                     |               |                      |               '_upgradeToAndCallUUPS'] |                                                              |          |
|                                                |      |                     |               |                      |                          ['onlyProxy'] |                                                              |          |
| _checkProxy()                                  | inte |                  [] |    ['__self', |                   [] |                               ['revert |                         ['ERC1967Utils.getImplementation()'] |        2 |
|                                                | rnal |                     |       'this'] |                      |        UUPSUnauthorizedCallContext()'] |                                                              |          |
| _checkNotDelegated()                           | inte |                  [] |    ['__self', |                   [] |                               ['revert |                                                           [] |        2 |
|                                                | rnal |                     |       'this'] |                      |        UUPSUnauthorizedCallContext()'] |                                                              |          |
| _authorizeUpgrade(address)                     | inte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| _upgradeToAndCallUUPS(address,bytes)           | priv |                  [] |            [] |                   [] | ['revert ERC1967InvalidImplementation( | ['ERC1967Utils.ERC1967InvalidImplementation(newImplementatio |        2 |
|                                                |  ate |                     |               |                      | address)', 'revert UUPSUnsupportedProx |                                                         n)', |          |
|                                                |      |                     |               |                      |                   iableUUID(bytes32)'] |     'ERC1967Utils.upgradeToAndCall(newImplementation,data)'] |          |
|                                                |      |                     |               |                      |                                        |     ['IERC1822Proxiable(newImplementation).proxiableUUID()'] |          |
| proxiableUUID()                                | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| _checkInitializing()                           | inte |                  [] |            [] |                   [] |            ['_isInitializing', 'revert |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                    NotInitializing()'] |                                                              |          |
| _disableInitializers()                         | inte |                  [] |            [] |                   [] |   ['_getInitializableStorage', 'revert |                                                           [] |        3 |
|                                                | rnal |                     |               |                      |              InvalidInitialization()'] |                                                              |          |
| _getInitializedVersion()                       | inte |                  [] |            [] |                   [] |           ['_getInitializableStorage'] |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| _isInitializing()                              | inte |                  [] |            [] |                   [] |           ['_getInitializableStorage'] |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| _getInitializableStorage()                     | priv |                  [] | ['INITIALIZAB |                   [] |                                     [] |                                                           [] |        1 |
|                                                |  ate |                     |  LE_STORAGE'] |                      |                                        |                                                              |          |
| _getPausableStorage()                          | priv |                  [] | ['PausableSto |                   [] |                                     [] |                                                           [] |        1 |
|                                                |  ate |                     | rageLocation' |                      |                                        |                                                              |          |
|                                                |      |                     |             ] |                      |                                        |                                                              |          |
| __Pausable_init()                              | inte | ['onlyInitializing' |            [] |                   [] |          ['__Pausable_init_unchained', |                                                           [] |        1 |
|                                                | rnal |                   ] |               |                      |                    'onlyInitializing'] |                                                              |          |
| __Pausable_init_unchained()                    | inte | ['onlyInitializing' |            [] |                   [] |                ['_getPausableStorage', |                                                           [] |        1 |
|                                                | rnal |                   ] |               |                      |                    'onlyInitializing'] |                                                              |          |
| paused()                                       | publ |                  [] |            [] |                   [] |                ['_getPausableStorage'] |                                                           [] |        1 |
|                                                |   ic |                     |               |                      |                                        |                                                              |          |
| _requireNotPaused()                            | inte |                  [] |            [] |                   [] |   ['paused', 'revert EnforcedPause()'] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| _requirePaused()                               | inte |                  [] |            [] |                   [] |   ['paused', 'revert ExpectedPause()'] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| _pause()                                       | inte |   ['whenNotPaused'] |            [] |                   [] |  ['_getPausableStorage', '_msgSender'] |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                      ['whenNotPaused'] |                                                              |          |
| _unpause()                                     | inte |      ['whenPaused'] |            [] |                   [] |  ['_getPausableStorage', '_msgSender'] |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                         ['whenPaused'] |                                                              |          |
| __Context_init()                               | inte | ['onlyInitializing' |            [] |                   [] |                   ['onlyInitializing'] |                                                           [] |        1 |
|                                                | rnal |                   ] |               |                      |                                        |                                                              |          |
| __Context_init_unchained()                     | inte | ['onlyInitializing' |            [] |                   [] |                   ['onlyInitializing'] |                                                           [] |        1 |
|                                                | rnal |                   ] |               |                      |                                        |                                                              |          |
| _msgSender()                                   | inte |                  [] | ['msg.sender' |                   [] |                                     [] |                                                           [] |        1 |
|                                                | rnal |                     |             ] |                      |                                        |                                                              |          |
| _msgData()                                     | inte |                  [] |  ['msg.data'] |                   [] |                                     [] |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| _contextSuffixLength()                         | inte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| _getAccessControlStorage()                     | priv |                  [] | ['AccessContr |                   [] |                                     [] |                                                           [] |        1 |
|                                                |  ate |                     | olStorageLoca |                      |                                        |                                                              |          |
|                                                |      |                     |        tion'] |                      |                                        |                                                              |          |
| __AccessControl_init()                         | inte | ['onlyInitializing' |            [] |                   [] |                   ['onlyInitializing'] |                                                           [] |        1 |
|                                                | rnal |                   ] |               |                      |                                        |                                                              |          |
| __AccessControl_init_unchained()               | inte | ['onlyInitializing' |            [] |                   [] |                   ['onlyInitializing'] |                                                           [] |        1 |
|                                                | rnal |                   ] |               |                      |                                        |                                                              |          |
| supportsInterface(bytes4)                      | publ |                  [] |            [] |                   [] |        ['supportsInterface', 'type()'] |                                                           [] |        1 |
|                                                |   ic |                     |               |                      |                                        |                                                              |          |
| hasRole(bytes32,address)                       | publ |                  [] |            [] |                   [] |           ['_getAccessControlStorage'] |                                                           [] |        1 |
|                                                |   ic |                     |               |                      |                                        |                                                              |          |
| _checkRole(bytes32)                            | inte |                  [] |            [] |                   [] |           ['_checkRole', '_msgSender'] |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| _checkRole(bytes32,address)                    | inte |                  [] |            [] |                   [] | ['hasRole', 'revert AccessControlUnaut |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |      horizedAccount(address,bytes32)'] |                                                              |          |
| getRoleAdmin(bytes32)                          | publ |                  [] |            [] |                   [] |           ['_getAccessControlStorage'] |                                                           [] |        1 |
|                                                |   ic |                     |               |                      |                                        |                                                              |          |
| grantRole(bytes32,address)                     | publ |    ['getRoleAdmin', |            [] |                   [] |         ['_grantRole', 'getRoleAdmin'] |                                                           [] |        1 |
|                                                |   ic |         'onlyRole'] |               |                      |                           ['onlyRole'] |                                                              |          |
| revokeRole(bytes32,address)                    | publ |    ['getRoleAdmin', |            [] |                   [] |        ['_revokeRole', 'getRoleAdmin'] |                                                           [] |        1 |
|                                                |   ic |         'onlyRole'] |               |                      |                           ['onlyRole'] |                                                              |          |
| renounceRole(bytes32,address)                  | publ |                  [] |            [] |                   [] |          ['_msgSender', '_revokeRole'] |                                                           [] |        2 |
|                                                |   ic |                     |               |                      |                               ['revert |                                                              |          |
|                                                |      |                     |               |                      |       AccessControlBadConfirmation()'] |                                                              |          |
| _setRoleAdmin(bytes32,bytes32)                 | inte |                  [] |            [] |                   [] |           ['_getAccessControlStorage', |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                        'getRoleAdmin'] |                                                              |          |
| _grantRole(bytes32,address)                    | inte |                  [] |            [] |                   [] |           ['_getAccessControlStorage', |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                          '_msgSender'] |                                                              |          |
|                                                |      |                     |               |                      |                            ['hasRole'] |                                                              |          |
| _revokeRole(bytes32,address)                   | inte |                  [] |            [] |                   [] |           ['_getAccessControlStorage', |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                          '_msgSender'] |                                                              |          |
|                                                |      |                     |               |                      |                            ['hasRole'] |                                                              |          |
| __ERC165_init()                                | inte | ['onlyInitializing' |            [] |                   [] |                   ['onlyInitializing'] |                                                           [] |        1 |
|                                                | rnal |                   ] |               |                      |                                        |                                                              |          |
| __ERC165_init_unchained()                      | inte | ['onlyInitializing' |            [] |                   [] |                   ['onlyInitializing'] |                                                           [] |        1 |
|                                                | rnal |                   ] |               |                      |                                        |                                                              |          |
| supportsInterface(bytes4)                      | publ |                  [] |            [] |                   [] |                             ['type()'] |                                                           [] |        1 |
|                                                |   ic |                     |               |                      |                                        |                                                              |          |
| supportsInterface(bytes4)                      | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| hasRole(bytes32,address)                       | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getRoleAdmin(bytes32)                          | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| grantRole(bytes32,address)                     | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| revokeRole(bytes32,address)                    | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| renounceRole(bytes32,address)                  | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| collateralRatio(address)                       | exte |                  [] |     ['state'] |                   [] |                                     [] |                              ['state.collateralRatio(user)'] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| isUserUnderwater(address)                      | exte |                  [] |     ['state'] |                   [] |                                     [] |                             ['state.isUserUnderwater(user)'] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| isDebtPositionLiquidatable(uint256)            | exte |                  [] |     ['state'] |                   [] |                                     [] |         ['state.isDebtPositionLiquidatable(debtPositionId)'] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| debtTokenAmountToCollateralTokenAmount(uint256 | exte |                  [] |     ['state'] |                   [] |                                     [] | ['state.debtTokenAmountToCollateralTokenAmount(borrowATokenA |        1 |
| )                                              | rnal |                     |               |                      |                                        |                                                     mount)'] |          |
| feeConfig()                                    | exte |                  [] |     ['state'] |                   [] |                                     [] |                                  ['state.feeConfigParams()'] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| riskConfig()                                   | exte |                  [] |     ['state'] |                   [] |                                     [] |                                 ['state.riskConfigParams()'] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| oracle()                                       | exte |                  [] |     ['state'] |                   [] |                                     [] |                                     ['state.oracleParams()'] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| data()                                         | exte |                  [] |     ['state'] |                   [] |                                     [] |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| sizeFactory()                                  | exte |                  [] |     ['state'] |                   [] |                                     [] |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getUserView(address)                           | exte |                  [] |     ['state'] |                   [] |                                     [] |              ['state.data.borrowATokenV1_5.balanceOf(user)', |        1 |
|                                                | rnal |                     |               |                      |                                        |                'state.data.collateralToken.balanceOf(user)'] |          |
|                                                |      |                     |               |                      |                                        |                     ['state.data.debtToken.balanceOf(user)'] |          |
| getUserCopyLimitOrders(address)                | exte |                  [] |     ['state'] |                   [] |                                     [] |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| isDebtPositionId(uint256)                      | exte |                  [] |     ['state'] |                   [] |                                     [] |                   ['state.isDebtPositionId(debtPositionId)'] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| isCreditPositionId(uint256)                    | exte |                  [] |     ['state'] |                   [] |                                     [] |               ['state.isCreditPositionId(creditPositionId)'] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getDebtPosition(uint256)                       | exte |                  [] |     ['state'] |                   [] |                                     [] |                    ['state.getDebtPosition(debtPositionId)'] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getCreditPosition(uint256)                     | exte |                  [] |     ['state'] |                   [] |                                     [] |                ['state.getCreditPosition(creditPositionId)'] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getLoanStatus(uint256)                         | exte |                  [] |     ['state'] |                   [] |                                     [] |                          ['state.getLoanStatus(positionId)'] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getPositionsCount()                            | exte |                  [] |     ['state'] |                   [] |                                     [] |                                                           [] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getBorrowOfferAPR(address,uint256)             | exte |                  [] |     ['state'] |                   [] |                                     [] |           ['state.getBorrowOfferAPRByTenor(borrower,tenor)'] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getLoanOfferAPR(address,uint256)               | exte |                  [] |     ['state'] |                   [] |                                     [] |               ['state.getLoanOfferAPRByTenor(lender,tenor)'] |        1 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getDebtPositionAssignedCollateral(uint256)     | exte |                  [] |     ['state'] |                   [] |                                     [] |                    ['state.getDebtPosition(debtPositionId)', |        1 |
|                                                | rnal |                     |               |                      |                                        |     'state.getDebtPositionAssignedCollateral(debtPosition)'] |          |
| getSwapFee(uint256,uint256)                    | publ |                  [] |     ['state'] |                   [] |                ['revert NULL_TENOR()'] |      ['Errors.NULL_TENOR()', 'state.getSwapFee(cash,tenor)'] |        2 |
|                                                |   ic |                     |               |                      |                                        |                                                              |          |
| getBuyCreditMarketSwapData(BuyCreditMarketPara | exte |                  [] |     ['state'] |                   [] |                                     [] |                ['BuyCreditMarket.getSwapData(state,params)'] |        1 |
| ms)                                            | rnal |                     |               |                      |                                        |                                                              |          |
| getSellCreditMarketSwapData(SellCreditMarketPa | exte |                  [] |     ['state'] |                   [] |                                     [] |               ['SellCreditMarket.getSwapData(state,params)'] |        1 |
| rams)                                          | rnal |                     |               |                      |                                        |                                                              |          |
| version()                                      | publ |                  [] |            [] |                   [] |                                     [] |                                                           [] |        1 |
|                                                |   ic |                     |               |                      |                                        |                                                              |          |
| collateralRatio(address)                       | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| isUserUnderwater(address)                      | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| isDebtPositionLiquidatable(uint256)            | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| debtTokenAmountToCollateralTokenAmount(uint256 | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
| )                                              | rnal |                     |               |                      |                                        |                                                              |          |
| feeConfig()                                    | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| riskConfig()                                   | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| oracle()                                       | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| data()                                         | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getUserView(address)                           | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getUserCopyLimitOrders(address)                | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| isDebtPositionId(uint256)                      | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| isCreditPositionId(uint256)                    | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getDebtPosition(uint256)                       | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getCreditPosition(uint256)                     | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getLoanStatus(uint256)                         | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getPositionsCount()                            | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getBorrowOfferAPR(address,uint256)             | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getLoanOfferAPR(address,uint256)               | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getDebtPositionAssignedCollateral(uint256)     | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getSwapFee(uint256,uint256)                    | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| getBuyCreditMarketSwapData(BuyCreditMarketPara | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
| ms)                                            | rnal |                     |               |                      |                                        |                                                              |          |
| getSellCreditMarketSwapData(SellCreditMarketPa | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
| rams)                                          | rnal |                     |               |                      |                                        |                                                              |          |
| version()                                      | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| sizeFactory()                                  | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| deposit(DepositParams)                         | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| withdraw(WithdrawParams)                       | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| buyCreditLimit(BuyCreditLimitParams)           | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| sellCreditLimit(SellCreditLimitParams)         | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| buyCreditMarket(BuyCreditMarketParams)         | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| sellCreditMarket(SellCreditMarketParams)       | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| repay(RepayParams)                             | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| claim(ClaimParams)                             | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| liquidate(LiquidateParams)                     | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| selfLiquidate(SelfLiquidateParams)             | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| liquidateWithReplacement(LiquidateWithReplacem | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
| entParams)                                     | rnal |                     |               |                      |                                        |                                                              |          |
| compensate(CompensateParams)                   | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| setUserConfiguration(SetUserConfigurationParam | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
| s)                                             | rnal |                     |               |                      |                                        |                                                              |          |
| copyLimitOrders(CopyLimitOrdersParams)         | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| reinitialize(ISizeFactory)                     | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| depositOnBehalfOf(DepositOnBehalfOfParams)     | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| withdrawOnBehalfOf(WithdrawOnBehalfOfParams)   | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| buyCreditLimitOnBehalfOf(BuyCreditLimitOnBehal | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
| fOfParams)                                     | rnal |                     |               |                      |                                        |                                                              |          |
| sellCreditLimitOnBehalfOf(SellCreditLimitOnBeh | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
| alfOfParams)                                   | rnal |                     |               |                      |                                        |                                                              |          |
| buyCreditMarketOnBehalfOf(BuyCreditMarketOnBeh | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
| alfOfParams)                                   | rnal |                     |               |                      |                                        |                                                              |          |
| sellCreditMarketOnBehalfOf(SellCreditMarketOnB | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
| ehalfOfParams)                                 | rnal |                     |               |                      |                                        |                                                              |          |
| selfLiquidateOnBehalfOf(SelfLiquidateOnBehalfO | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
| fParams)                                       | rnal |                     |               |                      |                                        |                                                              |          |
| compensateOnBehalfOf(CompensateOnBehalfOfParam | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
| s)                                             | rnal |                     |               |                      |                                        |                                                              |          |
| setUserConfigurationOnBehalfOf(SetUserConfigur | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
| ationOnBehalfOfParams)                         | rnal |                     |               |                      |                                        |                                                              |          |
| copyLimitOrdersOnBehalfOf(CopyLimitOrdersOnBeh | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
| alfOfParams)                                   | rnal |                     |               |                      |                                        |                                                              |          |
| multicall(bytes[])                             | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| updateConfig(UpdateConfigParams)               | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| setVariablePoolBorrowRate(uint128)             | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| pause()                                        | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| unpause()                                      | exte |                  [] |            [] |                   [] |                                     [] |                                                           [] |        2 |
|                                                | rnal |                     |               |                      |                                        |                                                              |          |
| constructor()                                  | publ |                  [] |            [] |                   [] |               ['_disableInitializers'] |                                                           [] |        1 |
|                                                |   ic |                     |               |                      |                                        |                                                              |          |
| initialize(address,InitializeFeeConfigParams,I | exte |     ['initializer'] | ['DEFAULT_ADM |                   [] |               ['__AccessControl_init', |                         ['state.executeInitialize(f,r,o,d)', |        1 |
| nitializeRiskConfigParams,InitializeOraclePara | rnal |                     |     IN_ROLE', |                      |                     '__Pausable_init'] |                   'state.validateInitialize(owner,f,r,o,d)'] |          |
| ms,InitializeDataParams)                       |      |                     |      'state'] |                      |             ['__UUPSUpgradeable_init', |                                                              |          |
|                                                |      |                     |               |                      |                          '_grantRole'] |                                                              |          |
|                                                |      |                     |               |                      |                        ['initializer'] |                                                              |          |
| _hasRole(bytes32,address)                      | inte |                  [] |     ['state'] |                   [] |                            ['hasRole'] | ['AccessControlUpgradeable(address(state.data.sizeFactory)). |        1 |
|                                                | rnal |                     |               |                      |                                        |                                      hasRole(role,account)'] |          |
| reinitialize(ISizeFactory)                     | exte | ['onlyRoleOrSizeFac | ['DEFAULT_ADM |            ['state'] |       ['onlyRoleOrSizeFactoryHasRole', |                     ['Errors.INVALID_MARKET(address(this))', |        4 |
|                                                | rnal |       toryHasRole', |     IN_ROLE', |                      |                       'reinitializer'] |                                    'Errors.NOT_SUPPORTED()'] |          |
|                                                |      |    'reinitializer'] |      'state'] |                      |     ['revert INVALID_MARKET(address)', |                                    ['Errors.NULL_ADDRESS()', |          |
|                                                |      |                     |      ['this'] |                      |              'revert NOT_SUPPORTED()'] |                      '_sizeFactory.isMarket(address(this))'] |          |
|                                                |      |                     |               |                      |              ['revert NULL_ADDRESS()'] |                                                              |          |
| _authorizeUpgrade(address)                     | inte | ['onlyRoleOrSizeFac | ['DEFAULT_ADM |                   [] |       ['onlyRoleOrSizeFactoryHasRole'] |                                                           [] |        1 |
|                                                | rnal |       toryHasRole'] |     IN_ROLE'] |                      |                                        |                                                              |          |
| updateConfig(UpdateConfigParams)               | exte | ['onlyRoleOrSizeFac | ['DEFAULT_ADM |                   [] |       ['onlyRoleOrSizeFactoryHasRole'] |                        ['state.executeUpdateConfig(params)', |        1 |
|                                                | rnal |       toryHasRole'] |     IN_ROLE', |                      |                                        |                        'state.validateUpdateConfig(params)'] |          |
|                                                |      |                     |      'state'] |                      |                                        |                                                              |          |
| setVariablePoolBorrowRate(uint128)             | exte | ['onlyRoleOrSizeFac | ['block.times |            ['state'] |       ['onlyRoleOrSizeFactoryHasRole'] | ['Events.VariablePoolBorrowRateUpdated(msg.sender,oldBorrowR |        1 |
|                                                | rnal |       toryHasRole'] |        tamp', |                      |                                        |                                            ate,borrowRate)'] |          |
|                                                |      |                     | 'msg.sender'] |                      |                                        |                                                              |          |
|                                                |      |                     |     ['state'] |                      |                                        |                                                              |          |
| pause()                                        | publ | ['onlyRoleOrSizeFac |            [] |                   [] |                             ['_pause', |                                                           [] |        1 |
|                                                |   ic |       toryHasRole'] |               |                      |        'onlyRoleOrSizeFactoryHasRole'] |                                                              |          |
| unpause()                                      | publ | ['onlyRoleOrSizeFac |            [] |                   [] |                           ['_unpause', |                                                           [] |        1 |
|                                                |   ic |       toryHasRole'] |               |                      |        'onlyRoleOrSizeFactoryHasRole'] |                                                              |          |
| multicall(bytes[])                             | publ |   ['whenNotPaused'] |     ['state'] |                   [] |                      ['whenNotPaused'] |                                   ['state.multicall(_data)'] |        1 |
|                                                |   ic |                     |               |                      |                                        |                                                              |          |
| deposit(DepositParams)                         | publ |   ['whenNotPaused'] | ['msg.sender' |                   [] | ['depositOnBehalfOf', 'whenNotPaused'] |                                                           [] |        1 |
|                                                |   ic |                     |             ] |                      |                                        |                                                              |          |
| depositOnBehalfOf(DepositOnBehalfOfParams)     | publ |   ['whenNotPaused'] |     ['state'] |                   [] |                      ['whenNotPaused'] |                             ['state.executeDeposit(params)', |        1 |
|                                                |   ic |                     |               |                      |                                        |                             'state.validateDeposit(params)'] |          |
| withdraw(WithdrawParams)                       | exte |   ['whenNotPaused'] | ['msg.sender' |                   [] |                      ['whenNotPaused', |                                                           [] |        1 |
|                                                | rnal |                     |             ] |                      |                  'withdrawOnBehalfOf'] |                                                              |          |
| withdrawOnBehalfOf(WithdrawOnBehalfOfParams)   | publ |   ['whenNotPaused'] |     ['state'] |                   [] |                      ['whenNotPaused'] |                    ['state.executeWithdraw(externalParams)', |        1 |
|                                                |   ic |                     |               |                      |                                        |                    'state.validateWithdraw(externalParams)'] |          |
| buyCreditLimit(BuyCreditLimitParams)           | exte |   ['whenNotPaused'] | ['msg.sender' |                   [] |           ['buyCreditLimitOnBehalfOf', |                                                           [] |        1 |
|                                                | rnal |                     |             ] |                      |                       'whenNotPaused'] |                                                              |          |
| buyCreditLimitOnBehalfOf(BuyCreditLimitOnBehal | publ |   ['whenNotPaused'] |     ['state'] |                   [] |                      ['whenNotPaused'] |              ['state.executeBuyCreditLimit(externalParams)', |        1 |
| fOfParams)                                     |   ic |                     |               |                      |                                        |              'state.validateBuyCreditLimit(externalParams)'] |          |
| sellCreditLimit(SellCreditLimitParams)         | exte |   ['whenNotPaused'] | ['msg.sender' |                   [] |          ['sellCreditLimitOnBehalfOf', |                                                           [] |        1 |
|                                                | rnal |                     |             ] |                      |                       'whenNotPaused'] |                                                              |          |
| sellCreditLimitOnBehalfOf(SellCreditLimitOnBeh | publ |   ['whenNotPaused'] |     ['state'] |                   [] |                      ['whenNotPaused'] |             ['state.executeSellCreditLimit(externalParams)', |        1 |
| alfOfParams)                                   |   ic |                     |               |                      |                                        |             'state.validateSellCreditLimit(externalParams)'] |          |
| buyCreditMarket(BuyCreditMarketParams)         | exte |   ['whenNotPaused'] | ['msg.sender' |                   [] |          ['buyCreditMarketOnBehalfOf', |                                                           [] |        1 |
|                                                | rnal |                     |             ] |                      |                       'whenNotPaused'] |                                                              |          |
| buyCreditMarketOnBehalfOf(BuyCreditMarketOnBeh | publ |   ['whenNotPaused'] |     ['state'] |                   [] |                      ['whenNotPaused'] |             ['state.executeBuyCreditMarket(externalParams)', |        2 |
| alfOfParams)                                   |   ic |                     |               |                      |                                        |             'state.validateBuyCreditMarket(externalParams)'] |          |
|                                                |      |                     |               |                      |                                        | ['state.validateUserIsNotBelowOpeningLimitBorrowCR(externalP |          |
|                                                |      |                     |               |                      |                                        |                                     arams.params.borrower)', |          |
|                                                |      |                     |               |                      |                                        |      'state.validateVariablePoolHasEnoughLiquidity(amount)'] |          |
| sellCreditMarket(SellCreditMarketParams)       | exte |   ['whenNotPaused'] | ['msg.sender' |                   [] |         ['sellCreditMarketOnBehalfOf', |                                                           [] |        1 |
|                                                | rnal |                     |             ] |                      |                       'whenNotPaused'] |                                                              |          |
| sellCreditMarketOnBehalfOf(SellCreditMarketOnB | publ |   ['whenNotPaused'] |     ['state'] |                   [] |                      ['whenNotPaused'] |            ['state.executeSellCreditMarket(externalParams)', |        2 |
| ehalfOfParams)                                 |   ic |                     |               |                      |                                        |            'state.validateSellCreditMarket(externalParams)'] |          |
|                                                |      |                     |               |                      |                                        | ['state.validateUserIsNotBelowOpeningLimitBorrowCR(externalP |          |
|                                                |      |                     |               |                      |                                        |                                          arams.onBehalfOf)', |          |
|                                                |      |                     |               |                      |                                        |      'state.validateVariablePoolHasEnoughLiquidity(amount)'] |          |
| repay(RepayParams)                             | exte |   ['whenNotPaused'] |     ['state'] |                   [] |                      ['whenNotPaused'] |                               ['state.executeRepay(params)', |        1 |
|                                                | rnal |                     |               |                      |                                        |                               'state.validateRepay(params)'] |          |
| claim(ClaimParams)                             | exte |   ['whenNotPaused'] |     ['state'] |                   [] |                      ['whenNotPaused'] |                               ['state.executeClaim(params)', |        1 |
|                                                | rnal |                     |               |                      |                                        |                               'state.validateClaim(params)'] |          |
| liquidate(LiquidateParams)                     | exte |   ['whenNotPaused'] |     ['state'] |                   [] |                      ['whenNotPaused'] |                           ['state.executeLiquidate(params)', |        1 |
|                                                | rnal |                     |               |                      |                                        |                           'state.validateLiquidate(params)'] |          |
|                                                |      |                     |               |                      |                                        | ['state.validateMinimumCollateralProfit(params,liquidatorPro |          |
|                                                |      |                     |               |                      |                                        |                                        fitCollateralToken)'] |          |
| selfLiquidate(SelfLiquidateParams)             | exte |   ['whenNotPaused'] | ['msg.sender' |                   [] |            ['selfLiquidateOnBehalfOf', |                                                           [] |        1 |
|                                                | rnal |                     |             ] |                      |                       'whenNotPaused'] |                                                              |          |
| selfLiquidateOnBehalfOf(SelfLiquidateOnBehalfO | publ |   ['whenNotPaused'] |     ['state'] |                   [] |                      ['whenNotPaused'] |               ['state.executeSelfLiquidate(externalParams)', |        1 |
| fParams)                                       |   ic |                     |               |                      |                                        |               'state.validateSelfLiquidate(externalParams)'] |          |
| liquidateWithReplacement(LiquidateWithReplacem | exte | ['onlyRoleOrSizeFac |     ['state'] |                   [] |       ['onlyRoleOrSizeFactoryHasRole', |            ['state.executeLiquidateWithReplacement(params)', |        1 |
| entParams)                                     | rnal |       toryHasRole', |               |                      |                       'whenNotPaused'] |            'state.validateLiquidateWithReplacement(params)'] |          |
|                                                |      |    'whenNotPaused'] |               |                      |                                        | ['state.validateMinimumCollateralProfit(params,liquidatorPro |          |
|                                                |      |                     |               |                      |                                        | fitCollateralToken)', 'state.validateUserIsNotBelowOpeningLi |          |
|                                                |      |                     |               |                      |                                        |                               mitBorrowCR(params.borrower)'] |          |
|                                                |      |                     |               |                      |                                        |     ['state.validateVariablePoolHasEnoughLiquidity(amount)'] |          |
| compensate(CompensateParams)                   | exte | ['shouldNotEndUpUnd | ['msg.sender' |                   [] |               ['compensateOnBehalfOf', |                                                           [] |        1 |
|                                                | rnal |           erwater', |             ] |                      |            'shouldNotEndUpUnderwater'] |                                                              |          |
|                                                |      |    'whenNotPaused'] |               |                      |                      ['whenNotPaused'] |                                                              |          |
| compensateOnBehalfOf(CompensateOnBehalfOfParam | publ | ['shouldNotEndUpUnd |     ['state'] |                   [] |           ['shouldNotEndUpUnderwater', |                  ['state.executeCompensate(externalParams)', |        1 |
| s)                                             |   ic |           erwater', |               |                      |                       'whenNotPaused'] |                  'state.validateCompensate(externalParams)'] |          |
|                                                |      |    'whenNotPaused'] |               |                      |                                        |                                                              |          |
| setUserConfiguration(SetUserConfigurationParam | exte |   ['whenNotPaused'] | ['msg.sender' |                   [] |     ['setUserConfigurationOnBehalfOf', |                                                           [] |        1 |
| s)                                             | rnal |                     |             ] |                      |                       'whenNotPaused'] |                                                              |          |
| setUserConfigurationOnBehalfOf(SetUserConfigur | publ |   ['whenNotPaused'] |     ['state'] |                   [] |                      ['whenNotPaused'] |        ['state.executeSetUserConfiguration(externalParams)', |        1 |
| ationOnBehalfOfParams)                         |   ic |                     |               |                      |                                        |        'state.validateSetUserConfiguration(externalParams)'] |          |
| copyLimitOrders(CopyLimitOrdersParams)         | exte |   ['whenNotPaused'] | ['msg.sender' |                   [] |          ['copyLimitOrdersOnBehalfOf', |                                                           [] |        1 |
|                                                | rnal |                     |             ] |                      |                       'whenNotPaused'] |                                                              |          |
| copyLimitOrdersOnBehalfOf(CopyLimitOrdersOnBeh | publ |   ['whenNotPaused'] |     ['state'] |                   [] |                      ['whenNotPaused'] |             ['state.executeCopyLimitOrders(externalParams)', |        1 |
| alfOfParams)                                   |   ic |                     |               |                      |                                        |             'state.validateCopyLimitOrders(externalParams)'] |          |
| slitherConstructorConstantVariables()          | inte |                  [] |            [] | ['DEFAULT_ADMIN_ROLE |                                     [] |                                                           [] |        1 |
|                                                | rnal |                     |               | ', 'UPGRADE_INTERFAC |                                        |                                                              |          |
|                                                |      |                     |               |          E_VERSION'] |                                        |                                                              |          |
+------------------------------------------------+------+---------------------+---------------+----------------------+----------------------------------------+--------------------------------------------------------------+----------+

+-------------------------------+---------+-------------+-----+----------------------------------------------------------+------------------------------------------------------------------------------------------+------------------+
| Modifiers                     | Visibil |        Read | Wri |                                           Internal Calls |                                                                           External Calls | Cyclomatic Compl |
+-------------------------------+---------+-------------+-----+----------------------------------------------------------+------------------------------------------------------------------------------------------+------------------+
| onlyProxy()                   | interna |          [] |  [] |                                          ['_checkProxy'] |                                                                                       [] |                1 |
|                               |       l |             |     |                                                          |                                                                                          |                  |
| notDelegated()                | interna |          [] |  [] |                                   ['_checkNotDelegated'] |                                                                                       [] |                1 |
|                               |       l |             |     |                                                          |                                                                                          |                  |
| initializer()                 | interna |    ['this'] |  [] |            ['_getInitializableStorage', 'code(address)'] |                                                                                       [] |                4 |
|                               |       l |             |     |                       ['revert InvalidInitialization()'] |                                                                                          |                  |
| reinitializer(uint64)         | interna |          [] |  [] |                     ['_getInitializableStorage', 'revert |                                                                                       [] |                2 |
|                               |       l |             |     |                                InvalidInitialization()'] |                                                                                          |                  |
| onlyInitializing()            | interna |          [] |  [] |                                   ['_checkInitializing'] |                                                                                       [] |                1 |
|                               |       l |             |     |                                                          |                                                                                          |                  |
| whenNotPaused()               | interna |          [] |  [] |                                    ['_requireNotPaused'] |                                                                                       [] |                1 |
|                               |       l |             |     |                                                          |                                                                                          |                  |
| whenPaused()                  | interna |          [] |  [] |                                       ['_requirePaused'] |                                                                                       [] |                1 |
|                               |       l |             |     |                                                          |                                                                                          |                  |
| onlyRole(bytes32)             | interna |          [] |  [] |                                           ['_checkRole'] |                                                                                       [] |                1 |
|                               |       l |             |     |                                                          |                                                                                          |                  |
| onlyRoleOrSizeFactoryHasRole( | interna | ['msg.sende |  [] |                                     ['_hasRole', 'revert |                                                                                       [] |                2 |
| bytes32)                      |       l |         r'] |     |      AccessControlUnauthorizedAccount(address,bytes32)'] |                                                                                          |                  |
| shouldNotEndUpUnderwater(addr | interna |   ['state'] |  [] |           ['revert USER_IS_UNDERWATER(address,uint256)'] |              ['Errors.USER_IS_UNDERWATER(onBehalfOf,state.collateralRatio(onBehalfOf))', |                2 |
| ess)                          |       l |             |     |                                                          |                                                     'state.collateralRatio(onBehalfOf)'] |                  |
|                               |         |             |     |                                                          |             ['state.isUserUnderwater(onBehalfOf)', 'state.isUserUnderwater(onBehalfOf)'] |                  |
+-------------------------------+---------+-------------+-----+----------------------------------------------------------+------------------------------------------------------------------------------------------+------------------+

INFO:Printers:
Contract SizeStorage
Contract vars: ['state']
Inheritance:: []
 
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract SizeView
Contract vars: ['state']
Inheritance:: ['ISizeView', 'ISizeViewV1_7', 'SizeStorage']
 
+-------------------------------------------------+-----------+----------+----------+------+-----------------------+---------------------------------------------------------------------------------------------+---------------------+
| Function                                        | Visibilit | Modifier |     Read | Writ |        Internal Calls |                                                                              External Calls | Cyclomatic Complexi |
+-------------------------------------------------+-----------+----------+----------+------+-----------------------+---------------------------------------------------------------------------------------------+---------------------+
| collateralRatio(address)                        |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| isUserUnderwater(address)                       |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| isDebtPositionLiquidatable(uint256)             |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| debtTokenAmountToCollateralTokenAmount(uint256) |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| feeConfig()                                     |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| riskConfig()                                    |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| oracle()                                        |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| data()                                          |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| getUserView(address)                            |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| getUserCopyLimitOrders(address)                 |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| isDebtPositionId(uint256)                       |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| isCreditPositionId(uint256)                     |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| getDebtPosition(uint256)                        |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| getCreditPosition(uint256)                      |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| getLoanStatus(uint256)                          |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| getPositionsCount()                             |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| getBorrowOfferAPR(address,uint256)              |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| getLoanOfferAPR(address,uint256)                |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| getDebtPositionAssignedCollateral(uint256)      |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| getSwapFee(uint256,uint256)                     |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| getBuyCreditMarketSwapData(BuyCreditMarketParam |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| s)                                              |           |          |          |      |                       |                                                                                             |                     |
| getSellCreditMarketSwapData(SellCreditMarketPar |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| ams)                                            |           |          |          |      |                       |                                                                                             |                     |
| version()                                       |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| sizeFactory()                                   |  external |       [] |       [] |   [] |                    [] |                                                                                          [] |                   2 |
| collateralRatio(address)                        |  external |       [] | ['state' |   [] |                    [] |                                                             ['state.collateralRatio(user)'] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| isUserUnderwater(address)                       |  external |       [] | ['state' |   [] |                    [] |                                                            ['state.isUserUnderwater(user)'] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| isDebtPositionLiquidatable(uint256)             |  external |       [] | ['state' |   [] |                    [] |                                        ['state.isDebtPositionLiquidatable(debtPositionId)'] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| debtTokenAmountToCollateralTokenAmount(uint256) |  external |       [] | ['state' |   [] |                    [] |                        ['state.debtTokenAmountToCollateralTokenAmount(borrowATokenAmount)'] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| feeConfig()                                     |  external |       [] | ['state' |   [] |                    [] |                                                                 ['state.feeConfigParams()'] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| riskConfig()                                    |  external |       [] | ['state' |   [] |                    [] |                                                                ['state.riskConfigParams()'] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| oracle()                                        |  external |       [] | ['state' |   [] |                    [] |                                                                    ['state.oracleParams()'] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| data()                                          |  external |       [] | ['state' |   [] |                    [] |                                                                                          [] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| sizeFactory()                                   |  external |       [] | ['state' |   [] |                    [] |                                                                                          [] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| getUserView(address)                            |  external |       [] | ['state' |   [] |                    [] |                                             ['state.data.borrowATokenV1_5.balanceOf(user)', |                   1 |
|                                                 |           |          |        ] |      |                       |                                               'state.data.collateralToken.balanceOf(user)'] |                     |
|                                                 |           |          |          |      |                       |                                                    ['state.data.debtToken.balanceOf(user)'] |                     |
| getUserCopyLimitOrders(address)                 |  external |       [] | ['state' |   [] |                    [] |                                                                                          [] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| isDebtPositionId(uint256)                       |  external |       [] | ['state' |   [] |                    [] |                                                  ['state.isDebtPositionId(debtPositionId)'] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| isCreditPositionId(uint256)                     |  external |       [] | ['state' |   [] |                    [] |                                              ['state.isCreditPositionId(creditPositionId)'] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| getDebtPosition(uint256)                        |  external |       [] | ['state' |   [] |                    [] |                                                   ['state.getDebtPosition(debtPositionId)'] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| getCreditPosition(uint256)                      |  external |       [] | ['state' |   [] |                    [] |                                               ['state.getCreditPosition(creditPositionId)'] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| getLoanStatus(uint256)                          |  external |       [] | ['state' |   [] |                    [] |                                                         ['state.getLoanStatus(positionId)'] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| getPositionsCount()                             |  external |       [] | ['state' |   [] |                    [] |                                                                                          [] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| getBorrowOfferAPR(address,uint256)              |  external |       [] | ['state' |   [] |                    [] |                                          ['state.getBorrowOfferAPRByTenor(borrower,tenor)'] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| getLoanOfferAPR(address,uint256)                |  external |       [] | ['state' |   [] |                    [] |                                              ['state.getLoanOfferAPRByTenor(lender,tenor)'] |                   1 |
|                                                 |           |          |        ] |      |                       |                                                                                             |                     |
| getDebtPositionAssignedCollateral(uint256)      |  external |       [] | ['state' |   [] |                    [] |                                                   ['state.getDebtPosition(debtPositionId)', |                   1 |
|                                                 |           |          |        ] |      |                       |                                    'state.getDebtPositionAssignedCollateral(debtPosition)'] |                     |
| getSwapFee(uint256,uint256)                     |    public |       [] | ['state' |   [] |              ['revert |                                     ['Errors.NULL_TENOR()', 'state.getSwapFee(cash,tenor)'] |                   2 |
|                                                 |           |          |        ] |      |        NULL_TENOR()'] |                                                                                             |                     |
| getBuyCreditMarketSwapData(BuyCreditMarketParam |  external |       [] | ['state' |   [] |                    [] |                                               ['BuyCreditMarket.getSwapData(state,params)'] |                   1 |
| s)                                              |           |          |        ] |      |                       |                                                                                             |                     |
| getSellCreditMarketSwapData(SellCreditMarketPar |  external |       [] | ['state' |   [] |                    [] |                                              ['SellCreditMarket.getSwapData(state,params)'] |                   1 |
| ams)                                            |           |          |        ] |      |                       |                                                                                             |                     |
| version()                                       |    public |       [] |       [] |   [] |                    [] |                                                                                          [] |                   1 |
+-------------------------------------------------+-----------+----------+----------+------+-----------------------+---------------------------------------------------------------------------------------------+---------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IMulticall
Contract vars: []
Inheritance:: []
 
+--------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function           | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+--------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| multicall(bytes[]) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+--------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract ISize
Contract vars: []
Inheritance:: ['ISizeV1_7', 'IMulticall', 'ISizeAdmin', 'ISizeView', 'ISizeViewV1_7']
 
+----------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                                                             | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| reinitialize(ISizeFactory)                                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| depositOnBehalfOf(DepositOnBehalfOfParams)                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| withdrawOnBehalfOf(WithdrawOnBehalfOfParams)                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| buyCreditLimitOnBehalfOf(BuyCreditLimitOnBehalfOfParams)             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| sellCreditLimitOnBehalfOf(SellCreditLimitOnBehalfOfParams)           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| buyCreditMarketOnBehalfOf(BuyCreditMarketOnBehalfOfParams)           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| sellCreditMarketOnBehalfOf(SellCreditMarketOnBehalfOfParams)         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| selfLiquidateOnBehalfOf(SelfLiquidateOnBehalfOfParams)               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| compensateOnBehalfOf(CompensateOnBehalfOfParams)                     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setUserConfigurationOnBehalfOf(SetUserConfigurationOnBehalfOfParams) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| copyLimitOrdersOnBehalfOf(CopyLimitOrdersOnBehalfOfParams)           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| multicall(bytes[])                                                   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| updateConfig(UpdateConfigParams)                                     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setVariablePoolBorrowRate(uint128)                                   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| pause()                                                              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| unpause()                                                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| collateralRatio(address)                                             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| isUserUnderwater(address)                                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| isDebtPositionLiquidatable(uint256)                                  |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| debtTokenAmountToCollateralTokenAmount(uint256)                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| feeConfig()                                                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| riskConfig()                                                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| oracle()                                                             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| data()                                                               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getUserView(address)                                                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getUserCopyLimitOrders(address)                                      |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| isDebtPositionId(uint256)                                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| isCreditPositionId(uint256)                                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getDebtPosition(uint256)                                             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getCreditPosition(uint256)                                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getLoanStatus(uint256)                                               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPositionsCount()                                                  |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getBorrowOfferAPR(address,uint256)                                   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getLoanOfferAPR(address,uint256)                                     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getDebtPositionAssignedCollateral(uint256)                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getSwapFee(uint256,uint256)                                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getBuyCreditMarketSwapData(BuyCreditMarketParams)                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getSellCreditMarketSwapData(SellCreditMarketParams)                  |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| version()                                                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| sizeFactory()                                                        |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| deposit(DepositParams)                                               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| withdraw(WithdrawParams)                                             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| buyCreditLimit(BuyCreditLimitParams)                                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| sellCreditLimit(SellCreditLimitParams)                               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| buyCreditMarket(BuyCreditMarketParams)                               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| sellCreditMarket(SellCreditMarketParams)                             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| repay(RepayParams)                                                   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| claim(ClaimParams)                                                   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| liquidate(LiquidateParams)                                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| selfLiquidate(SelfLiquidateParams)                                   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| liquidateWithReplacement(LiquidateWithReplacementParams)             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| compensate(CompensateParams)                                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setUserConfiguration(SetUserConfigurationParams)                     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| copyLimitOrders(CopyLimitOrdersParams)                               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+----------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract ISizeAdmin
Contract vars: []
Inheritance:: []
 
+------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                           | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| updateConfig(UpdateConfigParams)   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setVariablePoolBorrowRate(uint128) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| pause()                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| unpause()                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract ISizeView
Contract vars: []
Inheritance:: ['ISizeViewV1_7']
 
+-----------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                                            | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| sizeFactory()                                       |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| collateralRatio(address)                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| isUserUnderwater(address)                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| isDebtPositionLiquidatable(uint256)                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| debtTokenAmountToCollateralTokenAmount(uint256)     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| feeConfig()                                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| riskConfig()                                        |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| oracle()                                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| data()                                              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getUserView(address)                                |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getUserCopyLimitOrders(address)                     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| isDebtPositionId(uint256)                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| isCreditPositionId(uint256)                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getDebtPosition(uint256)                            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getCreditPosition(uint256)                          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getLoanStatus(uint256)                              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getPositionsCount()                                 |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getBorrowOfferAPR(address,uint256)                  |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getLoanOfferAPR(address,uint256)                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getDebtPositionAssignedCollateral(uint256)          |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getSwapFee(uint256,uint256)                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getBuyCreditMarketSwapData(BuyCreditMarketParams)   |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| getSellCreditMarketSwapData(SellCreditMarketParams) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| version()                                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+-----------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IWETH
Contract vars: []
Inheritance:: ['IERC20']
 
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                              | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| totalSupply()                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| balanceOf(address)                    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| transfer(address,uint256)             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| allowance(address,address)            |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| approve(address,uint256)              |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| transferFrom(address,address,uint256) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| deposit()                             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| withdraw(uint256)                     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+---------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract ISizeV1_7
Contract vars: []
Inheritance:: []
 
+----------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function                                                             | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| reinitialize(ISizeFactory)                                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| depositOnBehalfOf(DepositOnBehalfOfParams)                           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| withdrawOnBehalfOf(WithdrawOnBehalfOfParams)                         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| buyCreditLimitOnBehalfOf(BuyCreditLimitOnBehalfOfParams)             |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| sellCreditLimitOnBehalfOf(SellCreditLimitOnBehalfOfParams)           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| buyCreditMarketOnBehalfOf(BuyCreditMarketOnBehalfOfParams)           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| sellCreditMarketOnBehalfOf(SellCreditMarketOnBehalfOfParams)         |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| selfLiquidateOnBehalfOf(SelfLiquidateOnBehalfOfParams)               |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| compensateOnBehalfOf(CompensateOnBehalfOfParams)                     |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| setUserConfigurationOnBehalfOf(SetUserConfigurationOnBehalfOfParams) |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| copyLimitOrdersOnBehalfOf(CopyLimitOrdersOnBehalfOfParams)           |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+----------------------------------------------------------------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract ISizeViewV1_7
Contract vars: []
Inheritance:: []
 
+---------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function      | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+---------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| sizeFactory() |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+---------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract AccountingLibrary
Contract vars: []
Inheritance:: []
 
+---------------------------------------+-------+------+------------+----+------------------+----------------------------------------------------------------------------------------------------------------------------+-------------+
| Function                              | Visib | Modi |       Read | Wr |   Internal Calls |                                                                                                             External Calls | Cyclomatic  |
+---------------------------------------+-------+------+------------+----+------------------+----------------------------------------------------------------------------------------------------------------------------+-------------+
| debtTokenAmountToCollateralTokenAmoun | inter |   [] |         [] | [] |               [] |                                                                                                                         [] |           1 |
| t(State,uint256)                      |   nal |      |            |    |                  |                                                                                                                            |             |
| repayDebt(State,uint256,uint256)      | publi |   [] |         [] | [] |               [] | ['Events.UpdateDebtPosition(debtPositionId,debtPosition.borrower,debtPosition.futureValue,debtPosition.liquidityIndexAtRep |           1 |
|                                       |     c |      |            |    |                  |                                                  ayment)', 'state.data.debtToken.burn(debtPosition.borrower,repayAmount)'] |             |
|                                       |       |      |            |    |                  |                                                                                  ['state.getDebtPosition(debtPositionId)'] |             |
| createDebtAndCreditPositions(State,ad | exter |   [] | ['block.ti | [] |               [] | ['Events.CreateCreditPosition(creditPositionId,lender,debtPositionId,RESERVED_ID,creditPosition.credit,creditPosition.forS |           1 |
| dress,address,uint256,uint256)        |   nal |      |  mestamp'] |    |                  |                                    ale)', 'Events.CreateDebtPosition(debtPositionId,borrower,lender,futureValue,dueDate)'] |             |
|                                       |       |      |            |    |                  |           ['state.data.debtToken.mint(borrower,futureValue)', 'state.validateMinimumCreditOpening(creditPosition.credit)'] |             |
|                                       |       |      |            |    |                  |                                                                         ['state.validateTenor(dueDate - block.timestamp)'] |             |
| createCreditPosition(State,uint256,ad | exter |   [] |         [] | [] | ['reduceCredit'] |                ['Events.CreateCreditPosition(creditPositionId,lender,debtPositionId,exitCreditPositionId,credit,forSale)', |           2 |
| dress,uint256,bool)                   |   nal |      |            |    |                  |           'Events.UpdateCreditPosition(exitCreditPositionId,lender,exitCreditPosition.credit,exitCreditPosition.forSale)'] |             |
|                                       |       |      |            |    |                  |             ['state.getCreditPosition(exitCreditPositionId)', 'state.validateMinimumCreditOpening(creditPosition.credit)'] |             |
| reduceCredit(State,uint256,uint256)   | publi |   [] |         [] | [] |               [] |       ['Events.UpdateCreditPosition(creditPositionId,creditPosition.lender,creditPosition.credit,creditPosition.forSale)', |           1 |
|                                       |     c |      |            |    |                  |                                                                               'state.getCreditPosition(creditPositionId)'] |             |
|                                       |       |      |            |    |                  |                                                                     ['state.validateMinimumCredit(creditPosition.credit)'] |             |
| reduceDebtAndCredit(State,uint256,uin | inter |   [] |         [] | [] | ['reduceCredit', |                                                                                                                         [] |           1 |
| t256,uint256)                         |   nal |      |            |    |     'repayDebt'] |                                                                                                                            |             |
| getSwapFeePercent(State,uint256)      | inter |   [] |         [] | [] |               [] |                                                                                                                         [] |           1 |
|                                       |   nal |      |            |    |                  |                                                                                                                            |             |
| getSwapFee(State,uint256,uint256)     | inter |   [] |         [] | [] |               [] |                                                                                                                         [] |           1 |
|                                       |   nal |      |            |    |                  |                                                                                                                            |             |
| getCashAmountOut(State,uint256,uint25 | inter |   [] |         [] | [] |               [] |                                                                                                                         [] |           5 |
| 6,uint256,uint256)                    |   nal |      |            |    |                  |                                                                                                                            |             |
| getCreditAmountIn(State,uint256,uint2 | inter |   [] |         [] | [] |               [] |                                                                                                                         [] |           4 |
| 56,uint256,uint256,uint256)           |   nal |      |            |    |                  |                                                                                                                            |             |
| getCreditAmountOut(State,uint256,uint | inter |   [] |         [] | [] |               [] |                                                                                                                         [] |           4 |
| 256,uint256,uint256,uint256)          |   nal |      |            |    |                  |                                                                                                                            |             |
| getCashAmountIn(State,uint256,uint256 | inter |   [] |         [] | [] |               [] |                                                                                                                         [] |           4 |
| ,uint256,uint256)                     |   nal |      |            |    |                  |                                                                                                                            |             |
+---------------------------------------+-------+------+------------+----+------------------+----------------------------------------------------------------------------------------------------------------------------+-------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract CapsLibrary
Contract vars: []
Inheritance:: []
 
+---------------------------------------------------+-------+-------+----+----+----------------------------------------------+-------------------------------------------------------------------------------------------+-------------+
| Function                                          | Visib | Modif | Re | Wr |                               Internal Calls |                                                                            External Calls | Cyclomatic  |
+---------------------------------------------------+-------+-------+----+----+----------------------------------------------+-------------------------------------------------------------------------------------------+-------------+
| validateBorrowATokenIncreaseLteDebtTokenDecrease( | exter |    [] | [] | [] | ['revert BORROW_ATOKEN_INCREASE_EXCEEDS_DEBT | ['Errors.BORROW_ATOKEN_INCREASE_EXCEEDS_DEBT_TOKEN_DECREASE(borrowATokenSupplyIncrease,de |           5 |
| State,uint256,uint256,uint256,uint256)            |   nal |       |    |    |           _TOKEN_DECREASE(uint256,uint256)'] |                                                                 btATokenSupplyDecrease)'] |             |
| validateBorrowATokenCap(State)                    | exter |    [] | [] | [] | ['revert BORROW_ATOKEN_CAP_EXCEEDED(uint256, | ['Errors.BORROW_ATOKEN_CAP_EXCEEDED(state.riskConfig.borrowATokenCap,state.data.borrowATo |           2 |
|                                                   |   nal |       |    |    |                                   uint256)'] |                     kenV1_5.totalSupply())', 'state.data.borrowATokenV1_5.totalSupply()'] |             |
|                                                   |       |       |    |    |                                              |                                             ['state.data.borrowATokenV1_5.totalSupply()'] |             |
| validateVariablePoolHasEnoughLiquidity(State,uint | publi |    [] | [] | [] | ['revert NOT_ENOUGH_BORROW_ATOKEN_LIQUIDITY( |                           ['Errors.NOT_ENOUGH_BORROW_ATOKEN_LIQUIDITY(liquidity,amount)', |           2 |
| 256)                                              |     c |       |    |    |                           uint256,uint256)'] |                            'state.data.underlyingBorrowToken.balanceOf(address(aToken))'] |             |
|                                                   |       |       |    |    |                                              |     ['state.data.variablePool.getReserveData(address(state.data.underlyingBorrowToken))'] |             |
+---------------------------------------------------+-------+-------+----+----+----------------------------------------------+-------------------------------------------------------------------------------------------+-------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract DepositTokenLibrary
Contract vars: []
Inheritance:: []
 
+---------------------------------------------------------+---------+--------+-------+-----+------------+-------------------------------------------------------------------------------------------------------------+-----------------+
| Function                                                | Visibil | Modifi |  Read | Wri | Internal C |                                                                                              External Calls | Cyclomatic Comp |
+---------------------------------------------------------+---------+--------+-------+-----+------------+-------------------------------------------------------------------------------------------------------------+-----------------+
| depositUnderlyingCollateralToken(State,address,address, | externa |     [] | ['thi |  [] |         [] |                                                              ['state.data.collateralToken.mint(to,amount)', |               1 |
| uint256)                                                |       l |        |   s'] |     |            |                                    'underlyingCollateralToken.safeTransferFrom(from,address(this),amount)'] |                 |
| withdrawUnderlyingCollateralToken(State,address,address | externa |     [] |    [] |  [] |         [] |       ['state.data.collateralToken.burn(from,amount)', 'underlyingCollateralToken.safeTransfer(to,amount)'] |               1 |
| ,uint256)                                               |       l |        |       |     |            |                                                                                                             |                 |
| depositUnderlyingBorrowTokenToVariablePoolV1_5(State,ad | externa |     [] | ['thi |  [] |         [] |                                                     ['state.data.borrowATokenV1_5.deposit(from,to,amount)', |               1 |
| dress,address,uint256)                                  |       l |        |   s'] |     |            |               'state.data.underlyingBorrowToken.forceApprove(address(state.data.borrowATokenV1_5),amount)'] |                 |
|                                                         |         |        |       |     |            |                            ['state.data.underlyingBorrowToken.safeTransferFrom(from,address(this),amount)'] |                 |
| withdrawUnderlyingTokenFromVariablePoolV1_5(State,addre | externa |     [] |    [] |  [] |         [] |                                                    ['state.data.borrowATokenV1_5.withdraw(from,to,amount)'] |               1 |
| ss,address,uint256)                                     |       l |        |       |     |            |                                                                                                             |                 |
+---------------------------------------------------------+---------+--------+-------+-----+------------+-------------------------------------------------------------------------------------------------------------+-----------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Errors
Contract vars: []
Inheritance:: []
 
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Events
Contract vars: []
Inheritance:: []
 
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+
+----------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract LoanLibrary
Contract vars: []
Inheritance:: []
 
+-------------------------------------------------------+----------+---------+-----------------+------+----------------------------------------------------------+------------------------------------------------+-------------------+
| Function                                              | Visibili | Modifie |            Read | Writ |                                           Internal Calls |                                 External Calls | Cyclomatic Comple |
+-------------------------------------------------------+----------+---------+-----------------+------+----------------------------------------------------------+------------------------------------------------+-------------------+
| isDebtPositionId(State,uint256)                       | internal |      [] |              [] |   [] |                                                       [] |                                             [] |                 1 |
| isCreditPositionId(State,uint256)                     | internal |      [] |              [] |   [] |                                                       [] |                                             [] |                 1 |
| getDebtPosition(State,uint256)                        |   public |      [] |              [] |   [] |                             ['isDebtPositionId', 'revert | ['Errors.INVALID_DEBT_POSITION_ID(debtPosition |                 1 |
|                                                       |          |         |                 |      |                      INVALID_DEBT_POSITION_ID(uint256)'] |                                          Id)'] |                   |
| getCreditPosition(State,uint256)                      |   public |      [] |              [] |   [] |                           ['isCreditPositionId', 'revert | ['Errors.INVALID_CREDIT_POSITION_ID(creditPosi |                 1 |
|                                                       |          |         |                 |      |                    INVALID_CREDIT_POSITION_ID(uint256)'] |                                      tionId)'] |                   |
| getDebtPositionByCreditPositionId(State,uint256)      |   public |      [] |              [] |   [] |                 ['getCreditPosition', 'getDebtPosition'] |                                             [] |                 1 |
| getLoanStatus(State,uint256)                          |   public |      [] | ['block.timesta |   [] |                    ['getDebtPositionByCreditPositionId', |     ['Errors.INVALID_POSITION_ID(positionId)'] |                 3 |
|                                                       |          |         |            mp'] |      |                                    'isCreditPositionId'] |                                                |                   |
|                                                       |          |         |                 |      |                             ['isDebtPositionId', 'revert |                                                |                   |
|                                                       |          |         |                 |      |                           INVALID_POSITION_ID(uint256)'] |                                                |                   |
| getDebtPositionAssignedCollateral(State,DebtPosition) |   public |      [] |              [] |   [] |                                                       [] |                                             [] |                 1 |
| getCreditPositionProRataAssignedCollateral(State,Cred |   public |      [] |              [] |   [] |                                                       [] |                                             [] |                 1 |
| itPosition)                                           |          |         |                 |      |                                                          |                                                |                   |
+-------------------------------------------------------+----------+---------+-----------------+------+----------------------------------------------------------+------------------------------------------------+-------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Math
Contract vars: []
Inheritance:: []
 
+-------------------------------------+------------+-----------+------+-------+----------------+---------------------------------------+-----------------------+
| Function                            | Visibility | Modifiers | Read | Write | Internal Calls |                        External Calls | Cyclomatic Complexity |
+-------------------------------------+------------+-----------+------+-------+----------------+---------------------------------------+-----------------------+
| min(uint256,uint256)                |   internal |        [] |   [] |    [] |             [] |        ['FixedPointMathLib.min(a,b)'] |                     1 |
| max(uint256,uint256)                |   internal |        [] |   [] |    [] |             [] |        ['FixedPointMathLib.max(a,b)'] |                     1 |
| mulDivUp(uint256,uint256,uint256)   |   internal |        [] |   [] |    [] |             [] | ['FixedPointMathLib.mulDivUp(x,y,z)'] |                     1 |
| mulDivDown(uint256,uint256,uint256) |   internal |        [] |   [] |    [] |             [] |   ['FixedPointMathLib.mulDiv(x,y,z)'] |                     1 |
| aprToRatePerTenor(uint256,uint256)  |   internal |        [] |   [] |    [] | ['mulDivDown'] |                                    [] |                     1 |
| binarySearch(uint256[],uint256)     |   internal |        [] |   [] |    [] |             [] |                                    [] |                     2 |
+-------------------------------------+------------+-----------+------+-------+----------------+---------------------------------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Multicall
Contract vars: []
Inheritance:: []
 
+----------------------+----------+---------+--------+------+--------------+-------------------------------------------------------------------------------------------------------------------------------------+--------------------+
| Function             | Visibili | Modifie |   Read | Writ | Internal Cal |                                                                                                                      External Calls | Cyclomatic Complex |
+----------------------+----------+---------+--------+------+--------------+-------------------------------------------------------------------------------------------------------------------------------------+--------------------+
| multicall(State,byte | internal |      [] | ['this |   [] |           [] |                                                 ['Address.functionDelegateCall(address(this),data[i])', 'new bytes[](data.length)'] |                  2 |
| s[])                 |          |         |     '] |      |              |                                          ['state.data.borrowATokenV1_5.totalSupply()', 'state.data.borrowATokenV1_5.totalSupply()'] |                    |
|                      |          |         |        |      |              |                                                        ['state.data.debtToken.totalSupply()', 'state.data.debtToken.totalSupply()'] |                    |
|                      |          |         |        |      |              | ['state.validateBorrowATokenIncreaseLteDebtTokenDecrease(borrowATokenSupplyBefore,debtTokenSupplyBefore,borrowATokenSupplyAfter,deb |                    |
|                      |          |         |        |      |              |                                                                                                                tTokenSupplyAfter)'] |                    |
+----------------------+----------+---------+--------+------+--------------+-------------------------------------------------------------------------------------------------------------------------------------+--------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract OfferLibrary
Contract vars: []
Inheritance:: []
 
+-------------------------------------+--------+--------+--------------+-----+--------------------------------------------------+------------------------------------------------------------------------------------+----------------+
| Function                            | Visibi | Modifi |         Read | Wri |                                   Internal Calls |                                                                     External Calls | Cyclomatic Com |
+-------------------------------------+--------+--------+--------------+-----+--------------------------------------------------+------------------------------------------------------------------------------------+----------------+
| isNull(LimitOrder)                  | intern |     [] |           [] |  [] |                                               [] |                                                ['self.curveRelativeTime.isNull()'] |              1 |
|                                     |     al |        |              |     |                                                  |                                                                                    |                |
| validateLimitOrder(LimitOrder,uint2 | intern |     [] | ['block.time |  [] |           ['revert NULL_MAX_DUE_DATE()', 'revert |        ['Errors.NULL_MAX_DUE_DATE()', 'Errors.PAST_MAX_DUE_DATE(self.maxDueDate)'] |              3 |
| 56,uint256)                         |     al |        |      stamp'] |     |                     PAST_MAX_DUE_DATE(uint256)'] | ['YieldCurveLibrary.validateYieldCurve(self.curveRelativeTime,minTenor,maxTenor)'] |                |
| getLoanOfferAPRByTenor(State,addres | public |     [] |           [] |  [] |                     ['_getLimitOrderAPRByTenor'] |                                                                                 [] |              1 |
| s,uint256)                          |        |        |              |     |                                                  |                                                                                    |                |
| getLoanOfferRatePerTenor(State,addr | intern |     [] |           [] |  [] |                                               [] |                                                                                 [] |              1 |
| ess,uint256)                        |     al |        |              |     |                                                  |                                                                                    |                |
| getBorrowOfferAPRByTenor(State,addr | public |     [] |           [] |  [] |                     ['_getLimitOrderAPRByTenor'] |                                                                                 [] |              1 |
| ess,uint256)                        |        |        |              |     |                                                  |                                                                                    |                |
| _getLimitOrderAPRByTenor(State,addr | intern |     [] | ['block.time |  [] |                    ['_getBorrowOfferWithBounds', |                      ['Errors.DUE_DATE_GREATER_THAN_MAX_DUE_DATE(block.timestamp + |              6 |
| ess,uint256,bool)                   |     al |        |      stamp'] |     |                       '_getLoanOfferWithBounds'] |                       tenor,limitOrder.maxDueDate)', 'Errors.INVALID_OFFER(user)'] |                |
|                                     |        |        |              |     | ['isNull', 'revert DUE_DATE_GREATER_THAN_MAX_DUE | ['Errors.NULL_TENOR()', 'Errors.TENOR_OUT_OF_RANGE(tenor,copyLimitOrder.minTenor,c |                |
|                                     |        |        |              |     |                         _DATE(uint256,uint256)'] |                                                          opyLimitOrder.maxTenor)'] |                |
|                                     |        |        |              |     |        ['revert INVALID_OFFER(address)', 'revert |    ['SafeCast.toInt256(baseAPR)', 'SafeCast.toUint256(SafeCast.toInt256(baseAPR) + |                |
|                                     |        |        |              |     |                                   NULL_TENOR()'] |                                                        copyLimitOrder.offsetAPR)'] |                |
|                                     |        |        |              |     |                                         ['revert | ['YieldCurveLibrary.getAPR(limitOrder.curveRelativeTime,variablePoolBorrowRatePara |                |
|                                     |        |        |              |     |    TENOR_OUT_OF_RANGE(uint256,uint256,uint256)'] |                                                                        ms,tenor)'] |                |
| getBorrowOfferRatePerTenor(State,ad | intern |     [] |           [] |  [] |                                               [] |                                                                                 [] |              1 |
| dress,uint256)                      |     al |        |              |     |                                                  |                                                                                    |                |
| isNull(CopyLimitOrder)              | intern |     [] |           [] |  [] |                                               [] |                                                                                 [] |              1 |
|                                     |     al |        |              |     |                                                  |                                                                                    |                |
| _getLoanOfferWithBounds(State,addre | privat |     [] |           [] |  [] |                                       ['isNull'] |                                                                                 [] |              2 |
| ss)                                 |      e |        |              |     |                                                  |                                                                                    |                |
| _getBorrowOfferWithBounds(State,add | privat |     [] |           [] |  [] |                                       ['isNull'] |                                                                                 [] |              2 |
| ress)                               |      e |        |              |     |                                                  |                                                                                    |                |
+-------------------------------------+--------+--------+--------------+-----+--------------------------------------------------+------------------------------------------------------------------------------------+----------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract RiskLibrary
Contract vars: []
Inheritance:: []
 
+---------------------------------+-------+------+----+----+-------------------------------------------------+----------------------------------------------------------------------------------------------------------+-------------+
| Function                        | Visib | Modi | Re | Wr |                                  Internal Calls |                                                                                           External Calls | Cyclomatic  |
+---------------------------------+-------+------+----+----+-------------------------------------------------+----------------------------------------------------------------------------------------------------------+-------------+
| validateMinimumCredit(State,uin | publi |   [] | [] | [] | ['revert CREDIT_LOWER_THAN_MINIMUM_CREDIT(uint2 |           ['Errors.CREDIT_LOWER_THAN_MINIMUM_CREDIT(credit,state.riskConfig.minimumCreditBorrowAToken)'] |           2 |
| t256)                           |     c |      |    |    |                                   56,uint256)'] |                                                                                                          |             |
| validateMinimumCreditOpening(St | publi |   [] | [] | [] | ['revert CREDIT_LOWER_THAN_MINIMUM_CREDIT_OPENI |   ['Errors.CREDIT_LOWER_THAN_MINIMUM_CREDIT_OPENING(credit,state.riskConfig.minimumCreditBorrowAToken)'] |           2 |
| ate,uint256)                    |     c |      |    |    |                           NG(uint256,uint256)'] |                                                                                                          |             |
| validateTenor(State,uint256)    | publi |   [] | [] | [] |                                        ['revert |                 ['Errors.TENOR_OUT_OF_RANGE(tenor,state.riskConfig.minTenor,state.riskConfig.maxTenor)'] |           2 |
|                                 |     c |      |    |    |   TENOR_OUT_OF_RANGE(uint256,uint256,uint256)'] |                                                                                                          |             |
| collateralRatio(State,address)  | publi |   [] | [] | [] |                                              [] |                                                                                                       [] |           1 |
|                                 |     c |      |    |    |                                                 |                                                                                                          |             |
| isCreditPositionSelfLiquidatabl | publi |   [] | [] | [] |                             ['collateralRatio'] |                  ['state.getLoanStatus(creditPositionId)', 'state.isCreditPositionId(creditPositionId)'] |           1 |
| e(State,uint256)                |     c |      |    |    |                                                 |                                                                                                          |             |
| isCreditPositionTransferrable(S | inter |   [] | [] | [] |                            ['isUserUnderwater'] |   ['state.getDebtPositionByCreditPositionId(creditPositionId)', 'state.getLoanStatus(creditPositionId)'] |           1 |
| tate,uint256)                   |   nal |      |    |    |                                                 |                                                                                                          |             |
| isDebtPositionLiquidatable(Stat | publi |   [] | [] | [] |                            ['isUserUnderwater'] |                        ['state.getLoanStatus(debtPositionId)', 'state.isDebtPositionId(debtPositionId)'] |           1 |
| e,uint256)                      |     c |      |    |    |                                                 |                                                                                                          |             |
| isUserUnderwater(State,address) | publi |   [] | [] | [] |                             ['collateralRatio'] |                                                                                                       [] |           1 |
|                                 |     c |      |    |    |                                                 |                                                                                                          |             |
| validateUserIsNotBelowOpeningLi | exter |   [] | [] | [] | ['collateralRatio', 'revert CR_BELOW_OPENING_LI | ['Errors.CR_BELOW_OPENING_LIMIT_BORROW_CR(account,collateralRatio(state,account),openingLimitBorrowCR)', |           2 |
| mitBorrowCR(State,address)      |   nal |      |    |    |        MIT_BORROW_CR(address,uint256,uint256)'] |                   'Math.max(state.riskConfig.crOpening,state.data.users[account].openingLimitBorrowCR)'] |             |
+---------------------------------+-------+------+----+----+-------------------------------------------------+----------------------------------------------------------------------------------------------------------+-------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract YieldCurveLibrary
Contract vars: []
Inheritance:: []
 
+------------------------------+------+------+-----------+----+------------------------------------------------+------------------------------------------------------------------------------------------------------------+------------+
| Function                     | Visi | Modi |      Read | Wr |                                 Internal Calls |                                                                                             External Calls | Cyclomatic |
+------------------------------+------+------+-----------+----+------------------------------------------------+------------------------------------------------------------------------------------------------------------+------------+
| isNull(YieldCurve)           | inte |   [] |        [] | [] |                                             [] |                                                                                                         [] |          1 |
|                              | rnal |      |           |    |                                                |                                                                                                            |            |
| validateYieldCurve(YieldCurv | inte |   [] |        [] | [] |    ['revert ARRAY_LENGTHS_MISMATCH()', 'revert |                                                 ['Errors.ARRAY_LENGTHS_MISMATCH()', 'Errors.NULL_ARRAY()'] |          7 |
| e,uint256,uint256)           | rnal |      |           |    |                                 NULL_ARRAY()'] | ['Errors.TENORS_NOT_STRICTLY_INCREASING()', 'Errors.TENOR_OUT_OF_RANGE(self.tenors[0],minTenor,maxTenor)'] |            |
|                              |      |      |           |    |    ['revert TENORS_NOT_STRICTLY_INCREASING()', |                       ['Errors.TENOR_OUT_OF_RANGE(self.tenors[self.tenors.length - 1],minTenor,maxTenor)'] |            |
|                              |      |      |           |    |                                        'revert |                                                                                                            |            |
|                              |      |      |           |    |  TENOR_OUT_OF_RANGE(uint256,uint256,uint256)'] |                                                                                                            |            |
| getAdjustedAPR(int256,uint25 | inte |   [] | ['block.t | [] |                 ['revert STALE_RATE(uint128)'] |                                              ['Errors.STALE_RATE(params.variablePoolBorrowRateUpdatedAt)', |          1 |
| 6,VariablePoolBorrowRatePara | rnal |      | imestamp' |    |                                                |                             'Math.mulDivDown(params.variablePoolBorrowRate,marketRateMultiplier,PERCENT)'] |            |
| ms)                          |      |      |         ] |    |                                                |         ['SafeCast.toInt256(Math.mulDivDown(params.variablePoolBorrowRate,marketRateMultiplier,PERCENT))', |            |
|                              |      |      |           |    |                                                |                                                                                  'SafeCast.toUint256(apr + |            |
|                              |      |      |           |    |                                                |          SafeCast.toInt256(Math.mulDivDown(params.variablePoolBorrowRate,marketRateMultiplier,PERCENT)))'] |            |
|                              |      |      |           |    |                                                |                                                                                ['SafeCast.toUint256(apr)'] |            |
| getAPR(YieldCurve,VariablePo | exte |   [] |        [] | [] |                     ['getAdjustedAPR', 'revert |      ['Errors.TENOR_OUT_OF_RANGE(tenor,curveRelativeTime.tenors[0],curveRelativeTime.tenors[length - 1])', |          1 |
| olBorrowRateParams,uint256)  | rnal |      |           |    |  TENOR_OUT_OF_RANGE(uint256,uint256,uint256)'] |                                                       'Math.binarySearch(curveRelativeTime.tenors,tenor)'] |            |
|                              |      |      |           |    |                                                |             ['Math.mulDivDown(y0 - y1,tenor - x0,x1 - x0)', 'Math.mulDivDown(y1 - y0,tenor - x0,x1 - x0)'] |            |
+------------------------------+------+------+-----------+----+------------------------------------------------+------------------------------------------------------------------------------------------------------------+------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract BuyCreditLimit
Contract vars: []
Inheritance:: []
 
+--------------------------------------+--------+-------+----------+-----+----------------------------------+------------------------------------------------------------------------------------------------------------+--------------+
| Function                             | Visibi | Modif |     Read | Wri |                   Internal Calls |                                                                                             External Calls | Cyclomatic C |
+--------------------------------------+--------+-------+----------+-----+----------------------------------+------------------------------------------------------------------------------------------------------------+--------------+
| validateBuyCreditLimit(State,BuyCred | extern |    [] | ['msg.se |  [] | ['revert UNAUTHORIZED_ACTION(add | ['Errors.UNAUTHORIZED_ACTION(msg.sender,onBehalfOf,uint8(Action.BUY_CREDIT_LIMIT))', 'loanOffer.isNull()'] |            3 |
| itLimitOnBehalfOfParams)             |     al |       |   nder'] |     |            ress,address,uint8)'] |                      ['loanOffer.validateLimitOrder(state.riskConfig.minTenor,state.riskConfig.maxTenor)', |              |
|                                      |        |       |          |     |                                  |                      'state.data.sizeFactory.isAuthorized(msg.sender,onBehalfOf,Action.BUY_CREDIT_LIMIT)'] |              |
| executeBuyCreditLimit(State,BuyCredi | extern |    [] | ['msg.se |  [] |                               [] | ['Events.BuyCreditLimit(msg.sender,onBehalfOf,params.maxDueDate,params.curveRelativeTime.tenors,params.cur |            1 |
| tLimitOnBehalfOfParams)              |     al |       |   nder'] |     |                                  |                                      veRelativeTime.aprs,params.curveRelativeTime.marketRateMultipliers)'] |              |
+--------------------------------------+--------+-------+----------+-----+----------------------------------+------------------------------------------------------------------------------------------------------------+--------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract BuyCreditMarket
Contract vars: []
Inheritance:: []
 
+---------------------+-----+----+------------+---+-----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+--------+
| Function            | Vis | Mo |       Read | W |                          Internal Calls |                                                                                                                    External Calls | Cyclom |
+---------------------+-----+----+------------+---+-----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+--------+
| validateBuyCreditMa | ext | [] | ['block.ti | [ | ['revert APR_LOWER_THAN_MIN_APR(uint256 |                 ['Errors.APR_LOWER_THAN_MIN_APR(borrowAPR,params.minAPR)', 'Errors.CREDIT_NOT_FOR_SALE(params.creditPositionId)'] |     12 |
| rket(State,BuyCredi | ern |    | mestamp',  | ] |                     ,uint256)', 'revert | ['Errors.CREDIT_POSITION_NOT_TRANSFERRABLE(params.creditPositionId,uint8(state.getLoanStatus(params.creditPositionId)),state.coll |        |
| tMarketOnBehalfOfPa |  al |    | 'msg.sende |   |          CREDIT_NOT_FOR_SALE(uint256)'] |                               ateralRatio(debtPosition.borrower))', 'Errors.MISMATCHED_CURVES(borrower,tenor,loanAPR,borrowAPR)'] |        |
| rams)               |     |    |        r'] |   | ['revert CREDIT_POSITION_NOT_TRANSFERRA |                                                                                ['Errors.NULL_ADDRESS()', 'Errors.NULL_ADDRESS()'] |        |
|                     |     |    |            |   | BLE(uint256,uint8,uint256)', 'revert MI |                                                                 ['Errors.NULL_AMOUNT()', 'Errors.PAST_DEADLINE(params.deadline)'] |        |
|                     |     |    |            |   | SMATCHED_CURVES(address,uint256,uint256 |                                          ['Errors.TENOR_OUT_OF_RANGE(tenor,state.riskConfig.minTenor,state.riskConfig.maxTenor)', |        |
|                     |     |    |            |   |                             ,uint256)'] |                                              'Errors.UNAUTHORIZED_ACTION(msg.sender,onBehalfOf,uint8(Action.BUY_CREDIT_MARKET))'] |        |
|                     |     |    |            |   |       ['revert NULL_ADDRESS()', 'revert |                                                                                  ['state.collateralRatio(debtPosition.borrower)', |        |
|                     |     |    |            |   |                         NULL_AMOUNT()'] |                                            'state.data.sizeFactory.isAuthorized(msg.sender,onBehalfOf,Action.BUY_CREDIT_MARKET)'] |        |
|                     |     |    |            |   |       ['revert PAST_DEADLINE(uint256)', |                            ['state.getBorrowOfferAPRByTenor(borrower,tenor)', 'state.getCreditPosition(params.creditPositionId)'] |        |
|                     |     |    |            |   | 'revert TENOR_OUT_OF_RANGE(uint256,uint |              ['state.getDebtPositionByCreditPositionId(params.creditPositionId)', 'state.getLoanOfferAPRByTenor(borrower,tenor)'] |        |
|                     |     |    |            |   |                          256,uint256)'] |                  ['state.getLoanStatus(params.creditPositionId)', 'state.isCreditPositionTransferrable(params.creditPositionId)'] |        |
|                     |     |    |            |   | ['revert UNAUTHORIZED_ACTION(address,ad |                                                                                                                                   |        |
|                     |     |    |            |   |                          dress,uint8)'] |                                                                                                                                   |        |
| getSwapData(State,B | pub | [] | ['block.ti | [ |                                      [] |                                                                                                                                [] |      5 |
| uyCreditMarketParam | lic |    |  mestamp'] | ] |                                         |                                                                                                                                   |        |
| s)                  |     |    |            |   |                                         |                                                                                                                                   |        |
| executeBuyCreditMar | ext | [] | ['block.ti | [ |                         ['getSwapData'] | ['Events.BuyCreditMarket(msg.sender,onBehalfOf,params.borrower,recipient,params.creditPositionId,params.amount,params.tenor,param |      2 |
| ket(State,BuyCredit | ern |    | mestamp',  | ] |                                         | s.deadline,params.minAPR,params.exactAmountIn)', 'Events.SwapData(exitCreditPositionId,swapData.borrower,recipient,swapData.credi |        |
| MarketOnBehalfOfPar |  al |    | 'msg.sende |   |                                         |                                                       tAmountOut,swapData.cashAmountIn,swapData.cashAmountIn - swapData.swapFee - |        |
| ams)                |     |    |        r'] |   |                                         |                                            swapData.fragmentationFee,swapData.swapFee,swapData.fragmentationFee,swapData.tenor)'] |        |
|                     |     |    |            |   |                                         | ['state.createCreditPosition({exitCreditPositionId:params.creditPositionId,lender:recipient,credit:swapData.creditAmountOut,forSa |        |
|                     |     |    |            |   |                                         | le:true})', 'state.createDebtAndCreditPositions({lender:recipient,borrower:swapData.borrower,futureValue:swapData.creditAmountOut |        |
|                     |     |    |            |   |                                         |                                                                                     ,dueDate:block.timestamp + swapData.tenor})'] |        |
|                     |     |    |            |   |                                         |                             ['state.data.borrowATokenV1_5.transferFrom(onBehalfOf,state.feeConfig.feeRecipient,swapData.swapFee + |        |
|                     |     |    |            |   |                                         |       swapData.fragmentationFee)', 'state.data.borrowATokenV1_5.transferFrom(onBehalfOf,swapData.borrower,swapData.cashAmountIn - |        |
|                     |     |    |            |   |                                         |                                                                                   swapData.swapFee - swapData.fragmentationFee)'] |        |
+---------------------+-----+----+------------+---+-----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------+--------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Claim
Contract vars: []
Inheritance:: []
 
+------------------------+---------+--------+-----------+-----+---------------------------------------------------------------+--------------------------------------------------------------------------------------+----------------+
| Function               | Visibil | Modifi |      Read | Wri |                                                Internal Calls |                                                                       External Calls | Cyclomatic Com |
+------------------------+---------+--------+-----------+-----+---------------------------------------------------------------+--------------------------------------------------------------------------------------+----------------+
| validateClaim(State,Cl | externa |     [] |        [] |  [] |   ['revert CREDIT_POSITION_ALREADY_CLAIMED(uint256)', 'revert |                  ['Errors.CREDIT_POSITION_ALREADY_CLAIMED(params.creditPositionId)', |              3 |
| aimParams)             |       l |        |           |     |                                    LOAN_NOT_REPAID(uint256)'] |                                   'Errors.LOAN_NOT_REPAID(params.creditPositionId)'] |                |
|                        |         |        |           |     |                                                               |                                 ['state.getCreditPosition(params.creditPositionId)', |                |
|                        |         |        |           |     |                                                               |                                      'state.getLoanStatus(params.creditPositionId)'] |                |
| executeClaim(State,Cla | externa |     [] | ['msg.sen |  [] |                                                            [] |                                                                                   [] |              1 |
| imParams)              |       l |        |     der'] |     |                                                               |                                                                                      |                |
+------------------------+---------+--------+-----------+-----+---------------------------------------------------------------+--------------------------------------------------------------------------------------+----------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Compensate
Contract vars: []
Inheritance:: []
 
+------------------+-----+----+------------+---+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+--------+
| Function         | Vis | Mo |       Read | W |                         Internal Calls |                                                                                                                      External Calls | Cyclom |
+------------------+-----+----+------------+---+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+--------+
| validateCompensa | ext | [] | ['block.ti | [ | ['revert COMPENSATOR_IS_NOT_BORROWER(a | ['Errors.COMPENSATOR_IS_NOT_BORROWER(onBehalfOf,debtPositionToRepay.borrower)', 'Errors.CREDIT_POSITION_NOT_TRANSFERRABLE(params.cr |     11 |
| te(State,Compens | ern |    | mestamp',  | ] | ddress,address)', 'revert CREDIT_POSIT | editPositionToCompensateId,uint8(state.getLoanStatus(params.creditPositionToCompensateId)),state.collateralRatio(debtPositionToComp |        |
| ateOnBehalfOfPar |  al |    | 'msg.sende |   | ION_NOT_TRANSFERRABLE(uint256,uint8,ui |                                                                                                                 ensate.borrower))'] |        |
| ams)             |     |    |        r'] |   |                               nt256)'] |                      ['Errors.DUE_DATE_NOT_COMPATIBLE(params.creditPositionWithDebtToRepayId,params.creditPositionToCompensateId)', |        |
|                  |     |    |            |   | ['revert DUE_DATE_NOT_COMPATIBLE(uint2 |                                                           'Errors.INVALID_CREDIT_POSITION_ID(params.creditPositionToCompensateId)'] |        |
|                  |     |    |            |   |                  56,uint256)', 'revert |      ['Errors.INVALID_LENDER(creditPositionToCompensate.lender)', 'Errors.LOAN_NOT_ACTIVE(params.creditPositionWithDebtToRepayId)'] |        |
|                  |     |    |            |   |  INVALID_CREDIT_POSITION_ID(uint256)'] |                    ['Errors.NULL_AMOUNT()', 'Errors.TENOR_OUT_OF_RANGE(tenor,state.riskConfig.minTenor,state.riskConfig.maxTenor)'] |        |
|                  |     |    |            |   |     ['revert INVALID_LENDER(address)', |                                                      ['Errors.UNAUTHORIZED_ACTION(msg.sender,onBehalfOf,uint8(Action.COMPENSATE))', |        |
|                  |     |    |            |   |     'revert LOAN_NOT_ACTIVE(uint256)'] |                                                                   'Math.min(amountToCompensate,creditPositionToCompensate.credit)'] |        |
|                  |     |    |            |   | ['revert NULL_AMOUNT()', 'revert TENOR |        ['Math.min(params.amount,creditPositionWithDebtToRepay.credit)', 'state.collateralRatio(debtPositionToCompensate.borrower)'] |        |
|                  |     |    |            |   | _OUT_OF_RANGE(uint256,uint256,uint256) |                                                    ['state.data.sizeFactory.isAuthorized(msg.sender,onBehalfOf,Action.COMPENSATE)', |        |
|                  |     |    |            |   |                                     '] |                                                                     'state.getCreditPosition(params.creditPositionToCompensateId)'] |        |
|                  |     |    |            |   | ['revert UNAUTHORIZED_ACTION(address,a |                                                                 ['state.getCreditPosition(params.creditPositionWithDebtToRepayId)', |        |
|                  |     |    |            |   |                        ddress,uint8)'] |                                                     'state.getDebtPositionByCreditPositionId(params.creditPositionToCompensateId)'] |        |
|                  |     |    |            |   |                                        |                                                    ['state.getDebtPositionByCreditPositionId(params.creditPositionToCompensateId)', |        |
|                  |     |    |            |   |                                        |                                                  'state.getDebtPositionByCreditPositionId(params.creditPositionWithDebtToRepayId)'] |        |
|                  |     |    |            |   |                                        |         ['state.getLoanStatus(params.creditPositionToCompensateId)', 'state.getLoanStatus(params.creditPositionWithDebtToRepayId)'] |        |
|                  |     |    |            |   |                                        |                                                        ['state.isCreditPositionTransferrable(params.creditPositionToCompensateId)'] |        |
| executeCompensat | ext | [] | ['msg.send | [ |                                     [] | ['Events.Compensate(msg.sender,onBehalfOf,params.creditPositionWithDebtToRepayId,params.creditPositionToCompensateId,params.amount) |      4 |
| e(State,Compensa | ern |    |       er'] | ] |                                        |                                                                ', 'Math.min(amountToCompensate,creditPositionToCompensate.credit)'] |        |
| teOnBehalfOfPara |  al |    |            |   |                                        | ['Math.min(params.amount,creditPositionWithDebtToRepay.credit)', 'Math.min(state.debtTokenAmountToCollateralTokenAmount(state.feeCo |        |
| ms)              |     |    |            |   |                                        |                                                          nfig.fragmentationFee),state.data.collateralToken.balanceOf(onBehalfOf))'] |        |
|                  |     |    |            |   |                                        | ['state.createCreditPosition({exitCreditPositionId:params.creditPositionToCompensateId,lender:creditPositionWithDebtToRepay.lender, |        |
|                  |     |    |            |   |                                        |                                                         credit:amountToCompensate,forSale:creditPositionWithDebtToRepay.forSale})', |        |
|                  |     |    |            |   |                                        |                                                 'state.createCreditPosition({exitCreditPositionId:state.data.nextCreditPositionId - |        |
|                  |     |    |            |   |                                        |           1,lender:creditPositionWithDebtToRepay.lender,credit:amountToCompensate,forSale:creditPositionWithDebtToRepay.forSale})'] |        |
|                  |     |    |            |   |                                        | ['state.createDebtAndCreditPositions({lender:onBehalfOf,borrower:onBehalfOf,futureValue:amountToCompensate,dueDate:debtPositionToRe |        |
|                  |     |    |            |   |                                        |                                                                 pay.dueDate})', 'state.data.collateralToken.balanceOf(onBehalfOf)'] |        |
|                  |     |    |            |   |                                        |                   ['state.data.collateralToken.transferFrom(onBehalfOf,state.feeConfig.feeRecipient,fragmentationFeeInCollateral)', |        |
|                  |     |    |            |   |                                        |                                                   'state.debtTokenAmountToCollateralTokenAmount(state.feeConfig.fragmentationFee)'] |        |
|                  |     |    |            |   |                                        | ['state.getCreditPosition(params.creditPositionToCompensateId)', 'state.getCreditPosition(params.creditPositionWithDebtToRepayId)'] |        |
|                  |     |    |            |   |                                        | ['state.getDebtPositionByCreditPositionId(params.creditPositionWithDebtToRepayId)', 'state.reduceDebtAndCredit(creditPositionWithDe |        |
|                  |     |    |            |   |                                        |                                               btToRepay.debtPositionId,params.creditPositionWithDebtToRepayId,amountToCompensate)'] |        |
+------------------+-----+----+------------+---+----------------------------------------+-------------------------------------------------------------------------------------------------------------------------------------+--------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract CopyLimitOrders
Contract vars: []
Inheritance:: []
 
+------------------------+-----+-----+-------+---+-------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------+---------+
| Function               | Vis | Mod |  Read | W |                Internal Calls |                                                                                                                            External Calls | Cycloma |
+------------------------+-----+-----+-------+---+-------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------+---------+
| validateCopyLimitOrder | ext |  [] | ['msg | [ |                      ['revert |                                              ['Errors.INVALID_ADDRESS(params.copyAddress)', 'Errors.INVALID_ADDRESS(params.copyAddress)'] |      12 |
| s(State,CopyLimitOrder | ern |     | .send | ] |    INVALID_ADDRESS(address)', |                                                 ['Errors.INVALID_APR_RANGE(params.copyBorrowOffer.minAPR,params.copyBorrowOffer.maxAPR)', |         |
| sOnBehalfOfParams)     |  al |     |  er'] |   | 'revert INVALID_APR_RANGE(uin |                                                      'Errors.INVALID_APR_RANGE(params.copyLoanOffer.minAPR,params.copyLoanOffer.maxAPR)'] |         |
|                        |     |     |       |   |               t256,uint256)'] |                                           ['Errors.INVALID_TENOR_RANGE(params.copyBorrowOffer.minTenor,params.copyBorrowOffer.maxTenor)', |         |
|                        |     |     |       |   | ['revert INVALID_TENOR_RANGE( |                                                'Errors.INVALID_TENOR_RANGE(params.copyLoanOffer.minTenor,params.copyLoanOffer.maxTenor)'] |         |
|                        |     |     |       |   |    uint256,uint256)', 'revert |                            ['Errors.NULL_ADDRESS()', 'Errors.UNAUTHORIZED_ACTION(msg.sender,onBehalfOf,uint8(Action.COPY_LIMIT_ORDERS))'] |         |
|                        |     |     |       |   |              NULL_ADDRESS()'] |                                                                      ['params.copyBorrowOffer.isNull()', 'params.copyLoanOffer.isNull()'] |         |
|                        |     |     |       |   | ['revert UNAUTHORIZED_ACTION( |                                                   ['state.data.sizeFactory.isAuthorized(msg.sender,onBehalfOf,Action.COPY_LIMIT_ORDERS)'] |         |
|                        |     |     |       |   |      address,address,uint8)'] |                                                                                                                                           |         |
| executeCopyLimitOrders | ext |  [] | ['msg | [ |                            [] | ['Events.CopyLimitOrders(msg.sender,onBehalfOf,params.copyAddress,params.copyLoanOffer.minTenor,params.copyLoanOffer.maxTenor,params.copy |       1 |
| (State,CopyLimitOrders | ern |     | .send | ] |                               | LoanOffer.minAPR,params.copyLoanOffer.maxAPR,params.copyLoanOffer.offsetAPR,params.copyBorrowOffer.minTenor,params.copyBorrowOffer.maxTen |         |
| OnBehalfOfParams)      |  al |     |  er'] |   |                               |                                        or,params.copyBorrowOffer.minAPR,params.copyBorrowOffer.maxAPR,params.copyBorrowOffer.offsetAPR)'] |         |
+------------------------+-----+-----+-------+---+-------------------------------+-------------------------------------------------------------------------------------------------------------------------------------------+---------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Deposit
Contract vars: []
Inheritance:: []
 
+------------------------------+--------+-------+------------------+-----+---------------------------------------------+------------------------------------------------------------------------------------------------+---------------+
| Function                     | Visibi | Modif |             Read | Wri |                              Internal Calls |                                                                                 External Calls | Cyclomatic Co |
+------------------------------+--------+-------+------------------+-----+---------------------------------------------+------------------------------------------------------------------------------------------------+---------------+
| validateDeposit(State,Deposi | extern |    [] |   ['msg.sender', |  [] |       ['revert INVALID_MSG_VALUE(uint256)', |                  ['Errors.INVALID_MSG_VALUE(msg.value)', 'Errors.INVALID_TOKEN(params.token)'] |             6 |
| tOnBehalfOfParams)           |     al |       |     'msg.value'] |     |            'revert INVALID_TOKEN(address)'] |                                              ['Errors.NULL_ADDRESS()', 'Errors.NULL_AMOUNT()'] |               |
|                              |        |       |                  |     |           ['revert NULL_ADDRESS()', 'revert |                    ['Errors.UNAUTHORIZED_ACTION(msg.sender,onBehalfOf,uint8(Action.DEPOSIT))', |               |
|                              |        |       |                  |     |                             NULL_AMOUNT()'] |                   'state.data.sizeFactory.isAuthorized(msg.sender,onBehalfOf,Action.DEPOSIT)'] |               |
|                              |        |       |                  |     | ['revert UNAUTHORIZED_ACTION(address,addres |                                                                                                |               |
|                              |        |       |                  |     |                                  s,uint8)'] |                                                                                                |               |
| executeDeposit(State,Deposit | public |    [] |   ['msg.sender', |  [] |                        ['balance(address)'] |                        ['Events.Deposit(msg.sender,onBehalfOf,params.token,params.to,amount)', |             4 |
| OnBehalfOfParams)            |        |       |     'msg.value'] |     |                                             |                                                    'state.data.weth.deposit{value: amount}()'] |               |
|                              |        |       |         ['this'] |     |                                             |                                         ['state.data.weth.forceApprove(address(this),amount)', |               |
|                              |        |       |                  |     |                                             |                 'state.depositUnderlyingBorrowTokenToVariablePoolV1_5(from,params.to,amount)'] |               |
|                              |        |       |                  |     |                                             |                              ['state.depositUnderlyingCollateralToken(from,params.to,amount)', |               |
|                              |        |       |                  |     |                                             |                                                             'state.validateBorrowATokenCap()'] |               |
+------------------------------+--------+-------+------------------+-----+---------------------------------------------+------------------------------------------------------------------------------------------------+---------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Initialize
Contract vars: []
Inheritance:: []
 
+-----------------------------------+----+----+-----+---+-----------------------------+-----------------------------------------------------------------------------------------------------------------------------------------+-------+
| Function                          | Vi | Mo | Rea | W |              Internal Calls |                                                                                                                          External Calls | Cyclo |
+-----------------------------------+----+----+-----+---+-----------------------------+-----------------------------------------------------------------------------------------------------------------------------------------+-------+
| validateOwner(address)            | in | [] |  [] | [ |   ['revert NULL_ADDRESS()'] |                                                                                                               ['Errors.NULL_ADDRESS()'] |     2 |
|                                   | te |    |     | ] |                             |                                                                                                                                         |       |
|                                   | rn |    |     |   |                             |                                                                                                                                         |       |
|                                   | al |    |     |   |                             |                                                                                                                                         |       |
| validateInitializeFeeConfigParams | in | [] |  [] | [ | ['revert INVALID_COLLATERAL |                                                           ['Errors.INVALID_COLLATERAL_PERCENTAGE_PREMIUM(f.collateralProtocolPercent)', |     4 |
| (InitializeFeeConfigParams)       | te |    |     | ] | _PERCENTAGE_PREMIUM(uint256 |                                                     'Errors.INVALID_COLLATERAL_PERCENTAGE_PREMIUM(f.overdueCollateralProtocolPercent)'] |       |
|                                   | rn |    |     |   |                 )', 'revert |                                                                                                               ['Errors.NULL_ADDRESS()'] |       |
|                                   | al |    |     |   |            NULL_ADDRESS()'] |                                                                                                                                         |       |
| validateInitializeRiskConfigParam | in | [] |  [] | [ | ['revert INVALID_COLLATERAL |                                    ['Errors.INVALID_COLLATERAL_RATIO(r.crLiquidation)', 'Errors.INVALID_COLLATERAL_RATIO(r.crOpening)'] |     8 |
| s(InitializeRiskConfigParams)     | te |    |     | ] | _RATIO(uint256)', 'revert I |                ['Errors.INVALID_LIQUIDATION_COLLATERAL_RATIO(r.crOpening,r.crLiquidation)', 'Errors.INVALID_MAXIMUM_TENOR(r.maxTenor)'] |       |
|                                   | rn |    |     |   | NVALID_LIQUIDATION_COLLATER |                                                                                        ['Errors.NULL_AMOUNT()', 'Errors.NULL_AMOUNT()'] |       |
|                                   | al |    |     |   | AL_RATIO(uint256,uint256)'] |                                                                                                                ['Errors.NULL_AMOUNT()'] |       |
|                                   |    |    |     |   | ['revert INVALID_MAXIMUM_TE |                                                                                                                                         |       |
|                                   |    |    |     |   |      NOR(uint256)', 'revert |                                                                                                                                         |       |
|                                   |    |    |     |   |             NULL_AMOUNT()'] |                                                                                                                                         |       |
| validateInitializeOracleParams(In | in | [] |  [] | [ |   ['revert NULL_ADDRESS()'] |                                                                         ['Errors.NULL_ADDRESS()', 'IPriceFeed(o.priceFeed).getPrice()'] |     2 |
| itializeOracleParams)             | te |    |     | ] |                             |                                                                                                                                         |       |
|                                   | rn |    |     |   |                             |                                                                                                                                         |       |
|                                   | al |    |     |   |                             |                                                                                                                                         |       |
| validateInitializeDataParams(Init | in | [] |  [] | [ |                    ['revert |                                                         ['Errors.INVALID_DECIMALS(IERC20Metadata(d.underlyingBorrowToken).decimals())', |     9 |
| ializeDataParams)                 | te |    |     | ] |   INVALID_DECIMALS(uint8)', |                                                      'Errors.INVALID_DECIMALS(IERC20Metadata(d.underlyingCollateralToken).decimals())'] |       |
|                                   | rn |    |     |   |    'revert NULL_ADDRESS()'] |                                                                                      ['Errors.NULL_ADDRESS()', 'Errors.NULL_ADDRESS()'] |       |
|                                   | al |    |     |   |                             |                                                                                      ['Errors.NULL_ADDRESS()', 'Errors.NULL_ADDRESS()'] |       |
|                                   |    |    |     |   |                             |                                                                                      ['Errors.NULL_ADDRESS()', 'Errors.NULL_ADDRESS()'] |       |
|                                   |    |    |     |   |                             |                            ['IERC20Metadata(d.underlyingBorrowToken).decimals()', 'IERC20Metadata(d.underlyingBorrowToken).decimals()'] |       |
|                                   |    |    |     |   |                             |                    ['IERC20Metadata(d.underlyingCollateralToken).decimals()', 'IERC20Metadata(d.underlyingCollateralToken).decimals()'] |       |
| validateInitialize(State,address, | ex | [] |  [] | [ | ['validateInitializeDataPar |                                                                                                                                      [] |     1 |
| InitializeFeeConfigParams,Initial | te |    |     | ] | ams', 'validateInitializeFe |                                                                                                                                         |       |
| izeRiskConfigParams,InitializeOra | rn |    |     |   |             eConfigParams'] |                                                                                                                                         |       |
| cleParams,InitializeDataParams)   | al |    |     |   | ['validateInitializeOracleP |                                                                                                                                         |       |
|                                   |    |    |     |   | arams', 'validateInitialize |                                                                                                                                         |       |
|                                   |    |    |     |   |          RiskConfigParams'] |                                                                                                                                         |       |
|                                   |    |    |     |   |           ['validateOwner'] |                                                                                                                                         |       |
| executeInitializeFeeConfig(State, | in | [] |  [] | [ |                          [] |                                                                                                                                      [] |     1 |
| InitializeFeeConfigParams)        | te |    |     | ] |                             |                                                                                                                                         |       |
|                                   | rn |    |     |   |                             |                                                                                                                                         |       |
|                                   | al |    |     |   |                             |                                                                                                                                         |       |
| executeInitializeRiskConfig(State | in | [] |  [] | [ |                          [] |                                                                                                                                      [] |     1 |
| ,InitializeRiskConfigParams)      | te |    |     | ] |                             |                                                                                                                                         |       |
|                                   | rn |    |     |   |                             |                                                                                                                                         |       |
|                                   | al |    |     |   |                             |                                                                                                                                         |       |
| executeInitializeOracle(State,Ini | in | [] |  [] | [ |                          [] |                                                                                                                                      [] |     1 |
| tializeOracleParams)              | te |    |     | ] |                             |                                                                                                                                         |       |
|                                   | rn |    |     |   |                             |                                                                                                                                         |       |
|                                   | al |    |     |   |                             |                                                                                                                                         |       |
| executeInitializeData(State,Initi | in | [] | ['t | [ |         ['string.concat()'] |              ['IERC20Metadata(state.data.underlyingBorrowToken).decimals()', 'IERC20Metadata(state.data.underlyingBorrowToken).name()'] |     1 |
| alizeDataParams)                  | te |    | his | ] |                             |        ['IERC20Metadata(state.data.underlyingBorrowToken).symbol()', 'IERC20Metadata(state.data.underlyingCollateralToken).decimals()'] |       |
|                                   | rn |    |  '] |   |                             |        ['IERC20Metadata(state.data.underlyingCollateralToken).name()', 'IERC20Metadata(state.data.underlyingCollateralToken).symbol()'] |       |
|                                   | al |    |     |   |                             | ['new NonTransferrableToken(address(this),string.concat(Size ,IERC20Metadata(state.data.underlyingCollateralToken).name()),string.conca |       |
|                                   |    |    |     |   |                             |  t(sz,IERC20Metadata(state.data.underlyingCollateralToken).symbol()),IERC20Metadata(state.data.underlyingCollateralToken).decimals())', |       |
|                                   |    |    |     |   |                             | 'new NonTransferrableToken(address(this),string.concat(Size Debt ,IERC20Metadata(state.data.underlyingBorrowToken).name()),string.conca |       |
|                                   |    |    |     |   |                             |      t(szDebt,IERC20Metadata(state.data.underlyingBorrowToken).symbol()),IERC20Metadata(state.data.underlyingBorrowToken).decimals())'] |       |
|                                   |    |    |     |   |                             |                           ['string.concat(Size ,IERC20Metadata(state.data.underlyingCollateralToken).name())', 'string.concat(Size Debt |       |
|                                   |    |    |     |   |                             |                                                                             ,IERC20Metadata(state.data.underlyingBorrowToken).name())'] |       |
|                                   |    |    |     |   |                             |                                                     ['string.concat(sz,IERC20Metadata(state.data.underlyingCollateralToken).symbol())', |       |
|                                   |    |    |     |   |                             |                                                      'string.concat(szDebt,IERC20Metadata(state.data.underlyingBorrowToken).symbol())'] |       |
| executeInitialize(State,Initializ | ex | [] | ['m | [ | ['executeInitializeData', ' |                                                                                                       ['Events.Initialize(msg.sender)'] |     1 |
| eFeeConfigParams,InitializeRiskCo | te |    | sg. | ] | executeInitializeFeeConfig' |                                                                                                                                         |       |
| nfigParams,InitializeOracleParams | rn |    | sen |   |                           ] |                                                                                                                                         |       |
| ,InitializeDataParams)            | al |    | der |   | ['executeInitializeOracle', |                                                                                                                                         |       |
|                                   |    |    |  '] |   | 'executeInitializeRiskConfi |                                                                                                                                         |       |
|                                   |    |    |     |   |                         g'] |                                                                                                                                         |       |
+-----------------------------------+----+----+-----+---+-----------------------------+-----------------------------------------------------------------------------------------------------------------------------------------+-------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Liquidate
Contract vars: []
Inheritance:: []
 
+----------------------------------+-------+------+-----------+----+-----------------------------------------------+-----------------------------------------------------------------------------------------------------+------------+
| Function                         | Visib | Modi |      Read | Wr |                                Internal Calls |                                                                                      External Calls | Cyclomatic |
+----------------------------------+-------+------+-----------+----+-----------------------------------------------+-----------------------------------------------------------------------------------------------------+------------+
| validateLiquidate(State,Liquidat | exter |   [] | ['block.t | [] | ['revert LOAN_NOT_LIQUIDATABLE(uint256,uint25 | ['Errors.LOAN_NOT_LIQUIDATABLE(params.debtPositionId,state.collateralRatio(debtPosition.borrower),u |          3 |
| eParams)                         |   nal |      | imestamp' |    |   6,uint8)', 'revert PAST_DEADLINE(uint256)'] |        int8(state.getLoanStatus(params.debtPositionId)))', 'Errors.PAST_DEADLINE(params.deadline)'] |            |
|                                  |       |      |         ] |    |                                               |    ['state.collateralRatio(debtPosition.borrower)', 'state.getDebtPosition(params.debtPositionId)'] |            |
|                                  |       |      |           |    |                                               |                                                      ['state.getLoanStatus(params.debtPositionId)', |            |
|                                  |       |      |           |    |                                               |                                          'state.isDebtPositionLiquidatable(params.debtPositionId)'] |            |
| validateMinimumCollateralProfit( | exter |   [] |        [] | [] | ['revert LIQUIDATE_PROFIT_BELOW_MINIMUM_COLLA | ['Errors.LIQUIDATE_PROFIT_BELOW_MINIMUM_COLLATERAL_PROFIT(liquidatorProfitCollateralToken,params.mi |          2 |
| State,LiquidateParams,uint256)   |   nal |      |           |    |               TERAL_PROFIT(uint256,uint256)'] |                                                                            nimumCollateralProfit)'] |            |
| executeLiquidate(State,Liquidate | exter |   [] | ['msg.sen | [] |                                            [] |                                                                                                  [] |          3 |
| Params)                          |   nal |      |     der'] |    |                                               |                                                                                                     |            |
+----------------------------------+-------+------+-----------+----+-----------------------------------------------+-----------------------------------------------------------------------------------------------------+------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract LiquidateWithReplacement
Contract vars: []
Inheritance:: []
 
+-------------------------------------+------+------+-----------------+----+-----------------------------------------+------------------------------------------------------------------------------------------------------+-----------+
| Function                            | Visi | Modi |            Read | Wr |                          Internal Calls |                                                                                       External Calls | Cyclomati |
+-------------------------------------+------+------+-----------------+----+-----------------------------------------+------------------------------------------------------------------------------------------------------+-----------+
| validateLiquidateWithReplacement(St | exte |   [] | ['block.timesta | [] | ['revert APR_LOWER_THAN_MIN_APR(uint256 |                                           ['Errors.APR_LOWER_THAN_MIN_APR(borrowAPR,params.minAPR)', |         6 |
| ate,LiquidateWithReplacementParams) | rnal |      |            mp'] |    |                     ,uint256)', 'revert |                                                     'Errors.LOAN_NOT_ACTIVE(params.debtPositionId)'] |           |
|                                     |      |      |                 |    |              LOAN_NOT_ACTIVE(uint256)'] |       ['Errors.MISMATCHED_CURVES(params.borrower,tenor,loanAPR,borrowAPR)', 'Errors.NULL_ADDRESS()'] |           |
|                                     |      |      |                 |    | ['revert MISMATCHED_CURVES(address,uint |             ['Errors.TENOR_OUT_OF_RANGE(tenor,state.riskConfig.minTenor,state.riskConfig.maxTenor)', |           |
|                                     |      |      |                 |    |          256,uint256,uint256)', 'revert |                                             'state.getBorrowOfferAPRByTenor(params.borrower,tenor)'] |           |
|                                     |      |      |                 |    |                        NULL_ADDRESS()'] |                                                     ['state.getDebtPosition(params.debtPositionId)', |           |
|                                     |      |      |                 |    | ['revert TENOR_OUT_OF_RANGE(uint256,uin |                                               'state.getLoanOfferAPRByTenor(params.borrower,tenor)'] |           |
|                                     |      |      |                 |    |                         t256,uint256)'] | ['state.getLoanStatus(params.debtPositionId)', 'state.validateLiquidate(LiquidateParams({debtPositio |           |
|                                     |      |      |                 |    |                                         | nId:params.debtPositionId,minimumCollateralProfit:params.minimumCollateralProfit,deadline:params.dea |           |
|                                     |      |      |                 |    |                                         |                                                                                           dline}))'] |           |
| validateMinimumCollateralProfit(Sta | exte |   [] |              [] | [] |                                      [] | ['Liquidate.validateMinimumCollateralProfit(state,LiquidateParams({debtPositionId:params.debtPositio |         1 |
| te,LiquidateWithReplacementParams,u | rnal |      |                 |    |                                         | nId,minimumCollateralProfit:params.minimumCollateralProfit,deadline:params.deadline}),liquidatorProf |           |
| int256)                             |      |      |                 |    |                                         |                                                                                 itCollateralToken)'] |           |
| executeLiquidateWithReplacement(Sta | exte |   [] | ['block.timesta | [] |                                      [] |                                                                                                   [] |         1 |
| te,LiquidateWithReplacementParams)  | rnal |      |            mp', |    |                                         |                                                                                                      |           |
|                                     |      |      |   'msg.sender'] |    |                                         |                                                                                                      |           |
+-------------------------------------+------+------+-----------------+----+-----------------------------------------+------------------------------------------------------------------------------------------------------+-----------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Repay
Contract vars: []
Inheritance:: []
 
+-----------------------+--------+-------+----------------+-----+---------------------------------------------------+-------------------------------------------------------------------------------------------------+---------------+
| Function              | Visibi | Modif |           Read | Wri |                                    Internal Calls |                                                                                  External Calls | Cyclomatic Co |
+-----------------------+--------+-------+----------------+-----+---------------------------------------------------+-------------------------------------------------------------------------------------------------+---------------+
| validateRepay(State,R | extern |    [] |             [] |  [] |      ['revert INVALID_BORROWER(address)', 'revert |                                                    ['Errors.INVALID_BORROWER(params.borrower)', |             3 |
| epayParams)           |     al |       |                |     |                    LOAN_ALREADY_REPAID(uint256)'] |                                            'Errors.LOAN_ALREADY_REPAID(params.debtPositionId)'] |               |
|                       |        |       |                |     |                                                   |  ['state.getDebtPosition(params.debtPositionId)', 'state.getLoanStatus(params.debtPositionId)'] |               |
| executeRepay(State,Re | extern |    [] | ['msg.sender', |  [] |                                                [] |                              ['Events.Repay(msg.sender,params.debtPositionId,params.borrower)', |             1 |
| payParams)            |     al |       |        'this'] |     |                                                   |                                                 'state.data.borrowATokenV1_5.liquidityIndex()'] |               |
|                       |        |       |                |     |                                                   | ['state.data.borrowATokenV1_5.transferFrom(msg.sender,address(this),debtPosition.futureValue)', |               |
|                       |        |       |                |     |                                                   |                                                 'state.getDebtPosition(params.debtPositionId)'] |               |
|                       |        |       |                |     |                                                   |                             ['state.repayDebt(params.debtPositionId,debtPosition.futureValue)'] |               |
+-----------------------+--------+-------+----------------+-----+---------------------------------------------------+-------------------------------------------------------------------------------------------------+---------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract SelfLiquidate
Contract vars: []
Inheritance:: []
 
+----------------------------+------+------+--------+----+-----------------------------------------------------+-----------------------------------------------------------------------------------------------------------+-----------+
| Function                   | Visi | Modi |   Read | Wr |                                      Internal Calls |                                                                                            External Calls | Cyclomati |
+----------------------------+------+------+--------+----+-----------------------------------------------------+-----------------------------------------------------------------------------------------------------------+-----------+
| validateSelfLiquidate(Stat | exte |   [] | ['msg. | [] |                                            ['revert | ['Errors.LIQUIDATOR_IS_NOT_LENDER(onBehalfOf,creditPosition.lender)', 'Errors.LOAN_NOT_SELF_LIQUIDATABLE( |         5 |
| e,SelfLiquidateOnBehalfOfP | rnal |      | sender |    | LIQUIDATOR_IS_NOT_LENDER(address,address)', 'revert | params.creditPositionId,state.collateralRatio(debtPosition.borrower),uint8(state.getLoanStatus(params.cre |           |
| arams)                     |      |      |     '] |    | LOAN_NOT_SELF_LIQUIDATABLE(uint256,uint256,uint8)'] |                                                                                        ditPositionId)))'] |           |
|                            |      |      |        |    |                   ['revert NULL_ADDRESS()', 'revert |                                                                                 ['Errors.NULL_ADDRESS()', |           |
|                            |      |      |        |    |        UNAUTHORIZED_ACTION(address,address,uint8)'] |                         'Errors.UNAUTHORIZED_ACTION(msg.sender,onBehalfOf,uint8(Action.SELF_LIQUIDATE))'] |           |
|                            |      |      |        |    |                                                     |                                                          ['state.collateralRatio(debtPosition.borrower)', |           |
|                            |      |      |        |    |                                                     |                       'state.data.sizeFactory.isAuthorized(msg.sender,onBehalfOf,Action.SELF_LIQUIDATE)'] |           |
|                            |      |      |        |    |                                                     |                                                      ['state.getCreditPosition(params.creditPositionId)', |           |
|                            |      |      |        |    |                                                     |                                       'state.getDebtPositionByCreditPositionId(params.creditPositionId)'] |           |
|                            |      |      |        |    |                                                     |                                                          ['state.getLoanStatus(params.creditPositionId)', |           |
|                            |      |      |        |    |                                                     |                                        'state.isCreditPositionSelfLiquidatable(params.creditPositionId)'] |           |
| executeSelfLiquidate(State | exte |   [] | ['msg. | [] |                                                  [] |                         ['Events.SelfLiquidate(msg.sender,onBehalfOf,params.creditPositionId,recipient)', |         1 |
| ,SelfLiquidateOnBehalfOfPa | rnal |      | sender |    |                                                     |            'state.data.collateralToken.transferFrom(debtPosition.borrower,recipient,assignedCollateral)'] |           |
| rams)                      |      |      |     '] |    |                                                     |                                                      ['state.getCreditPosition(params.creditPositionId)', |           |
|                            |      |      |        |    |                                                     |                                       'state.getCreditPositionProRataAssignedCollateral(creditPosition)'] |           |
|                            |      |      |        |    |                                                     |                                      ['state.getDebtPositionByCreditPositionId(params.creditPositionId)', |           |
|                            |      |      |        |    |                                                     | 'state.reduceDebtAndCredit(creditPosition.debtPositionId,params.creditPositionId,creditPosition.credit)'] |           |
+----------------------------+------+------+--------+----+-----------------------------------------------------+-----------------------------------------------------------------------------------------------------------+-----------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract SellCreditLimit
Contract vars: []
Inheritance:: []
 
+---------------------------------------+--------+-------+----------+-----+---------------------------------+------------------------------------------------------------------------------------------------------------+--------------+
| Function                              | Visibi | Modif |     Read | Wri |                  Internal Calls |                                                                                             External Calls | Cyclomatic C |
+---------------------------------------+--------+-------+----------+-----+---------------------------------+------------------------------------------------------------------------------------------------------------+--------------+
| validateSellCreditLimit(State,SellCre | extern |    [] | ['msg.se |  [] | ['revert UNAUTHORIZED_ACTION(ad |               ['Errors.UNAUTHORIZED_ACTION(msg.sender,onBehalfOf,uint8(uint8(Action.SELL_CREDIT_LIMIT)))', |            3 |
| ditLimitOnBehalfOfParams)             |     al |       |   nder'] |     |          dress,address,uint8)'] |                                                                                    'borrowOffer.isNull()'] |              |
|                                       |        |       |          |     |                                 |                    ['borrowOffer.validateLimitOrder(state.riskConfig.minTenor,state.riskConfig.maxTenor)', |              |
|                                       |        |       |          |     |                                 |                     'state.data.sizeFactory.isAuthorized(msg.sender,onBehalfOf,Action.SELL_CREDIT_LIMIT)'] |              |
| executeSellCreditLimit(State,SellCred | extern |    [] | ['msg.se |  [] |                              [] | ['Events.SellCreditLimit(msg.sender,onBehalfOf,params.maxDueDate,params.curveRelativeTime.tenors,params.cu |            1 |
| itLimitOnBehalfOfParams)              |     al |       |   nder'] |     |                                 |                                     rveRelativeTime.aprs,params.curveRelativeTime.marketRateMultipliers)'] |              |
+---------------------------------------+--------+-------+----------+-----+---------------------------------+------------------------------------------------------------------------------------------------------------+--------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract SellCreditMarket
Contract vars: []
Inheritance:: []
 
+---------------------+-----+----+------------+---+-----------------------------------------+----------------------------------------------------------------------------------------------------------------------------------+--------+
| Function            | Vis | Mo |       Read | W |                          Internal Calls |                                                                                                                   External Calls | Cyclom |
+---------------------+-----+----+------------+---+-----------------------------------------+----------------------------------------------------------------------------------------------------------------------------------+--------+
| validateSellCreditM | ext | [] | ['block.ti | [ | ['revert APR_GREATER_THAN_MAX_APR(uint2 |    ['Errors.APR_GREATER_THAN_MAX_APR(loanAPR,params.maxAPR)', 'Errors.BORROWER_IS_NOT_LENDER(onBehalfOf,creditPosition.lender)'] |     12 |
| arket(State,SellCre | ern |    | mestamp',  | ] | 56,uint256)', 'revert BORROWER_IS_NOT_L | ['Errors.CREDIT_POSITION_NOT_TRANSFERRABLE(params.creditPositionId,uint8(state.getLoanStatus(params.creditPositionId)),state.col |        |
| ditMarketOnBehalfOf |  al |    | 'msg.sende |   |                ENDER(address,address)'] |                        lateralRatio(debtPosition.borrower))', 'Errors.MISMATCHED_CURVES(params.lender,tenor,loanAPR,borrowAPR)'] |        |
| Params)             |     |    |        r'] |   | ['revert CREDIT_POSITION_NOT_TRANSFERRA |                                                                               ['Errors.NULL_ADDRESS()', 'Errors.NULL_ADDRESS()'] |        |
|                     |     |    |            |   | BLE(uint256,uint8,uint256)', 'revert MI |                                                                ['Errors.NULL_AMOUNT()', 'Errors.PAST_DEADLINE(params.deadline)'] |        |
|                     |     |    |            |   | SMATCHED_CURVES(address,uint256,uint256 |                                         ['Errors.TENOR_OUT_OF_RANGE(tenor,state.riskConfig.minTenor,state.riskConfig.maxTenor)', |        |
|                     |     |    |            |   |                             ,uint256)'] |                                            'Errors.UNAUTHORIZED_ACTION(msg.sender,onBehalfOf,uint8(Action.SELL_CREDIT_MARKET))'] |        |
|                     |     |    |            |   |       ['revert NULL_ADDRESS()', 'revert |                                                                                 ['state.collateralRatio(debtPosition.borrower)', |        |
|                     |     |    |            |   |                         NULL_AMOUNT()'] |                                          'state.data.sizeFactory.isAuthorized(msg.sender,onBehalfOf,Action.SELL_CREDIT_MARKET)'] |        |
|                     |     |    |            |   |       ['revert PAST_DEADLINE(uint256)', |                      ['state.getBorrowOfferAPRByTenor(params.lender,tenor)', 'state.getCreditPosition(params.creditPositionId)'] |        |
|                     |     |    |            |   | 'revert TENOR_OUT_OF_RANGE(uint256,uint |        ['state.getDebtPositionByCreditPositionId(params.creditPositionId)', 'state.getLoanOfferAPRByTenor(params.lender,tenor)'] |        |
|                     |     |    |            |   |                          256,uint256)'] |                 ['state.getLoanStatus(params.creditPositionId)', 'state.isCreditPositionTransferrable(params.creditPositionId)'] |        |
|                     |     |    |            |   | ['revert UNAUTHORIZED_ACTION(address,ad |                                                                                                                                  |        |
|                     |     |    |            |   |                          dress,uint8)'] |                                                                                                                                  |        |
| getSwapData(State,S | pub | [] | ['block.ti | [ |                                      [] |                                                                                                                               [] |      5 |
| ellCreditMarketPara | lic |    |  mestamp'] | ] |                                         |                                                                                                                                  |        |
| ms)                 |     |    |            |   |                                         |                                                                                                                                  |        |
| executeSellCreditMa | ext | [] | ['block.ti | [ |                         ['getSwapData'] | ['Events.SellCreditMarket(msg.sender,onBehalfOf,params.lender,recipient,params.creditPositionId,params.amount,params.tenor,param |      3 |
| rket(State,SellCred | ern |    | mestamp',  | ] |                                         |                                                                                 s.deadline,params.maxAPR,params.exactAmountIn)', |        |
| itMarketOnBehalfOfP |  al |    | 'msg.sende |   |                                         | 'Events.SwapData(exitCreditPositionId,onBehalfOf,params.lender,swapData.creditAmountIn,swapData.cashAmountOut + swapData.swapFee |        |
| arams)              |     |    |        r'] |   |                                         |                  + swapData.fragmentationFee,swapData.cashAmountOut,swapData.swapFee,swapData.fragmentationFee,swapData.tenor)'] |        |
|                     |     |    |            |   |                                         | ['state.createCreditPosition({exitCreditPositionId:exitCreditPositionId,lender:params.lender,credit:swapData.creditAmountIn,forS |        |
|                     |     |    |            |   |                                         | ale:true})', 'state.createDebtAndCreditPositions({lender:onBehalfOf,borrower:onBehalfOf,futureValue:swapData.creditAmountIn,dueD |        |
|                     |     |    |            |   |                                         |                                                                                         ate:block.timestamp + swapData.tenor})'] |        |
|                     |     |    |            |   |                                         |                                     ['state.data.borrowATokenV1_5.transferFrom(params.lender,recipient,swapData.cashAmountOut)', |        |
|                     |     |    |            |   |                                         |                          'state.data.borrowATokenV1_5.transferFrom(params.lender,state.feeConfig.feeRecipient,swapData.swapFee + |        |
|                     |     |    |            |   |                                         |                                                                                                     swapData.fragmentationFee)'] |        |
+---------------------+-----+----+------------+---+-----------------------------------------+----------------------------------------------------------------------------------------------------------------------------------+--------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract SetUserConfiguration
Contract vars: []
Inheritance:: []
 
+-------------------------------+------+-----+-------+----+----------------------------------+------------------------------------------------------------------------------------------------------------------------------+----------+
| Function                      | Visi | Mod |  Read | Wr |                   Internal Calls |                                                                                                               External Calls | Cyclomat |
+-------------------------------+------+-----+-------+----+----------------------------------+------------------------------------------------------------------------------------------------------------------------------+----------+
| validateSetUserConfiguration( | exte |  [] | ['msg | [] | ['revert INVALID_CREDIT_POSITION |    ['Errors.INVALID_CREDIT_POSITION_ID(params.creditPositionIds[i])', 'Errors.LOAN_NOT_ACTIVE(params.creditPositionIds[i])'] |        5 |
| State,SetUserConfigurationOnB | rnal |     | .send |    |           _ID(uint256)', 'revert |                                   ['Errors.UNAUTHORIZED_ACTION(msg.sender,onBehalfOf,uint8(Action.SET_USER_CONFIGURATION))', |          |
| ehalfOfParams)                |      |     |  er'] |    |       LOAN_NOT_ACTIVE(uint256)'] |                                  'state.data.sizeFactory.isAuthorized(msg.sender,onBehalfOf,Action.SET_USER_CONFIGURATION)'] |          |
|                               |      |     |       |    | ['revert UNAUTHORIZED_ACTION(add |                 ['state.getCreditPosition(params.creditPositionIds[i])', 'state.getLoanStatus(params.creditPositionIds[i])'] |          |
|                               |      |     |       |    |            ress,address,uint8)'] |                                                                                                                              |          |
| executeSetUserConfiguration(S | exte |  [] | ['msg | [] |                               [] | ['Events.SetUserConfiguration(msg.sender,onBehalfOf,params.openingLimitBorrowCR,params.allCreditPositionsForSaleDisabled,par |        2 |
| tate,SetUserConfigurationOnBe | rnal |     | .send |    |                                  | ams.creditPositionIdsForSale,params.creditPositionIds)', 'Events.UpdateCreditPosition(params.creditPositionIds[i],creditPosi |          |
| halfOfParams)                 |      |     |  er'] |    |                                  |                                                                  tion.lender,creditPosition.credit,creditPosition.forSale)'] |          |
|                               |      |     |       |    |                                  |                                                                     ['state.getCreditPosition(params.creditPositionIds[i])'] |          |
+-------------------------------+------+-----+-------+----+----------------------------------+------------------------------------------------------------------------------------------------------------------------------+----------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract UpdateConfig
Contract vars: []
Inheritance:: []
 
+------------------------------------------------+------------+-----------+----------------+-------+----------------+----------------+-----------------------+
| Function                                       | Visibility | Modifiers |           Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+------------------------------------------------+------------+-----------+----------------+-------+----------------+----------------+-----------------------+
| feeConfigParams(State)                         |     public |        [] |             [] |    [] |             [] |             [] |                     1 |
| riskConfigParams(State)                        |     public |        [] |             [] |    [] |             [] |             [] |                     1 |
| oracleParams(State)                            |     public |        [] |             [] |    [] |             [] |             [] |                     1 |
| validateUpdateConfig(State,UpdateConfigParams) |   external |        [] |             [] |    [] |             [] |             [] |                     1 |
| executeUpdateConfig(State,UpdateConfigParams)  |   external |        [] | ['msg.sender'] |    [] |             [] |             [] |                    19 |
+------------------------------------------------+------------+-----------+----------------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract Withdraw
Contract vars: []
Inheritance:: []
 
+-------------------------------+--------+-------+----------+-----+--------------------------------------------------+--------------------------------------------------------------------------------------------------+---------------+
| Function                      | Visibi | Modif |     Read | Wri |                                   Internal Calls |                                                                                   External Calls | Cyclomatic Co |
+-------------------------------+--------+-------+----------+-----+--------------------------------------------------+--------------------------------------------------------------------------------------------------+---------------+
| validateWithdraw(State,Withdr | extern |    [] | ['msg.se |  [] |        ['revert INVALID_TOKEN(address)', 'revert |                                  ['Errors.INVALID_TOKEN(params.token)', 'Errors.NULL_ADDRESS()'] |             5 |
| awOnBehalfOfParams)           |     al |       |   nder'] |     |                                 NULL_ADDRESS()'] |                                                                         ['Errors.NULL_AMOUNT()', |               |
|                               |        |       |          |     |                 ['revert NULL_AMOUNT()', 'revert |                      'Errors.UNAUTHORIZED_ACTION(msg.sender,onBehalfOf,uint8(Action.WITHDRAW))'] |               |
|                               |        |       |          |     |     UNAUTHORIZED_ACTION(address,address,uint8)'] |                   ['state.data.sizeFactory.isAuthorized(msg.sender,onBehalfOf,Action.WITHDRAW)'] |               |
| executeWithdraw(State,Withdra | public |    [] | ['msg.se |  [] |                                               [] |                         ['Events.Withdraw(msg.sender,onBehalfOf,params.token,params.to,amount)', |             4 |
| wOnBehalfOfParams)            |        |       |   nder'] |     |                                                  |                     'Math.min(params.amount,state.data.borrowATokenV1_5.balanceOf(onBehalfOf))'] |               |
|                               |        |       |          |     |                                                  |                     ['Math.min(params.amount,state.data.collateralToken.balanceOf(onBehalfOf))', |               |
|                               |        |       |          |     |                                                  |                                             'state.data.borrowATokenV1_5.balanceOf(onBehalfOf)'] |               |
|                               |        |       |          |     |                                                  |                                             ['state.data.collateralToken.balanceOf(onBehalfOf)', |               |
|                               |        |       |          |     |                                                  |                                  'state.validateUserIsNotBelowOpeningLimitBorrowCR(onBehalfOf)'] |               |
|                               |        |       |          |     |                                                  |                         ['state.withdrawUnderlyingCollateralToken(onBehalfOf,params.to,amount)', |               |
|                               |        |       |          |     |                                                  |                'state.withdrawUnderlyingTokenFromVariablePoolV1_5(onBehalfOf,params.to,amount)'] |               |
+-------------------------------+--------+-------+----------+-----+--------------------------------------------------+--------------------------------------------------------------------------------------------------+---------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract NonTransferrableScaledTokenV1_5
Contract vars: ['UPGRADE_INTERFACE_VERSION', 'sizeFactory', 'variablePool', 'underlyingToken', 'name', 'symbol', 'decimals', '_totalSupply', '_balanceOf']
Inheritance:: ['UUPSUpgradeable', 'IERC1822Proxiable', 'Ownable2StepUpgradeable', 'OwnableUpgradeable', 'ContextUpgradeable', 'Initializable', 'IERC20Errors', 'IERC20Metadata', 'IERC20']
 
+--------------------------------------+------+-----------+-------------------+-------------------+--------------------------------------------------+-------------------------------------------------------------------+------------+
| Function                             | Visi | Modifiers |              Read |             Write |                                   Internal Calls |                                                    External Calls | Cyclomatic |
+--------------------------------------+------+-----------+-------------------+-------------------+--------------------------------------------------+-------------------------------------------------------------------+------------+
| __UUPSUpgradeable_init()             | inte | ['onlyIni |                [] |                [] |                             ['onlyInitializing'] |                                                                [] |          1 |
|                                      | rnal | tializing |                   |                   |                                                  |                                                                   |            |
|                                      |      |        '] |                   |                   |                                                  |                                                                   |            |
| __UUPSUpgradeable_init_unchained()   | inte | ['onlyIni |                [] |                [] |                             ['onlyInitializing'] |                                                                [] |          1 |
|                                      | rnal | tializing |                   |                   |                                                  |                                                                   |            |
|                                      |      |        '] |                   |                   |                                                  |                                                                   |            |
| proxiableUUID()                      | exte | ['notDele |                [] |                [] |                                 ['notDelegated'] |                                                                [] |          1 |
|                                      | rnal |   gated'] |                   |                   |                                                  |                                                                   |            |
| upgradeToAndCall(address,bytes)      | publ | ['onlyPro |                [] |                [] |   ['_authorizeUpgrade', '_upgradeToAndCallUUPS'] |                                                                [] |          1 |
|                                      |   ic |      xy'] |                   |                   |                                    ['onlyProxy'] |                                                                   |            |
| _checkProxy()                        | inte |        [] |        ['__self', |                [] |         ['revert UUPSUnauthorizedCallContext()'] |                              ['ERC1967Utils.getImplementation()'] |          2 |
|                                      | rnal |           |           'this'] |                   |                                                  |                                                                   |            |
| _checkNotDelegated()                 | inte |        [] |        ['__self', |                [] |         ['revert UUPSUnauthorizedCallContext()'] |                                                                [] |          2 |
|                                      | rnal |           |           'this'] |                   |                                                  |                                                                   |            |
| _authorizeUpgrade(address)           | inte |        [] |                [] |                [] |                                               [] |                                                                [] |          2 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| _upgradeToAndCallUUPS(address,bytes) | priv |        [] |                [] |                [] | ['revert ERC1967InvalidImplementation(address)', |  ['ERC1967Utils.ERC1967InvalidImplementation(newImplementation)', |          2 |
|                                      |  ate |           |                   |                   |  'revert UUPSUnsupportedProxiableUUID(bytes32)'] |          'ERC1967Utils.upgradeToAndCall(newImplementation,data)'] |            |
|                                      |      |           |                   |                   |                                                  |          ['IERC1822Proxiable(newImplementation).proxiableUUID()'] |            |
| proxiableUUID()                      | exte |        [] |                [] |                [] |                                               [] |                                                                [] |          2 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| _checkInitializing()                 | inte |        [] |                [] |                [] |  ['_isInitializing', 'revert NotInitializing()'] |                                                                [] |          2 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| _disableInitializers()               | inte |        [] |                [] |                [] |             ['_getInitializableStorage', 'revert |                                                                [] |          3 |
|                                      | rnal |           |                   |                   |                        InvalidInitialization()'] |                                                                   |            |
| _getInitializedVersion()             | inte |        [] |                [] |                [] |                     ['_getInitializableStorage'] |                                                                [] |          1 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| _isInitializing()                    | inte |        [] |                [] |                [] |                     ['_getInitializableStorage'] |                                                                [] |          1 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| _getInitializableStorage()           | priv |        [] | ['INITIALIZABLE_S |                [] |                                               [] |                                                                [] |          1 |
|                                      |  ate |           |          TORAGE'] |                   |                                                  |                                                                   |            |
| _getOwnable2StepStorage()            | priv |        [] | ['Ownable2StepSto |                [] |                                               [] |                                                                [] |          1 |
|                                      |  ate |           |    rageLocation'] |                   |                                                  |                                                                   |            |
| __Ownable2Step_init()                | inte | ['onlyIni |                [] |                [] |                             ['onlyInitializing'] |                                                                [] |          1 |
|                                      | rnal | tializing |                   |                   |                                                  |                                                                   |            |
|                                      |      |        '] |                   |                   |                                                  |                                                                   |            |
| __Ownable2Step_init_unchained()      | inte | ['onlyIni |                [] |                [] |                             ['onlyInitializing'] |                                                                [] |          1 |
|                                      | rnal | tializing |                   |                   |                                                  |                                                                   |            |
|                                      |      |        '] |                   |                   |                                                  |                                                                   |            |
| pendingOwner()                       | publ |        [] |                [] |                [] |                      ['_getOwnable2StepStorage'] |                                                                [] |          1 |
|                                      |   ic |           |                   |                   |                                                  |                                                                   |            |
| transferOwnership(address)           | publ | ['onlyOwn |                [] |                [] |         ['_getOwnable2StepStorage', 'onlyOwner'] |                                                                [] |          1 |
|                                      |   ic |      er'] |                   |                   |                                        ['owner'] |                                                                   |            |
| _transferOwnership(address)          | inte |        [] |                [] |                [] |                      ['_getOwnable2StepStorage', |                                                                [] |          1 |
|                                      | rnal |           |                   |                   |                            '_transferOwnership'] |                                                                   |            |
| acceptOwnership()                    | publ |        [] |                [] |                [] |             ['_msgSender', '_transferOwnership'] |                                                                [] |          2 |
|                                      |   ic |           |                   |                   |                         ['pendingOwner', 'revert |                                                                   |            |
|                                      |      |           |                   |                   |            OwnableUnauthorizedAccount(address)'] |                                                                   |            |
| _getOwnableStorage()                 | priv |        [] | ['OwnableStorageL |                [] |                                               [] |                                                                [] |          1 |
|                                      |  ate |           |         ocation'] |                   |                                                  |                                                                   |            |
| __Ownable_init(address)              | inte | ['onlyIni |                [] |                [] | ['__Ownable_init_unchained', 'onlyInitializing'] |                                                                [] |          1 |
|                                      | rnal | tializing |                   |                   |                                                  |                                                                   |            |
|                                      |      |        '] |                   |                   |                                                  |                                                                   |            |
| __Ownable_init_unchained(address)    | inte | ['onlyIni |                [] |                [] |       ['_transferOwnership', 'onlyInitializing'] |                                                                [] |          2 |
|                                      | rnal | tializing |                   |                   |          ['revert OwnableInvalidOwner(address)'] |                                                                   |            |
|                                      |      |        '] |                   |                   |                                                  |                                                                   |            |
| owner()                              | publ |        [] |                [] |                [] |                           ['_getOwnableStorage'] |                                                                [] |          1 |
|                                      |   ic |           |                   |                   |                                                  |                                                                   |            |
| _checkOwner()                        | inte |        [] |                [] |                [] |                          ['_msgSender', 'owner'] |                                                                [] |          2 |
|                                      | rnal |           |                   |                   |   ['revert OwnableUnauthorizedAccount(address)'] |                                                                   |            |
| renounceOwnership()                  | publ | ['onlyOwn |                [] |                [] |              ['_transferOwnership', 'onlyOwner'] |                                                                [] |          1 |
|                                      |   ic |      er'] |                   |                   |                                                  |                                                                   |            |
| transferOwnership(address)           | publ | ['onlyOwn |                [] |                [] |              ['_transferOwnership', 'onlyOwner'] |                                                                [] |          2 |
|                                      |   ic |      er'] |                   |                   |          ['revert OwnableInvalidOwner(address)'] |                                                                   |            |
| _transferOwnership(address)          | inte |        [] |                [] |                [] |                           ['_getOwnableStorage'] |                                                                [] |          1 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| __Context_init()                     | inte | ['onlyIni |                [] |                [] |                             ['onlyInitializing'] |                                                                [] |          1 |
|                                      | rnal | tializing |                   |                   |                                                  |                                                                   |            |
|                                      |      |        '] |                   |                   |                                                  |                                                                   |            |
| __Context_init_unchained()           | inte | ['onlyIni |                [] |                [] |                             ['onlyInitializing'] |                                                                [] |          1 |
|                                      | rnal | tializing |                   |                   |                                                  |                                                                   |            |
|                                      |      |        '] |                   |                   |                                                  |                                                                   |            |
| _msgSender()                         | inte |        [] |    ['msg.sender'] |                [] |                                               [] |                                                                [] |          1 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| _msgData()                           | inte |        [] |      ['msg.data'] |                [] |                                               [] |                                                                [] |          1 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| _contextSuffixLength()               | inte |        [] |                [] |                [] |                                               [] |                                                                [] |          1 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| name()                               | exte |        [] |                [] |                [] |                                               [] |                                                                [] |          2 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| symbol()                             | exte |        [] |                [] |                [] |                                               [] |                                                                [] |          2 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| decimals()                           | exte |        [] |                [] |                [] |                                               [] |                                                                [] |          2 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| totalSupply()                        | exte |        [] |                [] |                [] |                                               [] |                                                                [] |          2 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| balanceOf(address)                   | exte |        [] |                [] |                [] |                                               [] |                                                                [] |          2 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| transfer(address,uint256)            | exte |        [] |                [] |                [] |                                               [] |                                                                [] |          2 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| allowance(address,address)           | exte |        [] |                [] |                [] |                                               [] |                                                                [] |          2 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| approve(address,uint256)             | exte |        [] |                [] |                [] |                                               [] |                                                                [] |          2 |
|                                      | rnal |           |                   |                   |                                                  |                                                                   |            |
| transferFrom(address,address,uint256 | exte |        [] |                [] |                [] |                                               [] |                                                                [] |          2 |
| )                                    | rnal |           |                   |                   |                                                  |                                                                   |            |
| constructor()                        | publ |        [] |                [] |                [] |                         ['_disableInitializers'] |                                                                [] |          1 |
|                                      |   ic |           |                   |                   |                                                  |                                                                   |            |
| initialize(ISizeFactory,IPool,IERC20 | exte | ['initial |                [] |      ['decimals', |        ['__Ownable2Step_init', '__Ownable_init'] |                                         ['Errors.NULL_ADDRESS()'] |          2 |
| Metadata,address,string,string,uint8 | rnal |    izer'] |                   |           'name'] |        ['__UUPSUpgradeable_init', 'initializer'] |                                                                   |            |
| )                                    |      |           |                   |   ['sizeFactory', |                        ['revert NULL_ADDRESS()'] |                                                                   |            |
|                                      |      |           |                   |         'symbol'] |                                                  |                                                                   |            |
|                                      |      |           |                   | ['underlyingToken |                                                  |                                                                   |            |
|                                      |      |           |                   |                ', |                                                  |                                                                   |            |
|                                      |      |           |                   |   'variablePool'] |                                                  |                                                                   |            |
| _authorizeUpgrade(address)           | inte | ['onlyOwn |                [] |                [] |                                    ['onlyOwner'] |                                                                [] |          1 |
|                                      | rnal |      er'] |                   |                   |                                                  |                                                                   |            |
| mintScaled(address,uint256)          | exte | ['onlyMar |                [] |                [] |                    ['_mintScaled', 'onlyMarket'] |                                                                [] |          1 |
|                                      | rnal |     ket'] |                   |                   |                                                  |                                                                   |            |
| _mintScaled(address,uint256)         | priv |        [] |    ['_balanceOf', |    ['_balanceOf', |                             ['_unscale', 'revert |                                                                [] |          2 |
|                                      |  ate |           |   '_totalSupply'] |   '_totalSupply'] |                  ERC20InvalidReceiver(address)'] |                                                                   |            |
| burnScaled(address,uint256)          | exte | ['onlyMar |                [] |                [] |                    ['_burnScaled', 'onlyMarket'] |                                                                [] |          1 |
|                                      | rnal |     ket'] |                   |                   |                                                  |                                                                   |            |
| _burnScaled(address,uint256)         | priv |        [] |    ['_balanceOf', |    ['_balanceOf', |                        ['_unscale', 'balanceOf'] |                                                                [] |          3 |
|                                      |  ate |           |   '_totalSupply'] |   '_totalSupply'] | ['revert ERC20InsufficientBalance(address,uint25 |                                                                   |            |
|                                      |      |           |                   |                   |                             6,uint256)', 'revert |                                                                   |            |
|                                      |      |           |                   |                   |                    ERC20InvalidSender(address)'] |                                                                   |            |
| transferFrom(address,address,uint256 | publ | ['onlyMar |                [] |                [] |                                               [] |                                                                [] |          4 |
| )                                    |   ic |     ket'] |                   |                   |                                                  |                                                                   |            |
| transfer(address,uint256)            | publ | ['onlyMar |    ['msg.sender'] |                [] |                   ['onlyMarket', 'transferFrom'] |                                                                [] |          1 |
|                                      |   ic |     ket'] |                   |                   |                                                  |                                                                   |            |
| allowance(address,address)           | publ |        [] |   ['sizeFactory'] |                [] |                                               [] |                                 ['sizeFactory.isMarket(spender)'] |          1 |
|                                      |   ic |           |                   |                   |                                                  |                                                                   |            |
| approve(address,uint256)             | publ |        [] |                [] |                [] |                       ['revert NOT_SUPPORTED()'] |                                        ['Errors.NOT_SUPPORTED()'] |          1 |
|                                      |   ic |           |                   |                   |                                                  |                                                                   |            |
| scaledBalanceOf(address)             | publ |        [] |    ['_balanceOf'] |                [] |                                               [] |                                                                [] |          1 |
|                                      |   ic |           |                   |                   |                                                  |                                                                   |            |
| _unscale(uint256)                    | priv |        [] |                [] |                [] |                                               [] |                                                                [] |          1 |
|                                      |  ate |           |                   |                   |                                                  |                                                                   |            |
| balanceOf(address)                   | publ |        [] |                [] |                [] |                  ['_unscale', 'scaledBalanceOf'] |                                                                [] |          1 |
|                                      |   ic |           |                   |                   |                                                  |                                                                   |            |
| scaledTotalSupply()                  | publ |        [] |  ['_totalSupply'] |                [] |                                               [] |                                                                [] |          1 |
|                                      |   ic |           |                   |                   |                                                  |                                                                   |            |
| totalSupply()                        | publ |        [] |                [] |                [] |                ['_unscale', 'scaledTotalSupply'] |                                                                [] |          1 |
|                                      |   ic |           |                   |                   |                                                  |                                                                   |            |
| liquidityIndex()                     | publ |        [] | ['underlyingToken |                [] |                                               [] | ['variablePool.getReserveNormalizedIncome(address(underlyingToken |          1 |
|                                      |   ic |           |                ', |                   |                                                  |                                                              ))'] |            |
|                                      |      |           |   'variablePool'] |                   |                                                  |                                                                   |            |
| deposit(address,address,uint256)     | exte | ['onlyMar |    ['msg.sender', |                [] |                    ['_mintScaled', 'onlyMarket'] |                         ['aToken.scaledBalanceOf(address(this))', |          1 |
|                                      | rnal |     ket'] |           'this'] |                   |                                                  |                          'aToken.scaledBalanceOf(address(this))'] |            |
|                                      |      |           | ['underlyingToken |                   |                                                  | ['underlyingToken.forceApprove(address(variablePool),amount)', 'u |            |
|                                      |      |           |                ', |                   |                                                  | nderlyingToken.safeTransferFrom(msg.sender,address(this),amount)' |            |
|                                      |      |           |   'variablePool'] |                   |                                                  |                                                                 ] |            |
|                                      |      |           |                   |                   |                                                  | ['variablePool.getReserveData(address(underlyingToken))', 'variab |            |
|                                      |      |           |                   |                   |                                                  |  lePool.supply(address(underlyingToken),amount,address(this),0)'] |            |
| withdraw(address,address,uint256)    | exte | ['onlyMar | ['this', 'underly |                [] |                    ['_burnScaled', 'onlyMarket'] |                         ['aToken.scaledBalanceOf(address(this))', |          1 |
|                                      | rnal |     ket'] |        ingToken'] |                   |                                                  |                          'aToken.scaledBalanceOf(address(this))'] |            |
|                                      |      |           |  ['variablePool'] |                   |                                                  |         ['variablePool.getReserveData(address(underlyingToken))', |            |
|                                      |      |           |                   |                   |                                                  |      'variablePool.withdraw(address(underlyingToken),amount,to)'] |            |
| slitherConstructorConstantVariables( | inte |        [] |                [] | ['UPGRADE_INTERFA |                                               [] |                                                                [] |          1 |
| )                                    | rnal |           |                   |      CE_VERSION'] |                                                  |                                                                   |            |
+--------------------------------------+------+-----------+-------------------+-------------------+--------------------------------------------------+-------------------------------------------------------------------+------------+

+----------------------+-----------+------------------------------+------+--------------------------------------------------------------+-----------------------------------------------------------------------+----------------------+
| Modifiers            | Visibilit |                         Read | Writ |                                               Internal Calls |                                                        External Calls | Cyclomatic Complexit |
+----------------------+-----------+------------------------------+------+--------------------------------------------------------------+-----------------------------------------------------------------------+----------------------+
| onlyProxy()          |  internal |                           [] |   [] |                                              ['_checkProxy'] |                                                                    [] |                    1 |
| notDelegated()       |  internal |                           [] |   [] |                                       ['_checkNotDelegated'] |                                                                    [] |                    1 |
| initializer()        |  internal |                     ['this'] |   [] |                ['_getInitializableStorage', 'code(address)'] |                                                                    [] |                    4 |
|                      |           |                              |      |                           ['revert InvalidInitialization()'] |                                                                       |                      |
| reinitializer(uint64 |  internal |                           [] |   [] |                         ['_getInitializableStorage', 'revert |                                                                    [] |                    2 |
| )                    |           |                              |      |                                    InvalidInitialization()'] |                                                                       |                      |
| onlyInitializing()   |  internal |                           [] |   [] |                                       ['_checkInitializing'] |                                                                    [] |                    1 |
| onlyOwner()          |  internal |                           [] |   [] |                                              ['_checkOwner'] |                                                                    [] |                    1 |
| onlyMarket()         |  internal |               ['msg.sender', |   [] |                             ['revert UNAUTHORIZED(address)'] |                                   ['Errors.UNAUTHORIZED(msg.sender)', |                    2 |
|                      |           |               'sizeFactory'] |      |                                                              |                                   'sizeFactory.isMarket(msg.sender)'] |                      |
+----------------------+-----------+------------------------------+------+--------------------------------------------------------------+-----------------------------------------------------------------------+----------------------+

INFO:Printers:
Contract NonTransferrableToken
Contract vars: ['_decimals']
Inheritance:: ['ERC20', 'IERC20Errors', 'IERC20Metadata', 'IERC20', 'Ownable', 'Context']
 
+------------------------------------+----------+-------------+--------------------------+--------------------------+---------------------------------------------------------------------+------------------------+-------------------+
| Function                           | Visibili |   Modifiers |                     Read |                    Write |                                                      Internal Calls |         External Calls | Cyclomatic Comple |
+------------------------------------+----------+-------------+--------------------------+--------------------------+---------------------------------------------------------------------+------------------------+-------------------+
| constructor(string,string)         | internal |          [] |                       [] |     ['_name', '_symbol'] |                                                                  [] |                     [] |                 1 |
| name()                             |   public |          [] |                ['_name'] |                       [] |                                                                  [] |                     [] |                 1 |
| symbol()                           |   public |          [] |              ['_symbol'] |                       [] |                                                                  [] |                     [] |                 1 |
| decimals()                         |   public |          [] |                       [] |                       [] |                                                                  [] |                     [] |                 1 |
| totalSupply()                      |   public |          [] |         ['_totalSupply'] |                       [] |                                                                  [] |                     [] |                 1 |
| balanceOf(address)                 |   public |          [] |            ['_balances'] |                       [] |                                                                  [] |                     [] |                 1 |
| transfer(address,uint256)          |   public |          [] |                       [] |                       [] |                                         ['_msgSender', '_transfer'] |                     [] |                 1 |
| allowance(address,address)         |   public |          [] |          ['_allowances'] |                       [] |                                                                  [] |                     [] |                 1 |
| approve(address,uint256)           |   public |          [] |                       [] |                       [] |                                          ['_approve', '_msgSender'] |                     [] |                 1 |
| transferFrom(address,address,uint2 |   public |          [] |                       [] |                       [] |                                   ['_msgSender', '_spendAllowance'] |                     [] |                 1 |
| 56)                                |          |             |                          |                          |                                                       ['_transfer'] |                        |                   |
| _transfer(address,address,uint256) | internal |          [] |                       [] |                       [] |                 ['_update', 'revert ERC20InvalidReceiver(address)'] |                     [] |                 3 |
|                                    |          |             |                          |                          |                              ['revert ERC20InvalidSender(address)'] |                        |                   |
| _update(address,address,uint256)   | internal |          [] |            ['_balances', |            ['_balances', |        ['revert ERC20InsufficientBalance(address,uint256,uint256)'] |                     [] |                 4 |
|                                    |          |             |          '_totalSupply'] |          '_totalSupply'] |                                                                     |                        |                   |
| _mint(address,uint256)             | internal |          [] |                       [] |                       [] |                 ['_update', 'revert ERC20InvalidReceiver(address)'] |                     [] |                 2 |
| _burn(address,uint256)             | internal |          [] |                       [] |                       [] |                   ['_update', 'revert ERC20InvalidSender(address)'] |                     [] |                 2 |
| _approve(address,address,uint256)  | internal |          [] |                       [] |                       [] |                                                        ['_approve'] |                     [] |                 1 |
| _approve(address,address,uint256,b | internal |          [] |                       [] |          ['_allowances'] |                    ['revert ERC20InvalidApprover(address)', 'revert |                     [] |                 4 |
| ool)                               |          |             |                          |                          |                                      ERC20InvalidSpender(address)'] |                        |                   |
| _spendAllowance(address,address,ui | internal |          [] |                       [] |                       [] |                                           ['_approve', 'allowance'] |                     [] |                 3 |
| nt256)                             |          |             |                          |                          |      ['revert ERC20InsufficientAllowance(address,uint256,uint256)'] |                        |                   |
| name()                             | external |          [] |                       [] |                       [] |                                                                  [] |                     [] |                 2 |
| symbol()                           | external |          [] |                       [] |                       [] |                                                                  [] |                     [] |                 2 |
| decimals()                         | external |          [] |                       [] |                       [] |                                                                  [] |                     [] |                 2 |
| totalSupply()                      | external |          [] |                       [] |                       [] |                                                                  [] |                     [] |                 2 |
| balanceOf(address)                 | external |          [] |                       [] |                       [] |                                                                  [] |                     [] |                 2 |
| transfer(address,uint256)          | external |          [] |                       [] |                       [] |                                                                  [] |                     [] |                 2 |
| allowance(address,address)         | external |          [] |                       [] |                       [] |                                                                  [] |                     [] |                 2 |
| approve(address,uint256)           | external |          [] |                       [] |                       [] |                                                                  [] |                     [] |                 2 |
| transferFrom(address,address,uint2 | external |          [] |                       [] |                       [] |                                                                  [] |                     [] |                 2 |
| 56)                                |          |             |                          |                          |                                                                     |                        |                   |
| _msgSender()                       | internal |          [] |           ['msg.sender'] |                       [] |                                                                  [] |                     [] |                 1 |
| _msgData()                         | internal |          [] |             ['msg.data'] |                       [] |                                                                  [] |                     [] |                 1 |
| _contextSuffixLength()             | internal |          [] |                       [] |                       [] |                                                                  [] |                     [] |                 1 |
| constructor(address)               | internal |          [] |                       [] |                       [] |       ['_transferOwnership', 'revert OwnableInvalidOwner(address)'] |                     [] |                 2 |
| owner()                            |   public |          [] |               ['_owner'] |                       [] |                                                                  [] |                     [] |                 1 |
| _checkOwner()                      | internal |          [] |                       [] |                       [] |                                             ['_msgSender', 'owner'] |                     [] |                 2 |
|                                    |          |             |                          |                          |                      ['revert OwnableUnauthorizedAccount(address)'] |                        |                   |
| renounceOwnership()                |   public | ['onlyOwner |                       [] |                       [] |                                 ['_transferOwnership', 'onlyOwner'] |                     [] |                 1 |
|                                    |          |          '] |                          |                          |                                                                     |                        |                   |
| transferOwnership(address)         |   public | ['onlyOwner |                       [] |                       [] |                                 ['_transferOwnership', 'onlyOwner'] |                     [] |                 2 |
|                                    |          |          '] |                          |                          |                             ['revert OwnableInvalidOwner(address)'] |                        |                   |
| _transferOwnership(address)        | internal |          [] |               ['_owner'] |               ['_owner'] |                                                                  [] |                     [] |                 1 |
| constructor(address,string,string, |   public |          [] |                       [] |            ['_decimals'] |                                      ['constructor', 'constructor'] | ['Errors.NULL_AMOUNT() |                 2 |
| uint8)                             |          |             |                          |                          |                                            ['revert NULL_AMOUNT()'] |                     '] |                   |
| mint(address,uint256)              | external | ['onlyOwner |                       [] |                       [] |                                              ['_mint', 'onlyOwner'] |                     [] |                 1 |
|                                    |          |          '] |                          |                          |                                                                     |                        |                   |
| burn(address,uint256)              | external | ['onlyOwner |                       [] |                       [] |                                              ['_burn', 'onlyOwner'] |                     [] |                 1 |
|                                    |          |          '] |                          |                          |                                                                     |                        |                   |
| transferFrom(address,address,uint2 |   public | ['onlyOwner |                       [] |                       [] |                                          ['_transfer', 'onlyOwner'] |                     [] |                 1 |
| 56)                                |          |          '] |                          |                          |                                                                     |                        |                   |
| transfer(address,uint256)          |   public | ['onlyOwner |           ['msg.sender'] |                       [] |                                       ['onlyOwner', 'transferFrom'] |                     [] |                 1 |
|                                    |          |          '] |                          |                          |                                                                     |                        |                   |
| allowance(address,address)         |   public |          [] |                       [] |                       [] |                                                           ['owner'] |                     [] |                 1 |
| approve(address,uint256)           |   public |          [] |                       [] |                       [] |                                          ['revert NOT_SUPPORTED()'] | ['Errors.NOT_SUPPORTED |                 1 |
|                                    |          |             |                          |                          |                                                                     |                   ()'] |                   |
| decimals()                         |   public |          [] |            ['_decimals'] |                       [] |                                                                  [] |                     [] |                 1 |
+------------------------------------+----------+-------------+--------------------------+--------------------------+---------------------------------------------------------------------+------------------------+-------------------+

+-------------+------------+------+-------+-----------------+----------------+-----------------------+
| Modifiers   | Visibility | Read | Write |  Internal Calls | External Calls | Cyclomatic Complexity |
+-------------+------------+------+-------+-----------------+----------------+-----------------------+
| onlyOwner() |   internal |   [] |    [] | ['_checkOwner'] |             [] |                     1 |
+-------------+------------+------+-------+-----------------+----------------+-----------------------+

INFO:Printers:
Contract IPriceFeed
Contract vars: []
Inheritance:: []
 
+------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function   | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| getPrice() |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| decimals() |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract PriceFeed
Contract vars: ['decimals', 'chainlinkSequencerUptimeFeed', 'chainlinkPriceFeed', 'uniswapV3PriceFeed']
Inheritance:: ['IPriceFeed']
 
+-------------------+------+------+---------------------------+---------------------------+--------+-----------------------------------------------------------------------------------------------------------------------+-----------+
| Function          | Visi | Modi |                      Read |                     Write | Intern |                                                                                                        External Calls | Cyclomati |
+-------------------+------+------+---------------------------+---------------------------+--------+-----------------------------------------------------------------------------------------------------------------------+-----------+
| getPrice()        | exte |   [] |                        [] |                        [] |     [] |                                                                                                                    [] |         2 |
|                   | rnal |      |                           |                           |        |                                                                                                                       |           |
| decimals()        | exte |   [] |                        [] |                        [] |     [] |                                                                                                                    [] |         2 |
|                   | rnal |      |                           |                           |        |                                                                                                                       |           |
| constructor(Price | publ |   [] |              ['decimals'] | ['chainlinkPriceFeed', 'c |     [] | ['new ChainlinkPriceFeed(decimals,priceFeedParams.baseAggregator,priceFeedParams.quoteAggregator,priceFeedParams.base |         1 |
| FeedParams)       |   ic |      |                           | hainlinkSequencerUptimeFe |        |                                                    StalePriceInterval,priceFeedParams.quoteStalePriceInterval)', 'new |           |
|                   |      |      |                           |                      ed'] |        |                                                   ChainlinkSequencerUptimeFeed(priceFeedParams.sequencerUptimeFeed)'] |           |
|                   |      |      |                           |    ['uniswapV3PriceFeed'] |        | ['new UniswapV3PriceFeed(decimals,priceFeedParams.baseToken,priceFeedParams.quoteToken,priceFeedParams.uniswapV3Pool, |           |
|                   |      |      |                           |                           |        |                                                        priceFeedParams.twapWindow,priceFeedParams.averageBlockTime)'] |           |
| getPrice()        | exte |   [] | ['chainlinkPriceFeed', 'c |                        [] |     [] |                             ['chainlinkPriceFeed.getPrice()', 'chainlinkSequencerUptimeFeed.validateSequencerIsUp()'] |         1 |
|                   | rnal |      | hainlinkSequencerUptimeFe |                           |        |                                                                                     ['uniswapV3PriceFeed.getPrice()'] |           |
|                   |      |      |                      ed'] |                           |        |                                                                                                                       |           |
|                   |      |      |    ['uniswapV3PriceFeed'] |                           |        |                                                                                                                       |           |
| base()            | exte |   [] |    ['chainlinkPriceFeed'] |                        [] |     [] |                                                                               ['chainlinkPriceFeed.baseAggregator()'] |         1 |
|                   | rnal |      |                           |                           |        |                                                                                                                       |           |
| quote()           | exte |   [] |    ['chainlinkPriceFeed'] |                        [] |     [] |                                                                              ['chainlinkPriceFeed.quoteAggregator()'] |         1 |
|                   | rnal |      |                           |                           |        |                                                                                                                       |           |
| baseStalePriceInt | exte |   [] |    ['chainlinkPriceFeed'] |                        [] |     [] |                                                                       ['chainlinkPriceFeed.baseStalePriceInterval()'] |         1 |
| erval()           | rnal |      |                           |                           |        |                                                                                                                       |           |
| quoteStalePriceIn | exte |   [] |    ['chainlinkPriceFeed'] |                        [] |     [] |                                                                      ['chainlinkPriceFeed.quoteStalePriceInterval()'] |         1 |
| terval()          | rnal |      |                           |                           |        |                                                                                                                       |           |
| slitherConstructo | inte |   [] |                        [] |              ['decimals'] |     [] |                                                                                                                    [] |         1 |
| rConstantVariable | rnal |      |                           |                           |        |                                                                                                                       |           |
| s()               |      |      |                           |                           |        |                                                                                                                       |           |
+-------------------+------+------+---------------------------+---------------------------+--------+-----------------------------------------------------------------------------------------------------------------------+-----------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract ChainlinkPriceFeed
Contract vars: ['decimals', 'baseAggregator', 'quoteAggregator', 'baseStalePriceInterval', 'quoteStalePriceInterval']
Inheritance:: ['IPriceFeed']
 
+--------------------------------------+------+------+----------------------+----------------------+-------------------------------------------+----------------------------------------------------------------------------+-----------+
| Function                             | Visi | Modi |                 Read |                Write |                            Internal Calls |                                                             External Calls | Cyclomati |
+--------------------------------------+------+------+----------------------+----------------------+-------------------------------------------+----------------------------------------------------------------------------+-----------+
| getPrice()                           | exte |   [] |                   [] |                   [] |                                        [] |                                                                         [] |         2 |
|                                      | rnal |      |                      |                      |                                           |                                                                            |           |
| decimals()                           | exte |   [] |                   [] |                   [] |                                        [] |                                                                         [] |         2 |
|                                      | rnal |      |                      |                      |                                           |                                                                            |           |
| constructor(uint256,AggregatorV3Inte | publ |   [] |   ['baseAggregator', | ['baseAggregator', ' |        ['revert INVALID_DECIMALS(uint8)', | ['Errors.INVALID_DECIMALS(quoteAggregator.decimals())', 'Errors.INVALID_ST |         6 |
| rface,AggregatorV3Interface,uint256, |   ic |      |   'quoteAggregator'] | baseStalePriceInterv | 'revert INVALID_STALE_PRICE_INTERVAL(uint |     ALE_PRICE_INTERVAL(_baseStalePriceInterval,_quoteStalePriceInterval)'] |           |
| uint256)                             |      |      |                      |                 al'] |                            256,uint256)'] |                     ['Errors.NULL_ADDRESS()', 'Errors.NULL_STALE_PRICE()'] |           |
|                                      |      |      |                      |         ['decimals', |         ['revert NULL_ADDRESS()', 'revert |                ['baseAggregator.decimals()', 'quoteAggregator.decimals()'] |           |
|                                      |      |      |                      |   'quoteAggregator'] |                      NULL_STALE_PRICE()'] |                                             ['quoteAggregator.decimals()'] |           |
|                                      |      |      |                      | ['quoteStalePriceInt |                                           |                                                                            |           |
|                                      |      |      |                      |              erval'] |                                           |                                                                            |           |
| getPrice()                           | exte |   [] | ['baseAggregator', ' |                   [] |                             ['_getPrice'] |   ['Math.mulDivDown(_getPrice(baseAggregator,baseStalePriceInterval),10 ** |         1 |
|                                      | rnal |      | baseStalePriceInterv |                      |                                           |             decimals,_getPrice(quoteAggregator,quoteStalePriceInterval))', |           |
|                                      |      |      |                 al'] |                      |                                           |                                               'baseAggregator.decimals()'] |           |
|                                      |      |      |         ['decimals', |                      |                                           |                                                                            |           |
|                                      |      |      |   'quoteAggregator'] |                      |                                           |                                                                            |           |
|                                      |      |      | ['quoteStalePriceInt |                      |                                           |                                                                            |           |
|                                      |      |      |              erval'] |                      |                                           |                                                                            |           |
| _getPrice(AggregatorV3Interface,uint | inte |   [] |  ['block.timestamp'] |                   [] |  ['revert INVALID_PRICE(address,int256)', |                        ['Errors.INVALID_PRICE(address(aggregator),price)', |         3 |
| 256)                                 | rnal |      |                      |                      |    'revert STALE_PRICE(address,uint256)'] |                       'Errors.STALE_PRICE(address(aggregator),updatedAt)'] |           |
|                                      |      |      |                      |                      |                                           |              ['SafeCast.toUint256(price)', 'aggregator.latestRoundData()'] |           |
| slitherConstructorVariables()        | inte |   [] |                   [] |         ['decimals'] |                                        [] |                                                                         [] |         1 |
|                                      | rnal |      |                      |                      |                                           |                                                                            |           |
+--------------------------------------+------+------+----------------------+----------------------+-------------------------------------------+----------------------------------------------------------------------------+-----------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract ChainlinkSequencerUptimeFeed
Contract vars: ['GRACE_PERIOD_TIME', 'sequencerUptimeFeed']
Inheritance:: []
 
+-------------------------------+----------+---------+----------------------------------+--------------------+--------------------------------------------------+--------------------------------------------------+------------------+
| Function                      | Visibili | Modifie |                             Read |              Write |                                   Internal Calls |                                   External Calls | Cyclomatic Compl |
+-------------------------------+----------+---------+----------------------------------+--------------------+--------------------------------------------------+--------------------------------------------------+------------------+
| constructor(AggregatorV3Inter |   public |      [] |                               [] | ['sequencerUptimeF |                                               [] |                                               [] |                1 |
| face)                         |          |         |                                  |              eed'] |                                                  |                                                  |                  |
| validateSequencerIsUp()       | external |      [] |            ['GRACE_PERIOD_TIME', |                 [] |       ['revert GRACE_PERIOD_NOT_OVER()', 'revert |               ['Errors.GRACE_PERIOD_NOT_OVER()', |                4 |
|                               |          |         |               'block.timestamp'] |                    |                               SEQUENCER_DOWN()'] |                       'Errors.SEQUENCER_DOWN()'] |                  |
|                               |          |         |          ['sequencerUptimeFeed'] |                    |                                                  |        ['sequencerUptimeFeed.latestRoundData()'] |                  |
| slitherConstructorConstantVar | internal |      [] |                               [] | ['GRACE_PERIOD_TIM |                                               [] |                                               [] |                1 |
| iables()                      |          |         |                                  |                E'] |                                                  |                                                  |                  |
+-------------------------------+----------+---------+----------------------------------+--------------------+--------------------------------------------------+--------------------------------------------------+------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract UniswapV3PriceFeed
Contract vars: ['decimals', 'baseToken', 'quoteToken', 'uniswapV3Pool', 'twapWindow', 'averageBlockTime', 'OBSERVATION_CARDINALITY_MULTIPLIER_PERCENT']
Inheritance:: ['IPriceFeed']
 
+--------------------------------------+------+------+-------------------------------+-----------------------+-----------------------------------+------------------------------------------------------------------------+-----------+
| Function                             | Visi | Modi |                          Read |                 Write |                    Internal Calls |                                                         External Calls | Cyclomati |
+--------------------------------------+------+------+-------------------------------+-----------------------+-----------------------------------+------------------------------------------------------------------------+-----------+
| getPrice()                           | exte |   [] |                            [] |                    [] |                                [] |                                                                     [] |         2 |
|                                      | rnal |      |                               |                       |                                   |                                                                        |           |
| decimals()                           | exte |   [] |                            [] |                    [] |                                [] |                                                                     [] |         2 |
|                                      | rnal |      |                               |                       |                                   |                                                                        |           |
| constructor(uint256,IERC20Metadata,I | publ |   [] | ['OBSERVATION_CARDINALITY_MUL |  ['averageBlockTime', |                          ['revert |                                ['Errors.INVALID_AVERAGE_BLOCK_TIME()', |         6 |
| ERC20Metadata,IUniswapV3Pool,uint32, |   ic |      |             TIPLIER_PERCENT', |          'baseToken'] |    INVALID_AVERAGE_BLOCK_TIME()', |                          'Errors.INVALID_TOKEN(address(_quoteToken))'] |           |
| uint32)                              |      |      |              'uniswapV3Pool'] |          ['decimals', |  'revert INVALID_TOKEN(address)'] |              ['Errors.INVALID_TWAP_WINDOW()', 'Errors.NULL_ADDRESS()'] |           |
|                                      |      |      |                               |         'quoteToken'] |  ['revert INVALID_TWAP_WINDOW()', |             ['FixedPointMathLib.divUp(_twapWindow,_averageBlockTime)', |           |
|                                      |      |      |                               |        ['twapWindow', |          'revert NULL_ADDRESS()'] |                              'IUniswapV3Pool(_uniswapV3Pool).slot0()'] |           |
|                                      |      |      |                               |      'uniswapV3Pool'] |                                   | ['Math.mulDivUp(desiredCardinality,OBSERVATION_CARDINALITY_MULTIPLIER_ |           |
|                                      |      |      |                               |                       |                                   |            PERCENT,PERCENT)', 'SafeCast.toUint16(desiredCardinality)'] |           |
|                                      |      |      |                               |                       |                                   | ['uniswapV3Pool.increaseObservationCardinalityNext(observationCardinal |           |
|                                      |      |      |                               |                       |                                   |                                                             ityNext)'] |           |
| getPrice()                           | exte |   [] |     ['baseToken', 'decimals'] |                    [] |                                [] | ['OracleLibrary.consult(address(uniswapV3Pool),twapWindow)', 'OracleLi |         1 |
|                                      | rnal |      |  ['quoteToken', 'twapWindow'] |                       |                                   | brary.getQuoteAtTick(meanTick,baseAmount,address(baseToken),address(qu |           |
|                                      |      |      |             ['uniswapV3Pool'] |                       |                                   |                                                           oteToken))'] |           |
|                                      |      |      |                               |                       |                                   |                     ['SafeCast.toUint128(10 ** baseToken.decimals())', |           |
|                                      |      |      |                               |                       |                                   |                                                'baseToken.decimals()'] |           |
|                                      |      |      |                               |                       |                                   |                                              ['quoteToken.decimals()'] |           |
| slitherConstructorConstantVariables( | inte |   [] |                            [] | ['OBSERVATION_CARDINA |                                [] |                                                                     [] |         1 |
| )                                    | rnal |      |                               | LITY_MULTIPLIER_PERCE |                                   |                                                                        |           |
|                                      |      |      |                               |                  NT'] |                                   |                                                                        |           |
+--------------------------------------+------+------+-------------------------------+-----------------------+-----------------------------------+------------------------------------------------------------------------+-----------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IPriceFeedV1_5_2
Contract vars: []
Inheritance:: ['IPriceFeed']
 
+---------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function      | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+---------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| getPrice()    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| decimals()    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| description() |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+---------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract PriceFeedChainlinkUniswapV3TWAPx2
Contract vars: ['decimals', 'chainlinkPriceFeed', 'uniswapV3BasePriceFeed', 'uniswapV3QuotePriceFeed']
Inheritance:: ['IPriceFeedV1_5_2', 'IPriceFeed']
 
+--------------------+-----+----+------------------+----------------+-------+------------------------------------------------------------------------------------------------------------------------------------------------+--------+
| Function           | Vis | Mo |             Read |          Write | Inter |                                                                                                                                 External Calls | Cyclom |
+--------------------+-----+----+------------------+----------------+-------+------------------------------------------------------------------------------------------------------------------------------------------------+--------+
| description()      | ext | [] |               [] |             [] |    [] |                                                                                                                                             [] |      2 |
|                    | ern |    |                  |                |       |                                                                                                                                                |        |
|                    |  al |    |                  |                |       |                                                                                                                                                |        |
| getPrice()         | ext | [] |               [] |             [] |    [] |                                                                                                                                             [] |      2 |
|                    | ern |    |                  |                |       |                                                                                                                                                |        |
|                    |  al |    |                  |                |       |                                                                                                                                                |        |
| decimals()         | ext | [] |               [] |             [] |    [] |                                                                                                                                             [] |      2 |
|                    | ern |    |                  |                |       |                                                                                                                                                |        |
|                    |  al |    |                  |                |       |                                                                                                                                                |        |
| constructor(PriceF | pub | [] |     ['decimals'] | ['chainlinkPri |    [] | ['new ChainlinkPriceFeed(decimals,chainlinkPriceFeedParams.baseAggregator,chainlinkPriceFeedParams.quoteAggregator,chainlinkPriceFeedParams.ba |      1 |
| eedParams,PriceFee | lic |    |                  | ceFeed', 'unis |       | seStalePriceInterval,chainlinkPriceFeedParams.quoteStalePriceInterval)', 'new UniswapV3PriceFeed(decimals,uniswapV3BasePriceFeedParams.baseTok |        |
| dParams,PriceFeedP |     |    |                  | wapV3BasePrice |       | en,uniswapV3BasePriceFeedParams.quoteToken,uniswapV3BasePriceFeedParams.uniswapV3Pool,uniswapV3BasePriceFeedParams.twapWindow,uniswapV3BasePri |        |
| arams)             |     |    |                  |         Feed'] |       |                                                                                                               ceFeedParams.averageBlockTime)'] |        |
|                    |     |    |                  | ['uniswapV3Quo |       | ['new UniswapV3PriceFeed(decimals,uniswapV3QuotePriceFeedParams.baseToken,uniswapV3QuotePriceFeedParams.quoteToken,uniswapV3QuotePriceFeedPara |        |
|                    |     |    |                  |  tePriceFeed'] |       |                                    ms.uniswapV3Pool,uniswapV3QuotePriceFeedParams.twapWindow,uniswapV3QuotePriceFeedParams.averageBlockTime)'] |        |
| getPrice()         | ext | [] | ['chainlinkPrice |             [] |    [] |                                                      ['Math.mulDivDown(basePrice,quotePrice,10 ** decimals)', 'chainlinkPriceFeed.getPrice()'] |      1 |
|                    | ern |    |           Feed', |                |       |                                                                    ['uniswapV3BasePriceFeed.getPrice()', 'uniswapV3QuotePriceFeed.getPrice()'] |        |
|                    |  al |    |      'decimals'] |                |       |                                                                                                                                                |        |
|                    |     |    | ['uniswapV3BaseP |                |       |                                                                                                                                                |        |
|                    |     |    | riceFeed', 'unis |                |       |                                                                                                                                                |        |
|                    |     |    | wapV3QuotePriceF |                |       |                                                                                                                                                |        |
|                    |     |    |            eed'] |                |       |                                                                                                                                                |        |
| description()      | ext | [] | ['chainlinkPrice |             [] | ['str |                                                   ['chainlinkPriceFeed.baseAggregator()', 'chainlinkPriceFeed.baseAggregator().description()'] |      1 |
|                    | ern |    | Feed', 'uniswapV |                | ing.c |                                                 ['chainlinkPriceFeed.quoteAggregator()', 'chainlinkPriceFeed.quoteAggregator().description()'] |        |
|                    |  al |    | 3BasePriceFeed'] |                | oncat |                                   ['string.concat(PriceFeedChainlinkUniswapV3TWAPx2 | ((,chainlinkPriceFeed.baseAggregator().description(),) / |        |
|                    |     |    | ['uniswapV3Quote |                |  ()'] |                        (,chainlinkPriceFeed.quoteAggregator().description(),)) (Chainlink) | ((,uniswapV3BasePriceFeed.baseToken().symbol(), / |        |
|                    |     |    |      PriceFeed'] |                |       |                                            ,uniswapV3BasePriceFeed.quoteToken().symbol(),) * (,uniswapV3QuotePriceFeed.baseToken().symbol(), / |        |
|                    |     |    |                  |                |       |                                   ,uniswapV3QuotePriceFeed.quoteToken().symbol(),)) (Uniswap v3 TWAP))', 'uniswapV3BasePriceFeed.baseToken()'] |        |
|                    |     |    |                  |                |       |                                                         ['uniswapV3BasePriceFeed.baseToken().symbol()', 'uniswapV3BasePriceFeed.quoteToken()'] |        |
|                    |     |    |                  |                |       |                                                        ['uniswapV3BasePriceFeed.quoteToken().symbol()', 'uniswapV3QuotePriceFeed.baseToken()'] |        |
|                    |     |    |                  |                |       |                                                       ['uniswapV3QuotePriceFeed.baseToken().symbol()', 'uniswapV3QuotePriceFeed.quoteToken()'] |        |
|                    |     |    |                  |                |       |                                                                                              ['uniswapV3QuotePriceFeed.quoteToken().symbol()'] |        |
| slitherConstructor | int | [] |               [] |   ['decimals'] |    [] |                                                                                                                                             [] |      1 |
| ConstantVariables( | ern |    |                  |                |       |                                                                                                                                                |        |
| )                  |  al |    |                  |                |       |                                                                                                                                                |        |
+--------------------+-----+----+------------------+----------------+-------+------------------------------------------------------------------------------------------------------------------------------------------------+--------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract PriceFeedUniswapV3TWAPChainlink
Contract vars: ['decimals', 'chainlinkSequencerUptimeFeed', 'basePriceFeed', 'quotePriceFeed']
Inheritance:: ['IPriceFeedV1_5_2', 'IPriceFeed']
 
+-------------------------------+------+------+------------------------+------------------------+----------+----------------------------------------------------------------------------------------------------------------+-----------+
| Function                      | Visi | Modi |                   Read |                  Write | Internal |                                                                                                 External Calls | Cyclomati |
+-------------------------------+------+------+------------------------+------------------------+----------+----------------------------------------------------------------------------------------------------------------+-----------+
| description()                 | exte |   [] |                     [] |                     [] |       [] |                                                                                                             [] |         2 |
|                               | rnal |      |                        |                        |          |                                                                                                                |           |
| getPrice()                    | exte |   [] |                     [] |                     [] |       [] |                                                                                                             [] |         2 |
|                               | rnal |      |                        |                        |          |                                                                                                                |           |
| decimals()                    | exte |   [] |                     [] |                     [] |       [] |                                                                                                             [] |         2 |
|                               | rnal |      |                        |                        |          |                                                                                                                |           |
| constructor(AggregatorV3Inter | publ |   [] |           ['decimals'] | ['basePriceFeed', 'cha |       [] |               ['new ChainlinkSequencerUptimeFeed(sequencerUptimeFeed)', 'new PriceFeed(quotePriceFeedParams)'] |         1 |
| face,PriceFeedParams,PriceFee |   ic |      |                        | inlinkSequencerUptimeF |          | ['new UniswapV3PriceFeed(decimals,basePriceFeedParams.baseToken,basePriceFeedParams.quoteToken,basePriceFeedPa |           |
| dParams)                      |      |      |                        |                  eed'] |          |                      rams.uniswapV3Pool,basePriceFeedParams.twapWindow,basePriceFeedParams.averageBlockTime)'] |           |
|                               |      |      |                        |     ['quotePriceFeed'] |          |                                                                                                                |           |
| getPrice()                    | exte |   [] | ['basePriceFeed', 'cha |                     [] |       [] |                           ['Math.mulDivDown(basePrice,quotePrice,10 ** decimals)', 'basePriceFeed.getPrice()'] |         1 |
|                               | rnal |      | inlinkSequencerUptimeF |                        |          |                          ['chainlinkSequencerUptimeFeed.validateSequencerIsUp()', 'quotePriceFeed.getPrice()'] |           |
|                               |      |      |                  eed'] |                        |          |                                                                                                                |           |
|                               |      |      |           ['decimals', |                        |          |                                                                                                                |           |
|                               |      |      |      'quotePriceFeed'] |                        |          |                                                                                                                |           |
| description()                 | exte |   [] |      ['basePriceFeed', |                     [] | ['string |                                            ['basePriceFeed.baseToken()', 'basePriceFeed.baseToken().symbol()'] |         1 |
|                               | rnal |      |      'quotePriceFeed'] |                        | .concat( |                                          ['basePriceFeed.quoteToken()', 'basePriceFeed.quoteToken().symbol()'] |           |
|                               |      |      |                        |                        |      )'] |                                               ['quotePriceFeed.base()', 'quotePriceFeed.base().description()'] |           |
|                               |      |      |                        |                        |          |                                             ['quotePriceFeed.quote()', 'quotePriceFeed.quote().description()'] |           |
|                               |      |      |                        |                        |          |                                                              ['string.concat(PriceFeedUniswapV3TWAPChainlink | |           |
|                               |      |      |                        |                        |          |               (,basePriceFeed.baseToken().symbol(),/,basePriceFeed.quoteToken().symbol(),) (Uniswap v3 TWAP) * |           |
|                               |      |      |                        |                        |          |            ((,quotePriceFeed.base().description(),) / (,quotePriceFeed.quote().description(),)) (PriceFeed))'] |           |
| slitherConstructorConstantVar | inte |   [] |                     [] |           ['decimals'] |       [] |                                                                                                             [] |         1 |
| iables()                      | rnal |      |                        |                        |          |                                                                                                                |           |
+-------------------------------+------+------+------------------------+------------------------+----------+----------------------------------------------------------------------------------------------------------------+-----------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract IPriceFeedV1_5_3
Contract vars: []
Inheritance:: ['IPriceFeed']
 
+---------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| Function      | Visibility | Modifiers | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+---------------+------------+-----------+------+-------+----------------+----------------+-----------------------+
| getPrice()    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| decimals()    |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
| description() |   external |        [] |   [] |    [] |             [] |             [] |                     2 |
+---------------+------------+-----------+------+-------+----------------+----------------+-----------------------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Printers:
Contract PriceFeedUniswapV3TWAP
Contract vars: ['decimals', 'chainlinkSequencerUptimeFeed', 'baseToQuotePriceFeed']
Inheritance:: ['IPriceFeedV1_5_3', 'IPriceFeed']
 
+----------------------+------+-----+-------------------------+-------------------------+---------+--------------------------------------------------------------------------------------------------------------------------+----------+
| Function             | Visi | Mod |                    Read |                   Write | Interna |                                                                                                           External Calls | Cyclomat |
+----------------------+------+-----+-------------------------+-------------------------+---------+--------------------------------------------------------------------------------------------------------------------------+----------+
| description()        | exte |  [] |                      [] |                      [] |      [] |                                                                                                                       [] |        2 |
|                      | rnal |     |                         |                         |         |                                                                                                                          |          |
| getPrice()           | exte |  [] |                      [] |                      [] |      [] |                                                                                                                       [] |        2 |
|                      | rnal |     |                         |                         |         |                                                                                                                          |          |
| decimals()           | exte |  [] |                      [] |                      [] |      [] |                                                                                                                       [] |        2 |
|                      | rnal |     |                         |                         |         |                                                                                                                          |          |
| constructor(Aggregat | publ |  [] |            ['decimals'] | ['baseToQuotePriceFeed' |      [] | ['new ChainlinkSequencerUptimeFeed(sequencerUptimeFeed)', 'new UniswapV3PriceFeed(decimals,baseToQuotePriceFeedParams.ba |        1 |
| orV3Interface,PriceF |   ic |     |                         | , 'chainlinkSequencerUp |         | seToken,baseToQuotePriceFeedParams.quoteToken,baseToQuotePriceFeedParams.uniswapV3Pool,baseToQuotePriceFeedParams.twapWi |          |
| eedParams)           |      |     |                         |              timeFeed'] |         |                                                                      ndow,baseToQuotePriceFeedParams.averageBlockTime)'] |          |
| getPrice()           | exte |  [] | ['baseToQuotePriceFeed' |                      [] |      [] |                              ['baseToQuotePriceFeed.getPrice()', 'chainlinkSequencerUptimeFeed.validateSequencerIsUp()'] |        1 |
|                      | rnal |     | , 'chainlinkSequencerUp |                         |         |                                                                                                                          |          |
|                      |      |     |              timeFeed'] |                         |         |                                                                                                                          |          |
| description()        | exte |  [] | ['baseToQuotePriceFeed' |                      [] | ['strin |                                        ['baseToQuotePriceFeed.baseToken()', 'baseToQuotePriceFeed.baseToken().symbol()'] |        1 |
|                      | rnal |     |                       ] |                         | g.conca |                                      ['baseToQuotePriceFeed.quoteToken()', 'baseToQuotePriceFeed.quoteToken().symbol()'] |          |
|                      |      |     |                         |                         |   t()'] |                                                                                 ['string.concat(PriceFeedUniswapV3TWAP | |          |
|                      |      |     |                         |                         |         |          (,baseToQuotePriceFeed.baseToken().symbol(),/,baseToQuotePriceFeed.quoteToken().symbol(),) (Uniswap v3 TWAP))'] |          |
| slitherConstructorCo | inte |  [] |                      [] |            ['decimals'] |      [] |                                                                                                                       [] |        1 |
| nstantVariables()    | rnal |     |                         |                         |         |                                                                                                                          |          |
+----------------------+------+-----+-------------------------+-------------------------+---------+--------------------------------------------------------------------------------------------------------------------------+----------+

+-----------+------------+------+-------+----------------+----------------+-----------------------+
| Modifiers | Visibility | Read | Write | Internal Calls | External Calls | Cyclomatic Complexity |
+-----------+------------+------+-------+----------------+----------------+-----------------------+
+-----------+------------+------+-------+----------------+----------------+-----------------------+

INFO:Slither:. analyzed (116 contracts)
