import React from 'react';
import {View, Text} from 'react-native';


interface Contato{
  id: number
  nome: string
  telefone: string
  email: string
}
const contatos : Contato[] = [
  {id: 1, nome: 'Alfredo', telefone: '11111', email: 'alfredo@gmail.com'},
  {id: 2, nome: 'Beto', telefone: '22222', email: 'beto@gmail.com'},
  {id: 3, nome: 'Betina', telefone: '33333', email: 'betina@gmail.com'},
]



const Principal = () => {

  const contatosExibir : React.ReactElement[] = []

  for(let contato of contatos){
    contatosExibir.push(
      <View style={{backgroundColor: "lightcyan", borderWidth: 1, margin: 5, padding: 5, borderRadius: 5}}>
        <Text>Id: {contato.id}</Text>
        <Text>Nome: {contato.nome}</Text>
        <Text>Telefone: {contato.telefone}</Text>
        <Text>Email: {contato.email}</Text>
      </View>
    )
  }

  return(
    <View style={{flex: 1, justifyContent: "center"}}>
      <Text>Lista de Contatos</Text>
      {contatosExibir}
    </View>
  )
}

export default Principal