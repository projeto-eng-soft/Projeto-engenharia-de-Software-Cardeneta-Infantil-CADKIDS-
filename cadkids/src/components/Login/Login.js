import React ,{ useState } from "react";
import { View, Text, TextInput,ImageBackground } from "react-native";

import { Usuario }      from "./crud/usuario";
import { getStyles }    from "./estilo/style";

import plano_fundo      from "static/imagens/fundo_padrao.png";
import Button_entrar    from "./form_touch/button_entrar";
import Button_senha     from "./form_touch/button_esqueci_senha";
import Button_cadastrar from "./form_touch/button_cadastrar";

const Style = getStyles();

export default function Login({navigation}){

    const [cpf   ,setCpf  ] = useState(null)
    const [senha ,setSenha] = useState(null)

    const Entrar = () => {
        if ( Usuario(cpf,senha) )
        {
            setCpf(null) ;setSenha(null)
            navigation.navigate('home_Cliente', { screen: 'Cliente' });
        }
        setCpf(null) ; setSenha(null)
    }

    const Senha = () =>{
        navigation.navigate('Recuperar_senha')
    }
    
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
                        onChangeText = {setCpf}
                    />

                <Text style={Style.text} >Senha</Text>
                    <TextInput 
                        placeholder  = "Digite sua senha"
                        style        = {Style.textInput}
                        value        = {senha}
                        onChangeText = {setSenha}
                    />
                
                <View style={Style.Button_senha}>
                    <Button_senha  onPress={Senha}/>
                </View>
                
                <View style={Style.button_entrar}> 
                    <Button_entrar onPress={Entrar}/> 
                </View>
            </View> 
            
            <View style={Style.button_cadastrar}>
                <Button_cadastrar navigation={navigation} />
            </View>
   
        </ImageBackground>
    );
}
