import { View, FlatList, ListRenderItemInfo, Text, Button} from "react-native"
import { FontAwesome as Icon } from '@expo/vector-icons';
import { usePedidoControl } from "./PedidoControl"
import { Pedido } from "./Pedido"
import { estilos } from "./Estilos";


// Tarefa 14
const Listagem = () => {

    const {listaPedido, carregar, apagar} = usePedidoControl()

    return (
        <View style={estilos.tela}>
            <Text style={estilos.titulo}>Pedidos</Text>
            <View style={estilos.botao}>
                <Button  title="Carregar" onPress={carregar}/>
            </View>
            <FlatList data={listaPedido} renderItem={( {item} : ListRenderItemInfo<Pedido> ) => {
                return(
                    // Tarefa 13
                    <View style={estilos.flatlist}>
                        <View>
                            <Text style={{fontWeight: "bold", fontSize: 20}}>Código: {item.codigo}</Text>
                            <Text style={estilos.item}>Quantidade: {item.quantidade}</Text>
                            <Text>Cliente: {item.cliente}</Text>
                            <Text>Entregue: {item.entregue == true? "Sim" : "Não" }</Text>
                        </View>
                        <View style={{justifyContent: "center", paddingRight: 25}}>
                            <Icon name="trash" size={35} color="black" onPress={()=>{ apagar( String(item.id) ) }}/> 
                        </View>
                    </View>  
                )
            }}/>
        </View>
    )
}

export {Listagem}
