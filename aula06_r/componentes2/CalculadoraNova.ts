function calculadoraNova(n1:number, n2:number, operacao:any) : number {
    return operacao(n1, n2);
}

const res = calculadoraNova(10, 20, (num1:number, num2:number) => {return num1 + num2})

console.log("Somar: ", res)