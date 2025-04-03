// tipos de listas:
var nomes;
nomes = ["Eduardo", "Abel", "Juliano"];
var pares;
pares = [2, 4, 6, 8, 10];
var numerosETextosAny;
numerosETextosAny = ["abobrinha", 0, false, undefined];
var numerosETextos; //aceita numeros e textos
numerosETextos = ["abobrinha", 1, 2];
var numerosOUTextos; //ou uma lista de strings, ou uma lista de numbers
numerosOUTextos = ["a", "b", "c"];
numerosOUTextos = [1, 2, 3];
// ----------------------------------
// lista de objetos
//para printar assim eu tenho que ficar decorando o indice dos itens:
var aluno = ["Abel", 8, "1o"];
console.log(aluno[0]);
console.log(aluno[1]);
console.log(aluno[2], "\n");
//para printar assim eu só preciso passar o nome da chave
var alunoObj = {
    nome: "Eduardo",
    media: 10,
    anoCursando: "20"
};
console.log(alunoObj.nome);
console.log(alunoObj.media);
console.log(alunoObj.anoCursando);
// ----------------------------------
// interando na lista
for (var i = 0; i < pares.length; i++) {
    var numero = pares[i];
    console.log("Número: ", numero, " - Triplo: ", numero * 3);
}
console.log('interando com for in');
for (var chave in pares) {
    var valor = pares[chave];
    console.log("Chave: ", chave, " - Valor: ", valor);
}
console.log('interando com for of');
for (var _i = 0, pares_1 = pares; _i < pares_1.length; _i++) {
    var valor = pares_1[_i];
    console.log(" Valor: ", valor);
}
// ----------------------------------
var listaChaves = Object.keys(alunoObj);
console.log("Chaves: ", listaChaves);
var listaValues = Object.values(alunoObj);
console.log("Valores: ", listaValues);
var listaEntries = Object.entries(alunoObj); // chaves e valores
console.log("Entries: ", listaEntries);
