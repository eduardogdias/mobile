import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [nome, setNome] = useState<string>("")
  const lista = [true, 25, 43, 32, "Ticket", {"nome" : "Maria", "tel": "9999-9999"}]

  return (
    
    <View style={styles.container}>
      <View style={{flex: 1, marginHorizontal: 30, backgroundColor: "lightblue", justifyContent:"space-between", alignItems:'center'}}>
        <Text style={{fontSize:17, fontWeight:'bold'}}>Testando Async Storage - Dados Únicos</Text>

        <View>
          <Text style={{fontSize:15}}>Nome:</Text>
          <TextInput style={{backgroundColor:"white", borderRadius: 10, borderColor:"blue", borderWidth:1.5, height: 30}} value={nome} onChangeText={(texto:string)=>{setNome(texto)}}></TextInput>
        </View>

        <Button title="Gravar dados" onPress={()=>{
          // jeito simples:
          // const promessa = AsyncStorage.setItem("nome_completo", nome)
          // promessa.then(()=>{})
          // promessa.catch(()=>{})

          // jeito profissional:
          AsyncStorage.setItem("nome_completo", nome)
          .then(()=>{          
            console.log("Gravado com sucesso")
          })
          .catch(()=>{          
            console.log("Erro ao gravar")
          })
        }}/>

        <Button title="Ler dados" onPress={()=>{
          AsyncStorage.getItem("nome_completo")
          .then(( dados : string | null )=>{
            console.log("Nome informado: ", dados || "NULL")
          })
          .catch(( err : any )=>{
            console.log("Erro ao ler dados simples: ", err)
          })
        }}/>
      </View>

      
      <View style={{flex: 1, marginHorizontal: 30, backgroundColor: "lightgreen", justifyContent:"space-between", alignItems:'center'}}>
        <Text style={{fontSize:17, fontWeight:'bold'}}>Testando Async Storage - Listas</Text>
        
        <Button title="Gravar dados Complexos" onPress={()=>{
          AsyncStorage.setItem("dados_complexos", JSON.stringify(lista))
          .then(()=>{
            console.log("Dados complexos gravados com sucesso")
          })
          .catch((err)=>{
            console.log("Erro ao ler dados complexos: ", err)
          })
        }}/> 


      

        <Button title="Ler dados Complexos" onPress={()=>{
          AsyncStorage.getItem("dados_complexos")
          .then((dados : string | null)=>{
            console.log("Dados complexos lidos: ", dados)
            const listaLida = JSON.parse( dados || "NULL" )
            console.log("Lista lida: ",listaLida)
            console.log("Lista lida na posição 3: ", listaLida[3])
          })
          .catch((err)=>{
            console.log("Erro dados complexos: ", err)
          })
        }}/>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightcyan',
    alignItems: 'stretch'
  },
});
