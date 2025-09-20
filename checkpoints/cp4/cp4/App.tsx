import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from './Login';
import { Telas } from './Telas';

const {Navigator, Screen} = createStackNavigator();

// Tarefa 10
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Navigator initialRouteName='login' screenOptions={{headerShown: false}}>
          <Screen name="login" component={Login}/>
          <Screen name="telas" component={Telas}/>
        </Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#603813',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20
  },
});
