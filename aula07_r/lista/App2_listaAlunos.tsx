import React from 'react';
import {Text, View} from "react-native";

interface Aluno{
  ra: string
  nome: string
  media: number
}
const alunos : Aluno[] = [
  {ra: "111", nome: "Eduardo", media: 10},
  {ra: "222", nome: "Fernando", media: 8},
  {ra: "333", nome: "Rodrigo", media: 7}
]
const listaExibir : React.ReactElement[] = [ ]


const Principal = () => {

  for(const aluno of alunos){
    listaExibir.push(
      <View style={{backgroundColor:"lightyellow", margin: 5, borderWidth: 1, padding: 5}}>
        <Text>RA: {aluno.ra} </Text>
        <Text>Nome: {aluno.nome} </Text>
        <Text>Média: {aluno.media} </Text>
      </View>
    )
  }

  return(
    <View style={{flex:1, justifyContent: "center"}}>
      <Text>Lista de Alunos</Text>
      {listaExibir}
    </View>
  )
}

export default Principal