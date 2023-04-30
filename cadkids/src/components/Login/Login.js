import React,{ useState }  from "react";
import { StyleSheet }      from "react-native";
import { View, Text, TextInput, ImageBackground } from "react-native";

import plano_fundo      from '../static/img/fundo_padrao.png'
import Button_entrar    from "./form/button_entrar";
import Button_cadastrar from "./form/button_cadastrar";
import Button_senha     from "./form/button_esqueci_senha";


export default function Login({navigation})
{
    return(
        <ImageBackground source={plano_fundo} style={Style.container}>
            
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
                
                <View style={Style.view_but_senha} > <Button_senha /> </View>
                
                <View style={Style.view_but_entrar}> <Button_entrar/> </View>
            </View> 
            
            <View style={Style.view_but_cadastrar}>
                <Button_cadastrar navigation={navigation}/>
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

    view_but_entrar:{
        padding:22,
        borderRadius:20
    },

    view_but_senha:{
       paddingTop:7
    }

    
})