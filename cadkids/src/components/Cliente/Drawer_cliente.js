import { createDrawerNavigator } from "@react-navigation/drawer";

import Cliente from "./pagina/Cliente";
import Ajuda   from "./pagina/Ajuda";

const Drawer = createDrawerNavigator()

export default function Page() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Cliente" component={Cliente} />
            <Drawer.Screen name="Ajuda"   component={Ajuda}   />
        </Drawer.Navigator>
    );
}