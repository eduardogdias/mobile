import axios, { AxiosResponse } from "axios";
import { Pedido } from "./Pedido";
import { CarregarCallback } from "./CallBack";

// Tarefa 2
const apiEndpoint = axios.create({
    baseURL :"https://aula0903-f5650-default-rtdb.firebaseio.com"
})


// Tarefa 3
const salvarAPI = (pedido : Pedido) => {
    apiEndpoint.post("./modelo.json", pedido)
}


// Tarefa 4
const carregarAPI = (callBack : CarregarCallback) => {
    apiEndpoint.get("./modelo.json")
    .then((resposta : AxiosResponse)=>{
        const lista : Pedido[] = []
        for ( const chave in resposta.data ){
            const pedido = resposta.data[chave as keyof Pedido]
            pedido.id = chave 
            lista.push( pedido )
        } 
        callBack(lista)
    })
    .catch((erro : string)=>{
        console.log("Erro Fetcher Ler: " + erro)
        callBack([])
    })
}


// Tarefa 5
const apagarAPI = (id : string) => {
    apiEndpoint.delete(`./modelo/${id}.json`)
}


export {salvarAPI, carregarAPI, apagarAPI}
