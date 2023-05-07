import   React,{ useState } from "react";
import { View, Text, TextInput,ImageBackground } from "react-native";

import { getStyles }    from "./estilo/style";
import plano_de_fundo      from 'static/imagens/plano_de_fundo_padrao.png';
import Button_continuar from './form_touch/button_continua';

const Style = getStyles();

export default function Formulario_1({navigation}){

    const [Nome,setNome]                     = useState(null);
    const [dataNascimento,setdataNascimento] = useState(null);
    const [Rg,setRg]                         = useState(null);
    const [Cpf,setCpf]                       = useState(null);

    return(
        <ImageBackground source={plano_de_fundo} style={Style.container}>
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
                    <TextInput
                        style        = {Style.textInput}
                        value        = {dataNascimento}
                        onChangeText = {setdataNascimento}
                    />

                    <Text style={Style.text}>Registro Geral (R.G)</Text>
                    <TextInput 
                        placeholder  ="Digite seu r.g"
                        style        = {Style.textInput}
                        keyboardType = "numeric"
                        maxLength    = {7}
                        value        = {Rg}
                        onChangeText = {setRg}

                    />

                    <Text style={Style.text}>Cadastro de pessoa física (C.P.F)</Text>
                    <TextInput 
                        placeholder  ="Digite seu Cpf"
                        style        = {Style.textInput}
                        keyboardType = "numeric"
                        maxLength    = {11}
                        value        = {Cpf}
                        onChangeText = {setCpf}
                    />
                </View>

                <View style = {Style.button_continua}>
                    <Button_continuar navigation={navigation}/>
                </View>
            
            </View>
        </ImageBackground>
    );
}


