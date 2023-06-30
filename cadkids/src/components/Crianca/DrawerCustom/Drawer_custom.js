import  React  from "react";
import { StyleSheet } from "react-native";
import { useRoute   } from "@react-navigation/native";
import { View , ImageBackground,Text ,Image } from "react-native";
import { DrawerItemList,DrawerContentScrollView } from "@react-navigation/drawer";

import { Getcliente } from "src/BackEnd/FireBase/read/Cliente";
import drawerUsuario  from 'src/static/imagens/drawerUsuario.png';
import drawerImage    from 'src/static/imagens/drawerFundo.png';


const DrawerCustom = (props) =>{
    const route = useRoute()
    
    return(
        <ImageBackground style={{flex:1}} source={drawerImage}>
            <DrawerContentScrollView {...props}>
                <View style={Style.View_Usuario}>
                    <Image source={drawerUsuario} style={Style.Imagem}/>
                    <Text style={Style.NomeUsuario}>{route.params.dadosUser.Nome}</Text>
                </View>

                <View style={Style.View_itens}>
                    <DrawerItemList {...props} />
                </View>
            
            </DrawerContentScrollView>
        </ImageBackground>
    )
}

const Style = StyleSheet.create({

    View_itens:{
    },
    
    View_Usuario:{
        alignItems:'center',
        marginTop   :20,
        marginBottom:20,
    },

    Imagem:{
        width:60,
        height:60,
    },
    NomeUsuario:{
        marginTop:10,
    }

});
export default DrawerCustom;