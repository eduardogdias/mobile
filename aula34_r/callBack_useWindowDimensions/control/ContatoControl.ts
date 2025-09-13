import {useState} from 'react';
import { Contato } from '../model/contato';
import { contatoServiceSave } from '../service/ContatoService';
import { salvarCallBack } from '../fetcher/ContatoFetcher';

const useContatoControl = () => { 
    
    const [contato, setContato] = useState<Contato>(
        {nome: "", telefone: "", email: ""}
    )

    const [loading, setLoading] = useState<boolean>(false)
    const [mensagem, setMensagem] = useState<string>("")


    const salvar = () => {
        const fianlizar : salvarCallBack = (sucesso : boolean, erro : string) => {
            if (sucesso) {
                setMensagem("Gravado com sucesso!")
            } else {
                setMensagem("Erro: " + erro)
            }
            setLoading(false)
        }

        console.log("useContatoControl:salvar() - acionado")
        setLoading(true) 
        contatoServiceSave( contato, fianlizar )
        

    }



    // const salvar = () => {
    //     console.log("useContatoControl:salvar() - acionado")
    //     setLoading(true) //assim que clicar em "Salvar" o loading vai aparecer
    //     contatoServiceSave( contato )
    //     .then(()=>{
    //         setMensagem("Gravado com sucesso!")
    //     })
    //     .catch(( erro : string )=>{
    //         setMensagem("Erro: " + erro)
    //     })
    //     .finally(()=>{  // se der certo ou errado eu tenho que desativar o loading
    //         setLoading(false)
    //     }) 

    // }


    const handleInput = (valor: string, nomeCampo: string) => {
        const obj = {...contato}
        obj[nomeCampo as keyof typeof obj] = valor //substitui o campo do obj pelo valor
        setContato( obj )
    }

    return { contato, handleInput, salvar,
            loading, mensagem
    }

}

export {useContatoControl};