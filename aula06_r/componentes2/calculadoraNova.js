function calculadoraNova(n1, n2, operacao) {
    return operacao(n1, n2);
}
var res = calculadoraNova(10, 20, function (num1, num2) { return num1 + num2; });
console.log("Somar: ", res);
