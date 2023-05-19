import { useState } from "react";
import { ImageBackground , View , Text , TextInput, ScrollView , Image } from "react-native";

import { getStyles }    from "./estilo/style";

import Logo             from 'static/icons/icon_logo.png';
import icon_Cadkids     from 'static/icons/icon_cadkids.png';
import Button_criar     from './form_button/button_cria';
import plano_de_fundo   from 'static/imagens/plano_de_fundo_padrao.png';

const Style = getStyles();

export default function Formulario_4({navigation})
{
    const [inscricao_Conselho,setInscricao_Conselho] = useState(null);

    const criar_Conta = () =>{
        navigation.navigate('Login');
    }

    return(
        <ImageBackground source={plano_de_fundo} style={{flex:1}}>
            <ScrollView>
            <View style={Style.container}>
                
                <View>
                    <Image source={Logo} style={Style.icone_logo}/>
                </View>

                <View style={Style.formulario_view}>
                    
                    <View>                    
                        <Text style={Style.text}>Inscrição do conselho</Text>
                        <TextInput
                            placeholder  = "Digite a senha"
                            style        = {Style.textInput}
                            maxLength    = {25}
                        />
                    </View>
                    
                    <View style = {Style.button_continua}>
                        <Button_criar onPress={criar_Conta}/>
                    </View>
                
                </View>  

                <View>
                    <Image source={icon_Cadkids} style={Style.icone_cadkids}/>
                </View>
            
            </View>
            </ScrollView>
        </ImageBackground>
    );
}