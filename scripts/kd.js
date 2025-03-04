
const papers = [
    {
        "name":"Of degens and defrauders: Using open-source investigative tools to investigate decentralized finance frauds and money laundering",
        "topics":[]
    }
]

export async function init () {
    let table = new DataTable('#kd_table', {
        pageLength:1000,
        data:papers,
        columns:[ {data:'name'}, {data:'topics'} ]
    });
}