
const occupytheweb = "Getting Started Becoming a Master Hacker: Hacking is the Most Important Skill Set of the 21st Century!";
// active/passive reconnaissance
// vulnerability scanning
// wifi, web, sniffing, password cracking
// post exploitation

const hunting = "Hunting Cyber Criminals: A Hacker's Guide to Online Intelligence Gathering Tools and Techniques";
// web exploration  network exploration,  digging the gold,  people hunting

const metasploit = "Metasploit: The Penetration Tester's Guide";

const tools = [
    "metasploit", "recon-ng", "nmap", "aircrack-ng", "dork", "whois", "shodan", "nessus", "burp"
]

export async function init () {


    let table = new DataTable('#tools_table', {
        pageLength:1000,
        data:_.map(tools, (tool) => ({name:tool})),
        columns:[ {data:'name'} ]
    });

}