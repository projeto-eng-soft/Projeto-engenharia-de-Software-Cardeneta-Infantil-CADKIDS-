import { NavigationContainer  }       from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login           from './src/components/Login/Login';
import Formulario_1    from './src/components/Cadastro/paginas/formulario_1/formulario_1';
import Formulario_2    from './src/components/Cadastro/paginas/formulario_2/formulario_2';
import Formulario_3    from './src/components/Cadastro/paginas/formulario_3/formulario_3';

import Cliente         from './src/components/Cliente/Drawer_cliente';
import Recuperar_senha from './src/components/Recuperar_senha/Recuperar_senha';


const Stack  = createNativeStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName='Login'>
            
                <Stack.Screen name='Login'              component={Login}           />
                <Stack.Screen name='Formulario_1'       component={Formulario_1}    />
                <Stack.Screen name='Formulario_2'       component={Formulario_2}    />
                <Stack.Screen name='Formulario_3'       component={Formulario_3}    />
                <Stack.Screen name='home_Cliente'       component={Cliente}         />
                <Stack.Screen name='Recuperar_senha'    component={Recuperar_senha} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}