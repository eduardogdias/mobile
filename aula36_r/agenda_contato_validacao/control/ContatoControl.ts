import {useState} from 'react';
import { Contato, ContatoErro } from '../model/contato';
import { contatoServiceSave } from '../service/ContatoService';
import { salvarCallBack } from '../fetcher/ContatoFetcher';

const useContatoControl = () => { 
    
    const [contato, setContato] = useState<Contato>(
        {nome: "", telefone: "", email: ""}
    )

    const [contatoErro, setContatoErro] = useState<ContatoErro>(
        {}
    )

    const [loading, setLoading] = useState<boolean>(false)
    const [mensagem, setMensagem] = useState<string>("")
    const [sucesso, setSucesso] = useState<boolean>(false)


    const salvar = () => {
        const fianlizar : salvarCallBack = 
            (resultadoSucesso : boolean, erro : string, contatoCampoErro? : ContatoErro) => {
            if (resultadoSucesso) {
                setMensagem("Gravado com sucesso!")
                setSucesso(true)
                setContatoErro({})
            } else {
                setMensagem("Erro: " + erro)
                setSucesso(false)
                setContatoErro(contatoCampoErro ?? {}) // ?? -> se n existir, coloca o obj vazio
            }
            setLoading(false)
        }
 
        console.log("useContatoControl:salvar() - acionado")
        setLoading(true) 
        contatoServiceSave( contato, fianlizar )
        

    }



    const handleInput = (valor: string, nomeCampo: string) => {
        const obj = {...contato}
        obj[nomeCampo as keyof typeof obj] = valor //substitui o campo do obj pelo valor
        setContato( obj )
    }

    return { contato, handleInput, salvar,
            loading, mensagem,
            contatoErro, sucesso
    }

}

export {useContatoControl};