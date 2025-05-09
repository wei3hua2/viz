classDiagram
class IgniteOracle {
    VOTER_ROLE
	conditionalTokens
	verification
	question
	jqToQuestionId
	jqProcessed
	noOfVoters
	hasVoted
	questionOutcomeVotes
	minVotes
    +initializeQuestion()
	+finalizeQuestion(questionId, proofs, finalize)
	+vote(questionId, outcomeIdx)
	+grantRole(role, account)
	+revokeRole(role, account)
}
class FixedProductMarketMakerFactory {
    cloneConstructor(consData)
    createFixedProductMarketMaker(conditionalTokens, collateralToken, conditionIds, fee, treasuryPercent, treasury, fundingThreshold, endTime, salt)
    predictFixedProductMarketMakerAddress(salt)
}
class FixedProductMarketMaker {
	addFunding(addedFunds, distributionHint)
	removeFunding(sharesToBurn)
	buy(investmentAmount, outcomeIndex, minOutcomeTokensToBuy)
	sell(returnAmount, outcomeIndex, maxOutcomeTokensToSell)
	withdrawFees(account)
}
class ConditionalTokens {
	payoutNumerators
	payoutDenominator
	+prepareCondition()
	+reportPayouts()
	+splitPosition()
	+mergePositions()
	+redeemPositions()
	+🔍getOutcomeSlotCount()
	+🔍getConditionId()
	+🔍getCollectionId()
	+🔍getPositionId()
	+🔍supportsInterface()
}
FixedProductMarketMakerFactory ..> FixedProductMarketMaker
ConditionalTokens *-- FixedProductMarketMaker 
ERC1155 <|-- ConditionalTokens