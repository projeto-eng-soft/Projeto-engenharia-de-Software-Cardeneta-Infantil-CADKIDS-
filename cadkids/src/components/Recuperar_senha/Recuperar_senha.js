import React from "react";
import { View , Text , TextInput ,ImageBackground ,Image} from "react-native";

import { getStyles } from "./estilo/style";
import plano_de_fundo from 'static/imagens/plano_de_fundo_padrao.png';
import icone_logo     from 'static/icons/icon_logo.png';

const Style = getStyles();
export default function Recuperar_senha({navigation}){
    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>
            <Image source={icone_logo} style={Style.icone}/>
            <View>
                <Text>E-mail</Text>
                <TextInput/>
            </View>
        </ImageBackground>
    );
}