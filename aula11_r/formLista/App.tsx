import React, { useState } from 'react'
import {View, Text, TextInput, Button, StyleSheet, FlatList, ListRenderItem, ListRenderItemInfo} from 'react-native'

interface FormularioProps{
  onSalvar: (nome:string, telefone:string, email:string) => void
}
const Formulario = (props:FormularioProps) : React.ReactElement => {
  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")

  

  return(
    <View style={{flex: 1, paddingVertical: 20, paddingHorizontal: 20, justifyContent: "space-around"}}>
      <Text style={{fontSize: 20, marginBottom: 20, alignSelf: "center"}}>Agenda de Contato</Text>

      <View>
        <Text style={estilos.campo}>Nome completo:</Text>
        <TextInput style={estilos.input} value={nome} onChangeText={ (valor) => {setNome(valor)} }></TextInput>
      </View>

      <View>
        <Text style={estilos.campo}>Telefone:</Text>
        <TextInput style={estilos.input} value={telefone} onChangeText={ (valor) => {setTelefone(valor)}}></TextInput>
      </View>

      <View>
        <Text style={estilos.campo}>Email:</Text>
        <TextInput style={estilos.input} value={email} onChangeText={ (valor) => {setEmail(valor)} }></TextInput>
      </View>

      <Button title='Gravar' color='orange' onPress={ () => { props.onSalvar(nome, telefone, email)
                                                              setNome("")
                                                              setTelefone("")
                                                              setEmail("")
                                                            } }>
      </Button>
    </View>
  )
}

// ------------------------------------

interface Contato{
  nome : string
  telefone : string
  email : string
}


// ele ta pegando nome, telefone eemail que está dentro do ITEM, que está dentro do PROPS
const ContatoItem = (props: ListRenderItemInfo<Contato>) : React.ReactElement => {
  return(
    <View style={estilos.contatoItem}>
      <Text>{props.item.nome}</Text>
      <Text>{props.item.telefone}</Text>
      <Text>{props.item.email}</Text>
    </View>
  )
}



interface ListagemProps{
  lista : Array<Contato>
}

const Listagem = (props:ListagemProps) : React.ReactElement => {
  return(
    <FlatList data={props.lista} renderItem={ContatoItem} keyExtractor={ (item:Contato) => {return item.email} }/>
  )
}


//-------------------------------------------------

const Principal = () => {

  const [listaContatos, setListaContatos] = useState<Contato[]>([
    {nome: 'Hugo', telefone: '111', email: 'hugo@gmail.com'},
    {nome: 'Heitor', telefone: '222', email: 'heitor@gmail.com'}
  ])

  // const listaContatos : Contato[] = [
  //   {nome: 'Hugo', telefone: '111', email: 'hugo@gmail.com'},
  //   {nome: 'Heitor', telefone: '222', email: 'heitor@gmail.com'}
  // ]

  const salvar = (nome:string, telefone:string, email:string) => {
    console.log("Nome: " + nome)
    console.log("telefone: " + telefone)
    console.log("email: " + email)

    //listaContatos.push({nome: nome, telefone: telefone, email: email})
    const obj = {nome, telefone, email}
    const novaLista = [ ...listaContatos, obj]
    setListaContatos( novaLista )

  }


  return(
    <View style={estilos.container}>

      <Formulario onSalvar={salvar}/>

      <View style={{flex: 2}}>
        <Listagem lista={listaContatos}/>
      </View>

    </View>
    
  )
  
}

export default Principal



const estilos = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  campo : {
    fontSize: 12
  },
  input : {
    backgroundColor: 'lightblue',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'blue',
    height: 30
  },
  contatoItem : {
    backgroundColor: "lightyellow", 
    marginHorizontal: 10, 
    marginVertical: 5, 
    padding: 5, 
    borderWidth: 2, 
    borderColor: "orange", 
    borderRadius: 10
  }
})

