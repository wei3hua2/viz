

const map_volume = (list, volume) => 
    _.map(list, (p => _.assign(p, {volume})) )


export async function init () {

    const data566 = map_volume((await axios.get("./data/papers/acm-surveys/56-6.json")).data, '56-6');
    const data567 = map_volume((await axios.get("./data/papers/acm-surveys/56-7.json")).data, '56-7');
    const data568 = map_volume((await axios.get("./data/papers/acm-surveys/56-8.json")).data, '56-8');
    const data569 = map_volume((await axios.get("./data/papers/acm-surveys/56-9.json")).data, '56-9');
    const data5610 = map_volume((await axios.get("./data/papers/acm-surveys/56-10.json")).data, '56-10');
    const data5611 = map_volume((await axios.get("./data/papers/acm-surveys/56-11.json")).data, '56-11');
    const data5612 = map_volume((await axios.get("./data/papers/acm-surveys/56-12.json")).data, '56-12');

    const data571 = map_volume((await axios.get("./data/papers/acm-surveys/57-1.json")).data, '57-1');
    const data572 = map_volume((await axios.get("./data/papers/acm-surveys/57-2.json")).data, '57-2');
    const data573 = map_volume((await axios.get("./data/papers/acm-surveys/57-3.json")).data, '57-3');


    var data = data571.concat(data572,data573, data566,data567,data568,data569, data5610, data5611,data5612);
    data = _.map(data, d => d.topics? d : Object.assign(d, {topics:[]}) );

    const topics = _.chain(data).map("topics").compact().flatten().uniq().value();
    console.log(topics);
    $("#acm-topics").append(topics.join(', '));

    let table = new DataTable('#acm_table', {
        pageLength:100,
        data,
        columns:[ {data:'title'}, {data:'volume'}, {data:'topics'} ]
    });
}