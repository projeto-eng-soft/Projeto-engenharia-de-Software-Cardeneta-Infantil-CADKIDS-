import   React,{ useState } from "react";
import { useRoute } from "@react-navigation/native";

import { ImageBackground , View , Text , TextInput, ScrollView , Image } from "react-native";

import { getStyles }    from "./estilo/style";

import Logo             from 'static/icons/icon_logo.png';
import icon_Cadkids     from 'static/icons/icon_cadkids.png';
import plano_de_fundo   from 'static/imagens/plano_de_fundo_padrao.png';

import Button_criar     from './form_button/button_cria';

import { VSenha }         from "../../ValidacaoManipulacao/Formulario_3";
import { createMedico } from "src/back_end/FireBase/create/createMedico";
import { Dados_cadastro_medico } from "../../ValidacaoManipulacao/Dados";

const Style = getStyles();

export default function Formulario_4({navigation})
{
    const route               = new useRoute();
    const [Senha ,setSenha]   = useState(null);
    const [Rsenha,setRsenha]  = useState(null);
    const [inscricao_Conselho,setInscricao_Conselho] = useState(null);

    const criar_Conta = () =>{
        if(VSenha(Senha,Rsenha)){
            const valores = Dados_cadastro_medico(route,[inscricao_Conselho,Senha]);
            createMedico(valores,navigation);
        }else{
            alert('Senha invalida');
        }
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
                            placeholder  = "Digite seu numero"
                            style        = {Style.textInput}
                            maxLength    = {25}
                            value        = {inscricao_Conselho}
                            onChangeText = {setInscricao_Conselho}
                        />

                        <Text style={Style.text}>Crie sua senha </Text>
                        <TextInput
                            placeholder  = "Digite a senha"
                            style        = {Style.textInput}
                            maxLength    = {25}
                            value        = {Senha}
                            onChangeText = {setSenha}
                        />

                        <Text style={Style.text}>Confirme sua senha</Text>
                        <TextInput 
                            placeholder  ="Repita a senha"
                            style        = {Style.textInput}
                            maxLength    = {25}
                            value        = {Rsenha}
                            onChangeText = {setRsenha}
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