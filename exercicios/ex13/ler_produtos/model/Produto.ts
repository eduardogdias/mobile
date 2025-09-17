import { InferType, number, object, string } from "yup"

const produtoSchema = object({
    id: number(),
    nome: string().required("Nome obrigatório").min(5, "O nome precisa ter 5 caracteres"),
    preco: number().required("Preço obrigatório").positive("Preço deve ser positivo"),
    setor: string().required("Setor obrigatório")
})

type Produto = InferType<typeof produtoSchema>

// interface Produto {
//     id : number
//     nome : string
//     preco : number
//     setor : string
// }

interface ProdutoErro {
    id? : string
    nome? : string
    preco? : string
    setor? : string
}


export {produtoSchema, Produto, ProdutoErro}