import { Fogao } from "./Pedido"

interface CarregarCallback {
    ( lista : Array<Fogao> ) : void
}

export {CarregarCallback}