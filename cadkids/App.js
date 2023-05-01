import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login        from './src/components/Login/Login';
import formulario_1 from './src/components/Cadastro/formulario_1/formulario_1';
import formulario_2 from './src/components/Cadastro/formulario_2/formulario_2';
import formulario_3 from './src/components/Cadastro/formulario_3/formulario_3';

const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName='Login'>
            
                <Stack.Screen name='Login'    component={Login} />
                <Stack.Screen name='formulario_1' component={formulario_1}/>
                <Stack.Screen name='formulario_2' component={formulario_2}/>
                <Stack.Screen name='formulario_3' component={formulario_3}/>


            </Stack.Navigator>
        </NavigationContainer>
    )
}