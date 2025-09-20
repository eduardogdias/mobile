import { boolean, InferType, number, object, string } from "yup";

// Tarefa 1
const pedidoSchema = object({
    id : string(),
    codigo: string().required("Código obrigatório").min(5, "O código precisa ter 5 caracteres"),
    quantidade: number().required("A quantidade é obrigatório").positive("Quantidade deve ser positiva"),
    cliente: string().required("Cliente obrigatório").min(5, "O cliente precisa ter 5 caracteres no mínimo"),
    entregue: boolean().required("Digite 1 para SIM e 0 para NAO")
})


type Pedido = InferType<typeof pedidoSchema>

export {pedidoSchema, Pedido}