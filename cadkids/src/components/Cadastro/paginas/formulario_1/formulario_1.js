import   React,{ useState } from "react";
import { View , Text , TextInput , ImageBackground , Image, ScrollView } from "react-native";
import MaskInput ,{ Masks } from 'react-native-mask-input';

import { getStyles }    from "./estilo/style";
import Logo             from 'static/icons/icon_logo.png';
import icon_Cadkids     from 'static/icons/icon_cadkids.png';
import plano_de_fundo   from 'static/imagens/plano_de_fundo_padrao.png';
import Button_continuar from './form_touch/button_continua';

const Style = getStyles();

export default function Formulario_1({navigation}){

    const [Nome,setNome]                     = useState(null);
    const [dataNascimento,setdataNascimento] = useState(null);
    const [Rg,setRg]                         = useState(null);
    const [Cpf,setCpf]                       = useState(null);

    return(
        <ImageBackground source={plano_de_fundo} style={{flex:1}}>
            
            <ScrollView>

            <View  style={Style.container}>
                <View>
                    <Image source={Logo} style={Style.icone_logo}/>
                </View>

                
                <View style={Style.formulario_view}>
                    <View>

                        <Text style={Style.text}>Nome Completo </Text>
                        <TextInput 
                            placeholder  ="Digite seu nome"
                            style        = {Style.textInput}
                            value        = {Nome}
                            onChange     = {setNome}
                        />
                        
                        <Text style={Style.text}>Data de nascimento </Text>
                        <MaskInput
                            style        = {Style.textInput}
                            placeholder  = "Sua data de nascimento"
                            keyboardType = "numeric"
                            maxLength    = {10}
                            value        = {dataNascimento}
                            onChangeText = {setdataNascimento}
                            mask         = {[/\d/, /\d/, '/', 
                                            /\d/, /\d/, '/', 
                                            /\d/, /\d/, /\d/, /\d/
                                            ]}
                        />
                        
                        <Text style={Style.text}>Registro Geral (R.G)</Text>
                        <MaskInput
                            placeholder  ="Digite seu r.g"
                            style        = {Style.textInput}
                            keyboardType = "numeric"
                            maxLength    = {9}
                            value        = {Rg}
                            onChangeText = {setRg}
                            mask         = {[/\d/,'.', 
                                            /\d/, /\d/, /\d/, '.',
                                            /\d/, /\d/, /\d/
                                            ]}
                        />

                        <Text style={Style.text}>Cadastro de pessoa física (C.P.F)</Text>
                        <MaskInput
                            placeholder  ="Digite seu Cpf"
                            style        = {Style.textInput}
                            keyboardType = "numeric"
                            maxLength    = {14}
                            value        = {Cpf}
                            onChangeText = {setCpf}
                            mask         = {Masks.BRL_CPF}
                        
                        />
                    </View>

                    <View style = {Style.button_continua}>
                        <Button_continuar navigation={navigation}/>
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


