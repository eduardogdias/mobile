import {View, Text, TextInput, Button, Modal, ActivityIndicator, FlatList, ListRenderItemInfo} from 'react-native';
import { useContatoControl } from '../control/ContatoControl';
import { Contato } from '../model/contato';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const {Screen, Navigator} = createBottomTabNavigator();

const ContatoView = ()=> { 

    const {contato, handleInput, salvar,
            loading, mensagem,
            contatoErro, sucesso,
            carregar, contatoLista
    } = useContatoControl();

    return (
        <View style={{flex: 1}}>
            <Text>Agenda de Contato</Text>
            <Text style={{color: sucesso ? "green" : "red", fontSize: 28}}>{ mensagem }</Text>

            <Navigator>
                <Screen name="Formulário Contato"> 
                    { () => 
                    <View style={{flex: 3}}>
                        
                        <Text>Nome: </Text>
                        <Text style={{color: "red"}}>{ contatoErro.nome }</Text>
                        <TextInput value={contato.nome} onChangeText={(txt)=>{ handleInput( txt, "nome" ) }}/>
                        
                        <Text>Email: </Text>
                        <Text style={{color: "red"}}>{ contatoErro.email }</Text>
                        <TextInput value={contato.email} onChangeText={(txt)=>{ handleInput( txt, "email" ) }}/>
                        
                        <Text>Telefone: </Text>
                        <Text style={{color: "red"}}>{ contatoErro.telefone }</Text>
                        <TextInput value={contato.telefone} onChangeText={(txt)=>{ handleInput( txt, "telefone" ) }}/>
                        
                        <Button title="Salvar" onPress={salvar}/>
                    </View>
                    }
                </Screen>

                <Screen name="Listagem">
                    { () =>
                        <View style={{flex: 5}}>
                            <Button title="Carregar" onPress={carregar}/>
                            <FlatList data={contatoLista} style={{flex: 1}}
                                renderItem={( { item } : ListRenderItemInfo<Contato> )=>{
                                return (
                                    <View style={{backgroundColor: "lightyellow", borderColor: "red", borderWidth: 1, padding: 5, margin: 5}}>
                                        <Text>{item.nome}</Text>
                                        <Text>{item.telefone}</Text>
                                        <Text>{item.email}</Text>
                                    </View>
                                );
                            }} />
                        </View>  
                    }
                </Screen>

            </Navigator>

            <Modal visible={ loading }>
                <ActivityIndicator size={'large'}/>
            </Modal>          

        </View>
        
    )



}

export default ContatoView;