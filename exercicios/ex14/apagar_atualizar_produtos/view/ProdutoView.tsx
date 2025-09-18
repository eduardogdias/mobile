import { View, Text, TextInput, Button, Modal, ActivityIndicator, FlatList, ListRenderItemInfo } from "react-native";
import { useProdutoControl } from "../control/ProdutoControl";
import { Produto } from "../model/Produto";
import { FontAwesome5 as Icon } from '@expo/vector-icons';

const ProdutoView = () => {

    const {produto, salvar, handleInput,
            loading, mensagem,
            produtoErro, sucesso,
            carregar, produtoLista,
            apagar, atualizar
     } = useProdutoControl()

    return(
        <View>
            <Text>Cadastro de Produtos</Text>            
            <Text style={{color: sucesso ? "green" : "red", fontSize:28}}>{ mensagem }</Text>

            <View>     
                {/* <Text>Id:</Text>
                <Text style={{color: "red"}}>{produtoErro.id}</Text>
                <TextInput value={String(produto.id)} onChangeText={ (txt:string) => { handleInput(txt, "id") } }/>
                 */}
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
            </View>

            <View>
                <Button  title="Carregar" onPress={carregar}/>
                <FlatList data={produtoLista} renderItem={( { item } : ListRenderItemInfo<Produto> )=>{
                    return(
                        <View style={{backgroundColor: "lightgray", borderColor: "gray", borderWidth: 1, padding: 5, marginTop: 5,
                            flexDirection:'row', justifyContent:"space-between"
                        }}>
                            <View>
                                <Text>{item.nome}</Text>
                                <Text>{item.preco}</Text>
                                <Text>{item.setor}</Text>
                            </View>
                            <View style={{flexDirection: "row", width: 80, justifyContent:'space-between', margin: 10}}>
                                <Icon name="trash" size={28} color="red" onPress={()=>{ apagar( String(item.id) ) }}/> 
                                <Icon name="edit" size={28} color="blue" onPress={()=>{ atualizar( String(item.id) ) }}/>                                                
                            </View>
                        </View>   
                    )
                }}/>
            </View>

            <Modal visible={ loading }>
                <ActivityIndicator size={"large"}/>
            </Modal>
        </View>
    )
}

export {ProdutoView};