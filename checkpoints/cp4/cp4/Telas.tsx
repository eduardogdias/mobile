import { Formulario } from './Formulario';
import { Listagem } from './Listagem';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const {Navigator, Screen} = createBottomTabNavigator();

// Tarefa 11
const Telas = () => {
  return (
    <Navigator initialRouteName="Formulário" screenOptions={{ headerShown: false }}>
      <Screen name="Formulário" component={Formulario} />
      <Screen name="Listagem" component={Listagem} />
    </Navigator>
  )
}


export {Telas}
