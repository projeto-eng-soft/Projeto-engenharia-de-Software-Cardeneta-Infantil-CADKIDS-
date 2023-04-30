import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TextInput,ImageBackground } from "react-native";

import plano_fundo_padrao   from '../static/img/fundo_padrao.png'
import FlatButton_entrar    from "./form/Flatbutton_entrar";
import Flatbutton_cadastrar from "./form/Flatbutton_cadastrar";

export default function Login({navigation}){
    return(
        <ImageBackground source={plano_fundo_padrao} style={Style.container}>
     
            
            <View style={Style.container_login}>
                <Text style={Style.text} >Cpf</Text>
                    <TextInput 
                        placeholder="digite seu cpf"
                        style={Style.textInput}
                    />

                <Text style={Style.text} >Senha</Text>
                    <TextInput 
                        placeholder="digite sua senha"
                        style={Style.textInput}
                    />
                
                <View style={Style.view_flat_entrar}>
                    <FlatButton_entrar/>
                </View>
            </View> 
            
            <View style={Style.view_flat_cadastrar}>
                <Flatbutton_cadastrar navigation={navigation}/>
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
    
    container_login:{
        backgroundColor:'rgba(149, 196, 241, 0.326)',
        width :350,
        height:250,
        
        padding:5,
        borderRadius:10,
        alignItems: 'center',
    },

    text:{
        fontSize:17,
        paddingTop:15
    },

    textInput:{
        backgroundColor:'white',
        fontSize:14,
        width :290,
        height:42 ,
        paddingLeft :12,
        paddingRight:12,        
        borderRadius:16,

        
    },

    view_flat_entrar:{
        padding:22,
        borderRadius:20
    },

    view_flat_cadastrar:{
       paddingTop:7
    }

    
})