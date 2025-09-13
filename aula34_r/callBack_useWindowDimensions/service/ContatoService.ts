import { AxiosResponse } from 'axios';
import {contatoApiSave} from '../fetcher/ContatoFetcher'
import { Contato } from '../model/contato';
import { salvarCallBack } from '../fetcher/ContatoFetcher';

const contatoServiceSave = ( contato : Contato, onFinalizar : salvarCallBack ) => { 
    console.log("contatoServiceSave(): acionado")
    contatoApiSave(contato, onFinalizar)  
}

// const contatoServiceSave = ( contato : Contato ) : Promise<AxiosResponse<any, any>> => { 
//     console.log("contatoServiceSave(): acionado")
//     return contatoApiSave(contato)  // retorna o Promise retornado do Fetcher 
// }


export {contatoServiceSave};