import {View, Text, TextInput, Button, Modal, ActivityIndicator} from 'react-native';
import { useContatoControl } from '../control/ContatoControl';


const ContatoView = ()=> { 

    const {contato, handleInput, salvar,
            loading, mensagem
    } = useContatoControl();

    return (
        <View style={{flex: 1}}>
            <Text>Agenda de Contato</Text>
            <Text>Nome: </Text>
            <TextInput value={contato.nome} onChangeText={(txt)=>{ handleInput( txt, "nome" ) }}/>
            <Text>Email: </Text>
            <TextInput value={contato.email} onChangeText={(txt)=>{ handleInput( txt, "email" ) }}/>
            <Text>Telefone: </Text>
            <TextInput value={contato.telefone} onChangeText={(txt)=>{ handleInput( txt, "telefone" ) }}/>
            <Button title="Salvar" onPress={salvar}/>
            <Text style={{color: "red", fontSize: 28}}>{ mensagem }</Text>
            <Modal visible={ loading }>
                <ActivityIndicator size={'large'}/>
            </Modal>
        </View>
    )



}

export default ContatoView;