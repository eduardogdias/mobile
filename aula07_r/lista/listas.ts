// tipos de listas:

let nomes : string[];
nomes = ["Eduardo", "Abel", "Juliano"];

let pares : number[];
pares = [2,4,6,8,10];

let numerosETextosAny : any[];
numerosETextosAny = ["abobrinha", 0, false, undefined]

let numerosETextos : (string | number)[]; //aceita numeros e textos
numerosETextos = ["abobrinha", 1,2]

let numerosOUTextos : string[] | number[]; //ou uma lista de strings, ou uma lista de numbers
numerosOUTextos = ["a", "b", "c"];
numerosOUTextos = [1,2,3];


// ----------------------------------
// lista de objetos

//para printar assim eu tenho que ficar decorando o indice dos itens:
let aluno = ["Abel", 8, "1o"];
console.log(aluno[0]);
console.log(aluno[1]);
console.log(aluno[2],"\n");


//para printar assim eu só preciso passar o nome da chave
let alunoObj = {
    nome: "Eduardo",
    media: 10,
    anoCursando: "20"
}
console.log(alunoObj.nome);
console.log(alunoObj.media);
console.log(alunoObj.anoCursando);




// ----------------------------------

// interando na lista
for(let i = 0; i < pares.length; i++){
    let numero = pares[i]
    console.log("Número: ", numero, " - Triplo: ", numero*3)
}

console.log('interando com for in')
for(let chave in pares){
    let valor = pares[chave];
    console.log("Chave: ", chave, " - Valor: ", valor)
}

console.log('interando com for of')
for(let valor of pares){
    console.log(" Valor: ", valor)
}

// ----------------------------------

let listaChaves = Object.keys(alunoObj);
console.log("Chaves: ", listaChaves);

let listaValues = Object.values(alunoObj);
console.log("Valores: ", listaValues);

let listaEntries = Object.entries(alunoObj); // chaves e valores
console.log("Entries: ", listaEntries);