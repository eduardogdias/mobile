import axios, { AxiosResponse } from "axios";
import { Produto } from "../model/Produto";
import { LerCallback, SalvarCallBack } from "../model/CallBack";


const produtoFetcherSave = (produto : Produto, onFinalizar : SalvarCallBack) => {
    axios.post("https://ex10-produto-default-rtdb.firebaseio.com/produto.json",
        produto
    )
    .then(()=>{
        onFinalizar(true, "", {})
    })
    .catch(( erro : string )=>{
        onFinalizar(false, erro)
    })
} 


const produtoFetcherLer = (onFinalizar : LerCallback) => {
    axios.get("https://ex10-produto-default-rtdb.firebaseio.com/produto.json")
    .then(( response : AxiosResponse<any, any> )=>{
        const lista : Produto[] = []
        for ( const chave in response.data ){
            const produto = response.data[chave as keyof Produto]
            lista.push( produto )
        } 
        onFinalizar(true, "", lista)
    })
    .catch(( erro : string )=>{
        onFinalizar(false, erro, [])
    })
}

export {produtoFetcherSave, produtoFetcherLer}