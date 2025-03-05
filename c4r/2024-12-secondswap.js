
const cons_table = (label, data) => new DataTable(label, {
    pageLength:1000,
    data,
    columns:[ {data:'var'}, {data:'type'}, {data:'detail'},{data:'tags'} ]
});


export async function init () {

// const data = (await axios.get("./data/papers/bounty.json")).data;


}