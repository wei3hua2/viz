
const occupytheweb = "Getting Started Becoming a Master Hacker: Hacking is the Most Important Skill Set of the 21st Century!";
// active/passive reconnaissance
// vulnerability scanning
// wifi, web, sniffing, password cracking
// post exploitation

const hunting = "Hunting Cyber Criminals: A Hacker's Guide to Online Intelligence Gathering Tools and Techniques";
// web exploration  network exploration,  digging the gold,  people hunting

const metasploit = "Metasploit: The Penetration Tester's Guide";

const tools = [
    {"name":"metasploit" },
    {"name":"OSSEC"},
    {"name":"recon-ng" },
    {"name":"MISP - Threat Intelligence Sharing Platform"},
    
    {"name":"aircrack-ng" },
    {"name":"nessus" },
    {"name":"burp"},
    {"name":"snort"}
]

export async function init () {


    let table = new DataTable('#tools_table', {
        pageLength:1000,
        data:tools,
        columns:[ {data:'name'} ]
    });

}