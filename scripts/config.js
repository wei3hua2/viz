export const graphStyle = [
    {
        selector:'node',
        style: {
            "label":"data(name)"
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