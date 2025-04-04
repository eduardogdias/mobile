import React, { useState } from 'react';
import {View, Text, Button} from 'react-native';



const Contador = (props : any ) => {

  return (
    <View style={{flexDirection: "row", justifyContent: "center", alignSelf: "stretch"}}>
      <Button title= " - " onPress={ () => { props.setValor(props.valor - 1) } }/>
      <Text style={{fontSize: 64}}> {props.valor} </Text>
      <Button title= " + " onPress={()=>{props.setValor(props.valor + 1) }}/>
    </View>
  )
}



const Principal = () => {

  const [contador1, setContador1] = useState(0)
  const [contador2, setContador2] = useState(0)

  return(
    <View style={{flex: 1, justifyContent: "space-around", alignItems:"center"}}>
      <Text style={{fontSize: 48}}>Contador</Text>
      <Contador valor={contador1} setValor={setContador1}/>
      <Contador valor={contador2} setValor={setContador2}/>
      <Text style={{fontSize: 60}}>Soma: {contador1 + contador2}</Text>
    </View>
  )
}

export default Principal