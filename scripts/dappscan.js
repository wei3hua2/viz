import {graphStyle} from './config.js';


const filename_only = (path) => {
    return path.substring(path.lastIndexOf('/')+1);
}

export async  function init () {
    const projects = (await axios.get("./data/dappscan.json")).data;
    
    console.log(projects);
    const data = _.map( projects,
        (p) => ({
            project:p.project,
            issues: _.map(p.issues, i => filename_only(i.filePath)).join('<br/>'),
            files:_.chain(p.files).map(filename_only).filter( f => f.indexOf('.sol')>=0 ).value().join('<br/>')
        })
    );

    let table = new DataTable('#projects_table', {
        pageLength:100,
        data,
        columns:[ {data:'project'},{data:'issues'},{data:'files'} ]
    });
      
};
