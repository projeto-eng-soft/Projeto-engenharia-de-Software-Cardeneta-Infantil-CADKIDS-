import  React from "react";
import { View , ImageBackground,Text } from "react-native";
import { DrawerItemList,DrawerContentScrollView } from "@react-navigation/drawer";
import plano_de_fundo   from 'static/imagens/plano_de_fundo_drawer.jpg';

const DrawerCustom = (props) =>{
    return(
        <ImageBackground style={{flex:1}} source={plano_de_fundo}>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </ImageBackground>
    )
}

export default DrawerCustom;