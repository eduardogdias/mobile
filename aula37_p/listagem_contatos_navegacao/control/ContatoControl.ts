import {useState} from 'react';
import { Contato, ContatoErro } from '../model/contato';
import { constatoServiceLoad, contatoServiceSave } from '../service/ContatoService';
import { CarregarCallBack, SalvarCallBack } from '../fetcher/ContatoFetcher';

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
    
    const [contatoLista, setContatoLista] = useState<Contato[]>([]);


    const handleInput = (valor: string, nomeCampo: string) => {
        const obj = {...contato}
        obj[nomeCampo as keyof typeof obj] = valor //substitui o campo do obj pelo valor
        setContato( obj )
    }


    const salvar = () => {
        const fianlizar : SalvarCallBack = 
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


    const carregar = () => {
        const finalizarCarregamento : CarregarCallBack = 
            (resultadoSucesso : boolean, erro : string, lista : Array<Contato>) => {
            if (resultadoSucesso) {
                setMensagem(`Foram lidos ${lista.length} contatos`)
                setSucesso(true)
                setContatoErro({})
                setContatoLista( lista )
            } else {
                setMensagem("Erro: " + erro)
                setSucesso(false)      
            }
            setLoading(false)
        }

        constatoServiceLoad( finalizarCarregamento )        
    }
    

    return { contato, handleInput, salvar,
            loading, mensagem,
            contatoErro, sucesso,
            carregar, contatoLista
    }

}

export {useContatoControl};