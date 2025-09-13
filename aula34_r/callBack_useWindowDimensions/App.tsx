import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ContatoView from './view/ContatoView';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu App</Text>
      <StatusBar style="auto" />
      <ContatoView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    padding: 25,
    justifyContent: 'center',
  },
});