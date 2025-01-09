
$(document).ready(async function () {

    const scvd = (await axios.get("./data/papers/scvd.json")).data;
    const gnn = _.find(scvd, ['id','10.24963/ijcai.2020/454']);
    const expert = _.find(scvd, ['id','10.1109/TKDE.2021.3095196']); 
    const mando = _.find(scvd, ['id','10.1109/DSAA54385.2022.10032337']);
    
    
    console.log(scvd);

    let table = new DataTable('#papers_table', {
        data:scvd,
        columns:[
            {data:'id'},
            {data:'title'},
            {data:'year'},
            {data:'tags'}
        ]
    });

    var cy = cytoscape({
        container: $('#scvd-graph'),
        elements: [
            {data: mando},
            {data: gnn},
            {data: expert},
            {data: {id:'a', source:'10.24963/ijcai.2020/454', target:'10.1109/TKDE.2021.3095196'}},
            {data: {id:'b', source:'10.1109/TKDE.2021.3095196', target:'10.1109/DSAA54385.2022.10032337'}}
        ],
        style: [
            {
                selector:'node',
                style: {
                    "label":"data(title)"
                }
            },
            {
                selector:'edge',
                style: {
                    'width': 3,
                    'line-color': '#555',
                    'target-arrow-color': '#444',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier'
                }
            }
        ]
    });
      
});
