import { InferType, object, string } from "yup";

const contatoSchema = object({
    nome: string().required("Nome obrigatório").min(5, "O nome precisa ter 5 caracteres"),
    email: string().required("Email obrigatório").email("O email deve ser válido"),
    telefone: string().required("Telefone obrigatório").min(10, "O telefone deve ter no mínimo 10 caracteres"),
})

type Contato = InferType<typeof contatoSchema>

interface ContatoErro { //guarda a msg de erro de cada campo
    nome? : string,
    email? : string,
    telefone? : string,
}

// interface Contato { 
//     nome : string;
//     telefone : string;
//     email : string;
// }

export {Contato, contatoSchema, ContatoErro};