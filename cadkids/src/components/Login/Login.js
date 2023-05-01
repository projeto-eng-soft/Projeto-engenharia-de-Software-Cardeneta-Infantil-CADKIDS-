import React ,{ useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text, TextInput,ImageBackground ,Image } from "react-native";


import { getStyles }    from "./estilo/style";
import plano_fundo      from 'static/img/fundo_padrao.png';
import Button_entrar    from "./form_touch/button_entrar";
import Button_cadastrar from "./form_touch/button_cadastrar";
import Button_senha     from "./form_touch/button_esqueci_senha";

const Style = getStyles();

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
