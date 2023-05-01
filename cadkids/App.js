import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login        from './src/components/Login/Login';
import Formulario_1 from './src/components/Cadastro/formulario_1/formulario_1';
import Formulario_2 from './src/components/Cadastro/formulario_2/formulario_2';
import Formulario_3 from './src/components/Cadastro/formulario_3/formulario_3';
import Cliente      from './src/components/cliente/cliente';
const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName='Login'>
            
                <Stack.Screen name='Login'        component={Login} />
                <Stack.Screen name='formulario_1' component={Formulario_1}/>
                <Stack.Screen name='formulario_2' component={Formulario_2}/>
                <Stack.Screen name='formulario_3' component={Formulario_3}/>
                <Stack.Screen name='cliente'      component={Cliente}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}