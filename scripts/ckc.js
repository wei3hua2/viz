export async function init () {


    document.getElementById('ukc').innerHTML =
      marked.parse('# Marked in the browser\n\nRendered by **marked**.');

    // let table = new DataTable('#papers_table', {
    //     pageLength:1000, data,
    //     columns:[ {data:'title'}, {data:'year'} ]
    // });

    // const taxonomy = (await axios.get("./data/SoK-SC-Vul-Taxonomy.json")).data;
    // console.log(taxonomy);

    // table = new DataTable('#vuls_table', {
    //     pageLength:1000, data:taxonomy.vulnerabilities,
    //     columns:[ {data:'name'}, {data:'description'} ]
    // });

}