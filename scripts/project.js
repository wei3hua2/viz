export async function init () {    
    let params = (new URL(document.location)).searchParams;
    let pid = params.get('pid');
    console.log(pid);
    

    const human = (await axios.get(`./data/projects/${pid}/human-summary.md`)).data;
    // const funct = (await axios.get(`./data/projects/${pid}/function-summary.html`)).data;
    const diagram = (await axios.get(`./data/projects/${pid}/diagram.md`)).data;

    document.getElementById('title').innerHTML = pid;
    document.getElementById('human-summary').innerHTML = human;
    // document.getElementById('diagram').innerHTML = diagram;
    // document.getElementById('function-summary').innerHTML = funct;
  
  
  }