import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator  } from "@react-navigation/stack";


import Home_Criança      from "./paginas/Home/Home_Crianças";
import Ajuda             from "./paginas/Ajuda/Ajuda";
import Cadastro_criança  from "./paginas/Cadastro_criança/Cadastro_crianca";
import Crianca           from "./paginas/Criança/Criança";
import Vacinas           from "./paginas/Vacinas/Vacinas";
import Desenvolvimento_c from "./paginas/Desenvolvimento_Cognitivo/Desenvolvimento_c";
import Desenvolvimento_f from "./paginas/Desenvolvimento_Fisico/Desenvolvimento_fisico";


const Drawer = createDrawerNavigator()
const Stack  = createStackNavigator();

export default function Page() {
    
    return (
        <Drawer.Navigator initialRouteName='Inicio_Crianca' screenOptions={{ headerShown:false }}>
            <Drawer.Screen name="Inicio" component={Stack_navigation}                     />
            <Drawer.Screen name="Ajuda"  component={Ajuda}  options={{headerShown: true}} />
        </Drawer.Navigator>
    );
}


const Stack_navigation = () =>{
    return (
        <Stack.Navigator screenOptions={{ headerShown:false }}>
            <Stack.Screen name="Inicio_crianca"    component={Home_Criança}      />
            <Stack.Screen name="Cadastro_Crianca"  component={Cadastro_criança}  />
            <Stack.Screen name="Crianca"           component={Crianca}           />
            <Stack.Screen name="Vacinas"           component={Vacinas}           />
            <Stack.Screen name="Desenvolvimento_c" component={Desenvolvimento_c} />
            <Stack.Screen name="Desenvolvimento_f" component={Desenvolvimento_f} />
        </Stack.Navigator>
    );
}