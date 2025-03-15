

const map_volume = (list, volume) => 
    _.map(list, (p => _.assign(p, {volume})) )


export async function init () {

    const data561 = map_volume((await axios.get("./data/papers/acm-surveys/56-1.json")).data, '56-1');
    const data562 = map_volume((await axios.get("./data/papers/acm-surveys/56-2.json")).data, '56-2');
    const data563 = map_volume((await axios.get("./data/papers/acm-surveys/56-3.json")).data, '56-3');
    const data564 = map_volume((await axios.get("./data/papers/acm-surveys/56-4.json")).data, '56-4');
    const data565 = map_volume((await axios.get("./data/papers/acm-surveys/56-5.json")).data, '56-5');
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
    const data574 = map_volume((await axios.get("./data/papers/acm-surveys/57-4.json")).data, '57-4');
    const data575 = map_volume((await axios.get("./data/papers/acm-surveys/57-5.json")).data, '57-5');


    var data = data571.concat(
        data572,data573, data566,data567,data568,data569, 
        data5610, data5611,data5612, data574, data575,
        data565,data564,data563,data562,data561);
    data = _.map(data, d => !d.topics? {...d, ...{topics:[]}} : d );
    console.log(data);

    var topics = _.chain(data).map("topics").compact().flatten().uniq().value();
    console.log(topics);
    
    $("#acm-topics").append(topics.join(', '));

    let table = new DataTable('#acm_table', {
        pageLength:200, data,
        columns:[ {data:'title'}, {data:'volume'}, {data:'topics'} ]
    });



    // const data142 = map_volume((await axios.get("./data/papers/comp-and-sec/142.json")).data, 142);
    // const data143 = map_volume((await axios.get("./data/papers/comp-and-sec/143.json")).data, 143);
    // const data144 = map_volume((await axios.get("./data/papers/comp-and-sec/144.json")).data, 144);
    // const data145 = map_volume((await axios.get("./data/papers/comp-and-sec/145.json")).data, 145);
    // const data146 = map_volume((await axios.get("./data/papers/comp-and-sec/146.json")).data, 146);
    // const data147 = map_volume((await axios.get("./data/papers/comp-and-sec/147.json")).data, 147);
    // const data148 = map_volume((await axios.get("./data/papers/comp-and-sec/148.json")).data, 148);
    // const data149 = map_volume((await axios.get("./data/papers/comp-and-sec/149.json")).data, 149);
    // const data150 = map_volume((await axios.get("./data/papers/comp-and-sec/150.json")).data, 150);

    // data = data143.concat(data142,data144,data145,data146,data147,data148,data149,data150);

    // topics = _.chain(data).map("topics").compact().flatten().uniq().value();
    // console.log(topics);
    // $("#cas-topics").append(topics.join(', '));

    // table = new DataTable('#cas_table', {
    //     pageLength:100,
    //     data,
    //     columns:[ {data:'title'}, {data:'volume'}, {data:'topics'} ]
    // });

}