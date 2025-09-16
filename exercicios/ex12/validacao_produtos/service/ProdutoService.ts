import { AxiosResponse } from "axios";
import produtoFetcherSave from "../fetcher/ProdutoFetcher";
import { InferType, number, object, string } from "yup";


const produtoSchema = object({
    id: number(),
    nome: string().required("Nome obrigatório").min(5, "Nomde deve ter no mínimo 5 caracteres"),
    preco: number().required("Preço obrigatório").positive("Preço deve ser positivo"),
    setor: string().required("Setor obrigatório")
})

type Produto = InferType<typeof produtoSchema>



interface Validacao{
    produto : Produto, 
    setErroId : ()=>void,  
    setErroNome : ()=>void, 
    setErroPreco : ()=>void, 
    setErroSetor : ()=>void
}

const produtoServiceValidar(validacao : Validacao) => {
    
    produtoSchema.validate(validacao.produto, {abortEarly:false})
    .then(()=>{
        validacao.setErroId("")
        validacao.setErroNome("")
        validacao.setErroPreco("")
        validacao.setErroSetor("")
        console.log("Validação feita com sucesso!")
    })
    .catch(( errors )=>{
        console.log("Erro ao validar!")
        for(const error of errors.inner){
            console.log(error.message)
            if(error.path == "id"){
                validacao.setErroId( error.message )
            } else if(error.path == "nome"){
                validacao.setErroNome( error.message )
            } else if(error.path == "preco"){
                validacao.setErroPreco( error.message )
            } else if(error.path == "settor"){
                validacao.setErroSetor( error.message )
            } 
        }
    })
    
}

const produtoServiceSave = (produto : Produto) : Promise<AxiosResponse<any, any>> => {
    console.log("Entrou na Service")
    return produtoFetcherSave( produto )
}

export {produtoServiceSave}