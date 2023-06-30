import React ,{ useState } from "react";

import { View , Text , TextInput , ImageBackground , Image, Alert  } from "react-native";
import MaskInput ,{ Masks } from 'react-native-mask-input';

import { readCliente } from "src/back_end/FireBase/read/login";
import { readMedico  } from 'src/back_end/FireBase/read/Medico';
import { getStyles }    from "../estilo/login";
/*Imagens*/ 
import Logo             from 'static/icons/icon_logo.png';
import icon_Cadkids     from 'static/icons/icon_cadkids.png';
import plano_de_fundo   from 'static/imagens/plano_de_fundo_padrao.png';
/*buttons de entrar ,esqueci a senha , cadastrar além de icone de ver a senha*/ 
import Button_entrar    from "../form_button/buttonEntrar";
import Button_senha     from "../form_button/buttonEsqueciSenha";
import Button_cadastrar from "../form_button/buttonCadastrar";
import Visivel_senha    from "../form_button/buttonVisibilidadeSenha";
import Button_medico    from "../form_button/buttonMedico";


const Style = getStyles();

export default function Login( {navigation} )
{
    const [Boleano,setBoleano]     = useState(true);
    const [Texto ,setTexto]        = useState('');
    const [Cpf   ,setCpf  ]        = useState(null);
    const [Senha ,setSenha]        = useState(null);
    const [Olho  ,setOlho ]        = useState(true);

    const Senha_visibilidade = () => setOlho(!Olho)

    const Entrar = () =>
    {
        try{
            var cpf_dominio = Cpf;
            cpf_dominio = cpf_dominio.replace('.','');
            cpf_dominio = cpf_dominio.replace('.','');
            cpf_dominio = cpf_dominio.replace('-','');
        }
        catch(error){
            alert(error.message);
            return;
        }

        if ( Cpf!= null && Boleano) 
        {
            readCliente(cpf_dominio+"@dominio.com",Senha,navigation)
           
        }else if ( Cpf!= null && !Boleano)
        {
            readMedico(cpf_dominio+"@dominio.med.com",Senha,navigation)
        }else{
            setCpf(Cpf) ;setSenha(Senha);
            alert('Usuario ou Senha Invalido')
        }
    }
    
    const Alterar =()=>{
        if (Boleano) setTexto(' - Medico');
        else         setTexto('');
    }

    const Medico =()=>{ 
        setBoleano(!Boleano);
        Alterar(); }

    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>
            
            <View>
                <Image source={Logo} style={Style.icone}/>
            </View>

            <View style={Style.container_login}>
                <Text style={Style.text} >Cpf{Texto}</Text>
                    <MaskInput 
                        placeholder  = {"Digite seu Cpf"}
                        maxLength    = {14}
                        style        = {Style.textInput}
                        value        = {Cpf}
                        onChangeText = {setCpf}
                        mask         = {Masks.BRL_CPF}
                    />
                
                <Text style={Style.text}>Senha</Text>

                <View>
                    <View>                 
                        <TextInput 
                            placeholder     = "Digite sua senha"
                            style           = {Style.textInput}
                            value           = {Senha}
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
                
            <View style={Style.button_medico}>
                    <Button_medico onPress={Medico}/>
            </View>

            <View>
                <Image source={icon_Cadkids} style={Style.icone_cadkids}/>
            </View>
   
        </ImageBackground>
    );
}
