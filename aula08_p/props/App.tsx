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


// retorna a lista com todos os contatos
const MostrarContatos = () => {
    const listaVisuais = contatos.map(  
        ( item : Contato ) => {       
            return (
                <ContatoItem nome={item.nome} id={item.id} email={item.email} telefone={item.telefone} corFundo="pink" />
            );
        });
    return listaVisuais;
}

//-----------------------------------------------------------

const Principal = () => {

  return(
    <View style={{flex: 1, justifyContent: "center"}}>
      { (contatos.length <= 0) && <Text>Não há contatos</Text>} 
      <MostrarContatos/>
    </View>
  )
}



export default Principal