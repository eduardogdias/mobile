import axios, { AxiosResponse } from "axios";
import { Contato, ContatoErro } from "../model/contato";

interface SalvarCallBack {
    (sucesso : boolean, erro : string, contatoCampoErro? : ContatoErro) : void 
}

interface CarregarCallBack {
    (sucesso : boolean, erro : string, listaContatos : Array<Contato>) : void 
}


const contatoApiSave = ( contato: Contato , onFinalizar : SalvarCallBack) => {
    console.log("contatoApiSave(): acionado")
    axios.post("https://agenda-contato-dc7d2-default-rtdb.firebaseio.com/contato.json",   
        contato
    )
    .then(()=>{
        onFinalizar(true, "")
    })
    .catch((erro : string)=>{
        onFinalizar(false, erro)
    })
}


const contatoApiLoad = ( onFinalizar : CarregarCallBack) => {
    console.log("contatoApiLoad(): acionado")
    axios.get("https://agenda-contato-dc7d2-default-rtdb.firebaseio.com/contato.json")
    .then(( response : AxiosResponse<any, any> )=>{
        const lista : Contato[] = []
        for ( const chave in response.data ){
            const contato = response.data[chave as keyof Contato]
            lista.push( contato )
        }
        onFinalizar(true, "", lista)
    })
    .catch((erro : string)=>{
        onFinalizar(false, erro, [])
    })
}


export {contatoApiSave, SalvarCallBack,
        contatoApiLoad, CarregarCallBack
}
