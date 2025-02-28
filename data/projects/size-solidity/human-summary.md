Compiled with Foundry
Total number of contracts in source files: 60
Number of contracts in dependencies: 56
Source lines of code (SLOC) in source files: 4298
Source lines of code (SLOC) in dependencies: 3652
Number of  assembly lines: 0
Number of optimization issues: 0
Number of informational issues: 0
Number of low issues: 0
Number of medium issues: 0
Number of high issues: 0

ERCs: ERC2612, ERC165, ERC20

+-----------------------------------------------+-------------+--------+--------------------+--------------+--------------------+
| Name                                          | # functions |   ERCS |         ERC20 info | Complex code |           Features |
+-----------------------------------------------+-------------+--------+--------------------+--------------+--------------------+
| SizeFactory                                   |         129 | ERC165 |                    |           No |        Receive ETH |
|                                               |             |        |                    |              |       Delegatecall |
|                                               |             |        |                    |              | Tokens interaction |
|                                               |             |        |                    |              |           Assembly |
|                                               |             |        |                    |              |        Upgradeable |
| Authorization                                 |           7 |        |                    |           No |                    |
| MarketFactoryLibrary                          |           1 |        |                    |           No |                    |
| NonTransferrableScaledTokenV1_5FactoryLibrary |           1 |        |                    |           No | Tokens interaction |
| PriceFeedFactoryLibrary                       |           1 |        |                    |           No |                    |
| Size                                          |         163 | ERC165 |                    |           No |        Receive ETH |
|                                               |             |        |                    |              |           Send ETH |
|                                               |             |        |                    |              |       Delegatecall |
|                                               |             |        |                    |              | Tokens interaction |
|                                               |             |        |                    |              |           Assembly |
|                                               |             |        |                    |              |        Upgradeable |
| IWETH                                         |           8 |  ERC20 |         No Minting |           No |        Receive ETH |
|                                               |             |        | Approve Race Cond. |              |                    |
|                                               |             |        |                    |              |                    |
| AccountingLibrary                             |          12 |        |                    |           No | Tokens interaction |
| CapsLibrary                                   |           3 |        |                    |           No | Tokens interaction |
| DepositTokenLibrary                           |           4 |        |                    |           No |           Send ETH |
|                                               |             |        |                    |              | Tokens interaction |
| Errors                                        |           0 |        |                    |           No |                    |
| Events                                        |           0 |        |                    |           No |                    |
| LoanLibrary                                   |           8 |        |                    |           No | Tokens interaction |
| Math                                          |           6 |        |                    |           No |                    |
| Multicall                                     |           1 |        |                    |           No |       Delegatecall |
|                                               |             |        |                    |              | Tokens interaction |
| OfferLibrary                                  |          10 |        |                    |           No |                    |
| RiskLibrary                                   |           9 |        |                    |           No | Tokens interaction |
| YieldCurveLibrary                             |           4 |        |                    |           No |                    |
| BuyCreditLimit                                |           2 |        |                    |           No |                    |
| BuyCreditMarket                               |           3 |        |                    |          Yes | Tokens interaction |
| Claim                                         |           2 |        |                    |           No |                    |
| Compensate                                    |           2 |        |                    |          Yes | Tokens interaction |
| CopyLimitOrders                               |           2 |        |                    |          Yes |                    |
| Deposit                                       |           2 |        |                    |           No |           Send ETH |
|                                               |             |        |                    |              | Tokens interaction |
| Initialize                                    |          11 |        |                    |          Yes | Tokens interaction |
| Liquidate                                     |           3 |        |                    |           No | Tokens interaction |
| LiquidateWithReplacement                      |           3 |        |                    |           No | Tokens interaction |
| Repay                                         |           2 |        |                    |           No | Tokens interaction |
| SelfLiquidate                                 |           2 |        |                    |           No | Tokens interaction |
| SellCreditLimit                               |           2 |        |                    |           No |                    |
| SellCreditMarket                              |           3 |        |                    |          Yes | Tokens interaction |
| SetUserConfiguration                          |           2 |        |                    |           No |                    |
| UpdateConfig                                  |           5 |        |                    |          Yes |                    |
| Withdraw                                      |           2 |        |                    |           No |           Send ETH |
|                                               |             |        |                    |              | Tokens interaction |
| NonTransferrableScaledTokenV1_5               |          63 |  ERC20 |         No Minting |           No |        Receive ETH |
|                                               |             |        | Approve Race Cond. |              |           Send ETH |
|                                               |             |        |                    |              |       Delegatecall |
|                                               |             |        |                    |              | Tokens interaction |
|                                               |             |        |                    |              |           Assembly |
|                                               |             |        |                    |              |        Upgradeable |
| NonTransferrableToken                         |          43 |  ERC20 |          ∞ Minting |           No |                    |
|                                               |             |        | Approve Race Cond. |              |                    |
|                                               |             |        |                    |              |                    |
| PriceFeed                                     |           9 |        |                    |           No |                    |
| ChainlinkPriceFeed                            |           6 |        |                    |           No |                    |
| ChainlinkSequencerUptimeFeed                  |           3 |        |                    |           No |                    |
| UniswapV3PriceFeed                            |           5 |        |                    |           No | Tokens interaction |
| PriceFeedChainlinkUniswapV3TWAPx2             |           7 |        |                    |           No | Tokens interaction |
| PriceFeedUniswapV3TWAPChainlink               |           7 |        |                    |           No | Tokens interaction |
| PriceFeedUniswapV3TWAP                        |           7 |        |                    |           No | Tokens interaction |
+-----------------------------------------------+-------------+--------+--------------------+--------------+--------------------+
INFO:Slither:. analyzed (116 contracts)
