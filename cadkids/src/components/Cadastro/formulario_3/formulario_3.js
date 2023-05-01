import   React,{ useState } from "react";
import { StyleSheet }     from "react-native";
import { View, Text, TextInput,ImageBackground } from "react-native";

import { getStyles } from "./estilo/style";
import plano_fundo  from 'static/img/fundo_padrao.png';
import Button_criar from './form_touch/button_cria';

const Style = getStyles();

export default function Formulario_3({navigation}){
    return(
        <ImageBackground source={plano_fundo} style={Style.container}>
            <View style={Style.formulario_view}>
                <View>
                    <Text style={Style.text}>E-mail</Text>
                    <TextInput 
                        placeholder  = "Digite seu nome"
                        style        = {Style.textInput}
                    />
                    
                    <Text style={Style.text}>Crie sua senha </Text>
                    <TextInput
                        placeholder = "Digite a senha"
                        style       = {Style.textInput}
                    />

                    <Text style={Style.text}>Confirme sua senha</Text>
                    <TextInput 
                        placeholder  ="Repita a senha"
                        style        = {Style.textInput}
                        keyboardType = "numeric"
                        maxLength    = {7}

                    />
                </View>

                <View style = {Style.button_continua}>
                    <Button_criar />
                </View>
            
            </View>
        </ImageBackground>
    );
}
