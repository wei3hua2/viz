const graphStyle = [
    {
        selector:'node',
        style: {
            "label":"data(name)",
            'background-color': 'data(color)'
        }
    },
    {
        selector:'edge',
        style: {
            'width': 1,
            'line-color': '#555',
            'target-arrow-color': '#444',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            "label":"data(name)"
        }
    }
];

export function proc_viz_graph() {
    console.log('process...');
    const out = $('#data').val();
    console.log(out);

    var cy = cytoscape({
        container: $('#viz-graph'),
        elements: [
            {data: {id:'Silo', name:'Silo', color:'#a2e'}},
            {data: {id:'SiloConfig', name:'SiloConfig', color:'#a2e'}},
            {data: {id:'SiloFactory', name:'SiloFactory', color:'#a2e'} },
            
            {data: {id:'aw', source:'Silo', target:'SiloConfig'}},
            {data: {id:'aww', source:'Silo', target:'SiloFactory'}},
            {data: {id:'awe', source:'SiloFactory', target:'Silo', name:'init'}}
        ],
        style: graphStyle,
        layout: {name:"breadthfirst"}
    });
}