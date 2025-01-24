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


const eles = [
  {
    data: { id: './RedBlackTreeLib.sol', name: 'RedBlackTreeLib.sol' }
  },
  { data: { id: './QueueLib.sol', name: 'QueueLib.sol' } },
  {
    data: {
      id: '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol',
      name: '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol'
    }
  },
  {
    data: {
      id: '@openzeppelin/contracts/token/ERC20/IERC20.sol',
      name: '@openzeppelin/contracts/token/ERC20/IERC20.sol'
    }
  },
  { data: { id: './OrderBookLib.sol', name: 'OrderBookLib.sol' } },
  { data: { id: './PairLib.sol', name: 'PairLib.sol' } },
  {
    data: {
      id: '@openzeppelin/contracts/utils/ReentrancyGuard.sol',
      name: '@openzeppelin/contracts/utils/ReentrancyGuard.sol'
    }
  },
  {
    data: {
      id: '@openzeppelin/contracts/utils/Pausable.sol',
      name: '@openzeppelin/contracts/utils/Pausable.sol'
    }
  },
  {
    data: {
      id: '@openzeppelin/contracts/access/Ownable2Step.sol',
      name: '@openzeppelin/contracts/access/Ownable2Step.sol'
    }
  },
  {
    data: { id: './OrderBookFactory.sol', name: 'OrderBookFactory.sol' }
  },
  {
    data: {
      id: './interface/IOrderBookFactory.sol',
      name: 'interface/IOrderBookFactory.sol'
    }
  },
  {
    data: {
      id: './PairLib.sol@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol',
      source: './PairLib.sol',
      target: '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol'
    }
  },
  {
    data: {
      id: './PairLib.sol@openzeppelin/contracts/token/ERC20/IERC20.sol',
      source: './PairLib.sol',
      target: '@openzeppelin/contracts/token/ERC20/IERC20.sol'
    }
  },
  {
    data: {
      id: './PairLib.sol./OrderBookLib.sol',
      source: './PairLib.sol',
      target: './OrderBookLib.sol'
    }
  },
  {
    data: {
      id: './OrderBookLib.sol./QueueLib.sol',
      source: './OrderBookLib.sol',
      target: './QueueLib.sol'
    }
  },
  {
    data: {
      id: './OrderBookLib.sol./RedBlackTreeLib.sol',
      source: './OrderBookLib.sol',
      target: './RedBlackTreeLib.sol'
    }
  },
  {
    data: {
      id: './OrderBookFactory.sol./OrderBookLib.sol',
      source: './OrderBookFactory.sol',
      target: './OrderBookLib.sol'
    }
  },
  {
    data: {
      id: './OrderBookFactory.sol./RedBlackTreeLib.sol',
      source: './OrderBookFactory.sol',
      target: './RedBlackTreeLib.sol'
    }
  },
  {
    data: {
      id: './OrderBookFactory.sol./PairLib.sol',
      source: './OrderBookFactory.sol',
      target: './PairLib.sol'
    }
  },
  {
    data: {
      id: './OrderBookFactory.sol@openzeppelin/contracts/utils/ReentrancyGuard.sol',
      source: './OrderBookFactory.sol',
      target: '@openzeppelin/contracts/utils/ReentrancyGuard.sol'
    }
  },
  {
    data: {
      id: './OrderBookFactory.sol@openzeppelin/contracts/utils/Pausable.sol',
      source: './OrderBookFactory.sol',
      target: '@openzeppelin/contracts/utils/Pausable.sol'
    }
  },
  {
    data: {
      id: './OrderBookFactory.sol@openzeppelin/contracts/access/Ownable2Step.sol',
      source: './OrderBookFactory.sol',
      target: '@openzeppelin/contracts/access/Ownable2Step.sol'
    }
  },
  {
    data: {
      id: './PairLib.sol@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol',
      source: './PairLib.sol',
      target: '@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol'
    }
  },
  {
    data: {
      id: './PairLib.sol@openzeppelin/contracts/token/ERC20/IERC20.sol',
      source: './PairLib.sol',
      target: '@openzeppelin/contracts/token/ERC20/IERC20.sol'
    }
  },
  {
    data: {
      id: './PairLib.sol./OrderBookLib.sol',
      source: './PairLib.sol',
      target: './OrderBookLib.sol'
    }
  },
  {
    data: {
      id: './OrderBookLib.sol./QueueLib.sol',
      source: './OrderBookLib.sol',
      target: './QueueLib.sol'
    }
  },
  {
    data: {
      id: './OrderBookLib.sol./RedBlackTreeLib.sol',
      source: './OrderBookLib.sol',
      target: './RedBlackTreeLib.sol'
    }
  },
  {
    data: {
      id: './OrderBookFactory.sol./OrderBookLib.sol',
      source: './OrderBookFactory.sol',
      target: './OrderBookLib.sol'
    }
  },
  {
    data: {
      id: './OrderBookFactory.sol./RedBlackTreeLib.sol',
      source: './OrderBookFactory.sol',
      target: './RedBlackTreeLib.sol'
    }
  },
  {
    data: {
      id: './OrderBookFactory.sol./PairLib.sol',
      source: './OrderBookFactory.sol',
      target: './PairLib.sol'
    }
  },
  {
    data: {
      id: './OrderBookFactory.sol@openzeppelin/contracts/utils/ReentrancyGuard.sol',
      source: './OrderBookFactory.sol',
      target: '@openzeppelin/contracts/utils/ReentrancyGuard.sol'
    }
  },
  {
    data: {
      id: './OrderBookFactory.sol@openzeppelin/contracts/utils/Pausable.sol',
      source: './OrderBookFactory.sol',
      target: '@openzeppelin/contracts/utils/Pausable.sol'
    }
  },
  {
    data: {
      id: './OrderBookFactory.sol@openzeppelin/contracts/access/Ownable2Step.sol',
      source: './OrderBookFactory.sol',
      target: '@openzeppelin/contracts/access/Ownable2Step.sol'
    }
  }
];

  
  
   
const tmp = [            {data: {id:'Silo', name:'Silo', color:'#a2e'}},
{data: {id:'SiloConfig', name:'SiloConfig', color:'#a2e'}},
{data: {id:'SiloFactory', name:'SiloFactory', color:'#a2e'} },

{data: {id:'aw', source:'Silo', target:'SiloConfig'}},
{data: {id:'aww', source:'Silo', target:'SiloFactory'}},
{data: {id:'awe', source:'SiloFactory', target:'Silo', name:'init'}}];



export function proc_viz_graph() {
    console.log('process...');
    const out = $('#data').val();
    console.log(out);

    var cy = cytoscape({
        container: $('#viz-graph'),
        elements: eles,
        style: graphStyle,
        layout: {name:"breadthfirst"}
    });
}