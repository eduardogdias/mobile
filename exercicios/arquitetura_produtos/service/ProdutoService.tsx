import produtoFetcherSave from "../fetcher/ProdutoFetcher";
import { Produto } from "../model/Produto";

const produtoServiceSave = (produto : Produto) => {
    console.log("Entrou na Service")
    produtoFetcherSave( produto )
}

export {produtoServiceSave}