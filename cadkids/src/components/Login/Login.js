import React ,{ useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TextInput,ImageBackground ,Image } from "react-native";


import plano_fundo      from '../static/img/fundo_padrao.png';
import Button_entrar    from "./form_touch/button_entrar";
import Button_cadastrar from "./form_touch/button_cadastrar";
import Button_senha     from "./form_touch/button_esqueci_senha";


export default function Login({navigation}){

    const [cpf   ,getcpf  ] = useState(null)
    const [senha ,getsenha] = useState(null)

    return(
        <ImageBackground source={plano_fundo} style={Style.container}>
                
            <View style={Style.container_login}>
                <Text style={Style.text} >Cpf</Text>
                    <TextInput 
                        placeholder  ="Digite seu cpf"
                        keyboardType ="numeric"
                        maxLength    = {11}
                        style        = {Style.textInput}
                        value        = {cpf}
                        onChangeText = {getcpf}
                    />

                <Text style={Style.text} >Senha</Text>
                    <TextInput 
                        placeholder  = "Digite sua senha"
                        style        = {Style.textInput}
                        value        = {senha}
                        onChangeText = {getsenha}
                    />
                
                <View style={Style.Button_senha}>
                    <Button_senha />
                </View>
                
                <View style={Style.button_entrar}> 
                    <Button_entrar onPress={()=>dados()}/> 
                </View>
            </View> 
            
            <View style={Style.button_cadastrar}>
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
        alignItems: 'center',
        width :350,
        height:285,
        padding:5,
        borderRadius:10,
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

    Button_senha:{
        padding:15

    },

    button_entrar:{
        padding:5,
        borderRadius:20
    },

    button_cadastrar:{
       paddingTop:7
    }

    
})