function Calculadora (n1 : number, n2 : number, operacao : string) : number{
    if(operacao == "+"){
        return n1 + n2;
    } else if(operacao == "-"){
        return n1 - n2;
    } else if(operacao == "*"){
        return n1 * n2;
    } else if(operacao == "/"){
        return n1 / n2;
    } else{
        return 0;
    }
}


const result = Calculadora(2,5,"+")
console.log(result)