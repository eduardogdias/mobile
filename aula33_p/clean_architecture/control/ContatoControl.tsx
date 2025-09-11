import {useState} from 'react';
import { Contato } from '../model/contato';
import { contatoServiceSave } from '../service/ContatoService';

const useContatoControl = () => { 
    
    const [contato, setContato] = useState<Contato>(
        {nome: "", telefone: "", email: ""}
    )

    const salvar = () => {
        console.log("useContatoControl:salvar() - acionado");
        contatoServiceSave( contato );
        //contatoServiceSave(nome, telefone, email);
    }


    const handleInput = (valor: string, nomeCampo: string) => {
        const obj = {...contato}
        obj[nomeCampo as keyof typeof obj] = valor //substitui o campo do obj pelo valor
        setContato( obj )
    }

    return { contato, handleInput, salvar }


    
    // const [nome, setNome] = useState<string>("");
    // const [telefone, setTelefone] = useState<string>("");
    // const [email, setEmail] = useState<string>("");

    // const salvar = () => {
    //     console.log("useContatoControl:salvar() - acionado");
    //     contatoServiceSave(nome, telefone, email);
    // }

    // return { 
    //     nome, setNome, telefone, setTelefone,
    //     email, setEmail, salvar
    // }
}

export {useContatoControl};