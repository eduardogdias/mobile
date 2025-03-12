import React from 'react'
import {View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native'


function Restaurante (){
  return(
    <View style={{flex:1, paddingVertical: 25, backgroundColor: '#97bacb'}}>
      <View style={{backgroundColor: '#6990d5'}}>
        <Text style={{color: 'white', fontSize: 40, padding: 10, textAlign: 'center'}}>Restaurante</Text>
      </View>

      <View style={{paddingLeft: 20, paddingRight: 20}}>
        <Text style={estilos.text}>Nome estabelcimento</Text>
        <TextInput style={estilos.textInput}></TextInput>

        <Text style={estilos.text}>Tipo conta</Text> 
        <TextInput style={estilos.textInput}></TextInput>
        
        <Text style={estilos.text}>Nível do preço</Text> 
        <TextInput style={estilos.textInput}></TextInput>
        
        <Text style={estilos.text}>Satisfação geral</Text> 
        <TextInput style={estilos.textInput}></TextInput>
        
        <Text style={estilos.text}>Endereço</Text> 
        <TextInput style={estilos.textInput}></TextInput>
        

        <View style={{display: 'flex',flexDirection: 'row', justifyContent: 'space-evenly'}}>
          {/* <Button title='Gravar'></Button>
          <Button title='Pesquisar'></Button> */}
          <TouchableOpacity style={estilos.botao}><Text style={{color: 'white', fontSize: 20}}>Gravar</Text></TouchableOpacity>
          <TouchableOpacity style={estilos.botao}><Text style={{color: 'white', fontSize: 20}}>Pesquisar</Text></TouchableOpacity>
        </View>
      </View>
      
    </View>

  )
}
export default Restaurante




const estilos = StyleSheet.create({
  text: {
    color: 'white',
    paddingTop: 20,
    paddingBottom: 5,
    fontSize: 25
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#8ba9dd',
    borderRadius: 13,
    height: 40,
    fontSize: 20,
    backgroundColor: 'white'
  },
  botao: {
    backgroundColor: '#2c64c6',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 15,
    borderRadius: 15,
    marginTop: 25
  }
})