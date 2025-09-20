import { useState } from "react"
import { Pedido } from "./Pedido"
import { apagarAPI, carregarAPI, salvarAPI } from "./PedidoFetcher"
import { CarregarCallback } from "./CallBack"


const pedidoLimpo : Pedido = {id: undefined, codigo: "", quantidade: 0, cliente: "", entregue: false}

// Tarefa 6
const usePedidoControl = () => {

    const [codigo, setCodigo] = useState<string>("")
    const [quantidade, setQuantidade] = useState<string>("")
    const [cliente, setCliente] = useState<string>("")
    const [entregue, setEntregue] = useState<string>("")

    const [pedido, setPedido] = useState<Pedido>( pedidoLimpo )
    const [listaPedido, setListaPedido] = useState<Pedido[]>([])



    // Tarefa 7
    const inserir = () => {        
        const pedido: Pedido = {  
            codigo: codigo,
            quantidade: Number(quantidade),         
            cliente: cliente, 
            entregue: entregue=='1' ? true : false 
        }
        salvarAPI(pedido)
        setCodigo("")
        setQuantidade("")
        setCliente("")
        setEntregue("")
    }


    const carregarCallBack : CarregarCallback = (lista : Array<Pedido>) => {
        setListaPedido(lista)
    }

    // Tarefa 8
    const carregar = () => {
        carregarAPI(carregarCallBack)        
    }
        


    // Tarefa 9
    const apagar = (id : string) => {
        apagarAPI(id)
    }



    return {codigo, quantidade, cliente, entregue, listaPedido,
        setCodigo, setQuantidade, setCliente, setEntregue, setListaPedido,
        inserir, carregar, apagar
    }
}

export {usePedidoControl}