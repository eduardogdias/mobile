import { useState } from "react"
import { Produto, ProdutoErro } from "../model/Produto"
import { produtoServiceApagar, produtoServiceAtualizar, produtoServiceLer, produtoServiceSave } from "../service/ProdutoService"
import { ApagarCallback, AtualizarCallback, LerCallback, SalvarCallBack } from "../model/CallBack"

const produtoLimpo : Produto = {id: undefined, nome: "", preco: 0, setor: ""}

const useProdutoControl = () => {
    
    const [produto, setProduto] = useState<Produto>( produtoLimpo )

    const [produtoErro, setProdutoErro] = useState<ProdutoErro>(
        {}
    )

    const [loading, setLoading] = useState<boolean>(false)
    const [mensagem, setMensagem] = useState<string>("")

    const [sucesso, setSucesso] = useState<boolean>(false)

    const [produtoLista, setProdutoLista] = useState<Produto[]>([])


    const handleInput = (valor: string, nomeCampo: keyof Produto) => {
        const obj = {...produto}
        
        if ( nomeCampo === "preco") {
            obj[nomeCampo] = Number(valor) as NonNullable<Produto[typeof nomeCampo]>

        } 
        if ( nomeCampo === "nome" || nomeCampo === "setor") {
            obj[nomeCampo] = valor as Produto[typeof nomeCampo]
        }

        setProduto( obj )
    }

    // SALVAR
    const salvarCallback : SalvarCallBack = (resultadoSucesso : boolean, erro : string, produtoCampoErro? : ProdutoErro) => {
        if (resultadoSucesso){   
            setMensagem("Gravado com sucesso!")
            setSucesso(true)
            setProdutoErro({})  
            setProduto(produtoLimpo)      

        } else {
            setMensagem("Erro: " + erro)
            setSucesso(false)
            setProdutoErro(produtoCampoErro ?? {}) // se n existir, define ele como vazio              
        }
        setLoading(false)
    }
    
    const salvar = () => {
        console.log("entrou salvar control")
        setLoading(true)
        if (produto.id) {
            produtoServiceAtualizar(String(produto.id), produto, atualizarCallback)
        } else {
            produtoServiceSave( produto, salvarCallback )
        }        
    }


    // LER
    const lerCallback : LerCallback = (resultadoSucesso : boolean, erro : string, lista : Array<Produto>) => {
        if (resultadoSucesso){   
            setMensagem(`Foram encontrados ${lista.length} produto(s)`)
            setSucesso(true)
            setProdutoErro({}) 
            setProdutoLista( lista ) 
            setProduto(produtoLimpo)            

        } else {
            setMensagem("Erro: " + erro)
            setSucesso(false)
        }
        setLoading(false)
    }

    const carregar = () => {
        console.log("entrou ler control")
        setLoading(true)
        produtoServiceLer(lerCallback)
    }


    // APAGAR
    const apagarCallback : ApagarCallback = ( sucesso : boolean, mensagem : string ) => {
        if (sucesso) {
            setMensagem("Produto excluído com sucesso!")
            setSucesso(true)
            
        } else {
            setMensagem(mensagem)
            setSucesso(false)
        }
        setProduto(produtoLimpo)      
        setLoading(false)

    }

    const apagar = (id : string) => {
        console.log("entrou apagar control")
        produtoServiceApagar(id, apagarCallback)
    }


    // ATUALIZAR
    const atualizarCallback : AtualizarCallback = ( sucesso : boolean, mensagem : string, errosCampos? : ProdutoErro ) => {
        if (sucesso) {
            setMensagem("Produto atualizado com sucesso!")
            setSucesso(true)
            setProdutoErro({})
            setProduto(produtoLimpo)
        } else {
            setMensagem("Erro: " + mensagem)
            setSucesso(false)
            setProdutoErro(errosCampos??{})
        }
        setLoading(false)
    }

    const atualizar = (id : string) => {
        console.log("entrou atualizar control")
        console.log("id: " + id)
        setProduto(produtoLimpo)
        produtoLista.forEach( (produto : Produto)=>{
            if (produto.id == id){
                setProduto(produto) // ele coloca o produto no form
            }
        })
        console.log("produto: "+produto.id  +" - " +produto.nome  +" - " +produto.preco  +" - " +produto.setor )
        //produtoServiceAtualizar(id, produto, atualizarCallback)
    }



    return { produto, salvar, handleInput,
            loading, mensagem,
            produtoErro, sucesso,
            carregar, produtoLista,
            apagar, atualizar
    }
}
export {useProdutoControl}