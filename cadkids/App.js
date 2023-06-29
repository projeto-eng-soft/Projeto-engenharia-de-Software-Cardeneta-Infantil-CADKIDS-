import { NavigationContainer  }       from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*Login  , cadastro de usuario(formulario 1a3) e recuperacao de senha */ 
import Login           from './src/components/Login/paginas/Login';
import Cadastro        from 'src/components/Cadastro/Cadastro';
import Medico          from 'src/components/Profissional/stack_profisssional';
import Recuperar_senha from './src/components/Recuperar_senha/Recuperar_senha';


/**/
import Crianca         from './src/components/Crianca/Drawer_crianca';

const Stack  = createNativeStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName='Login'>
            
                <Stack.Screen name='Login'              component={Login}           />
                <Stack.Screen name='Cadastro'           component={Cadastro}        />
                <Stack.Screen name='home_Criança'       component={Crianca}         />
                <Stack.Screen name='Medico'             component={Medico}          />
                <Stack.Screen name='Recuperar_senha'    component={Recuperar_senha} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}