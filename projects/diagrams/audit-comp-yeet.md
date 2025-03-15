classDiagram
NFTVesting
Yeetback
Yeet --> YeetToken
Yeet --> Reward
Yeet --> StakeV2
Reward --> RewardSettings
Yeet --> YeetGameSettings
OnlyYeetContract <|-- Reward
Manager <|-- StakeV2
StakeV2 ..> Zapper
class YeetGameSettings{
    YEET_TIME_SECONDS
    POT_DIVISION
    TAX_PER_YEET
    TAX_TO_STAKERS
    TAX_TO_PUBLIC_GOODS
    TAX_TO_TREASURY
    YEETBACK_PERCENTAGE
    COOLDOWN_TIME
    BOOSTRAP_PHASE_DURATION
    MINIMUM_YEET_POINT
    SCALE
}
class Reward{
    token
    rewardsSettings
    totalYeetVolume
    userYeetVolume
    DISTRIBUTION_CHANGE
    STARTING_TOKEN_COUNT
    EPOCH_LENGTH
    DECAY_RATE
    SCALE_FACTOR
    epochRewards
    lastClaimedForEpoch
    currentEpoch
    currentEpochEnd
    currentEpochStart
}
class RewardSettings{
    MAX_CAP_PER_WALLET_PER_EPOCH_FACTOR
    setYeetRewardsSettings(_maxCapPerWalletPerEpochFactor)
}
class Manager{
    managers
    addManager(mgr)
    removeManager(mgr)
}
class Yeet{
    YEET_TIME_SECONDS
    POT_DIVISION
    TAX_PER_YEET
    TAX_TO_STAKERS
    TAX_TO_PUBLIC_GOODS
    TAX_TO_TREASURY
    YEETBACK_PERCENTAGE
    COOLDOWN_TIME
    BOOSTRAP_PHASE_DURATION
    MINIMUM_YEET_POINT
    lastYeeted
    lastYeetedAt
    potToWinner
    potToYeetback
    nrOfYeets
    yeetTimeInSeconds
    endOfYeetTime
    roundNumber
    roundStartTime
    publicGoodsAmount
    publicGoodsAddress
    treasuryRevenueAddress
    treasuryRevenueAmount
    yeetTokenAddress
    rewardsContract
    stakingContract
    gameSettings
    yeetardsNFTsAddress
    yeetback
    _roundWinners
    winnings
    nftBoostLookup
    yeet()
    yeet(tokenIds)
    claim()
    restart(userRandomNumber)
    hasCooldownEnded()
    isRoundFinished()
    isBoostrapPhase()
    minimumYeetPoint()
    getDistribution(yeetAmount)
    getWinner(round)
    payoutPublicGoods()
    payoutTreasuryRevenue()
    setPublicGoodsAddress(_publicGoodsAddress)
    setTreasuryRevenueAddress(_treasuryRevenueAddress)
    setYeetardsNFTsAddress(_yeetardsNFTsAddress)
    updateStakingContract(_staking)
    getBoostedValue(sender,value,tokenIds)
    getNFTBoost(owner,tokenIds)
    pause()
    unpause()
}
class Yeetback{
    entropy
    entropyProvider
    amountOfWins
    claimed
    amountToWinners
    potForRound
    yeetsInRound
    sequenceToRound
    finishedSequenceNumbers
    addYeetsInRound(round,user)
    getYeetsInRound(round)
    addYeetback(userRandomNumber,round,amount)
    claim(round)
    claimable(round,user)
    getEntropyFee()
}
class StakeV2{
    stakingToken
    zapper
    wbera
    balanceOf
    totalSupply
    MULTIPLIER
    VESTING_PERIOD
    rewardIndex
    rewardIndexOf
    earned
    stakedTimes
    STAKING_LIMIT
    accumulatedRewards
    totalVaultShares
    vestings
    depositReward()
    depositWBERA(amount)
    accumulatedDeptRewardsYeet()
    executeRewardDistributionYeet(swap,stakingParams,vaultParams)
    executeRewardDistribution(swap0,swap1,stakingParams,vaultParams)
    stake(amount)
    startUnstake(unStakeAmount)
    unstake(index)
    rageQuit(index)
    calculateVesting(vesting)
    getVestings(addr)
    claimRewardsInNative(amountToWithdraw,swapData0,swapData1,unstakeParams,redeemParams)
    claimRewardsInToken0(amountToWithdraw,swapData,unstakeParams,redeemParams)
    claimRewardsInToken1(amountToWithdraw,swapData,unstakeParams,redeemParams)
    claimRewardsInToken(amountToWithdraw,outputToken,swap0,swap1,unstakeParams,redeemParams)
    getRewardIndex()
    calculateRewardsEarned(account)
}