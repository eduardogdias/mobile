import { useState } from "react"
import { Produto, ProdutoErro } from "../model/Produto"
import { produtoServiceSave } from "../service/ProdutoService"
import { salvarCallBack } from "../model/SalvarCallBack"

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

    // CalBack
    const salvar = () => {

        const finalizar : salvarCallBack = (resultadoSucesso : boolean, erro : string, produtoCampoErro? : ProdutoErro) => {
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


    // Promisse 
    // const salvar = () => {
    //     console.log("Entrou no Control")
    //     setLoading(true)
    //     produtoServiceSave( produto )
    //     .then(()=>{
    //         setMensagem("Produto salvo com sucesso!")
    //     })
    //     .catch((erro : string)=>{
    //         setMensagem("Erro: " + erro)
    //     })
    //     .finally(()=>{
    //         setLoading(false)
    //     })
    // }

    const handleInput = (valor: string, nomeCampo: keyof Produto) => {
        const obj = {...produto}
        
        if (nomeCampo === "id" || nomeCampo === "preco") {
            obj[nomeCampo] = Number(valor) as NonNullable<Produto[typeof nomeCampo]>

        } else {
            obj[nomeCampo] = valor as Produto[typeof nomeCampo]
        }

        setProduto( obj )
    }


    return { produto, salvar, handleInput,
            loading, mensagem,
            produtoErro, sucesso
    }
}
export {useProdutoControl}