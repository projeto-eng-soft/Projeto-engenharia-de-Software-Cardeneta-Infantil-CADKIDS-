import   React,{ useState } from "react";
import { StyleSheet }     from "react-native";
import { View, Text, TextInput,ImageBackground } from "react-native";


import plano_fundo  from '../static/img/fundo_padrao.png';
import Button_criar from './form_touch/button_cria';

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


const Style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${plano_fundo})`
    },

    formulario_view:{
        backgroundColor:'rgba(221, 222, 239, 0.419)',
        alignItems: 'center',
        width :350,
        height:330,
        padding:5,
        borderRadius:10,
    },

    text:{
        fontSize:17,
        marginTop:15,
        marginLeft:4
    },
    
    textInput:{
        backgroundColor:'white',
        fontSize:14,
        width :300,
        height:40 ,
        paddingLeft :12,
        paddingRight:12,        
        borderRadius:16,
    },

    button_continua:{
        padding:20,
        borderRadius:20
        
    }
})