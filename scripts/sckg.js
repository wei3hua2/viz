export async function init () {

    const data = (await axios.get("./data/papers/sckg.json")).data;

    let table = new DataTable('#papers_table', {
        pageLength:1000,
        data,
        columns:[ {data:'title'}, {data:'year'} ]
    });
}