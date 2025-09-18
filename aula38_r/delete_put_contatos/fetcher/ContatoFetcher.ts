import axios, { AxiosResponse } from "axios";
import { Contato, ContatoErro } from "../model/contato";

//Adicionando um caminho base pra API
const apiBase = axios.create({
    baseURL: "https://agenda-contato-dc7d2-default-rtdb.firebaseio.com"
})

interface SalvarCallBack {
    (sucesso : boolean, erro : string, contatoCampoErro? : ContatoErro) : void 
}

interface CarregarCallBack {
    (sucesso : boolean, erro : string, listaContatos : Array<Contato>) : void 
}

interface ApagarCallBack {
    (sucesso : boolean, erro : string) : void 
}

interface AtualizarCallBack {
    (sucesso : boolean, erro : string, contatoCampoErro? : ContatoErro) : void 
}

const contatoApiSave = ( contato: Contato , onFinalizar : SalvarCallBack) => {
    console.log("contatoApiSave(): acionado")
    apiBase.post("/contato.json", contato)
    .then(()=>{
        onFinalizar(true, "")
    })
    .catch((erro : string)=>{
        onFinalizar(false, erro)
    })
}


const contatoApiLoad = ( onFinalizar : CarregarCallBack) => {
    console.log("contatoApiLoad(): acionado")
    apiBase.get("/contato.json")
    .then(( response : AxiosResponse<any, any> )=>{
        const lista : Contato[] = []
        for ( const chave in response.data ){
            const contato = response.data[chave as keyof Contato]
            contato.id = chave // pega o ID e coloca dentro do contato
            lista.push( contato )
        }
        onFinalizar(true, "", lista)
    })
    .catch((erro : string)=>{
        onFinalizar(false, erro, [])
    })
}


const contatoAPIDelete = ( id : string, onFinalizar : ApagarCallBack) => {
    apiBase.delete(`/contato/${id}.json`)
    .then(()=>{
        onFinalizar(true, "")
    })
    .catch((erro : string)=>{
        onFinalizar(false, erro)
    })
}


const contatoApiUpdate = ( id : string, contato: Contato, onFinalizar : AtualizarCallBack) => {
    delete contato.id
    apiBase.put(`/contato/${id}.json`, contato)
    .then(()=>{
        onFinalizar(true, "", {})
    })
    .catch((erro : string)=>{
        onFinalizar(false, erro)
    })
}

export {contatoApiSave, SalvarCallBack,
        contatoApiLoad, CarregarCallBack,
        contatoAPIDelete, ApagarCallBack,
        contatoApiUpdate, AtualizarCallBack
}
