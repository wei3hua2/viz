
const data = [
    {
        "title":"SoK: A Unified Data Model for Smart Contract Vulnerability Taxonomies", 
        "year":2024, 
        "url":"https://github.com/ds-square/smart-vulnerabilities"
    },
    {
        "title":"SoK: Decentralized Finance (DeFi) Attacks", 
        "year":2024,
        "sections":[
            "I. INTRODUCTION",
            "II. DEFI REFERENCE FRAME",
            "III. DATA",
            "IV. ANALYSIS",
            "V. INCIDENT DEFENSE",
            "VI. DISCUSSION",
            "VII. RELATED WORKS",
            "VIII. CONCLUSION"
        ],
        "refs":[
            "SoK: Attacks on DAOs"
        ]
    },
    {
        "title":"DAppSCAN: Building Large-Scale Datasets for Smart Contract Weaknesses in DApp Projects",
        "year":2024
    }
]



export async function init () {

    let table = new DataTable('#papers_table', {
        pageLength:1000, data,
        columns:[ {data:'title'}, {data:'year'} ]
    });

    const taxonomy = (await axios.get("./data/SoK-SC-Vul-Taxonomy.json")).data;
    console.log(taxonomy);

    table = new DataTable('#vuls_table', {
        pageLength:1000, data:taxonomy.vulnerabilities,
        columns:[ {data:'name'}, {data:'description'} ]
    });

    
    

}