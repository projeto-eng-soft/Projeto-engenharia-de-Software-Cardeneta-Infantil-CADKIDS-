import   React          from "react";
import { useState }     from "react";
import { StyleSheet }   from "react-native";
import { View, Text, TextInput,ImageBackground } from "react-native";

import plano_fundo_padrao  from '../static/img/fundo_padrao.png'

export default function Formulario_1(){
    return(
        <ImageBackground source={plano_fundo_padrao} style={Style.container}>
            <View>
                <Text>A</Text>
            </View>
        </ImageBackground>
    );
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${plano_fundo_padrao})`
    },
})