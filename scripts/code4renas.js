export async function init () {


  const content = (await axios.get("/markdowns/code4renas-reports.md")).data;


  document.getElementById('code4renas').innerHTML =
      marked.parse(content);


}