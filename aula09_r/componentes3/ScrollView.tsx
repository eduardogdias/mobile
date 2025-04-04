import React from 'react';
import {View, Text, Modal, ActivityIndicator, ScrollView} from 'react-native';


interface Contato{
  id: number
  nome: string
  telefone: string
  email: string
}

//-----------------------------------------------------------

//definir as coisas que o contato deve ter
interface ContatoProps{
    id: number
    nome: string
    email: string
    telefone?: string //opcional
    corFundo?: string //opcional
}


// retorna um elementa da lista dos contatos
const ContatoItem = (props : ContatoProps) => {
    return ( 
        <View style={{backgroundColor: 
                            props.corFundo === undefined ? "lightyellow" : props.corFundo,
                      margin: 5, borderWidth: 1, padding: 5, 
                    }}>
            <Text>Id: {props.id}</Text>
            <Text>Nome: {props.nome}</Text>
            <Text>Telefone: {props.telefone}</Text>
            <Text>Email: {props.email}</Text>
        </View>
    )
}

interface MostrarContatosProps{
  lista: Contato[]
}


function MostrarContatos(props : MostrarContatosProps) : React.ReactElement{
  const listaVisuais : React.ReactElement[] = props.lista.map(  
        ( item : Contato ) => {       
            return (
                <ContatoItem nome={item.nome} id={item.id} email={item.email} telefone={item.telefone} corFundo="pink" 
                             key={item.id}/>
            );
        });
    return <ScrollView>{listaVisuais}</ScrollView>;
}
// retorna a lista com todos os contatos (agora essa função virou pura)

//const MostrarContatos = (props : MostrarContatosProps) : React.ReactElement[] => {    
//}

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

      <MostrarContatos lista={contatos}/>

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