
const cons_table = (label, data) => new DataTable(label, {
        pageLength:1000,
        data,
        columns:[ {data:'var'}, {data:'type'}, {data:'detail'},{data:'tags'} ]
});


export async function init () {

    // const data = (await axios.get("./data/papers/bounty.json")).data;


    cons_table('#fee_table', [{
        var:"tokenFactory", 
        type:'address', 
        detail:'read: createPropertyToken<br/>write: cons', 
        tags:[]
    }]);

    cons_table('#lp_table', [
        {var:"tokenFactory", type:'ITokenFactory', detail:'', tags:[] },
        {var:"hestyAccessControl", type:'IHestyAccessControl', detail:'', tags:[] },
        {var:"pendingHestyAccessControl", type:'IHestyAccessControl', detail:'', tags:[] }
    ]);

    cons_table('#perpdex_table', [
        {var:"initialSponsorAmount", type:'uint256', detail:'', tags:[] },
        {var:"kycCompleted", type:'mapping(address => bool)', detail:'', tags:[] },
        {var:"blackList", type:'mapping(address => bool)', detail:'', tags:[] },
        {var:"firstApproval", type:'mapping(address => bool)', detail:'', tags:[] }
    ]);

}