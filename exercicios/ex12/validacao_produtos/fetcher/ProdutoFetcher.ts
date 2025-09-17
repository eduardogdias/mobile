import axios, { AxiosResponse } from "axios";
import { Produto } from "../model/Produto";
import { salvarCallBack } from "../model/SalvarCallBack";

// CallBack
const produtoFetcherSave = (produto : Produto, onFinalizar : salvarCallBack) => {
    console.log("Entrou no Fetcher");
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

// Promisse
// const produtoFetcherSave = (produto : Produto) : Promise<AxiosResponse<any, any>> => {
//     console.log("Entrou no Fetcher");
//     return axios.post("https://ex10-produto-default-rtdb.firebaseio.com/produto.json",
//         produto
//     )
// } 

export default produtoFetcherSave;