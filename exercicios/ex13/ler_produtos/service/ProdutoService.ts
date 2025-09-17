import { AxiosResponse } from "axios";
import { Produto, ProdutoErro, produtoSchema } from "../model/Produto";
import { LerCallback, SalvarCallBack } from "../model/CallBack";
import { ValidationError } from "yup";
import { produtoFetcherLer, produtoFetcherSave } from "../fetcher/ProdutoFetcher";



const produtoServiceSave = (produto : Produto, onFinalizar : SalvarCallBack) => {
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


const produtoServiceLer = (onFinalizar : LerCallback) => {
    produtoFetcherLer(onFinalizar)
}


export {produtoServiceSave, produtoServiceLer}