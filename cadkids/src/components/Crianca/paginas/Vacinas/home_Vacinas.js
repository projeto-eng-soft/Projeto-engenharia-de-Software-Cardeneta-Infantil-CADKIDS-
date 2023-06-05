import { Image ,TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation }            from "@react-navigation/native";

import { getStyles } from "./estilo/style";
import Vacinas_aplicadas  from './paginas/Vacinas_aplicadas';
import Vacinas_pendentes   from './paginas/Vacinas_Faltando';

import Icon_aplicadas from 'static/icons/icon_vacina_aplicada.png';
import Icon_pendentes from 'static/icons/icon_vacina_pendente.png';


const Style =  getStyles();
const Tab = createBottomTabNavigator();

export default function Vacinas(){
    const navigation = useNavigation()
    return(
        <Tab.Navigator initialRouteName="Aplicadas" 
                    screenOptions={{ 
                        headerShown:false,
                        tabBarStyle:{
                            position:'absolute',
                            backgroundColor:'rgba(249, 245, 32, 0.226)',
                            borderTopWidth:0, 
                            bottom:10,
                            left :14,
                            right:14,
  
                            elevation:0,
                            borderRadius:40,
                            height:50,
                            }
                        }}>

            <Tab.Screen name="Aplicadas" 
                        component={Vacinas_aplicadas}
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
                        initialParams={{dados:[1]}}/>

            <Tab.Screen name="Pendentes"  
                        component={Vacinas_pendentes} 
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
                        }}/>

            </Tab.Navigator>
    );
}


