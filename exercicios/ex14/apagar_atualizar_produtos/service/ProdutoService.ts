import { AxiosResponse } from "axios";
import { Produto, ProdutoErro, produtoSchema } from "../model/Produto";
import { ApagarCallback, AtualizarCallback, LerCallback, SalvarCallBack } from "../model/CallBack";
import { ValidationError } from "yup";
import { produtoFetcherAtualizar, produtoFetcherLer, produtoFetcherApagar, produtoFetcherSave } from "../fetcher/ProdutoFetcher";



const produtoServiceSave = (produto : Produto, onFinalizar : SalvarCallBack) => {
    console.log("entrou salvar service")
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
    console.log("entrou ler service")
    produtoFetcherLer(onFinalizar)
}


const produtoServiceApagar = (id : string, callback : ApagarCallback) => {
    console.log("entrou apagar service")
    produtoFetcherApagar(id, callback)
}


const produtoServiceAtualizar = (id : string, produto : Produto, callback : AtualizarCallback) => {
    console.log("entrou atualizar service")
    produtoSchema.validate(produto, {abortEarly:false})
    .then(()=>{
        produtoFetcherAtualizar(id, produto, callback)
    })
    .catch((erro : ValidationError)=>{
        const errosProduto : ProdutoErro = {}

        erro.inner.forEach( (erroCampo)=>{
            const chave = erroCampo.path
            erroCampo[ chave as keyof typeof erroCampo] = erroCampo.message
        })

        callback(false, erro.message, errosProduto)
    })
}

export {produtoServiceSave, produtoServiceLer, produtoServiceApagar, produtoServiceAtualizar}