import { StyleSheet, Switch, Text, View, Image, ImageBackground, Button} from 'react-native';
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// const componenteNavegacao = createStackNavigator()
// componenteNavegacao.Navigator
// componenteNavegacao.Screen

const {Navigator, Screen} = createStackNavigator()

const TelaA = (props : any) => {
  return(
    <View style={{flex:4, backgroundColor: 'lightblue', justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize: 20, fontWeight: "bold"}}>Tela A</Text>
      <Button title="Ir para Tela B" onPress={()=>{
        props.navigation.navigate("telaB")
      }}/>
    </View>
  )
}

const TelaB = (props : any) => {
  return(
    <View style={{flex:4, backgroundColor: 'lightgreen', justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize: 20, fontWeight: "bold"}}>Tela B</Text>
      <View style={{flexDirection: "row"}}>
        <Button title="Voltar para Tela A" onPress={()=>{
          // props.navigation.navigate("telaA") // está indo pra Tela A (adiciona no back stack)
          props.navigation.goBack() //volta pra camada anterior do back stack
        }}/>
        <Button title="Ir para Tela C" onPress={()=>{
          props.navigation.navigate("telaC")
        }}/>
      </View>
    </View>
  )
}

const TelaC = (props : any) => {
  return(
    <View style={{flex:4, backgroundColor: 'lightyellow', justifyContent:"center", alignItems:"center"}}>
      <Text style={{fontSize: 20, fontWeight: "bold"}}>Tela C</Text>
      <Button title="Ir para Tela A" onPress={()=>{
        // props.navigation.navigate("telaA")
        // props.navigation.popTo("telaA") //limpa o back stack
        props.navigation.popToTop() //limpa o back stack e vai pra tela do initialRouteName
      }}/>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>

      <View style={{flex:1}}>
        <View style={{flex:1, backgroundColor: 'lightgray', justifyContent:'center', alignItems:'center'}}>
          <Text style={{fontSize: 30, fontWeight: "bold"}}>Banner qualquer</Text>
        </View>

        <View style={{flex:3}}>
          <Navigator initialRouteName='telaA'>
            <Screen name="telaA" component={TelaA}/>
            <Screen name="telaB" component={TelaB}/>
            <Screen name="telaC" component={TelaC}/>
          </Navigator>
        </View>
      </View>

    </NavigationContainer>
  );
}


