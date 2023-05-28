import { createStackNavigator } from "@react-navigation/stack";

import Formulario_1 from "./paginas/formulario_1/formulario_1";
import Formulario_2 from "./paginas/formulario_2/formulario_2";
import Formulario_3 from "./paginas/formulario_3/formulario_3";
import Formulario_4 from "./paginas/formulario_4/formulario_4";
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