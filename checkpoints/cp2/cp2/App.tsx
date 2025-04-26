
import { NavigationContainer, ParamListBase } from "@react-navigation/native"; 
import { createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ListRenderItemInfo } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, TextInput } from "react-native-gesture-handler";

const {Navigator, Screen} = createBottomTabNavigator()

//-------------------------------------------------

// Questão 1
interface Moto{
  marca_moto : string
  modelo_moto : string
  ano_moto : number
  cilindrada_moto : number
}

// Questão 6
interface FormularioProps extends ParamListBase{
  cadastrar : (obj : Moto) => void
}
const Formulario = ( props : FormularioProps) : React.ReactElement => {
  const [marca_moto_form, setMarca_moto_form] = useState<string>("")
  const [modelo_moto_form, setModelo_moto_form] = useState<string>("")
  const [ano_moto_form, setAno_moto_form] = useState<string>("")
  const [cilindrada_moto_form, setCilindrada_moto_form] = useState<string>("")


  // Questão 8
  function Carregar(){
    AsyncStorage.getItem("objeto")
    .then((retorno : string | null)=>{
      const objRetorno = JSON.parse(retorno || "Null") // se não tiver nada no async, ele escreve NULL nos TextInputs

      const listaRetorno = Object.values(objRetorno)
  
      setMarca_moto_form(objRetorno.marca_moto)
      setModelo_moto_form(objRetorno.modelo_moto)
      setAno_moto_form(String(objRetorno.ano_moto))
      setCilindrada_moto_form(String(objRetorno.cilindrada_moto))

      console.log("Informações lidas com sucesso")
      console.log("Lista lida: ",listaRetorno)
      console.log(listaRetorno[0])
      console.log(listaRetorno[1])
      console.log(listaRetorno[2])
      console.log(listaRetorno[3])
    })
    .catch(()=>{
      console.log("Erro ao buscar informações no AsyncStorage")
    })
  }
  
  return(
    <View style={{backgroundColor: "#603813"}}>
      <View style={estilos.form}>
        <Text style={estilos.nome}>Marca da Moto:</Text>
        <TextInput style={estilos.text} value={marca_moto_form} onChangeText={(input) => { setMarca_moto_form(input)} }/>
      </View>

      <View style={estilos.form}>
        <Text style={estilos.nome}>Modelo:</Text>
        <TextInput style={estilos.text} value={modelo_moto_form} onChangeText={(input) => { setModelo_moto_form(input)} }/>
      </View>

      <View style={estilos.form}>
        <Text style={estilos.nome}>Ano:</Text>
        <TextInput style={estilos.text} value={ano_moto_form} onChangeText={(input) => { setAno_moto_form(input)} }/>
      </View>

      <View style={estilos.form}>
        <Text style={estilos.nome}>Cilindras:</Text>
        <TextInput style={estilos.text} value={cilindrada_moto_form} onChangeText={(input) => { setCilindrada_moto_form(input)} }/>
      </View>

      {/* Questão 7 */}
      <Button title="Cadastrar" onPress={()=>{
        let cadastrarMoto : Moto = {
          marca_moto: marca_moto_form,
          modelo_moto: modelo_moto_form,
          ano_moto: parseInt(ano_moto_form),
          cilindrada_moto: parseInt(cilindrada_moto_form)
        }
        props.cadastrar(cadastrarMoto)
        //props.cadastrar({marca_moto_form, modelo_moto_form, parseInt(ano_moto_form), parseInt(cilindrada_moto_form)})
      }}/>

      {/* Questão 8 */}
      <Button title="Carregar" onPress={()=>{Carregar()}}/>
    </View>
  )
}


interface ListagemProps extends ParamListBase{
  listagem : Moto[]
}

// Questão 9
const Listagem = (props:ListagemProps) : React.ReactElement => {
  return(
    <View style={{backgroundColor: "#603813"}}>
      <FlatList data={props.listagem} renderItem={(props:ListRenderItemInfo<Moto>) : React.ReactElement => {
        return(
          <View style={{borderColor:'#dc2e43', borderRadius:15, borderWidth:3, backgroundColor:'#f0ff8a', marginVertical:8, marginHorizontal: 20, padding:10}}>
            <Text style={{fontSize:23, fontWeight:"bold"}}>{props.item.marca_moto}</Text>
            <Text style={{fontSize:17}}>{props.item.modelo_moto}</Text>
            <Text style={{fontSize:17}}>{props.item.cilindrada_moto}</Text>
          </View> 
        )   
      }}/>
    </View>
  )
}


const Principal = () => {
  // Questão 3
  const [listaMotos, setLitaMotos] = useState<Moto[]>([
    {marca_moto: "BMW", modelo_moto: "S1000RR", ano_moto: 2020, cilindrada_moto: 1000}
  ])

  // Questão 4
  function inserir (motoNova : Moto) {
    //const motoNova = [obj.marca_moto, obj.modelo_moto, obj.ano_moto, obj.cilindrada_moto]
    setLitaMotos([ ...listaMotos, motoNova])


    // Questão 5
    AsyncStorage.setItem("objeto", JSON.stringify(motoNova))
    .then(()=>{
      console.log("Moto salva com sucesso no AsyncStorage")
    })
    .catch((err)=>{
      console.log("Erro ao salvar moto AsyncStorage")
      console.log("Erro: ", err)
    })
  }


  

  return (
    // Questão 2
    <NavigationContainer>
      <View style={{flex:1, backgroundColor: "#603813"}}>
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
          <Text style={{fontSize:30, fontWeight:"bold", color: "white"}}>Motocicletas</Text>
        </View>

        <View style={{flex:2}}>
          <Navigator initialRouteName="formulario_moto" screenOptions={{headerShown: false}}>

            <Screen name="formulario_moto">
            {  ( navigatorProps : ParamListBase )=> <Formulario {...navigatorProps} cadastrar={inserir} /> }
            </Screen>

            <Screen name="listagem_moto">
            {  ( navigatorProps : ParamListBase )=> <Listagem {...navigatorProps} listagem={listaMotos} /> }
            </Screen>
            
          </Navigator>
        </View>
      </View>
    </NavigationContainer>



    
  )
}

export default Principal

const estilos = StyleSheet.create({
  form: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  text: {
    width: 200,
    backgroundColor: "white",
    height: 30,
    borderRadius: 10,
    borderColor: "blue",
    borderWidth: 1
  },
  nome:{
    fontSize: 20, 
    color: "white"
  }
});
