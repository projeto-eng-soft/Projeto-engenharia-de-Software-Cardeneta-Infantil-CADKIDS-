import React ,{ useState } from "react";
import { View , Text , TextInput , ImageBackground , Image  } from "react-native";

import { Usuario }      from "./crud/usuario";
import { getStyles }    from "./estilo/style";

import Logo             from 'static/icons/icon_logo.png';
import icon_Cadkids     from 'static/icons/icon_cadkids.png';
import plano_de_fundo   from 'static/imagens/plano_de_fundo_padrao.png';
import Button_entrar    from "./form_button/button_entrar";
import Button_senha     from "./form_button/button_esqueci_senha";
import Button_cadastrar from "./form_button/button_cadastrar";
import Visivel_senha    from "./form_button/button_visibilidade_senha";


const Style = getStyles();

export default function Login( {navigation} )
{

    const [cpf   ,setCpf  ] = useState(null)
    const [senha ,setSenha] = useState(null)
    const [Olho  ,setOlho] = useState(true)

    const Senha_visibilidade   = () => setOlho(!Olho)

    const Entrar = () =>
    {

        if ( Usuario(cpf,senha) )
        {
            setCpf(null) ;setSenha(null)
            navigation.navigate('home_Criança');
        }else{
            setCpf(null) ;setSenha(null)
            alert('Usuario ou Senha Invalido')
        }
    }



    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>
            
            <View>
                <Image source={Logo} style={Style.icone}/>
            </View>

            <View style={Style.container_login}>
                <Text style={Style.text} >Cpf</Text>
                    <TextInput 
                        placeholder  = "Digite seu cpf"
                        keyboardType = "numeric"
                        maxLength    = {11}
                        style        = {Style.textInput}
                        value        = {cpf}
                        onChangeText = {setCpf}
                    />
                
                <Text style={Style.text} >Senha</Text>

                <View>
                    <View>                 
                        <TextInput 
                            placeholder     = "Digite sua senha"
                            style           = {Style.textInput}
                            maxLength       = {25}
                            value           = {senha}
                            onChangeText    = {setSenha} 
                            secureTextEntry = {Olho}
                        />
                    </View> 
                    <View style={Style.container_icone}>
                        <Visivel_senha onPress={Senha_visibilidade}/>
                    </View>

                </View>
               
                <View style={Style.Button_senha}>
                    <Button_senha  navigation={navigation}/>
                </View>
                
                <View style={Style.button_entrar}> 
                    <Button_entrar onPress={Entrar}/> 
                </View>
            </View> 
            
            <View style={Style.button_cadastrar}>
                <Button_cadastrar navigation={navigation} />
            </View>
            <View>
                <Image source={icon_Cadkids} style={Style.icone_cadkids}/>
            </View>
   
        </ImageBackground>
    );
}
