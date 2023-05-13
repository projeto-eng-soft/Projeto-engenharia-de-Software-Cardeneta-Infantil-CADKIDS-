import { createDrawerNavigator } from "@react-navigation/drawer";

import Home_Criança from "./paginas/Home/Home_Crianças";
import Ajuda        from "./paginas/Ajuda/Ajuda";

const Drawer = createDrawerNavigator()

export default function Page() {
    
    return (
        <Drawer.Navigator initialRouteName='home_C'>
            <Drawer.Screen name="home_C"        component={Home_Criança} options={{headerShown: false}} initialParams={{Certidao:'firebase'}}/>
            <Drawer.Screen name="Ajuda"        component={Ajuda}   />
        </Drawer.Navigator>
    );
}
