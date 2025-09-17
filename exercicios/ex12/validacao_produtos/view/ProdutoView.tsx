import { View, Text, TextInput, Button, Modal, ActivityIndicator } from "react-native";
import { useProdutoControl } from "../control/ProdutoControl";

const ProdutoView = () => {

    const {produto, salvar, handleInput,
            loading, mensagem,
            produtoErro, sucesso
     } = useProdutoControl()

    return(
        <View>
            <Text>Cadastro de Produtos</Text>
            <Text>Id:</Text>
            <Text style={{color: "red"}}>{produtoErro.id}</Text>
            <TextInput value={String(produto.id)} onChangeText={ (txt:string) => { handleInput(txt, "id") } }/>
            
            <Text>Nome:</Text>
            <Text style={{color: "red"}}>{produtoErro.nome}</Text>
            <TextInput value={produto.nome} onChangeText={ (txt:string) => { handleInput(txt, "nome") } }/>
           
            <Text>Preço:</Text>
            <Text style={{color: "red"}}>{produtoErro.preco}</Text>
            <TextInput value={String(produto.preco)} onChangeText={ (txt:string) => { handleInput(txt, "preco") } }/>
           
            <Text>Setor</Text>
            <Text style={{color: "red"}}>{produtoErro.setor}</Text>
            <TextInput value={produto.setor} onChangeText={ (txt:string) => { handleInput(txt, "setor") } }/>
           
            <Button title="Salvar" onPress={salvar}/>
            
            <Text style={{color: sucesso ? "green" : "red", fontSize:28}}>{ mensagem }</Text>
            <Modal visible={ loading }>
                <ActivityIndicator size={"large"}/>
            </Modal>
        </View>

    )
}

export {ProdutoView};