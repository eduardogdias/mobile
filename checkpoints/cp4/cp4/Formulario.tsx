import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import { usePedidoControl } from "./PedidoControl"
import { estilos } from "./Estilos"


// Tarefa 12
const Formulario = () => {

    const {codigo, quantidade, cliente, entregue,
           setCodigo, setQuantidade, setCliente, setEntregue,
           inserir
    } = usePedidoControl()

    
    return(
        <View style={estilos.tela}>
            <Text style={estilos.titulo}>Pedido</Text>
            <View>
                <View style={estilos.campo_valor}>
                    <Text style={estilos.campo}>Código: </Text>
                    <TextInput value={codigo} onChangeText={setCodigo} style={estilos.valor}/>
                </View>
                <View style={estilos.campo_valor}>
                    <Text style={estilos.campo}>Quantidade: </Text>
                    <TextInput value={quantidade} onChangeText={setQuantidade} style={estilos.valor}/>
                </View>
                <View style={estilos.campo_valor}>
                    <Text style={estilos.campo}>Cliente: </Text>
                    <TextInput value={cliente} onChangeText={setCliente} style={estilos.valor}/>
                </View>
                <View style={estilos.campo_valor}>
                    <Text style={estilos.campo}>Entregue (0/1): </Text>
                    <TextInput value={entregue} onChangeText={setEntregue} style={estilos.valor}/>
                </View>
            </View>
            <View style={estilos.botao}>
                <Button title="Cadastrar" onPress={inserir}/>
            </View>
        </View>                  
    )
}


export {Formulario}



