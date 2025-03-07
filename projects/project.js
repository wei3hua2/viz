import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

const temp = 
`
classDiagram
SecondSwap_WhitelistDeployer --|> SecondSwap_Whitelist : deploy
SecondSwap_VestingManager --> SecondSwap_StepVesting
`

const all_su =(asts) => _.map(asts, 'path');

const imports_summary = (asts) => {
    const out = _.map(asts, a => {
        const imports = _.chain(a.ast.children).filter(['type','ImportDirective']).map('path').map(p => p.substring(p.lastIndexOf('/')+1)).value();
        const constracts = _.chain(a.ast.children).filter(['type', 'ContractDefinition']).filter(['kind','contract']).map('name').value();

        return { imports, constracts, su:a.path.substring(a.path.lastIndexOf('/')+1) };
    });

    console.log(out);
    return out;
}

const all_contracts = (asts) => _.chain(asts)
    .map(a => {
        return _.chain(a.ast.children).filter(['type', 'ContractDefinition']).filter(['kind','contract']).value();
    })
    .flattenDeep()
    .value();

const contracts_svars = (asts) => {
    const contracts = all_contracts(asts);
    
    return _.chain(contracts).map( c => { 
        
        return {
            name:c.name, 
            svars: _.chain(c.subNodes)
                .filter(["type", "StateVariableDeclaration"])
                .map(svar => svar.variables[0].name)
                .value()
        };
    }).value();
}
const contracts_functions = (asts) => {
    const contracts = all_contracts(asts);
    
    return _.chain(contracts).map( c => { 
        
        return {
            name:c.name, 
            fns: _.chain(c.subNodes)
                .filter(["type", "FunctionDefinition"])
                .filter(fn => fn.visibility == 'public' || fn.visibility == 'external' || fn.visibility == 'default')
                .map(fn => 
                    (fn.name ? fn.name : fn.isConstructor ? 'constructor' : '?')  + '(' + _.map(fn.parameters,'name').join(',') + ')'
                )
                .value()
        };
    }).value();
}

export async function init () {
    const params = (new URL(document.location)).searchParams;
    const id = params.get('id'); console.log('id :', id);
    $('#title').html(id);

    try {
        const diagram = (await axios.get(`./diagrams/${id}.md`)).data; console.log(diagram);
        $('#contracts').html(diagram);
    }catch(err) {
        console.error('no diagram found')
    }


    mermaid.run();


    const asts = (await axios.get(`./ast/${id}.json`)).data; console.log(asts);

    var out = all_su(asts).join('\n');
    $('#sus').html(out);

    out = imports_summary(asts);
    out = _.map(out, o => `${o.su.padEnd(50)} : ${o.constracts.join(',').padEnd(60)} : ${o.imports.join(', ')}`).join('\n');
    $('#contract_imports').html( out );

    out = contracts_svars(asts); console.log(out);
    out = _.map(out, o => `${o.name.padEnd(50)} : ${o.svars.join(',')}`).join('\n');
    $('#contract_svars').html(out);    

    out = contracts_functions(asts); console.log(out);
    out = _.map(out, o => `${o.name.padEnd(50)} : ${o.fns.join(',')}`).join('\n');
    $('#contract_fns').html(out);


}