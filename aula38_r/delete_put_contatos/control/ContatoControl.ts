import {useState} from 'react';
import { Contato, ContatoErro } from '../model/contato';
import { constatoServiceLoad, contatoServiceDelete, contatoServiceSave, contatoServiceUpdate } from '../service/ContatoService';
import { ApagarCallBack, AtualizarCallBack, CarregarCallBack, SalvarCallBack } from '../fetcher/ContatoFetcher';

const contatoLimpo : Contato= {id: undefined, nome: "", telefone: "", email: ""}

const useContatoControl = () => { 
    
    const [contato, setContato] = useState<Contato>( contatoLimpo )

    // const [contato, setContato] = useState<Contato>(
    //     {nome: "", telefone: "", email: ""}
    // )

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
        // callback 1
        const fianlizar : SalvarCallBack = 
            (resultadoSucesso : boolean, erro : string, contatoCampoErro? : ContatoErro) => {
            if (resultadoSucesso) {
                setMensagem("Gravado com sucesso!")
                setSucesso(true)
                setContatoErro({})
                setContato(contatoLimpo)
            } else {
                setMensagem("Erro: " + erro)
                setSucesso(false)
                setContatoErro(contatoCampoErro ?? {}) // ?? -> se n existir, coloca o obj vazio
            }
            setLoading(false)
        }
 
        // callBack 2
        const finalizarUpdate : AtualizarCallBack = 
            (resultadoSucesso : boolean, erro : string, contatoCampoErro? : ContatoErro) => {
            if (resultadoSucesso) {
                setMensagem("Atualizado com sucesso!")
                setSucesso(true)
                setContatoErro({})
                setContato(contatoLimpo)
            } else {
                setMensagem("Erro: " + erro)
                setSucesso(false)
                setContatoErro(contatoCampoErro ?? {}) // ?? -> se n existir, coloca o obj vazio
            }
            setLoading(false)
        }

        setLoading(true)
        if (contato.id) {
            contatoServiceUpdate(contato.id, contato, finalizarUpdate)
        } else {
            contatoServiceSave( contato, fianlizar )
        }
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
    

    const apagar = (id : string) => {
        const finalizarApagar : ApagarCallBack = (success : boolean, erro : string) => {
            if(success){
                setMensagem("Contato apagado com sucesso")
                setSucesso(true)
            } else {
                setMensagem(erro)
                setSucesso(false)
            }
            setLoading(false)
        }
        setLoading(true)
        contatoServiceDelete(id, finalizarApagar)
    }


    const atualizar = (id : string) => {
        setContato(contatoLimpo)
        contatoLista.forEach((contato : Contato)=>{
            if(contato.id === id){
                setContato( contato )
            }
        })
    }


    return { contato, handleInput, salvar,
            loading, mensagem,
            contatoErro, sucesso,
            carregar, contatoLista,
            apagar, atualizar
    }

}

export {useContatoControl};