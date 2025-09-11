import {contatoApiSave} from '../fetcher/ContatoFetcher'
import { Contato } from '../model/contato';


const contatoServiceSave = ( contato : Contato ) : void => { 
    console.log("contatoServiceSave(): acionado");
    contatoApiSave(contato);   
}

// const contatoServiceSave = ( nome : string, telefone : string, email : string) : void => { 
//     console.log("contatoServiceSave(): acionado");
//     contatoApiSave(nome, telefone, email);   
// }

export {contatoServiceSave};