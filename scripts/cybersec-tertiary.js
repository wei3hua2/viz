const data = [
    {
        title:'Cyber-Security Threats, Actors, and Dynamic Mitigation',year:2020,topics:['book'],
        section:[
            "Chapter 1 Profiles of Cyber-Attackers and Attacks",
            "Chapter 2 Reconnaissance",
            "Chapter 3 System Threats",
            "Chapter 4 Cryptography Threats",
            "Chapter 5 Network Threats",
            "Chapter 6 Malware Detection and Mitigation",
            "Chapter 7 Dynamic Risk Management",
            "Chapter 8 Attack Graph Generation",
            "Chapter 9 Intelligent Intrusion Response"
        ]
    }
];

export async function init () {

    

    let table = new DataTable('#papers_table', {
        pageLength:1000,
        data,
        columns:[ {data:'title'}, {data:'year'}, {data:'topics'} ]
    });
}