import { createStackNavigator } from "@react-navigation/stack";

import Formulario_1 from "./paginas/Formulario1/Formulario1";
import Formulario_2 from "./paginas/Formulario2/Formulario2";
import Formulario_3 from "./paginas/Formulario3/Formulario3";
import Formulario_4 from "./paginas/Formulario4/Formulario4";
const Stack = createStackNavigator();

export default function Cadastro(){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Formulario_1'>
            <Stack.Screen name='Formulario_1'       component={Formulario_1}    />
            <Stack.Screen name='Formulario_2'       component={Formulario_2}    />
            <Stack.Screen name='Formulario_3'       component={Formulario_3}    />
            <Stack.Screen name='Formulario_4'       component={Formulario_4}    />
        </Stack.Navigator>
    );
}