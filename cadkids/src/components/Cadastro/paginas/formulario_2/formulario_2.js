import   React,{ useState } from "react";
import { View, Text, TextInput, ImageBackground } from "react-native";

import { getStyles }    from "./estilo/style"
import plano_fundo      from 'static/imagens/fundo_padrao.png';
import Button_continuar from './form_touch/button_continua';


const Style = getStyles();

export default function Formulario_2({navigation}){

    const [Cep,setCep]                     = useState(null);
    const [nome_Rua,setNome_Rua]           = useState(null);
    const [numero_Rua,setNumero_Rua]       = useState(null);
    const [Bairro,setBairro]               = useState(null);
    const [Completemento,setCompletemento] = useState(null);
    const [Cidade,setCidade]               = useState(null);
    const [Estado,setEstado]               = useState(null);
    return(
        <ImageBackground source={plano_fundo} style={Style.container}>
            
            <View style={Style.formulario_view}>
                <View>
                    <Text style={Style.text}>Cep</Text>
                    <TextInput 
                        placeholder  ="Digite seu Cep"
                        style        = {Style.textInput}
                        keyboardType = "numeric"
                        maxLength    = {8}
                        value        = {Cep}
                        onChangeText = {setCep}

                    />

                    <View style={Style.container_bairro_rua}>
                        <View>
                            <Text style={Style.text_bairro_rua}>Rua </Text>
                            <TextInput
                                placeholder  ="Digite o nome da rua"
                                style        = {Style.textInput_rua}
                                value        = {nome_Rua}
                                onChangeText = {setNome_Rua}
                            />
                        </View>

                        <View style={{paddingLeft:20}}>
                            <Text style={Style.text_bairro_rua}>Número </Text>
                            <TextInput
                                placeholder  ="Digite o numero"
                                keyboardType ='numeric'
                                style        = {Style.textInput_numero}
                                value        = {numero_Rua}
                                onChangeText = {setNome_Rua}
                            />
                        </View>
                    </View>

                    <Text style={Style.text}>Bairro</Text>
                    <TextInput 
                        placeholder  ="Digite nome de seu bairro"
                        style        = {Style.textInput}
                        maxLength    = {7}
                        value        = {Bairro}
                        onChangeText = {setBairro}

                    />

                    <Text style={Style.text}>Completemento</Text>
                    <TextInput 
                        placeholder  ="Digite seu complemento"
                        style        = {Style.textInput}
                        maxLength    = {11}
                        value        = {Completemento}
                        onChangeText = {setCompletemento}

                    />

                    <Text style={Style.text}>Cidade</Text>
                    <TextInput 
                        placeholder  ="Digite sua cidade"
                        style        = {Style.textInput}
                        maxLength    = {11}
                        value        = {Cidade}
                        onChangeText = {setCidade}

                    />

                    <Text style={Style.text}>Estado</Text>
                    <TextInput 
                        placeholder  ="Digite seu Estado"
                        style        = {Style.textInput}
                        maxLength    = {11}
                        value        = {Estado}
                        onChangeText = {setEstado}
                    />
                </View>

                <View style = {Style.button_continua}>
                    <Button_continuar navigation={navigation} />
                </View>
            
            </View>
        </ImageBackground>
    );
}

