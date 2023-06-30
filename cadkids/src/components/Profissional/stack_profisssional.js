import { createStackNavigator } from "@react-navigation/stack";

import Procurar      from "./paginas/ProcurarMedicoCrianca/ProcurarMedicoCrianca";
import MedicoCrianca from "./paginas/TabMedicoVacinas";
const Stack  = createStackNavigator();


export default function Medico(){
    return (
        <Stack.Navigator screenOptions={{ headerShown:false }} initialRouteName="Procurar">
            <Stack.Screen name="Procurar"      component={Procurar} />
            <Stack.Screen name="MedicoCrianca" component={MedicoCrianca} />
        </Stack.Navigator>
    );
}