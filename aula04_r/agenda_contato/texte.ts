let v : string | number
v = 12
v = "Eduardo"
// v = [1,2,3]
// v= true


interface Pessoa {
  nome: string,
  idade: number,
  cpf: string
}

interface Estudante extends Pessoa{
  disciplina: string,
  nota: number
}

let a : Estudante = {
  nome: 'Eduardo',
  idade: 25,
  cpf: "12345674894",
  disciplina: "mobile",
  nota: 10
}