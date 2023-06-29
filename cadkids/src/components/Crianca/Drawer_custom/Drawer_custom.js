import  React from "react";
import { View , ImageBackground,Text } from "react-native";
import { DrawerItemList,DrawerContentScrollView } from "@react-navigation/drawer";


const DrawerCustom = (props) =>{
    return(
        <ImageBackground style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </ImageBackground>
    )
}

export default DrawerCustom;