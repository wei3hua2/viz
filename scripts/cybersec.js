

const map_volume = (list, volume) => 
    _.map(list, (p => _.assign(p, {volume})) )


export async function init () {

    const data142 = map_volume((await axios.get("./data/papers/comp-and-sec/142.json")).data, 142);
    const data143 = map_volume((await axios.get("./data/papers/comp-and-sec/143.json")).data, 143);
    const data144 = map_volume((await axios.get("./data/papers/comp-and-sec/144.json")).data, 144);
    const data145 = map_volume((await axios.get("./data/papers/comp-and-sec/145.json")).data, 145);
    const data146 = map_volume((await axios.get("./data/papers/comp-and-sec/146.json")).data, 146);
    const data147 = map_volume((await axios.get("./data/papers/comp-and-sec/147.json")).data, 147);
    const data148 = map_volume((await axios.get("./data/papers/comp-and-sec/148.json")).data, 148);
    const data149 = map_volume((await axios.get("./data/papers/comp-and-sec/149.json")).data, 149);

    const data = data143.concat(data142,data144,data145,data146,data147,data148,data149);

    const topics = _.chain(data).map("topics").compact().flatten().uniq().value();
    console.log(topics);
    $("#topics").append(topics.join(', '));

    let table = new DataTable('#papers_table', {
        pageLength:1000,
        data,
        columns:[ {data:'title'}, {data:'volume'}, {data:'topics'} ]
    });
}