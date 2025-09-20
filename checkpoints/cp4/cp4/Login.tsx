import { ParamListBase, useNavigation } from '@react-navigation/native';
import { useState } from "react"
import { View, Text, TextInput, Button} from "react-native"
import { estilos } from './Estilos';


const Login = () => {

    const navigation = useNavigation<any>()

    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    console.log("Tela de login")
    return(
        <View style={estilos.tela}>
            <Text style={estilos.titulo}>Login</Text>
            <View>
                <View style={estilos.campo_valor}>
                    <Text  style={estilos.campo}>Email: </Text>
                    <TextInput value={email} onChangeText={setEmail}  style={estilos.valor}/>
                </View>
                <View style={estilos.campo_valor}>
                    <Text style={estilos.campo}>Senha: </Text>
                    <TextInput value={senha} onChangeText={setSenha}  style={estilos.valor}/>
                </View>
            </View>     
            <View style={estilos.botao}>
                <Button title="Logar" onPress={()=>{
                    navigation.navigate("telas")
                }}/>
            </View>
        </View>                  
    )
}

export {Login}