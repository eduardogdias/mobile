import React from 'react';
import {View, Text} from 'react-native';

// código da aula passada: 
// e sa lista de contatos estiver vazia? Vai aparecer uma mensagem no Principal

interface Contato{
  id: number
  nome: string
  telefone: string
  email: string
}
const contatos : Contato[] = [
  // {id: 1, nome: 'Alfredo', telefone: '11111', email: 'alfredo@gmail.com'},
  // {id: 2, nome: 'Beto', telefone: '22222', email: 'beto@gmail.com'},
  // {id: 3, nome: 'Betina', telefone: '33333', email: 'betina@gmail.com'},
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
      { (contatos.length <= 0) && <Text>Não há contatos</Text>} 
      {contatosExibir}
    </View>
  )
}
//---------------------------------------------------------------
// dependendo do conteúdo da variável é exibida uma tela diferente

// manualmente:
const App = () => { 
  const nomeTela = "login";
  return ( 
    <View style={{flex: 1}}>
      { (nomeTela === "home") && <Home/>} 
      { (nomeTela !== "home") && <Login/>} 
    </View>
  )
}

// operador ternário:
const AppTernario = () => { 
  const nomeTela = "login";
  return ( 
    (nomeTela === "home") ? <Home/> : <Login/>
  )
}

const Home = () => {
  return(
    <View style={{backgroundColor: "lightgreen", flex: 1, justifyContent: "center"}}>
      <Text style={{fontSize: 32}}>Home</Text>
    </View>
  )
}

const Login = () => {
  return(
    <View style={{backgroundColor: "lightblue", flex: 1, alignItems: "center"}}>
      <Text style={{fontSize: 32}}>Login</Text>
    </View>
  )
}



export default AppTernario