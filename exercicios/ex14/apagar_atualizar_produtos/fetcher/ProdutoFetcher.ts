import axios, { AxiosResponse } from "axios";
import { Produto } from "../model/Produto";
import { ApagarCallback, AtualizarCallback, LerCallback, SalvarCallBack } from "../model/CallBack";

const apiBase = axios.create({
    baseURL: "https://aula0903-f5650-default-rtdb.firebaseio.com/"
})


const produtoFetcherSave = (produto : Produto, onFinalizar : SalvarCallBack) => {
    console.log("entrou salvar fetcher")
    apiBase.post("/produto.json", produto)
    .then(()=>{
        onFinalizar(true, "", {})
    })
    .catch(( erro : string )=>{
        onFinalizar(false, erro)
    })
} 


const produtoFetcherLer = (onFinalizar : LerCallback) => {
    console.log("entrou ler fetcher")
    apiBase.get("/produto.json")
    .then(( response : AxiosResponse<any, any> )=>{
        const lista : Produto[] = []
        for ( const chave in response.data ){
            const produto = response.data[chave as keyof Produto]
            produto.id = chave // pega o ID e coloca dentro do produto
            lista.push( produto )
        } 
        onFinalizar(true, "", lista)
    })
    .catch(( erro : string )=>{
        onFinalizar(false, erro, [])
    })
}


const produtoFetcherApagar = ( id : string, callback : ApagarCallback ) => {
    console.log("entrou apagar fetcher")
    apiBase.delete(`/produto/${id}.json`)
    .then(()=>{
        callback(true, "")
    })
    .catch((erro : string)=>{
        callback(false, erro)
    })
}


const produtoFetcherAtualizar = ( id : string, produto : Produto, callback : AtualizarCallback ) => {
    console.log("entrou atualizar fetcher")
    apiBase.put(`/produto/${id}.json`, produto)
    .then(()=>{
        callback(true, "")
    })
    .catch((error : string)=>{
        callback(false, error)
    })
}


export {produtoFetcherSave, produtoFetcherLer, produtoFetcherApagar, produtoFetcherAtualizar}