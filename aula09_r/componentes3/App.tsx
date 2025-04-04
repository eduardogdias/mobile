import React from 'react';
import {View, Text, Modal, ActivityIndicator, FlatList, ListRenderItemInfo, FlatListProps} from 'react-native';
import { StatusBar } from 'expo-status-bar';

interface Contato{
  id: number
  nome: string
  telefone: string
  email: string
}

//-----------------------------------------------------------

// retorna um elementa da lista dos contatos
const ContatoItem = (props : ListRenderItemInfo<Contato>) => {
    return ( 
        <View style={{margin: 5, borderWidth: 1, padding: 5}}>
            <Text>Id: {props.item.id}</Text>
            <Text>Nome: {props.item.nome}</Text>
            <Text>Telefone: {props.item.telefone}</Text>
            <Text>Email: {props.item.email}</Text>
        </View>
    )
}


//-----------------------------------------------------------

// agora virou uma função pura
const Principal = () => {

  const contatos : Contato[] = [
    {id: 1, nome: 'Alfredo', telefone: '11111', email: 'alfredo@gmail.com'},
    {id: 2, nome: 'Beto', telefone: '22222', email: 'beto@gmail.com'},
    {id: 3, nome: 'Betina', telefone: '33333', email: 'betina@gmail.com'},
    {id: 4, nome: 'Alfredo', telefone: '11111', email: 'alfredo@gmail.com'},
    {id: 5, nome: 'Beto', telefone: '22222', email: 'beto@gmail.com'},
    {id: 6, nome: 'Betina', telefone: '33333', email: 'betina@gmail.com'},
    {id: 7, nome: 'Alfredo', telefone: '11111', email: 'alfredo@gmail.com'},
    {id: 8, nome: 'Beto', telefone: '22222', email: 'beto@gmail.com'},
    {id: 9, nome: 'Betina', telefone: '33333', email: 'betina@gmail.com'},
    {id: 10, nome: 'Alfredo', telefone: '11111', email: 'alfredo@gmail.com'},
    {id: 11, nome: 'Beto', telefone: '22222', email: 'beto@gmail.com'},
    {id: 12, nome: 'Betina', telefone: '33333', email: 'betina@gmail.com'},
    {id: 13, nome: 'Alfredo', telefone: '11111', email: 'alfredo@gmail.com'},
    {id: 14, nome: 'Beto', telefone: '22222', email: 'beto@gmail.com'},
    {id: 15, nome: 'Betina', telefone: '33333', email: 'betina@gmail.com'}
  
  ]
  
  //trabalhando com MODAL:
  return(
    <View style={{flex: 1, justifyContent: "center"}}>

      <StatusBar style='dark' backgroundColor='green' hidden={false}/>

      {/* <MostrarContatos lista={contatos}/> */}
      <FlatList data={contatos} renderItem={ContatoItem} keyExtractor={ (item: Contato, index: number) => {return "k-" + item.id} }/>

      <Modal visible={contatos.length <= 0}
             transparent={true}>
        <View  style={{flex:1, justifyContent:"center", alignItems: "center", backgroundColor:"#777777AA"}}>
          <Text>Carregando contatos</Text>

          {/* <ActivityIndicator size="large" color="red"/> */}

        </View>
      </Modal>

    </View>
  )
}



export default Principal