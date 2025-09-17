import { AxiosResponse } from 'axios';
import {CarregarCallBack, contatoApiLoad, contatoApiSave} from '../fetcher/ContatoFetcher'
import { Contato, ContatoErro, contatoSchema } from '../model/contato';
import { SalvarCallBack } from '../fetcher/ContatoFetcher';
import { ValidationError } from 'yup';

const contatoServiceSave = ( contato : Contato, onFinalizar : SalvarCallBack ) => { 
    console.log("contatoServiceSave(): acionado")
    contatoSchema.validate( contato, {abortEarly: false} ) 
    .then(()=>{
        contatoApiSave(contato, onFinalizar)  
    })
    .catch(( errors : ValidationError )=>{
        const errosContato : ContatoErro = {} 

        errors.inner.forEach( (erroCampo : ValidationError) =>{ 
            const chave = erroCampo.path
            errosContato[ chave as keyof typeof errosContato] = erroCampo.message 
        })
        
        console.log("Erros contato: ", errosContato)
        onFinalizar(false, errors.message, errosContato)
    })
    
}


const constatoServiceLoad = (onFinalizar : CarregarCallBack) => {
    contatoApiLoad(onFinalizar)
}


export {contatoServiceSave,
        constatoServiceLoad
};