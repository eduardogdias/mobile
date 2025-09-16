import axios, { AxiosResponse } from "axios";
import { Contato, ContatoErro } from "../model/contato";

interface salvarCallBack {
    (sucesso : boolean, erro : string, contatoCampoErro? : ContatoErro) : void //sucesso se der certo (true) e erro (false) com a msg
}

const contatoApiSave = ( contato: Contato , onFinalizar : salvarCallBack) => {
    console.log("contatoApiSave(): acionado")
    axios.post("https://agenda-contato-dc7d2-default-rtdb.firebaseio.com/contato.json",   //axios retorna um Promise
        contato
    )
    .then(()=>{
        onFinalizar(true, "")
    })
    .catch((erro : string)=>{
        onFinalizar(false, erro)
    })
}


// const contatoApiSave = ( contato: Contato ) : Promise<AxiosResponse<any, any>> => {
//     console.log("contatoApiSave(): acionado")
//     return axios.post("https://agenda-contato-dc7d2-default-rtdb.firebaseio.com/contato.json",   //axios retorna um Promise
//         contato
//     )
// }

export {contatoApiSave, salvarCallBack}
