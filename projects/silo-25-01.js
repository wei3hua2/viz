import {graphStyle} from '../scripts/config.js';


export async function init () {


    var cy = cytoscape({
        container: $('#silo-graph'),
        elements: [
            {data: {id:'silosol',name:'Silo.sol'}},
            {data: {id:'silofactorysol',name:'SiloFactory.sol'}},
            {data: {id:'siloconfigsol',name:'SiloConfig.sol'}},
            {data: {id:'a', source:'silosol', target:'silofactorysol'}},
            {data: {id:'b', source:'silosol', target:'siloconfigsol'}}
        ],
        style: graphStyle
    });
      
}