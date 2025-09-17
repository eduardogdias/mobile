import { ProdutoErro } from "./Produto"

interface salvarCallBack {
    ( sucesso : boolean, erro : string, produtoCampoErro? : ProdutoErro ) : void //se der certo não tem msg erro
}

export{salvarCallBack}