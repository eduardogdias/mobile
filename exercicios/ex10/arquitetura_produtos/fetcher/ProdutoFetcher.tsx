import axios from "axios";
import { Produto } from "../model/Produto";

const produtoFetcherSave = (produto : Produto) => {
    console.log("Entrou no Fetcher");
    axios.post("https://ex10-produto-default-rtdb.firebaseio.com/produto.json",
        produto
    )
} 

export default produtoFetcherSave;