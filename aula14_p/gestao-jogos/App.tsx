import React, {useState} from 'react';
import { Button, FlatList, ListRenderItemInfo, Text, TextInput, View } from 'react-native';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const {Screen, Navigator} = createStackNavigator(); // retorna um objeto (chave e valor, ent n tem ordem)

interface Jogo {  //1° definir o que é Jogo
  nome : string
  genero : string
  ano : number
}

interface FormularioProps extends ParamListBase {  // ParamListBase: são os props do Navigator
  onGravar : ( nome : string, genero : string, ano : number ) => void
}
const Formulario = (props : FormularioProps ) : React.ReactElement => { 
  const [nome, setNome] = useState<string>("");           
  const [genero, setGenero] = useState<string>("");     // 2° criar variáveis de estado para guardar a lista
  const [ano, setAno] = useState<string>("");

  return (
    <View style={{flex: 1, padding: 20}}>
      <TextInput placeholder="Nome do Jogo" value={nome} onChangeText={setNome}/>
      <TextInput placeholder="Gênero" value={genero} onChangeText={setGenero}/>
      <TextInput placeholder="Ano" value={ano} onChangeText={setAno}/> 

      <Button title="Gravar Jogo" onPress={()=>{
        props.onGravar(nome, genero, parseInt(ano)); //TextInput só trabalha com string, então tem que converter pra int
      }}/>
      <Button title="Ir Listagem" onPress={()=>{
        props.navigation.navigate("listagem")
      }}/>
    </View>
  )
}

const JogoItem = ( props : ListRenderItemInfo<Jogo> ) : React.ReactElement => {   // 3° componente Item que vai se preocupar em colocar apenas 1 jogo na tela
  return (
    <View>
      <Text>{props.item.nome}</Text>
      <Text>{props.item.genero}</Text>
      <Text>{props.item.ano}</Text>
    </View>
  )
}

interface ListagemProps extends ParamListBase{
  lista : Jogo[]
} 
const Listagem = ( props : ListagemProps ) : React.ReactElement => {  
  // 4° criar a listagem com FlatList
  // o FlatList vai ficar chamado o Item, cada vez passando um jogo diferente pra ele
  
  return (
    <View style={{flex: 1}}>
      <FlatList data={props.lista} renderItem={JogoItem}/>  
      <Button title="Ir Formulario" onPress={()=>{
        props.navigation.navigate("formulario")
      }}/>
    </View>
  )
}

export default function App() {
  const [lista, setLista] = useState<Jogo[]>([   // será passado pro componente Listagem via props
    {nome: "Super Mario World", genero: "aventura", ano: 1994} 
  ]);

  const gravar = ( nome : string, genero : string, ano : number ) : void => { // será passado pro componente Formulario via props
    const obj = {nome, genero, ano};
    const novaLista = [...lista, obj]; //pega tudo que já tinha na lista e adiciona o novo objeto
    setLista(novaLista);
  }

  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Text>Gestão de Jogos</Text>

        <Navigator initialRouteName="formulario">
          {/* <Screen name="formulario" component={Formulario}/>
          <Screen name="listagem" component={Listagem}/> 
          Quando precisa passar mais props, a Screen desse jeito não funciona*/}

          <Screen name="formulario">
            { ( navProps : ParamListBase) => <Formulario {...navProps} onGravar={gravar}/> }
          </Screen>

          <Screen name="listagem">
            { (navProps : ParamListBase) => <Listagem {...navProps} lista={lista}/>}
          </Screen>

        </Navigator>
      </View>
    </NavigationContainer>
  );
}


