import { useRoute } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator  } from "@react-navigation/stack";

import DrawerCustom     from './Drawer_custom/Drawer_custom'
import Home_Criança      from "./paginas/Home/paginas/Home_Criancas";
import Ajuda             from "./paginas/Ajuda/Ajuda";
import Cadastro_criança  from "./paginas/Cadastro_crianca/Cadastro_crianca";
import Crianca           from "./paginas/Crianca/Crianca";
import Vacinas           from "./paginas/Vacinas/home_Vacinas";
import Desenvolvimento_c from "./paginas/Desenvolvimento_Cognitivo/Desenvolvimento_c";
import Desenvolvimento_f from "./paginas/Desenvolvimento_Fisico/paginas/Desenvolvimento_fisico";


const Drawer = createDrawerNavigator()
const Stack  = createStackNavigator();
export default function Page() {
    const route  = useRoute();

    return (
        <Drawer.Navigator initialRouteName='Inicio_Crianca' 
                          screenOptions={{ headerShown:false }}
                          drawerContent={props=><DrawerCustom {...props} />}>
            <Drawer.Screen name="Inicio" component    ={Stack_navigation}   
                                         initialParams={{Email:route.params.Email}}/>
            <Drawer.Screen name="Ajuda"  component={Ajuda}  options={{headerShown: true}} />
        </Drawer.Navigator>
    );
}


const Stack_navigation = () =>{
    const route = useRoute()
    return (
        <Stack.Navigator screenOptions={{ headerShown:false }}>
            <Stack.Screen name="Inicio_crianca"    component={Home_Criança}   
                                               initialParams={{Email:route.params.Email}}   />
            <Stack.Screen name="Cadastro_Crianca"  component={Cadastro_criança}  />
            <Stack.Screen name="Crianca"           component={Crianca}           />
            <Stack.Screen name="Vacinas"           component={Vacinas}           />
            <Stack.Screen name="Desenvolvimento_c" component={Desenvolvimento_c} />
            <Stack.Screen name="Desenvolvimento_f" component={Desenvolvimento_f} />
        </Stack.Navigator>
    );
}