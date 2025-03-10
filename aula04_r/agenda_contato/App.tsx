import React from 'react'
import {View, Text, Button, TextInput, StyleSheet} from 'react-native'


function Principal (){
  return(
    <View style={{flex: 1, alignItems: "stretch", backgroundColor: "lightgray", paddingVertical: 25, paddingHorizontal:15}}>
      <Text style={{fontSize: 28, textAlign: "center", marginBottom: 15}}>Agenda de contato</Text>
   
      <Text style={estilos.textCampo}>Nome:</Text>
      <TextInput style={estilos.textInput}></TextInput>
  
      <Text style={estilos.textCampo}>Telefone:</Text>
      <TextInput style={estilos.textInput}></TextInput>
    
      <Text style={estilos.textCampo}>Email:</Text>
      <TextInput style={estilos.textInput}></TextInput>

      <Button title='Adicionar' color={"green"}></Button>
      <Button title='Pesquisar' color={"green"}></Button>

    </View>
  )
}

//forma correta de se criar uma folha de estilos
const estilos = StyleSheet.create({
  textInput: { backgroundColor: "lightcyan", 
    borderWidth: 1, 
    borderColor: "black",
    shadowColor: "black",
    shadowRadius: 20,
    shadowOffset: {width: 5, height: 5},
    marginBottom: 30, 
    width: "80%", 
    height:30, 
    fontSize: 15, 
    borderRadius: 5, 
    marginLeft:20,
    marginVertical: 10
  },
  textCampo: {
    fontSize: 18, 
    marginTop: 15, 
    marginLeft: 20
  }
})


//O estilo funciona se fizer desse jeito e chamar no style, só que o TS não entende que isso
//é uma floa de estilo, ent precisamos fazer do jeito a cima
const estiloTextInput = { 
  backgroundColor: "lightcyan", 
  borderWidth: 1, 
  borderColor: "black",
  shadowColor: "black",
  shadowRadius: 20,
  shadowOffset: {width: 5, height: 5},
  marginBottom: 30, 
  width: "80%", 
  height:30, 
  fontSize: 15, 
  borderRadius: 5, 
  marginLeft:20
}

export default Principal;