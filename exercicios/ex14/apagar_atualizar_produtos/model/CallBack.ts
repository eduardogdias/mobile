import { Produto, ProdutoErro } from "./Produto"

interface SalvarCallBack {
    ( sucesso : boolean, erro : string, produtoCampoErro? : ProdutoErro ) : void //se der certo não tem msg erro
}

interface LerCallback {
    ( sucesso : boolean, erro : string, listaProdutos : Array<Produto> ) : void
}

interface ApagarCallback {
    ( sucesso : boolean, mensagem : string ) : void
}

interface AtualizarCallback {
    ( sucesso : boolean, mensagem : string, errosCampos? : ProdutoErro ) : void
}

export{SalvarCallBack, LerCallback, ApagarCallback, AtualizarCallback}