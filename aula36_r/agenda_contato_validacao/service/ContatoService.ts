import { AxiosResponse } from 'axios';
import {contatoApiSave} from '../fetcher/ContatoFetcher'
import { Contato, ContatoErro, contatoSchema } from '../model/contato';
import { salvarCallBack } from '../fetcher/ContatoFetcher';
import { ValidationError } from 'yup';

const contatoServiceSave = ( contato : Contato, onFinalizar : salvarCallBack ) => { 
    console.log("contatoServiceSave(): acionado")
    contatoSchema.validate( contato, {abortEarly: false} ) // msm se encontrar erros ele continua validando
    .then(()=>{
        contatoApiSave(contato, onFinalizar)  
    })
    .catch(( errors : ValidationError )=>{
        const errosContato : ContatoErro = {} // objeto que será preenchido com os erro, caso hajam

        errors.inner.forEach( (erroCampo : ValidationError) =>{ // pra cada erro, vamos colocar na variavel 'erroCampo'
            const chave = erroCampo.path
            errosContato[ chave as keyof typeof errosContato] = erroCampo.message // 'chave as keyof typeof errosContato': onde a chave é o nome do campo, ele recebe a msg
        })
        
        console.log("Erros contato: ", errosContato)
        onFinalizar(false, errors.message, errosContato)
    })
    
}


export {contatoServiceSave};