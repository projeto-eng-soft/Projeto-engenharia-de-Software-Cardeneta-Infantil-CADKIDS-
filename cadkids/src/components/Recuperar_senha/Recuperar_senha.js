import React, { useState } from "react";
import { View , Text , TextInput ,ImageBackground ,Image } from "react-native";

import { getStyles }  from "./estilo/style";
import icone_logo     from 'static/icons/icon_logo.png';
import icon_Cadkids     from 'static/icons/icon_cadkids.png';
import plano_de_fundo from 'static/imagens/plano_de_fundo_padrao.png';

import Button_enviar_e_mail from "./form_button/button_enviar_e_mail";
const Style = getStyles();

export default function Recuperar_senha({navigation}){

    const [E_mail,setE_mail] = useState(null);

    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>
            
            <View>
                <Image source={icone_logo} style={Style.icone}/>
            </View>

            <View style={Style.formulario_view}>
                <Text style={Style.text}>E-mail</Text>
                <TextInput 
                    style={Style.textInput}
                    placeholder  = "Digite seu e-mail"
                    keyboardType = 'email-address'
                    value        = {E_mail}
                    onChangeText = {setE_mail}
                />

            <View style={Style.button_recuperar}>
                <Button_enviar_e_mail navigation={navigation}/>
            </View>
            
            </View>

            <View>
                <Image source={icon_Cadkids} style={Style.icone_cadkids}/>
            </View>
        
        </ImageBackground>
    );
}