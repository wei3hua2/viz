const graphStyle = [
    {
        selector:'node',
        style: {
            "label":"data(name)",
            'background-color': '#a2e'
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
]

export async function init () {

    const data = (await axios.get("./data/concepts.json")).data;

    let table = new DataTable('#concepts_table', {
        pageLength:1000,
        data,
        columns:[ {data:'topic'}, {data:'category'}, {data:'tags'} ]
    });


    // var cy = cytoscape({
    //     container: $('#sckg-graph'),
    //     elements: [
    //         {data: {id:'dai', name:'DAI'}},
    //         {data: {id:'mindthedapp', name:'MindTheDapp'}},
    //         {data: {id:'3663533.3664039', name:'3663533.3664039'} },
    //         {data: {id:'smartcorpus', name:'SmartCorpus'}},
    //         {data: {id:'slither', name:'Slither'}},
    //         {data: {id:'aw', source:'3663533.3664039', target:'smartcorpus',name:'dataset'}},
    //         {data: {id:'aq', source:'3663533.3664039', target:'mindthedapp'}},
    //         {data: {id:'ap', source:'3663533.3664039', target:'slither'}}
    //     ],
    //     style: graphStyle,
    //     layout: {name:"breadthfirst"}
    // });
}