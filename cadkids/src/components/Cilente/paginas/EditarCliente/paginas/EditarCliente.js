import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import MaskInput ,{ Masks } from 'react-native-mask-input';

import { getStyles } from '../estilo/style';
import { ScrollView,ImageBackground , View, Text, TextInput } from "react-native";

import ButtonEdit from '../formTouch/buttonEditar';
import { round } from 'react-native-reanimated';

const Style = getStyles();

export default function EditarCliente(){
    const route = useRoute();
    const dadosUser = route.params.dadosUser;
    const [NomeUser,setNomeUser]             = useState(dadosUser.Nome);
    const [dataNascimento,setdataNascimento] = useState(dadosUser.dataNascimento);
    const [Rg,setRg]                         = useState(dadosUser.Rg);
    const [Cep,setCep]                       = useState(dadosUser.Cep);
    const [nome_Rua,setNome_Rua]             = useState(dadosUser.nome_Rua);
    const [numero_Rua,setNumero_Rua]         = useState(dadosUser.numero_Rua);
    const [Bairro,setBairro]                 = useState(dadosUser.Bairro);
    const [Completemento,setCompletemento]   = useState(dadosUser.Completemento);
    const [Cidade,setCidade]                 = useState(dadosUser.Cidade);
    const [Estado,setEstado]                 = useState(dadosUser.Estado);

    const Editar = () =>{
        console.log('FUTU')
    }
    
    return(
        <ImageBackground>
            <ScrollView >
                <View style={Style.formulario_view}>
                <Text style={Style.text}>Nome Completo </Text>
                    <TextInput 
                        placeholder  ="Digite seu nome"
                        keyboardType = "default"
                        style        = {Style.textInput}
                        value        = {NomeUser}
                        onChangeText = {setNomeUser}
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
                    <Text style={Style.text}>Cep</Text>
                    <MaskInput 
                        placeholder  ="Digite seu Cep"
                        style        = {Style.textInput}
                        keyboardType = "numeric"
                        value        = {Cep}
                        maxLength    = {9}
                        onChangeText = {setCep}
                        mask         = {[/\d/, /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/]}
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
                                onChangeText = {setNumero_Rua}
                            />
                        </View>
                    </View>

                    <Text style={Style.text}>Bairro</Text>
                    <TextInput 
                        placeholder  ="Digite nome de seu bairro"
                        style        = {Style.textInput}
                        value        = {Bairro}
                        onChangeText = {setBairro}

                    />

                    <Text style={Style.text}>Completemento</Text>
                    <TextInput 
                        placeholder  ="Digite seu complemento"
                        style        = {Style.textInput}
                        value        = {Completemento}
                        onChangeText = {setCompletemento}

                    />

                    <Text style={Style.text}>Cidade</Text>
                    <TextInput 
                        placeholder  ="Digite sua cidade"
                        style        = {Style.textInput}
                        value        = {Cidade}
                        onChangeText = {setCidade}

                    />

                    <Text style={Style.text}>Estado</Text>
                    <TextInput 
                        placeholder  ="Digite seu Estado"
                        style        = {Style.textInput}
                        value        = {Estado}
                        onChangeText = {setEstado}
                    />

                    <View style={Style.button_edit}>
                        <ButtonEdit onPress={Editar}/>
                    </View>

                </View>
            </ScrollView>
        </ImageBackground>
    );
}