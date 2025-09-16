import { View, Text, TextInput, Button, Modal, ActivityIndicator } from "react-native";
import { useProdutoControl } from "../control/ProdutoControl";

const ProdutoView = () => {

    const {produto, salvar, handleInput,
            loading, mensagem
     } = useProdutoControl()

    return(
        <View>
            <Text>Cadastro de Produtos</Text>
            <Text>Id:</Text>
            <TextInput value={String(produto.id)} onChangeText={ (txt:string) => { handleInput(txt, "id") } }/>
            <Text>Nome:</Text>
            <TextInput value={produto.nome} onChangeText={ (txt:string) => { handleInput(txt, "nome") } }/>
            <Text>Preço:</Text>
            <TextInput value={String(produto.preco)} onChangeText={ (txt:string) => { handleInput(txt, "preco") } }/>
            <Text>Setor</Text>
            <TextInput value={produto.setor} onChangeText={ (txt:string) => { handleInput(txt, "setor") } }/>
            <Button title="Salvar" onPress={salvar}/>
            
            <Text style={{color: "red", fontSize:28}}>{ mensagem }</Text>
            <Modal visible={ loading }>
                <ActivityIndicator size={"large"}/>
            </Modal>
        </View>

    )
}

export {ProdutoView};