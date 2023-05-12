import { createDrawerNavigator } from "@react-navigation/drawer";
import Cliente from "./paginas/Home/home_Criança";
import Ajuda   from "./paginas/Ajuda/Ajuda";

const Drawer = createDrawerNavigator()

export default function Page() {
    
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Cliente" component={Cliente} options={{headerShown: false}} />
            <Drawer.Screen name="Ajuda"   component={Ajuda}   />
        </Drawer.Navigator>
    );
}