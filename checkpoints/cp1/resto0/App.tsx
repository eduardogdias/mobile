import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, ListRenderItemInfo, FlatList, TouchableOpacity} from 'react-native';


const Formulario = (props:any) : React.ReactElement =>{
  const [cpf_reser, setCpf_reser] = useState("")
  const [data_reser, setData_reser] = useState("")
  const [unidade_reser, setUnidade_reser] = useState("")

  return(
    <View style={{marginVertical: 50, height:220, justifyContent:'space-between'}}>

      <View style={estilos.view_form}>
        <Text style={estilos.campo_form}>CPF Cliente:</Text>
        <TextInput style={estilos.input_form} onChangeText={ (valor) => { setCpf_reser(valor)} } value={cpf_reser}></TextInput>
      </View>

      <View style={estilos.view_form}>
        <Text style={estilos.campo_form}>Data Reserva:</Text>
        <TextInput style={estilos.input_form} onChangeText={ (valor) => { setData_reser(valor)} } value={data_reser}></TextInput>
      </View>

      <View style={estilos.view_form}>
        <Text style={estilos.campo_form}>Unidade:</Text>
        <TextInput style={estilos.input_form_unidade} onChangeText={ (valor) => { setUnidade_reser(valor)} } value={unidade_reser}></TextInput>
      </View>

      <TouchableOpacity style={estilos.botao} onPress={() => {props.onSalvar(cpf_reser, data_reser, unidade_reser)
                                                              setCpf_reser("")
                                                              setData_reser("")
                                                              setUnidade_reser("")}}>
        <Text style={estilos.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )

}

// ---------------------

interface Reserva{
  cpf_reser : string
  data_reser : string
  unidade_reser : string
}

const ReservaIndividual = (props:ListRenderItemInfo<Reserva>) : React.ReactElement => {
  return(
    <View style={{borderColor:'lightgreen', borderRadius:15, borderWidth:3, backgroundColor:'#f0ff8a', marginVertical:8, padding:10}}>
      <Text style={{fontSize:22, fontWeight:"bold"}}>{props.item.cpf_reser}</Text>
      <Text style={{fontSize:18}}>{props.item.data_reser}</Text>
      <Text style={{fontSize:18}}>{props.item.unidade_reser}</Text>
    </View>
  )
}


const Listagem = (props:any) : React.ReactElement => {

  return(
    <View style={{flex:1, marginTop:50}}>
      <FlatList data={props.lista} renderItem={ReservaIndividual} keyExtractor={ (reserva : Reserva) => {return "reser" + reserva.cpf_reser} }/>
    </View>
  )
}

// ---------------------


const Principal = () => {

  const[listaReservas, setListaReservas] = useState<Reserva[]>([
    {cpf_reser: '1111', data_reser: '17/06/2025', unidade_reser: 'A3'}
  ])

  const salvar = (cpf_reser: string, data_reser:string, unidade_reser:string) => {
    setListaReservas([ ...listaReservas, {cpf_reser, data_reser, unidade_reser}])
  }

  const [tela, setTela] = useState('cadastro')
  

  return(
    <View style={estilos.container}>

      <View style={{flex:1, backgroundColor:'navy', justifyContent:'center'}}>
        <Text style={{fontSize: 50, color: 'white', textAlign:'center', fontWeight:"bold"}}>Controle de Reservas</Text>

      </View>

      <View style={{flex:4, backgroundColor:'navy', paddingHorizontal:20}}>

        { (tela == 'cadastro') ? <Formulario onSalvar={salvar}/> : 
                                                                  <View>
                                                                    <Listagem lista={listaReservas}/>
                                                                    { (listaReservas.length <=0) && <Text style={{color:'white', fontSize:25, justifyContent:'center', textAlign:'center'}}>Nenhuma reserva encontrada</Text> }
                                                                  </View>
                                                                  }

        <View style={{height:200, justifyContent:'flex-start'}}>
        { (tela == 'cadastro') ?               
                                // <Button title={"Ir para Listagem"} onPress={ () => {setTela('login')} }/>    

                                <TouchableOpacity style={estilos.botao} onPress={() => {setTela('login')}}>
                                 <Text style={estilos.textoBotao}>Ir para Listagem</Text>
                                </TouchableOpacity>
                               :
                                //<Button title={"Ir para o Forumalário"} onPress={ () => {setTela('cadastro')} }/>
                                <TouchableOpacity style={estilos.botao} onPress={() => {setTela('cadastro')}}>
                                 <Text style={estilos.textoBotao}>Ir para o Formulário</Text>
                                </TouchableOpacity>
                                 
        }
         </View> 
      </View>
      
    </View>
  )
}

export default Principal



const estilos = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'stretch'
  },
  campo_form : {
    color: "white",
    fontSize: 18,
    flexWrap: 'wrap'
  },
  input_form : {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'blue',
    height: 40,
    width: "73%"
  },
  view_form : {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  input_form_unidade : {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'blue',
    height: 40,
    marginBottom: 20,
    width: "73%"
  },
  botao: {
    backgroundColor: '#2b63c2', 
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})