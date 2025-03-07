



const tools = [
    {"name":"dig",          "detail":"", "tags":["manual","dns"]},
    {"name":"whois",        "detail":"whoisRWS, whoisology, DomainTools", "tags":["manual","dns"]},
    {"name":"dorks",        "detail":"Inurlbr", "tags":["manual","dns"]},
    {"name":"dnsdumpster",  "detail":"", "tags":["manual","dns"]},
    {"name":"hackertarget", "detail":"", "tags":["manual","dns"]},
    {"name":"shodan",       "detail":"", "tags":["manual","dns"]},
    {"name":"censys",       "detail":"", "tags":["manual","dns","ct"]},
    {"name":"fierce",       "detail":"", "tags":["manual","dns"]},
    {"name":"sublist3r",    "detail":"", "tags":["manual","dns"]},
    {"name":"enumall",      "detail":"", "tags":["manual","dns"]},

    {"name":"spiderFoot",   "detail":"", "tags":['automated']},
    {"name":"intrigue.io",  "detail":"", "tags":['automated']},
    {"name":"Recon-NG",     "detail":"", "tags":['automated']},

    {"name":"BuiltWith",    "detail":"", "tags":['website']},
    {"name":"WIG",          "detail":"webapp information gatherer", "tags":['website']},
    {"name":"CMSmap",       "detail":"", "tags":['website']},
    {"name":"WPScan",       "detail":"", "tags":['website']},

    {"name":"Dirhunt",       "detail":"", "tags":['directory']},
    {"name":"Wfuzz",         "detail":"", "tags":['directory']},
    {"name":"Photon",        "detail":"", "tags":['directory']},

    {"name":"CTFR",          "detail":"", "tags":['ct']},
    {"name":"crt.sh",        "detail":"", "tags":['ct']},
    {"name":"CloudFlair",    "detail":"", "tags":['ct']},
    {"name":"CachedView.com","detail":"", "tags":['ct']},
    {"name":"Wayback Machine Scraper",    "detail":"", "tags":['ct']},

    {"name":"Exiftool","detail":"", "tags":['meta']},
    {"name":"Metagoo","detail":"", "tags":['meta']},
    {"name":"FOCA","detail":"", "tags":['meta']},

    {"name":"TheHarvester","detail":"", "tags":['other']},
    {"name":"Paste Sites","detail":"", "tags":['other']},
    {"name":"Forums","detail":"", "tags":['other']},
    {"name":"Code Repositories","detail":"", "tags":['other']},
    {"name":"Wiki Sites","detail":"", "tags":['other']},

    {"name":"PIPL","detail":"", "tags":['people']},
    {"name":"EagleEye","detail":"", "tags":['people']},

    {"name":"Data Viper","detail":"", "tags":['dump']},
]


export async  function init () {

    let table = new DataTable('#network_table', {
        pageLength:1000,
        data:tools,
        columns:[ {data:'name'}, {data:'detail'}, {data:'tags'} ]
    });
      
};
