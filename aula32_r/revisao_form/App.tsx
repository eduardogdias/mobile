import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

// criando um custom hook
function useContatoFormulario(){
  const [nome, setNome] = useState<string>("")
  const [telefone, setTelefone] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  const[lista, setLista] = useState<any[]>([])

  function salvar(){
    setLista( [...lista, {nome, telefone, email} ] ) 
  }

  return {nome, setNome, 
    telefone, setTelefone, 
    email, setEmail,
    salvar}
}


export default function App() {

  const {nome, setNome, 
        telefone, setTelefone, 
        email, setEmail, salvar} = useContatoFormulario()

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput value={nome} onChangeText={setNome}/>
      <Text>Telefone:</Text>
      <TextInput value={telefone} onChangeText={setTelefone}/>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail}/>
      
      <Button title="Salvar" onPress={ salvar }/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
