import axios, { AxiosResponse } from "axios";
import { Produto } from "../model/Produto";

const produtoFetcherSave = (produto : Produto) : Promise<AxiosResponse<any, any>> => {
    console.log("Entrou no Fetcher");
    return axios.post("https://ex10-produto-default-rtdb.firebaseio.com/produto.json",
        produto
    )
} 

export default produtoFetcherSave;