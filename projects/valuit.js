
const cons_table = (label, data) => new DataTable(label, {
        pageLength:1000,
        data,
        columns:[ {data:'var'}, {data:'type'}, {data:'detail'},{data:'tags'} ]
});


export async function init () {

    // const data = (await axios.get("./data/papers/bounty.json")).data;


    cons_table('#issuance_table', [{
        var:"tokenFactory", 
        type:'address', 
        detail:'read: createPropertyToken<br/>write: cons', 
        tags:[]
    }]);

    cons_table('#router_table', [
        {var:"tokenFactory", type:'ITokenFactory', detail:'', tags:[] },
        {var:"hestyAccessControl", type:'IHestyAccessControl', detail:'', tags:[] },
        {var:"pendingHestyAccessControl", type:'IHestyAccessControl', detail:'', tags:[] }
    ]);

    cons_table('#ac_table', [
        {var:"initialSponsorAmount", type:'uint256', detail:'', tags:[] },
        {var:"kycCompleted", type:'mapping(address => bool)', detail:'', tags:[] },
        {var:"blackList", type:'mapping(address => bool)', detail:'', tags:[] },
        {var:"firstApproval", type:'mapping(address => bool)', detail:'', tags:[] }
    ]);

    cons_table('#referral_table', [
        {var:"ctrHestyControl", type:'', detail:'', tags:[] },
        {var:"rewardToken", type:'', detail:'', tags:[] },
        {var:"tokenFactory", type:'', detail:'', tags:[] },
        {var:"rewards", type:'', detail:'', tags:[] },
        {var:"totalRewards", type:'', detail:'', tags:[] },
        {var:"globalRewards", type:'', detail:'', tags:[] },
        {var:"rewardsByProperty", type:'', detail:'', tags:[] },
        {var:"numberOfRef", type:'', detail:'', tags:[] },
        {var:"referredBy", type:'', detail:'', tags:[] },
        {var:"approvedCtrs", type:'', detail:'', tags:[] }
    ]);

    cons_table('#proptoken_table', [
        {var:"rewardAsset", type:'IERC20', detail:'', tags:[] },
        {var:"ctrHestyControl", type:'IHestyAccessControl', detail:'', tags:[] },
        {var:"dividendPerToken", type:'uint256', detail:'', tags:[] },
        {var:"xDividendPerToken", type:'mapping(address => uint256)', detail:'', tags:[] }
    ]);

    cons_table('#tokenfactory_table', [
        {var:"ctrHestyControl", type:'IHestyAccessControl', detail:'', tags:[] },
        {var:"ctrHestyIssuance", type:'IIssuance', detail:'', tags:[] },
        {var:"referralSystemCtr", type:'IReferral', detail:'', tags:[] },

        {var:"propertyCounter", type:'uint256', detail:'', tags:['stepper'] },
        {var:"minInvAmount", type:'uint256', detail:'', tags:["oneway-flag"] },
        {var:"maxNumberOfReferrals", type:'uint256', detail:'', tags:["oneway-flag"] },
        {var:"maxAmountOfRefRev", type:'uint256', detail:'', tags:["oneway-flag"] },
        {var:"platformFeeBasisPoints", type:'uint256', detail:'', tags:["oneway-flag"] },
        {var:"refFeeBasisPoints", type:'uint256', detail:'', tags:["oneway-flag"] },
        {var:"treasury", type:'address', detail:'', tags:["constant"] },
        {var:"initialized", type:'bool', detail:'', tags:['constant'] },

        {var:"property", type:'mapping(uint256 => PropertyInfo)', detail:'', tags:[] },
        {var:"platformFee", type:'mapping(uint256 => uint256)', detail:'', tags:['gatherer'] },
        {var:"ownersPlatformFee", type:'mapping(uint256 => uint256)', detail:'', tags:['gatherer'] },
        {var:"propertyOwnerShare", type:'mapping(uint256 => uint256)', detail:'', tags:['gatherer'] },
        {var:"refFee", type:'mapping(uint256 => uint256)', detail:'', tags:['gatherer'] },
        {var:"ownersFeeBasisPoints", type:'mapping(uint256 => uint256)', detail:'', tags:['oneway-flag'] },
        {var:"deadProperty", type:'mapping(uint256 => bool)', detail:'', tags:['oneway-flag'] },
        {var:"tokensWhitelist", type:'mapping(address => bool)', detail:'', tags:[] },

        {var:"userInvested", type:'mapping(address => mapping(uint256 => uint256))', detail:'', tags:[] },
        {var:"rightForTokens", type:'mapping(address => mapping(uint256 => uint256))', detail:'', tags:[] },


        {var:"PropertyInfo.price", type:'uint256', detail:'', tags:['constant'] },
        {var:"PropertyInfo.amountToSell", type:'uint256', detail:'', tags:['constant'] },
        {var:"PropertyInfo.threshold", type:'uint256', detail:'', tags:['constant'] },
        {var:"PropertyInfo.raised", type:'uint256', detail:'', tags:['oneway-flag'] },
        {var:"PropertyInfo.raiseDeadline", type:'uint256', detail:'', tags:[] },
        {var:"PropertyInfo.isCompleted", type:'bool', detail:'', tags:['oneway-flag'] },
        {var:"PropertyInfo.approved", type:'bool', detail:'', tags:['oneway-flag'] },
        {var:"PropertyInfo.extended", type:'bool', detail:'', tags:['oneway-flag'] },
        {var:"PropertyInfo.owner", type:'address', detail:'', tags:['constant'] },
        {var:"PropertyInfo.ownerExchAddr", type:'address', detail:'', tags:['constant'] },
        {var:"PropertyInfo.paymentToken", type:'IERC20', detail:'', tags:['constant'] },
        {var:"PropertyInfo.asset", type:'address', detail:'', tags:['constant'] },
        {var:"PropertyInfo.revenueToken", type:'IERC20', detail:'', tags:['constant'] },
    ]);

}