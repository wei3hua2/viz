const graphStyle = [
    {
        selector:'node',
        style: {
            "label":"data(name)",
            'background-color': '#99d'
        }
    },
    {
        selector:'.issue',
        style: {
            "label":"data(name)",
            'background-color': '#491'
        }
    },
    {
        selector:'edge',
        style: {
            'width': 3,
            'line-color': '#555',
            'target-arrow-color': '#444',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            "label":"data(name)"
        }
    }
];

const projects = [
    {
        "name":"2025-02-gamma",
        "contracts":[
            "PerpetualVault",
            "GmxProxy",
            "KeeperProxy",
            "VaultReader",
        ].join('<br/>'),
        "entities":[],
        "roles":[]
    },
    {
        "name":"hesty-dualdefense-audit",
        "contracts":[
		    "HestyAccessControl",
		    "HestyRouter",
		    "PropertyToken",
		    "ReferralSystem",
		    "TokenFactory",
        ].join('<br/>'),
        "entities":[],
        "roles":[
            "AdminManager",
            "FundManager",
            "BlackListManager",
            "KYCManager",
            "PauserManager",
            "Admin"
        ].join('<br/>')
    },

    {
        "name":"2024-12-secondswap",
        "contracts":[
            "Marketplace", 
            "MarketplaceSetting",
            "StepVesting", 
            "VestingDeployer", 
            "VestingManager",
            "Whitelist", 
            "WhitelistDeployer"
        ].join('<br/>'),
        "entities":[],
        "roles":[]
    },
    {
        "name":"2024-12-lambowin",
        "contracts":[
            "LamboFactory", 
            "LamboToken", 
            "LamboVEthRouter",
            "VirtualToken",
            "LamboRebalanceOnUniwap"
        ].join('<br/>'),
        "entities":[
            "WhiteList"
        ],
        "roles":[
            "owner"
        ]
    },

    {
        "name":"2024-03-revert-lend",
        "contracts":[
            "V3Vault",
            "V3Oracle",
            "InterestRateModel",
            "automators/AutoExit",
            "automators/Automator",
            "transformers/AutoCompound",
            "transformers/AutoRange",
            "transformers/LeverageTransformer",
            "transformers/V3Utils",
            "utils/FlashloanLiquidator",
            "utils/Swapper"
        ].join('<br/>'),
        "roles":[],
        "entities":[]

    },


    // {
    //     "name":"2023-04-rubicon",
    //     "contracts":[
    //         "RubiconMarket",
    //         "BathHouseV2", 
    //         "V2Migrator", 
    //         "BathBuddy", 
    //         "Position", 
    //         "FeeWrapper"
    //     ].join('<br/>'),
    //     "entities":[],
    //     "roles":[]
    // },
    // {"name":"2024-06-size"},
    // {"name":"2024-09-kakarot"},
    // {"name":"2024-01-curves"}    
]

const issues = [
    {
        "title":"[H-01] SecondSwap_Marketplace vesting listing order affects how much the vesting buyers can claim at a given step",
        "project":"2024-12-secondswap",
        "contracts":[]
    },
    {
        "title":"[H-02] transferVesting creates an incorrect vesting for new users when they purchase a vesting, because stepsClaimed is the same for all sales, allowing an attacker to prematurely unlock too many tokens",
        "project":"2024-12-secondswap",
        "contracts":[]
    },
    {
        "title":"[M-12] Unauthorized increase of maxSellPercent",
        "project":"2024-12-secondswap",
        "contracts":[]
    },
    {
        "title":"[M-06] Underflow in claimable DOSing claim Function",
        "project":"2024-12-secondswap",
        "contracts":[]
    },
    {
        "title":"L-02 There is no check if the _discountPct <= 10000",
        "project":"2024-12-secondswap",
        "contracts":[]
    },
    {
        "title":"L-07 There is no check if the vesting is actually sellable or not",
        "project":"2024-12-secondswap",
        "contracts":[]
    },

    { 
        "title":"[H-01] Loss of User Funds in VirtualToken’s cashIn Function Due to Incorrect Amount Minting", "project":"2024-12-lambowin", contracts:[]
    },
    { 
        "title":"[H-02] LamboFactory can be permanently DoS-ed due to createPair call reversal", "project":"2024-12-lambowin", contracts:[]
    },
    { 
        "title":"[H-03] Calculation for directionMask is incorrect", "project":"2024-12-lambowin", contracts:[]
    },
    { 
        "title":"[H-04] Anyone can call LamboRebalanceOnUniwap.sol::rebalance() function with any arbitrary value, leading to rebalancing goal i.e. (1:1 peg) unsuccessful.", "project":"2024-12-lambowin", contracts:[]
    },
    {
        "title":"[M-03] sellQuote and buyQuote are missing deadline check in LamboVEthRouter", "project":"2024-12-lambowin", contracts:[]
    },
    {
        "title":"[M-04] Accumulated ETH in the LamboVEthRouter will be irretrievable", "project":"2024-12-lambowin", contracts:[]
    },
    {
        "title":"[M-07] Rebalance profit requirement prevents maintaining VETH/WETH peg", "project":"2024-12-lambowin", contracts:[]
    },
    {
        "title":"[M-09] Rebalance will be completely dossed if OKX commision rate goes beyond the fee limits", "project":"2024-12-lambowin", contracts:[]
    },
    {
        "title":"QA-02 Using a single pool creates one-sided risk and reduces rebalancing efficiency", "project":"2024-12-lambowin", contracts:[]
    },
    {
        "title":"QA-03 Lack of slippage protection during rebalancing would allow for users to skim off profits using MEV attacks", "project":"2024-12-lambowin", contracts:[]
    },
    {
        "title":"QA-04 Rebalancing would revert on Morpho in some cases", "project":"2024-12-lambowin", contracts:[]
    },
    {
        "title":"QA-05 Remove redundant code in cashIn", "project":"2024-12-lambowin", contracts:[]
    },

    
    {   "title":"[H-01] V3Vault.sol permit signature does not check receiving token address is USDC",
        "project":"2024-03-revert-lend", 
        contracts:[]
    },
    {
        "title":"[H-02] Risk of reentrancy onERC721Received function to manipulate collateral token configs shares",
        "project":"2024-03-revert-lend", 
        contracts:[]
    },
    {   
        "title":"[H-03] V3Vault::transform does not validate the data input and allows a depositor to exploit any position approved on the transformer",
        "project":"2024-03-revert-lend", 
        contracts:[]},
    {
        "title":"[H-04] V3Utils.execute() does not have caller validation, leading to stolen NFT positions from users",
        "project":"2024-03-revert-lend", 
        contracts:[]},
    {
        "title":"[H-05] _getReferencePoolPriceX96() will show incorrect price for negative tick deltas in current implementation cause it doesn’t round up for them",
        "project":"2024-03-revert-lend", 
        contracts:[]
    },
    {
        "title":"[H-06] Owner of a position can prevent liquidation due to the onERC721Received callback",
        "project":"2024-03-revert-lend", 
        contracts:[]
    },
    {
        "title":"[M-07] Large decimal of referenceToken causes overflow at oracle price calculation",
        "project":"2024-03-revert-lend", contracts:[]
    },
    {
        "title":"[M-08] DailyLendIncreaseLimitLeft and dailyDebtIncreaseLimitLeft are not adjusted accurately",
        "project":"2024-03-revert-lend", contracts:[]
    },
    {
        "title":"[M-13] User might execute PositionToken of token set by previous token owner",
        "project":"2024-03-revert-lend", contracts:[]
    },
    {
        "title":"[M-14] V3Vault is not ERC-4626 compliant",
        "project":"2024-03-revert-lend", contracts:[]
    },
    {
        "title":"[M-25] Asymmetric calculation of price difference",
        "project":"2024-03-revert-lend", contracts:[]
    },
    {
        "title":"[M-26] Some ERC20 can revert on a zero value transfer",
        "project":"2024-03-revert-lend", contracts:[]
    }

]

export async function init () {


    let table = new DataTable('#projects_table', {
        pageLength:1000,
        data:projects,
        columns:[ {data:'name'}, {data:'contracts'}, {data:'entities'}, {data:'roles'} ]
    });

    // let itable = new DataTable('#issuess_table', {
    //     pageLength:1000,
    //     data:issues,
    //     columns:[ {data:'title'}, {data:'project'}, {data:'contracts'} ]
    // });


    var cy = cytoscape({
        container: $('#hesty-graph'),
        elements: [
            {data: {id:'Factory', name:'Factory'}},
            {data: {id:'Issuance', name:'Issuance'}},
            {data: {id:'PropertyToken', name:'PropertyToken'}},
            {data: {id:'Router', name:'Router'}},
            {data: {id:'AccessControl', name:'AccessControl'}},
            {data: {id:'ReferralSystem', name:'ReferralSystem'}},

            {data: {id:'a', source:'Factory', target:'Issuance',name:''}},
            {data: {id:'b', source:'Issuance', target:'PropertyToken',name:''}},
            {data: {id:'c', source:'Router', target:'AccessControl',name:''}},
            {data: {id:'d', source:'Router', target:'Factory',name:''}},

        ],
        style: graphStyle,
        layout: {name:"breadthfirst"}
    });

    var cy = cytoscape({
        container: $('#velvet-graph'),
        elements: [
            {data: {id:'PortfolioFactory', name:'PortfolioFactory'}},
            {data: {id:'Portfolio', name:'Portfolio'}},
            {data: {id:'TokenExclusionManager', name:'TokenExclusionManager'}},
            {data: {id:'FeeModule', name:'FeeModule'}},
            {data: {id:'AccessController', name:'AccessController'}},
            {data: {id:'GnosisDeployer', name:'GnosisDeployer'}},
            {data: {id:'VaultManager', name:'VaultManager'}},
            {data: {id:'FeeManager', name:'FeeManager'}},

            
            {data: {id:'a', source:'PortfolioFactory', target:'Portfolio',name:''}},
            {data: {id:'b', source:'Portfolio', target:'VaultManager',name:'extends'}},
            {data: {id:'c', source:'VaultManager', target:'FeeManager',name:'extends'}},
            {data: {id:'d', source:'FeeManager', target:'FeeModule',name:''}}


        ],
        style: graphStyle,
        layout: {name:"breadthfirst"}
    });

}

