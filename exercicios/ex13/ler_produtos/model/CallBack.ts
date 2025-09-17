import { Produto, ProdutoErro } from "./Produto"

interface SalvarCallBack {
    ( sucesso : boolean, erro : string, produtoCampoErro? : ProdutoErro ) : void //se der certo não tem msg erro
}

interface LerCallback {
    ( sucesso : boolean, erro : string, listaProdutos : Array<Produto> ) : void
}

export{SalvarCallBack, LerCallback}