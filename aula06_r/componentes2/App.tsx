import React from 'react';
import {View, Text, Switch, Button, Alert, ToastAndroid, Image} from "react-native";

//importando a imagem
import imgBugatti from './assets/bugatti.jpg';

const Principal = () : React.ReactElement => {
  return(
    <View>
      <Text>Componentes 2</Text>
      
      <Switch thumbColor="blue" trackColor={{false: "red", true: "green"}} value={false}/>
    
      <Button title="Mensagem Alert" 
              onPress={ ()=>{ Alert.alert("Titulo: Mensagem de alerta", "Descrição: virus detectado!"); } }/>
    
      <Button title='Mensagem Toast'
              onPress={ ()=>{ ToastAndroid.show("Toast", ToastAndroid.LONG); } }/>

      <Image source={imgBugatti}
             resizeMode='contain'
             style={{width: '100%'}}/>
      <Image source={{uri: "https://www.reddit.com/r/PixelCarRacer/comments/meex2s/bugatti_chiron/"}}
             resizeMode='contain'
             style={{width: '100%'}}/>
    </View>
  )
}

export default Principal;