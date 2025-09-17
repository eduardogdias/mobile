import { useState } from "react"
import { Produto, ProdutoErro } from "../model/Produto"
import { produtoServiceLer, produtoServiceSave } from "../service/ProdutoService"
import { LerCallback, SalvarCallBack } from "../model/CallBack"

const useProdutoControl = () => {
    
    const [produto, setProduto] = useState<Produto>(
        {id: 0, nome: "", preco: 0, setor: ""}
    )

    const [produtoErro, setProdutoErro] = useState<ProdutoErro>(
        {}
    )

    const [loading, setLoading] = useState<boolean>(false)
    const [mensagem, setMensagem] = useState<string>("")

    const [sucesso, setSucesso] = useState<boolean>(false)

    const [produtoLista, setProdutoLista] = useState<Produto[]>([])


    const handleInput = (valor: string, nomeCampo: keyof Produto) => {
        const obj = {...produto}
        
        if (nomeCampo === "id" || nomeCampo === "preco") {
            obj[nomeCampo] = Number(valor) as NonNullable<Produto[typeof nomeCampo]>

        } else {
            obj[nomeCampo] = valor as Produto[typeof nomeCampo]
        }

        setProduto( obj )
    }


    const salvar = () => {

        const finalizar : SalvarCallBack = (resultadoSucesso : boolean, erro : string, produtoCampoErro? : ProdutoErro) => {
            if (resultadoSucesso){   
                setMensagem("Gravado com sucesso!")
                setSucesso(true)
                setProdutoErro({})        

            } else {
                setMensagem("Erro: " + erro)
                setSucesso(false)
                setProdutoErro(produtoCampoErro ?? {}) // se n existir, define ele como vazio              
            }
            setLoading(false)
        }

        console.log("Entrou no Control")
        setLoading(true)
        produtoServiceSave( produto, finalizar )
        
    }


    const carregar = () => {

        const lerCallback : LerCallback = (resultadoSucesso : boolean, erro : string, lista : Array<Produto>) => {
            if (resultadoSucesso){   
                setMensagem(`Foram encontrados ${lista.length} produto(s)`)
                setSucesso(true)
                setProdutoErro({}) 
                setProdutoLista( lista )       

            } else {
                setMensagem("Erro: " + erro)
                setSucesso(false)
            }
            setLoading(false)
        }

        setLoading(true)
        produtoServiceLer(lerCallback)
    }



    


    return { produto, salvar, handleInput,
            loading, mensagem,
            produtoErro, sucesso,
            carregar, produtoLista
    }
}
export {useProdutoControl}