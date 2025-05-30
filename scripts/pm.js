


export async function init () {

    const data = (await axios.get("./data/pm.json")).data;
    const papers = data.papers;
    

    let table = new DataTable('#paper_table', {
        pageLength:200, data:papers, columns:[ {data:'title'}, {data:'year'}, {data:'type'} ]
    });

}