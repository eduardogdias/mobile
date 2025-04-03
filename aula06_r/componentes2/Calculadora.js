function Calculadora(n1, n2, operacao) {
    if (operacao == "+") {
        return n1 + n2;
    }
    else if (operacao == "-") {
        return n1 - n2;
    }
    else if (operacao == "*") {
        return n1 * n2;
    }
    else if (operacao == "/") {
        return n1 / n2;
    }
    else {
        return 0;
    }
}
var result = Calculadora(2, 5, "+");
console.log(result);
