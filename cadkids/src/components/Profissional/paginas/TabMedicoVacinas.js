import { Image ,TouchableOpacity  } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, useRoute  } from "@react-navigation/native";

/* */ 
import VacinasAplicadas   from './Vacinas/VacinasAplicadas';
import VacinasPendentes   from './Vacinas/VacinasPendentes';
/**/
import Icon_aplicadas from 'static/icons/icon_vacina_aplicada.png';
import Icon_pendentes from 'static/icons/icon_vacina_pendente.png';


const Tab = createBottomTabNavigator();

export default function MedicoVacinas(){
    const navigation = useNavigation();
    const route  = useRoute();
    const userId = route.params.userId;
    const dados  = route.params.dados;
    
    console.log(route.params.userId)
    console.log(route.params.dados)
    
 
    return(
        <Tab.Navigator initialRouteName="Aplicadas" 
                    screenOptions={{ 
                        headerShown:false,
                        tabBarStyle:{
                            position:'absolute',
                            backgroundColor:'rgba(255, 255, 255, 0.690)',
                            borderTopWidth:0, 
                            bottom:0,
                            left :2,
                            right:2,
                            elevation:0,
                            borderTopLeftRadius:30,
                            borderTopRightRadius:30,
                            height:50,
                            
                            }
                        }}>

            <Tab.Screen name="Aplicadas" 
                        component={VacinasAplicadas}
                        options={
                            {
                            tabBarLabel:'',
                            tabBarIcon : () => {    
                                return( 
                                    <TouchableOpacity onPress={()=>navigation.navigate('Aplicadas')}
                                                      activeOpacity={0.3} 
                                    >
                                        <Image source={Icon_aplicadas} style={{ width: 50, height:50 }}/>
                                    </TouchableOpacity>
                                );
                            },
                        }}
                        initialParams={{userId:userId,dados:dados}}/>

            <Tab.Screen name="Pendentes"  
                        component={VacinasPendentes} 
                        options={
                            {
                            tabBarLabel:'',
                            tabBarIcon : () => {
                            return(
                                <TouchableOpacity onPress={()=>navigation.navigate('Pendentes')}
                                                  activeOpacity={0.3} 
                                >
                                    <Image source={Icon_pendentes} style={{ width: 50, height:50 }}/>
                                </TouchableOpacity>);
                            }, 
                        }}
                        initialParams={{userId:userId,dados:dados}}/>
                        
            </Tab.Navigator>
    );
}


