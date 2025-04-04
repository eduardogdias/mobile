import React, { useState } from 'react';
import {View, Text, Button} from 'react-native';



const Contador = (props : any ) => {

  const [contador, setContador] = useState(10)

  return (
    <View style={{flexDirection: "row", justifyContent: "center", alignSelf: "stretch"}}>
      <Button title= " - " onPress={ () => { setContador(contador - 1) } }/>
      <Text style={{fontSize: 64}}> {contador} </Text>
      <Button title= " + " onPress={()=>{ setContador(contador + 1) }}/>
    </View>
  )
}



const Principal = () => {
  return(
    <View style={{flex: 1, justifyContent: "space-around", alignItems:"center"}}>
      <Text style={{fontSize: 48}}>Contador</Text>
      <Contador/>
    </View>
  )
}

export default Principal