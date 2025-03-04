import {graphStyle} from './config.js';

export async  function init () {

    const books = (await axios.get("./data/cybersec/books.json")).data;

    let table = new DataTable('#books_table', {
        pageLength:1000,
        data:books,
        columns:[ {data:'title'}, {data:'year'}, {data:'topics'} ]
    });


    // const scvd = (await axios.get("./data/papers/scvd.json")).data;
    // const gnn = _.find(scvd, ['id','10.24963/ijcai.2020/454']);
    // const expert = _.find(scvd, ['id','10.1109/TKDE.2021.3095196']); 
    // const mando = _.find(scvd, ['id','10.1109/DSAA54385.2022.10032337']);
    
    
    // console.log(scvd);

    // let table = new DataTable('#papers_table', {
    //     pageLength:25,
    //     data:scvd,
    //     columns:[ {data:'id'}, {data:'title'}, {data:'year'}, {data:'tags'} ]
    // });

    // var cy = cytoscape({
    //     container: $('#scvd-graph'),
    //     elements: [
    //         {data: mando},
    //         {data: gnn},
    //         {data: expert},
    //         {data: {id:'a', source:'10.24963/ijcai.2020/454', target:'10.1109/TKDE.2021.3095196'}},
    //         {data: {id:'b', source:'10.1109/TKDE.2021.3095196', target:'10.1109/DSAA54385.2022.10032337'}}
    //     ],
    //     style: graphStyle
    // });
      
};
