import { useState } from "react"
import { Produto } from "../model/Produto"
import { produtoServiceSave } from "../service/ProdutoService"

const useProdutoControl = () => {
    
    const [produto, setProduto] = useState<Produto>(
        {id: 0, nome: "", preco: 0, setor: ""}
    )

    const [loading, setLoading] = useState<boolean>(false)
    const [mensagem, setMensagem] = useState<string>("")

    const salvar = () => {
        console.log("Entrou no Control")
        setLoading(true)
        produtoServiceSave( produto )
        .then(()=>{
            setMensagem("Produto com sucesso!")
        })
        .catch((erro : string)=>{
            setMensagem("Erro: " + erro)
        })
        .finally(()=>{
            setLoading(false)
        })
    }

    const handleInput = (valor: string, nomeCampo: keyof Produto) => {
        const obj = {...produto}
        
        if (nomeCampo === "id" || nomeCampo === "preco") {
            obj[nomeCampo] = Number(valor) as Produto[typeof nomeCampo]
        } else {
            obj[nomeCampo] = valor as Produto[typeof nomeCampo]
        }

        setProduto( obj )
    }


    return { produto, salvar, handleInput,
            loading, mensagem
    }
}
export {useProdutoControl}