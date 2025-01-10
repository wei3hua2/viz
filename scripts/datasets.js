const dataset_refs = [
    {
        "title":"1. Improving Smart Contract Security with Contrastive Learning-based Vulnerability Detection",
        "dataset":"M. Cross-Modality Mutual Learning for Enhancing Smart Contract Vulnerability Detection on Bytecode",
        "dataset_url":""
    },
    {
        "title":"3. An Integrated Smart Contract Vulnerability Detection Tool Using Multi-layer Perceptron on Real-time Solidity Smart Contracts",
        "dataset":"Smart Contract Sanctuary",
        "dataset_url":"https://github.com/tintinweb/smart-contract-sanctuary"
    },
    {
        "title":"52) Empirical review of automated analysis tools on 47,587 ethereum smart contracts",
        "dataset":"",
        "dataset_url":""
    },
    {
        "title":"60) Smart contract vulnerabilities: Vulnerable does not imply exploited",
        "dataset":"",
        "dataset_url":""
    },
    {
        "title":"64) Diving into blockchain’s weaknesses: An empirical study of blockchain system vulnerabilities",
        "dataset":"",
        "dataset_url":""
    },
    {
        "title":"65) Demystifying exploitable bugs in smart contracts",
        "dataset":"",
        "dataset_url":""
    },
    {
        "title":"67) Evolution of automated weakness detection in ethereum bytecode: a comprehensive study",
        "dataset":"",
        "dataset_url":""
    },
    {
        "title":"69) Smart contract and defi security: Insights from tool evaluations and practitioner surveys",
        "dataset":"",
        "dataset_url":""
    }
    
    
];
const dappscan_refs = [
    {
        "title":"Decentralized Finance (DeFi) assurance: early evidence",
        "excerpt":"..While no formal audit standards exist for SCA, some private initiatives within the Ethereum ecosystem have emerged to provide guidelines to code developers (Soud et al. 2023; Zheng et al. 2024). "
    },
    {
        "title": "A Survey of Vulnerability Detection Techniques by Smart Contract Tools",
        "excerpt":"..Table 4, 5, 6, 7 provide SWC (Smart Contract Weakness Classification) [63] and DASP (Decentralized Application Security project) [64] related details"
    },
    {
        "title":"Efficiently detecting reentrancy vulnerabilities in complex smart contracts",
        "excerpt":[
            "..To ascertain their efficacy in complex DApps, Zheng et al. [45] curated a dataset that comprises 895 vulnerabilities",
            "..Tools selection following with [45], the experiment using a set of analysis tools, including Slither [12], Mythril [9], Securify [37], Smartian [8], and Sailfish [1].",
            "..DB1. Complex Contract Dataset [45]. Zheng et al. compiled a complex contract dataset that.."
        ]
    },
    {
        "title":"*A preliminary analysis of software metrics in decentralised applications",
        "excerpt":".. By categorizing 60 dApps (selected from the DAppScan repository1 ) [12] into three distinct groups based on their contract count—Small, Medium, and Large, we aim to analyze the distribution and correlation of software metrics at both contract and function levels"
    },
    {
        "title":"Guardians of the Ledger: Protecting Decentralized Exchanges From State Derailment Defects",
        "excerpt":"..We utilize the DAppSCAN [17], an open-source dataset of"
    },
    {
        "title":"Ethereum Fraud Detection via Joint Transaction Language Model and Graph Representation Learning",
        "excerpt":"..smart contracts and decentralized applications (Zheng et al.2024)"
    },
    {
        "title":"SCIF: A Language for Compositional Smart Contract Security",
        "excerpt":""
    },
    {
        "title":"*SoliDiffy: AST Differencing for Solidity Smart Contracts",
        "excerpt":"..For this, we use the DAppScan-source dataset [30], [32]"
    },
    {
        "title":"StateGuard: Detecting State Derailment Defects in Decentralized Exchange Smart Contract",
        "excerpt":"..Dataset. In this study, we utilize the DAppSCAN dataset [24]"
    },
    {
        "title":"Dynamic Feature Fusion: Combining Global Graph Structures and Local Semantics for Blockchain Fraud Detection",
        "excerpt":"As one of the most widely used blockchain platforms [7], Ethereum’s fraud detection methods are constantly evolving to cope with a variety of complex frauds."
    },
    {
        "title":"DAI: A Dependencies Analyzer and Installer For Solidity Smart Contracts",
        "excerpt":"..We referred to the work of [5] which introduced DappScan, a collection of buggy decentralized applications."
    },
    {
        "title":"Towards Assessing the Real-World Impact of Defects in Blockchain-Based Smart Contracts",
        "excerpt":""
    },
    {
        "title":"Software Weakness Detection in Solidity Smart Contracts Using Control and Data Flow Analysis: A Novel Approach with Graph Neural Networks",
        "excerpt":"The selected security weaknesses are classified according to the SWC registry, which provides a standardized method for identifying and categorizing smart contract weaknesses [18]."
    },
    {
        "title":"*Building a Database for Evaluating Smart Contract Vulnerabilities Detection Tools",
        "excerpt":"..Side Functions: The DAPPScan [27] work pointed out that that many of the test"
    },
    {
        "title":"Oracle-guided vulnerability diversity and exploit synthesis of smart contracts using llms",
        "excerpt":""
    }
];

export async  function init () {
    let dtable = new DataTable('#datasets_table', {
        pageLength:50,
        data:dataset_refs,
        columns:[ {data:'title'}, {data:'dataset'}, {data:'dataset_url'} ]
    });

    let table = new DataTable('#dappscan_table', {
        pageLength:50,
        data:dappscan_refs,
        columns:[ {data:'title'}, {data:'excerpt'} ]
    });
}