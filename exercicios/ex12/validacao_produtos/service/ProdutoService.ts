import { AxiosResponse } from "axios";
import produtoFetcherSave from "../fetcher/ProdutoFetcher";
import { Produto, ProdutoErro, produtoSchema } from "../model/Produto";
import { salvarCallBack } from "../model/SalvarCallBack";
import { ValidationError } from "yup";


// Validação
const produtoServiceSave = (produto : Produto, onFinalizar : salvarCallBack) => {
    console.log("Entrou na Service")
    produtoSchema.validate( produto, {abortEarly:false})
    .then(()=>{
        produtoFetcherSave( produto, onFinalizar )
    })
    .catch(( erros : ValidationError )=>{
        const errosProduto : ProdutoErro = {}

        erros.inner.forEach( (erroCampo : ValidationError)=>{
            const chave = erroCampo.path
            errosProduto[chave as keyof typeof errosProduto] = erroCampo.message
        } )

        onFinalizar(false, erros.message, errosProduto)
    })
    
}


// CallBack
// const produtoServiceSave = (produto : Produto, onFinalizar : salvarCallBack) => {
//     console.log("Entrou na Service")
//     produtoFetcherSave( produto, onFinalizar )
// }


// Promisse
// const produtoServiceSave = (produto : Produto) : Promise<AxiosResponse<any, any>> => {
//     console.log("Entrou na Service")
//     return produtoFetcherSave( produto )
// }

export {produtoServiceSave}