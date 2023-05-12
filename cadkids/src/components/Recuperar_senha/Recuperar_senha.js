import React, { useState } from "react";
import { View , Text , TextInput ,ImageBackground ,Image} from "react-native";

import { getStyles } from "./estilo/style";
import plano_de_fundo from 'static/imagens/plano_de_fundo_padrao.png';
import icone_logo     from 'static/icons/icon_logo.png';

const Style = getStyles();
export default function Recuperar_senha({navigation}){

    const [E_mail,setE_mail] = useState(null);

    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>
            
            <View>
                <Image source={icone_logo} style={Style.icone}/>
            </View>

            <View>
                <Text>E-mail</Text>
                <TextInput
                    placeholder  = "Digite seu e-mail"
                    keyboardType = 'email-address'
                    value        = {E_mail}
                    onChangeText = {setE_mail}
                />
            </View>
        
        </ImageBackground>
    );
}