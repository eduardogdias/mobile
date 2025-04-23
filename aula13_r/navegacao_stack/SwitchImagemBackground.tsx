import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View, Image, ImageBackground} from 'react-native';
import React, { useState } from 'react'
import imgWindows from './assets/windows.png'

export default function App() {
  const [modo, setModo] = useState<boolean>(true)

  return (
    <View style={styles.container}>

      {/* <Image source={require("./assets/windows.png")}/> */}
      {/* <Image source={imgWindows} resizeMode='contain' style={{height:'25%'}}/> */}
      <ImageBackground source={imgWindows} resizeMode='cover' style={{flex:1, height:'80%', backgroundColor:'yellow', justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'white', fontSize: 42, fontWeight: "bold"}}>Windows 11</Text>
      </ImageBackground>

      <Text>Componentes II</Text>
      <View style={{flex: 3, flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-around'}}>
        <Text>Modo escuro</Text>
        <Switch thumbColor="green"
        value={modo}
        onValueChange={setModo}
        trackColor={{
          true: "lightgreen",
          false: "lightred"
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
