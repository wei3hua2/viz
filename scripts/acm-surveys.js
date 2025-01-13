

const map_volume = (list, volume) => 
    _.map(list, (p => _.assign(p, {volume})) )


export async function init () {

    const data569 = map_volume((await axios.get("./data/papers/acm-surveys/56-9.json")).data, '56-9');
    const data5610 = map_volume((await axios.get("./data/papers/acm-surveys/56-10.json")).data, '56-10');
    const data5611 = map_volume((await axios.get("./data/papers/acm-surveys/56-11.json")).data, '56-11');
    const data5612 = map_volume((await axios.get("./data/papers/acm-surveys/56-12.json")).data, '56-12');

    const data571 = map_volume((await axios.get("./data/papers/acm-surveys/57-1.json")).data, '57-1');
    const data572 = map_volume((await axios.get("./data/papers/acm-surveys/57-2.json")).data, '57-2');
    const data573 = map_volume((await axios.get("./data/papers/acm-surveys/57-3.json")).data, '57-3');


    const data = data571.concat(data572,data573, data569, data5610, data5611,data5612);

    const topics = _.chain(data).map("topics").compact().flatten().uniq().value();
    console.log(topics);
    $("#topics").append(topics.join(', '));

    let table = new DataTable('#papers_table', {
        pageLength:1000,
        data,
        columns:[ {data:'title'}, {data:'volume'}, {data:'topics'} ]
    });
}