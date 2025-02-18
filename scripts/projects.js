
const projects = [
    {"name":"2025-02-gamma"},
    {"name":"2024-04-noya"},
    {"name":"2024-07-loopfi"},
    {"name":"2024-10-loopfi"},
    {"name":"2023-04-rubicon"}
]

export async function init () {


    let table = new DataTable('#projects_table', {
        pageLength:1000,
        data:projects,
        columns:[ {data:'name'} ]
    });
}