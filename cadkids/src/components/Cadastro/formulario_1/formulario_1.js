import   React,{ useState } from "react";
import { StyleSheet }     from "react-native";
import { View, Text, TextInput,ImageBackground } from "react-native";


import plano_fundo      from '../static/img/fundo_padrao.png';
import Button_continuar from './form_touch/button_continua';

export default function Formulario_1({navigation}){
    return(
        <ImageBackground source={plano_fundo} style={Style.container}>
            <View style={Style.formulario_view}>
                <View>
                    <Text style={Style.text}>Nome Completo </Text>
                    <TextInput 
                        placeholder  ="Digite seu nome"
                        style={Style.textInput}
                    />
                    
                    <Text style={Style.text}>Data de nascimento </Text>
                    <TextInput
                        
                        style={Style.textInput}
                    />

                    <Text style={Style.text}>Registro Geral (R.G)</Text>
                    <TextInput 
                        placeholder  ="Digite seu r.g"
                        style        = {Style.textInput}
                        keyboardType = "numeric"
                        maxLength    = {7}

                    />

                    <Text style={Style.text}>Cadastro de pessoa física (C.P.F)</Text>
                    <TextInput 
                        placeholder  ="Digite seu Cpf"
                        style        = {Style.textInput}
                        keyboardType = "numeric"
                        maxLength    = {11}
                    />
                </View>

                <View style = {Style.button_continua}>
                    <Button_continuar navigation={navigation}/>
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
        height:410,
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