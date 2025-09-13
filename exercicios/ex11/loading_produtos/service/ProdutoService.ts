import { AxiosResponse } from "axios";
import produtoFetcherSave from "../fetcher/ProdutoFetcher";
import { Produto } from "../model/Produto";

const produtoServiceSave = (produto : Produto) : Promise<AxiosResponse<any, any>> => {
    console.log("Entrou na Service")
    return produtoFetcherSave( produto )
}

export {produtoServiceSave}