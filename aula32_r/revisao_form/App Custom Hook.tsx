import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

// criando um hook
function useIncrementador(){
  const[numero, setNumero] = useState<number>(0)
  const funcaoAtualizar = (numeroAntigo : number)=>{
      const novoNumero = numeroAntigo + 1
      console.log("Número: ", novoNumero)
      return novoNumero
  }

  const incrementar = () => {
    setNumero(funcaoAtualizar)
  }

  return [numero, incrementar]
}


export default function App() {
  const [quantidade, incrementarQuantidade] = useIncrementador()
  const [bola, incrementarBolas] = useIncrementador()

  return (
    <View style={styles.container}>
      <Text>Quantidade: {quantidade}</Text>
      <Button title="Incrementar" onPress={ incrementarQuantidade }/>
      <Text>Bola: {bola}</Text>
      <Button title="Incrementar" onPress={ incrementarBolas }/>
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
