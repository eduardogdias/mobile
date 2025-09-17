import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ProdutoView } from './view/ProdutoView';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Exercício 12 - Validar Produto com Yup e Mostrar Erros em cada campo</Text>
      <StatusBar style="auto" />
      <ProdutoView/>
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
