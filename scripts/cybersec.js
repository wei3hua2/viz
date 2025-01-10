export async function init () {
    
    const data143 = (await axios.get("./data/papers/comp-and-sec/143.json")).data;
    const data144 = (await axios.get("./data/papers/comp-and-sec/144.json")).data;
    const data = data143.concat(data144);
    
    let table = new DataTable('#papers_table', {
        pageLength:100,
        data,
        columns:[ {data:'title'} ]
    });
}